// Verkleinert die Fotos in public/images und erzeugt Varianten für srcset.
//
// Aufruf:  node scripts/bilder-verkleinern.mjs
//
// Für jedes Bild in BILDER wird die Datei selbst auf die Maximalbreite
// ihrer Rolle verkleinert (hero 1920 px, inhalt 1600 px) und daneben
// Varianten „<name>-640.webp“, „<name>-1024.webp“ usw. abgelegt. Die
// Maße landen in src/bilder-manifest.json, aus dem die Bild-Komponente
// width/height und srcset ableitet (die größte Breite ist die Datei ohne
// Suffix). Dateien in NUR_VERKLEINERN werden
// nur verkleinert (unbenutzte Reserven). Das Skript vergrößert nie.
//
// Das Skript ist dafür gedacht, einmal zu laufen; ein zweiter Lauf
// kodiert die bereits verkleinerten WebPs erneut (Qualität 80), was
// minimal Qualität kostet, aber nichts kaputt macht.

import sharp from 'sharp'
import { writeFile, stat, rename, unlink, mkdir } from 'node:fs/promises'
import path from 'node:path'

const WURZEL = path.resolve(new URL('..', import.meta.url).pathname)
const BILDER_ORDNER = path.join(WURZEL, 'public', 'images')
const MANIFEST = path.join(WURZEL, 'src', 'bilder-manifest.json')
const QUALITAET = 80

const ROLLEN = {
  hero: { max: 1920, varianten: [640, 1024, 1600, 1920] },
  inhalt: { max: 1600, varianten: [640, 1024, 1600] },
}

// Pfad relativ zu public/images → Rolle
const BILDER = {
  // Hero-Hintergründe
  'neue-Bilder/teamfoto-mitarbeiter-blau.webp': 'hero',
  'neue-Bilder/dentallabor-arbeitsplaetze-innenansicht-zahnhandel.webp': 'hero',
  'neue-Bilder/artikulator-zahnersatz-gipsmodell-zahnhandel.webp': 'hero',
  'neue-Bilder/zahnmodell-phantomkopf-kiefer-zahnhandel.webp': 'hero',
  'neue-Bilder/zahnhandel-buero-verwaltung-innenansicht.webp': 'hero',
  'neue-Bilder/oberkiefer-totalversorgung-zirkulaere-bruecke.webp': 'hero',
  // Inhaltsbilder
  'neue-Bilder/unser-team-praxis-aussen.webp': 'inhalt',
  'neue-Bilder/dentallabor-geraete-cad-cam-fraesmaschine-zahnhandel.webp': 'inhalt',
  'neue-Bilder/empfang-buero-zahnhandel-kundenservice.webp': 'inhalt',
  'neue-Bilder/geschaeftsfuehrung-teamleiter-portrait.webp': 'inhalt',
  'neue-Bilder/rapidshape-3d-druck-nachbearbeitung-zahnhandel.webp': 'inhalt',
  'neue-Bilder/vollkeramikbruecke-metallfrei-zahnersatz.webp': 'inhalt',
  'neue-Bilder/zahnbruecke-teilverblendet-metallkeramik.webp': 'inhalt',
  'neue-Bilder/teleskopbruecke-zahnersatz-modell-technik.webp': 'inhalt',
  'neue-Bilder/zahnimplantat-abutment-zirkon-krone.webp': 'inhalt',
  'neue-Bilder/totalprothese-oberkiefer-unterkiefer-set.webp': 'inhalt',
  'neue-Bilder/schnarchschiene-unterkieferprotrusionsschiene-schlafapnoe.webp': 'inhalt',
  'neue-Bilder/laborzeile-gipsraum-arbeitsvorbereitung-zahnhandel.webp': 'inhalt',
  'neue-Bilder/picodent-fraesmaschine-cad-cam-zahnhandel.webp': 'inhalt',
  'neue-Bilder/keramikofen-dekema-austromat-zahnhandel.webp': 'inhalt',
  'neue-Bilder/dentallabor-ausstattung-brennofen-zahnhandel.webp': 'inhalt',
  'neue-Bilder/fraeserstaender-rotierende-instrumente-technikertisch-zahnhandel.webp': 'inhalt',
  'neue-Bilder/poliereinheit-kavo-dentallabor-zahnhandel.webp': 'inhalt',
  'neue-Bilder/lichthaertung-zahnersatz-verblendung-zahntechnik.webp': 'inhalt',
  'handybilder/digitaler-workflow-intraoralscanner-3d-planung.webp': 'inhalt',
  'handybilder/rapidshape-3d-drucker-zahntechnik.webp': 'inhalt',
}

// Unbenutzte Reserven: nur auf 1600 px verkleinern, keine Varianten
const NUR_VERKLEINERN = [
  'neue-Bilder/technikertisch-arbeitsplatz-dentallabor-zahnhandel.webp',
  'neue-Bilder/dentallabor-gipsraum-ausstattung-zahnhandel.webp',
  'neue-Bilder/empfangstheke-buerokultur-dentalhandel-innenansicht.webp',
  'neue-Bilder/schmelztiegel-metallguss-legierung-zahnhandel.webp',
]

// Umbenennungen (Umlaute im Dateinamen vermeiden)
const UMBENENNEN = {
  'neue-Bilder/geschäftsführung-teamleiter-portrait.webp': 'neue-Bilder/geschaeftsfuehrung-teamleiter-portrait.webp',
}

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`

async function verkleinern(quelle, ziel, breite) {
  await sharp(quelle)
    .rotate()
    .resize({ width: breite, withoutEnlargement: true })
    .webp({ quality: QUALITAET, effort: 5 })
    .toFile(ziel)
  return sharp(ziel).metadata()
}

async function main() {
  for (const [alt, neu] of Object.entries(UMBENENNEN)) {
    try {
      await rename(path.join(BILDER_ORDNER, alt), path.join(BILDER_ORDNER, neu))
      console.log(`umbenannt: ${alt} → ${neu}`)
    } catch {
      /* schon umbenannt */
    }
  }

  const manifest = {}

  for (const [rel, rolle] of Object.entries(BILDER)) {
    const { max, varianten } = ROLLEN[rolle]
    const datei = path.join(BILDER_ORDNER, rel)
    const vorher = (await stat(datei)).size
    const meta = await sharp(datei).metadata()
    const masterBreite = Math.min(max, meta.width)
    const tmp = `${datei}.tmp`
    const master = await verkleinern(datei, tmp, masterBreite)
    await rename(tmp, datei)
    const nachher = (await stat(datei)).size

    const base = rel.replace(/\.webp$/, '')
    const breiten = []
    for (const w of varianten) {
      if (w > master.width) continue
      // Die größte Breite ist die Datei selbst (ohne Suffix), siehe Bild.tsx
      if (w < master.width) {
        await verkleinern(datei, path.join(BILDER_ORDNER, `${base}-${w}.webp`), w)
      }
      breiten.push(w)
    }
    manifest[`/images/${base}`] = { breite: master.width, hoehe: master.height, breiten }
    console.log(`${rel}: ${meta.width}×${meta.height} ${kb(vorher)} → ${master.width}×${master.height} ${kb(nachher)}, Varianten ${breiten.join('/')}`)
  }

  for (const rel of NUR_VERKLEINERN) {
    const datei = path.join(BILDER_ORDNER, rel)
    const vorher = (await stat(datei)).size
    const tmp = `${datei}.tmp`
    const m = await verkleinern(datei, tmp, 1600)
    await rename(tmp, datei)
    console.log(`${rel} (Reserve): ${kb(vorher)} → ${m.width}×${m.height} ${kb((await stat(datei)).size)}`)
  }

  // Logo: PNG → WebP mit Transparenz
  const logoPng = path.join(BILDER_ORDNER, 'Logo_Zahntechnig - bearbeitet.png')
  const logoWebp = path.join(BILDER_ORDNER, 'logo-zahntechnik-frankenberg.webp')
  try {
    await stat(logoPng)
    const m = await sharp(logoPng).webp({ quality: 90, alphaQuality: 100 }).toFile(logoWebp)
    await unlink(logoPng)
    manifest['/images/logo-zahntechnik-frankenberg'] = { breite: m.width, hoehe: m.height, breiten: [] }
    console.log(`Logo: PNG → WebP ${m.width}×${m.height} ${kb(m.size)}`)
  } catch {
    const m = await sharp(logoWebp).metadata()
    manifest['/images/logo-zahntechnik-frankenberg'] = { breite: m.width, hoehe: m.height, breiten: [] }
  }

  // Open-Graph-Bild 1200×630 als JPEG (WebP wird nicht von allen Messengern angezeigt)
  await mkdir(path.join(BILDER_ORDNER, 'og'), { recursive: true })
  const ogZiel = path.join(BILDER_ORDNER, 'og', 'zahntechnik-frankenberg-1200x630.jpg')
  await sharp(path.join(BILDER_ORDNER, 'neue-Bilder/teamfoto-mitarbeiter-blau.webp'))
    .resize({ width: 1200, height: 630, fit: 'cover', position: 'top' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(ogZiel)
    .then((m) => console.log(`OG-Bild: ${m.width}×${m.height} ${kb(m.size)}`))

  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n')
  console.log(`Manifest geschrieben: ${path.relative(WURZEL, MANIFEST)}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
