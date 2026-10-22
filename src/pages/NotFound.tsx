import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { SearchX } from 'lucide-react'
import Section from '../components/UI/Section'
import Button from '../components/UI/Button'
import Seo from '../components/SEO/Seo'

type Props = {
  titel?: string
  text?: string
}

/** 404-Seite im normalen Layout; wird auch als Fehlerseite genutzt. */
const NotFound = ({
  titel = 'Seite nicht gefunden',
  text = 'Die aufgerufene Seite gibt es nicht oder sie wurde verschoben. Vielleicht hilft einer der folgenden Wege weiter.',
}: Props) => {
  return (
    <div className="pt-20">
      <Seo
        title={`${titel} | ZAHNTECHNIK Frankenberg GmbH`}
        description="Diese Seite gibt es auf zahnhandel.de nicht. Zur Startseite, zu den Leistungen oder zum Kontakt des Dentallabors in Frankenberg/Sachsen."
        noindex
      />
      <Section title={titel} intro={text} headingLevel={1} centered>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="bg-primary-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-inner animate-fade-in">
            <SearchX className="w-12 h-12 text-primary-500" aria-hidden="true" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as={Link} to="/" variant="primary">
              Zur Startseite
            </Button>
            <Button as={Link} to="/services" variant="outline">
              Unsere Leistungen
            </Button>
            <Button as={Link} to="/contact" variant="outline">
              Kontakt
            </Button>
          </div>
          <p className="text-primary-700">
            Oder rufen Sie uns an: <a href="tel:03720675542" className="font-semibold hover:text-primary-600">037206 / 75542</a>
          </p>
        </div>
      </Section>
    </div>
  )
}

/** errorElement des Routers: 404 für unbekannte Pfade, sonst allgemeine Fehlermeldung. */
export const FehlerSeite = () => {
  const error = useRouteError()
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />
  }
  if (import.meta.env.DEV) {
    console.error(error)
  }
  return (
    <NotFound
      titel="Da ist etwas schiefgegangen"
      text="Beim Anzeigen dieser Seite ist ein Fehler aufgetreten. Bitte laden Sie die Seite neu oder nutzen Sie einen der folgenden Wege."
    />
  )
}

export default NotFound
