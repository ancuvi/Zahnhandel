import type { ComponentPropsWithoutRef } from 'react'
import manifest from '../../bilder-manifest.json'

type Eintrag = { breite: number; hoehe: number; breiten: number[] }
const bilder = manifest as Record<string, Eintrag>

type BildProps = Omit<ComponentPropsWithoutRef<'img'>, 'src' | 'srcSet' | 'width' | 'height' | 'alt'> & {
  /** Pfad ohne Endung, z. B. "/images/neue-Bilder/unser-team-praxis-aussen" */
  name: string
  alt: string
  /** sizes-Attribut für srcset; Standard 100vw */
  sizes?: string
}

/** Dateiname einer Breite: die größte Breite ist die Datei ohne Suffix. */
const datei = (name: string, w: number, master: number) => (w === master ? `${name}.webp` : `${name}-${w}.webp`)

/**
 * <img> mit width/height, srcset und sizes aus dem Bild-Manifest
 * (erzeugt von scripts/bilder-verkleinern.mjs). Standard: lazy + async.
 */
const Bild = ({ name, alt, sizes = '100vw', loading = 'lazy', decoding = 'async', ...rest }: BildProps) => {
  const eintrag = bilder[name]
  if (!eintrag) {
    throw new Error(`Bild nicht im Manifest: ${name}`)
  }
  const { breite, hoehe, breiten } = eintrag
  const hatVarianten = breiten.length > 1
  const standard = breiten.includes(1024) ? 1024 : breite
  return (
    <img
      src={datei(name, standard, breite)}
      srcSet={hatVarianten ? breiten.map((w) => `${datei(name, w, breite)} ${w}w`).join(', ') : undefined}
      sizes={hatVarianten ? sizes : undefined}
      width={breite}
      height={hoehe}
      alt={alt}
      loading={loading}
      decoding={decoding}
      {...rest}
    />
  )
}

export default Bild
