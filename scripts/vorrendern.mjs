// Schreibt für jede Route eine fertige HTML-Datei nach dist/ (Inhalt +
// Kopfdaten aus der Seo-Komponente), dazu dist/404.html. Läuft nach dem
// Client- und dem SSR-Build (siehe "build" in package.json), ohne Browser.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const WURZEL = path.resolve(new URL('..', import.meta.url).pathname)
const DIST = path.join(WURZEL, 'dist')
const { render, pfade } = await import(pathToFileURL(path.join(WURZEL, 'dist-ssr', 'entry-server.js')).href)

const vorlage = readFileSync(path.join(DIST, 'index.html'), 'utf-8')
if (!vorlage.includes('<div id="root"></div>')) {
  throw new Error('dist/index.html enthält kein leeres <div id="root"></div>')
}

const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const text = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const metaSetzen = (html, selektor, inhalt) => {
  const re = new RegExp(`<meta ${selektor} content="[^"]*" />`)
  const tag = `<meta ${selektor} content="${attr(inhalt)}" />`
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `  ${tag}\n</head>`)
}

const seiteSchreiben = (pfad, dateiname) =>
  render(pfad).then(({ html, seo }) => {
    let doc = vorlage.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    if (seo) {
      const noindex = seo.robots.includes('noindex')
      doc = doc.replace(/<title>[^<]*<\/title>/, `<title>${text(seo.title)}</title>`)
      doc = metaSetzen(doc, 'name="description"', seo.description)
      doc = metaSetzen(doc, 'name="robots"', seo.robots)
      doc = metaSetzen(doc, 'property="og:title"', seo.title)
      doc = metaSetzen(doc, 'property="og:description"', seo.description)
      doc = metaSetzen(doc, 'property="og:image"', seo.ogImage)
      doc = metaSetzen(doc, 'property="og:image:alt"', seo.ogImageAlt)
      doc = metaSetzen(doc, 'name="twitter:card"', 'summary_large_image')
      doc = metaSetzen(doc, 'name="twitter:title"', seo.title)
      doc = metaSetzen(doc, 'name="twitter:description"', seo.description)
      doc = metaSetzen(doc, 'name="twitter:image"', seo.ogImage)
      if (!noindex) {
        doc = metaSetzen(doc, 'property="og:url"', seo.canonical)
        doc = doc.replace('</head>', `  <link rel="canonical" href="${attr(seo.canonical)}" />\n</head>`)
      }
      if (seo.jsonLd) {
        const sicher = seo.jsonLd.replace(/</g, '\\u003c')
        doc = doc.replace('</head>', `  <script type="application/ld+json" data-seo-jsonld>${sicher}</script>\n</head>`)
      }
    }
    const ziel = path.join(DIST, dateiname)
    mkdirSync(path.dirname(ziel), { recursive: true })
    writeFileSync(ziel, doc)
    console.log(`vorgerendert: ${pfad} → ${path.relative(WURZEL, ziel)} (${Math.round(doc.length / 1024)} KB)`)
  })

for (const pfad of pfade) {
  await seiteSchreiben(pfad, pfad === '/' ? 'index.html' : `${pfad.slice(1)}.html`)
}
await seiteSchreiben('/seite-nicht-gefunden', '404.html')
