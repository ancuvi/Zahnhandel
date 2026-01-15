import Section from '../components/UI/Section'
import { CheckCircle2, Mail, MapPin } from 'lucide-react'
import Seo from '../components/SEO/Seo'

const Jobs = () => {
  const jobs = [
    {
      title: 'Azubi (m/w/d)',
      description: 'Wir suchen motivierte Auszubildende für das Zahntechniker-Handwerk.',
    },
    {
      title: 'Zahntechniker (m/w/d)',
      subtitle: 'für Edelmetall- und Modellgusstechnik',
      description: 'Erfahrene Unterstützung in den Bereichen Edelmetall und Modellguss gesucht.',
    },
    {
      title: 'Zahntechniker (m/w/d)',
      subtitle: 'für Kunststofftechnik',
      description: 'Verstärkung für unser Team im Bereich Kunststofftechnik.',
    },
  ]

  return (
    <div className="flex flex-col">
      <Seo
        title="Stellenangebote | ZAHNTECHNIK Frankenberg GmbH"
        description="Karriere bei ZAHNTECHNIK Frankenberg. Aktuelle Stellenangebote: Zahntechniker (m/w/d), Azubi (m/w/d) und mehr."
      />
      {/* Hero Section */}
      <div className="relative bg-primary-50 py-20 lg:py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-serif font-bold text-primary-900 mb-6 animate-fade-in">
            Stellenangebote
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto animate-slide-up">
            Werden Sie Teil unseres Teams!
          </p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary-800 mb-6">
              Zur Verstärkung unseres Teams suchen wir:
            </h2>
            <p className="text-lg text-stone-600">
              ....werde Teil eines tollen Teams, die Zahnersatz auf höchstem Niveau herstellen.
            </p>
          </div>

          <div className="grid gap-8 mb-16">
            {jobs.map((job, index) => (
              <div 
                key={index} 
                className="bg-primary-50 p-8 rounded-2xl border border-primary-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{job.title}</h3>
                    {job.subtitle && (
                      <p className="font-medium text-primary-700 mb-2">{job.subtitle}</p>
                    )}
                    <p className="text-stone-600">{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 text-center">
            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">
              Initiativbewerbung
            </h3>
            <p className="text-stone-600 mb-8">
              Auch Initiativbewerbungen sind bei uns herzlich willkommen.
            </p>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-primary-800">Interessiert?</h4>
              <p className="text-stone-600">
                Dann freuen wir uns auf Ihre aussagefähigen Bewerbungsunterlagen unter der Anschrift:
              </p>
              
              <address className="not-italic text-lg bg-white p-6 rounded-xl inline-block shadow-sm">
                <strong className="block text-primary-900 mb-2">B&S Zahntechnik Frankenberg GmbH</strong>
                <div className="flex items-center justify-center gap-2 text-stone-600 mb-1">
                  <MapPin size={18} />
                  <span>Gewerbering 17, 09669 Frankenberg</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-stone-600">
                  <Mail size={18} />
                  <span>info@zahnhandel.de</span>
                </div>
              </address>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Jobs
