import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type SeoProps = {
  title: string
  description: string
  ogImage?: string
  jsonLd?: Record<string, any>
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

const Seo = ({ title, description, ogImage, jsonLd }: SeoProps) => {
  const location = useLocation()
  const canonicalUrl = `${window.location.origin}${location.pathname}`
  // Fallback image: Use the main hero image
  const socialImage = ogImage 
    ? (ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`) 
    : `${window.location.origin}/images/Zahntechnik-wilkommen.webp`

  useEffect(() => {
    document.title = title
    ensureMeta('description', description)

    // Canonical Link
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonicalUrl

    // Open Graph
    ensureMeta('og:title', title, true)
    ensureMeta('og:description', description, true)
    ensureMeta('og:image', socialImage, true)
    ensureMeta('og:url', canonicalUrl, true)
    ensureMeta('og:type', 'website', true)
    ensureMeta('og:locale', 'de_DE', true)

    // Twitter Card
    ensureMeta('twitter:card', 'summary_large_image')
    ensureMeta('twitter:title', title)
    ensureMeta('twitter:description', description)
    ensureMeta('twitter:image', socialImage)

    // JSON-LD Structured Data
    if (jsonLd) {
        let script = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]')
        if (!script) {
            script = document.createElement('script')
            script.type = 'application/ld+json'
            document.head.appendChild(script)
        }
        script.text = JSON.stringify(jsonLd)
    }
  }, [title, description, ogImage, canonicalUrl, socialImage, jsonLd])

  return null
}

export default Seo
