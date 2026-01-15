import type { ReactNode } from 'react'

type SectionProps = {
  title?: string
  eyebrow?: string
  intro?: string
  children?: ReactNode
  className?: string
  headingLevel?: 1 | 2 | 3 | 4
  centered?: boolean
  background?: 'default' | 'stone' | 'white' | 'primary'
}

const Section = ({
  title,
  eyebrow,
  intro,
  children,
  className = '',
  headingLevel = 2,
  centered = false,
  background = 'default',
}: SectionProps) => {
  const HeadingTag = `h${headingLevel}` as const
  
  const bgClass = {
    default: 'bg-transparent',
    stone: 'bg-stone-50',
    white: 'bg-white',
    primary: 'bg-primary-900',
  }[background]

  return (
    <section className={`px-6 py-20 lg:py-28 relative overflow-hidden ${bgClass} ${className}`}>
      <div className={`mx-auto max-w-7xl relative z-10 ${centered ? 'text-center' : ''}`}>
        {(eyebrow || title || intro) && (
          <div className={`mb-16 space-y-4 max-w-3xl ${centered ? 'mx-auto' : ''}`}>
            {eyebrow && (
              <p className="animate-fade-in text-sm font-bold uppercase tracking-widest text-primary-600 mb-2">
                {eyebrow}
              </p>
            )}
            {title && (
              <HeadingTag className="animate-slide-up text-3xl font-bold text-stone-900 sm:text-4xl md:text-5xl font-serif">
                {title}
              </HeadingTag>
            )}
            {intro && (
              <p className="animate-slide-up mt-6 text-lg text-stone-600 leading-relaxed" style={{ animationDelay: '0.1s' }}>
                {intro}
              </p>
            )}
          </div>
        )}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {children}
        </div>
      </div>
    </section>
  )
}

export default Section
