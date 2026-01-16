import { Link } from 'react-router-dom'
import Section from '../components/UI/Section'
import Button from '../components/UI/Button'
import Seo from '../components/SEO/Seo'

const ThankYou = () => {
  return (
    <div className="pt-20">
      <Seo
        title="Vielen Dank | Praxis Nicole Feiereis"
        description="Vielen Dank für Ihre Nachricht. Ich werde mich zeitnah bei Ihnen melden."
      />
      <Section
        title="Vielen Dank für Ihre Nachricht"
        intro="Ihre Anfrage ist erfolgreich bei mir eingegangen."
        headingLevel={1}
      >
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <div className="prose prose-stone text-primary-700 mx-auto">
            <p className="text-lg leading-relaxed">
              Ich habe Ihre Nachricht erhalten und werde mich schnellstmöglich bei Ihnen melden. 
              In der Regel antworte ich innerhalb von <strong>1–2 Werktagen</strong>.
            </p>
            <p>
              Falls Sie dringende Fragen haben, können Sie mich auch telefonisch erreichen.
            </p>
          </div>

          <div className="pt-8">
            <Button as={Link} to="/" variant="primary">
              Zurück zur Startseite
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default ThankYou
