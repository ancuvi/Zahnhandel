import { createContext } from 'react'

export const SITE = 'https://zahnhandel.de'
export const DEFAULT_OG_IMAGE = `${SITE}/images/og/zahntechnik-frankenberg-1200x630.jpg`
const OG_IMAGE_ALT = 'Das Team der ZAHNTECHNIK Frankenberg GmbH vor dem Dentallabor in Frankenberg/Sachsen'

export type SeoProps = {
  title: string
  description: string
  ogImage?: string
  /** Ein JSON-LD-Objekt oder mehrere; wird als eigenes <script> im <head> geführt */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  /** Seite nicht indexieren (Rechtsseiten, 404) */
  noindex?: boolean
}

export type SeoDaten = {
  title: string
  description: string
  canonical: string
  ogImage: string
  ogImageAlt: string
  robots: string
  jsonLd: string | null
}

/**
 * Beim Vorrendern (ohne DOM) sammelt ein Kontext die Kopfdaten ein, statt
 * sie per useEffect ins Dokument zu schreiben.
 */
export const SeoSammler = createContext<{ setzen: (daten: SeoDaten) => void } | null>(null)

/** Kanonischer Pfad: kleingeschrieben, ohne Schrägstrich am Ende, Startseite bleibt "/" */
export const kanonischerPfad = (pathname: string) => {
  const ohneSlash = pathname.toLowerCase().replace(/\/+$/, '')
  return ohneSlash === '' ? '/' : ohneSlash
}

export const seoDatenBerechnen = (
  { title, description, ogImage, jsonLd, noindex }: SeoProps,
  pathname: string,
): SeoDaten => ({
  title,
  description,
  canonical: `${SITE}${kanonischerPfad(pathname)}`,
  ogImage: ogImage ? (ogImage.startsWith('http') ? ogImage : `${SITE}${ogImage}`) : DEFAULT_OG_IMAGE,
  ogImageAlt: OG_IMAGE_ALT,
  robots: noindex ? 'noindex, nofollow' : 'index, follow',
  jsonLd: jsonLd ? JSON.stringify(jsonLd) : null,
})
