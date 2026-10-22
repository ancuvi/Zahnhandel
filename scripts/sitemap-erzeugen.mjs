// Schreibt public/sitemap.xml mit lastmod aus dem letzten Git-Commit der
// jeweiligen Seitendatei. Lokal ausführen (volle Git-Historie nötig) und
// das Ergebnis mit einchecken:  node scripts/sitemap-erzeugen.mjs
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import path from 'node:path'

const WURZEL = path.resolve(new URL('..', import.meta.url).pathname)
const SITE = 'https://zahnhandel.de'

// Pfad → Dateien, deren letzte Änderung als lastmod zählt
const SEITEN = [
  ['/', ['src/pages/Home.tsx']],
  ['/about', ['src/pages/About.tsx']],
  ['/services', ['src/pages/Services.tsx']],
  ['/jobs', ['src/pages/Jobs.tsx']],
  ['/contact', ['src/pages/Contact.tsx', 'src/components/Forms/ContactForm.tsx']],
  ['/impressum', ['src/pages/Impressum.tsx']],
  ['/datenschutz', ['src/pages/Datenschutz.tsx']],
]

const letztesDatum = (dateien) =>
  dateien
    .map((d) => execFileSync('git', ['log', '-1', '--format=%cs', '--', d], { cwd: WURZEL, encoding: 'utf-8' }).trim())
    .filter(Boolean)
    .sort()
    .at(-1)

const eintraege = SEITEN.map(([pfad, dateien]) => {
  const lastmod = letztesDatum(dateien)
  return `  <url>\n    <loc>${SITE}${pfad}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
})

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${eintraege.join('\n')}\n</urlset>\n`
writeFileSync(path.join(WURZEL, 'public', 'sitemap.xml'), xml)
console.log(xml)
