import { Link } from 'react-router-dom'
import Section from '../components/UI/Section'
import Button from '../components/UI/Button'
import Seo from '../components/SEO/Seo'
import { CheckCircle2 } from 'lucide-react'

const ThankYou = () => {
  return (
    <div className="pt-20">
      <Seo
        title="Vielen Dank | ZAHNTECHNIK Frankenberg GmbH"
        description="Vielen Dank für Ihre Nachricht. Wir werden uns zeitnah bei Ihnen melden."
      />
      <Section
        title="Vielen Dank für Ihre Nachricht"
        intro="Ihre Anfrage ist erfolgreich bei uns eingegangen."
        headingLevel={1}
      >
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="bg-primary-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-inner animate-fade-in">
             <CheckCircle2 className="w-12 h-12 text-primary-500" />
          </div>

          <div className="prose prose-lg prose-stone text-primary-700 mx-auto">
            <p className="text-lg leading-relaxed">
              Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden. 
              In der Regel antworten wir innerhalb von <strong>1–2 Werktagen</strong>.
            </p>
            <p>
              Falls Sie dringende Fragen haben, können Sie uns auch telefonisch unter <strong>037206 / 75542</strong> erreichen.
            </p>
          </div>

          <div className="pt-8">
            <Button as={Link} to="/" variant="secondary">
              Zurück zur Startseite
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default ThankYou