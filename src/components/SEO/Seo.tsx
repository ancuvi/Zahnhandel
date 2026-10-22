import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SeoSammler, seoDatenBerechnen, type SeoProps } from './seoDaten'

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
    if (robots.includes('noindex')) {
      link?.remove()
    } else {
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonical
    }

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
