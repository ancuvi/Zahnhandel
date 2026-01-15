import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
  ogImage?: string
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

const Seo = ({ title, description, ogImage }: SeoProps) => {
  useEffect(() => {
    document.title = title
    ensureMeta('description', description)

    // Open Graph Platzhalter – später mit realen Inhalten ersetzen
    ensureMeta('og:title', title, true)
    ensureMeta('og:description', description, true)
    ensureMeta('og:image', ogImage || 'https://example.com/placeholder.png', true)
  }, [title, description, ogImage])

  return null
}

export default Seo
