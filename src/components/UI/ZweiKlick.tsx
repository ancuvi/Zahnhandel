import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ZweiKlickProps = {
  /** Anbieter für den Hinweistext, z. B. „Google Maps“ */
  anbieter: string
  /** Beschriftung des Lade-Buttons */
  buttonText: string
  /** Hintergrund des Platzhalters (z. B. Vorschaubild) */
  hintergrund?: ReactNode
  /** Symbol über dem Hinweis */
  symbol?: ReactNode
  /** Zusätzlicher Link neben dem Button, z. B. „Route in Google Maps öffnen“ */
  zusatz?: ReactNode
  /** Was nach dem Klick erscheint (iframe) */
  children: ReactNode
  className?: string
}

/**
 * Zwei-Klick-Lösung für eingebettete Inhalte von Drittanbietern: Vor dem
 * Klick wird nichts von außen geladen, erst der Klick bindet den iframe ein.
 */
const ZweiKlick = ({ anbieter, buttonText, hintergrund, symbol, zusatz, children, className = '' }: ZweiKlickProps) => {
  const [geladen, setGeladen] = useState(false)

  if (geladen) {
    return <>{children}</>
  }

  return (
    <div
      role="region"
      aria-label={`${anbieter}-Inhalt, wird erst nach Klick geladen`}
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-stone-900 text-white ${className}`}
    >
      {hintergrund}
      <div className="relative z-10 mx-auto max-w-md space-y-4 px-6 py-8 text-center">
        {symbol && <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm ring-1 ring-white/20">{symbol}</div>}
        <p className="text-sm leading-relaxed text-stone-200">
          Beim Laden werden Daten (u.&nbsp;a. Ihre IP-Adresse) an {anbieter} übertragen. Mehr dazu in unserer{' '}
          <Link to="/datenschutz" className="underline decoration-white/50 underline-offset-2 hover:text-white">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setGeladen(true)}
            className="inline-flex items-center justify-center rounded-full bg-secondary-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-secondary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {buttonText}
          </button>
          {zusatz}
        </div>
      </div>
    </div>
  )
}

export default ZweiKlick
