import { createContext, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const SITE = 'https://zahnhandel.de'
export const DEFAULT_OG_IMAGE = `${SITE}/images/og/zahntechnik-frankenberg-1200x630.jpg`
const OG_IMAGE_ALT = 'Das Team der ZAHNTECHNIK Frankenberg GmbH vor dem Dentallabor in Frankenberg/Sachsen'

type SeoProps = {
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

const ensureMeta = (nameOrProperty: string, content: string, isProperty = false) => {
  const selector = isProperty ? `meta[property="${nameOrProperty}"]` : `meta[name="${nameOrProperty}"]`
  let tag = document.head.querySelector<HTMLMetaElement>(selector)
  if (!tag) {
    tag = document.createElement('meta')
    if (isProperty) {
      tag.setAttribute('property', nameOrProperty)
    } else {
      tag.name = nameOrProperty
    }
    document.head.appendChild(tag)
  }
  tag.content = content
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

const Seo = (props: SeoProps) => {
  const location = useLocation()
  const sammler = useContext(SeoSammler)
  const daten = seoDatenBerechnen(props, location.pathname)

  // Vorrendern: Daten einsammeln, kein DOM vorhanden
  if (sammler) {
    sammler.setzen(daten)
  }

  const { title, description, canonical, ogImage, ogImageAlt, robots, jsonLd } = daten

  useEffect(() => {
    document.title = title
    ensureMeta('description', description)
    ensureMeta('robots', robots)

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical

    // Open Graph
    ensureMeta('og:title', title, true)
    ensureMeta('og:description', description, true)
    ensureMeta('og:image', ogImage, true)
    ensureMeta('og:image:alt', ogImageAlt, true)
    ensureMeta('og:url', canonical, true)
    ensureMeta('og:type', 'website', true)
    ensureMeta('og:locale', 'de_DE', true)
    ensureMeta('og:site_name', 'ZAHNTECHNIK Frankenberg GmbH', true)

    // Twitter Card
    ensureMeta('twitter:card', 'summary_large_image')
    ensureMeta('twitter:title', title)
    ensureMeta('twitter:description', description)
    ensureMeta('twitter:image', ogImage)

    // Seitenspezifisches JSON-LD (das feste Unternehmens-Markup steht in index.html)
    let script = document.head.querySelector<HTMLScriptElement>('script[data-seo-jsonld]')
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-seo-jsonld', '')
        document.head.appendChild(script)
      }
      script.text = jsonLd
    } else if (script) {
      script.remove()
    }
  }, [title, description, canonical, ogImage, ogImageAlt, robots, jsonLd])

  return null
}

export default Seo
