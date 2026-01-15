import Section from '../components/UI/Section'
import Seo from '../components/SEO/Seo'
import { CheckCircle2 } from 'lucide-react'

const Services = () => {
  const offerings = [
    {
      title: 'Ästhetische, individuelle Frontzahnkeramik',
      description: 'Wir fertigen ästhetische und individuelle Frontzahnkeramik an, die sich durch Form und Farbe perfekt in Ihr natürliches Lächeln einfügt.',
      image: '/images/Frontzahnkeramik.jpeg',
    },
    {
      title: 'Keramik gepresst und individuell geschichtet',
      description: 'Unsere Keramik wird präzise gepresst und anschließend individuell geschichtet, um höchste Ansprüche an Ästhetik und Langlebigkeit zu erfüllen.',
      image: '/images/Keramik_gepresst.jpeg',
    },
    {
      title: 'Veneers, Kronen, Brücken, Inlays, Onlays',
      description: 'Unser Leistungsspektrum umfasst die präzise Herstellung von Veneers, Kronen, Brücken sowie Inlays und Onlays für eine hochwertige Versorgung.',
      image: '/images/Kronen-und-Brücken.jpeg',
    },
    {
      title: 'Zirkonkeramik & CAD/CAM',
      description: 'Wir nutzen modernste Zirkonkeramik und die präzise CAD/CAM-Technologie von Wieland Zeno für passgenauen und ästhetischen Zahnersatz.',
      image: '/images/zirkon.jpeg',
    },
    {
      title: 'Perlmutkrone',
      description: 'Die Perlmutkrone (Vollzirkon- oder Stahlersatzkrone) bietet eine hochwertige Alternative mit natürlicher Ästhetik und hoher Stabilität.',
      image: '/images/Perlmutkrone.jpeg',
    },
    {
      title: 'Edelmetalltechnik & Titan',
      description: 'Wir verarbeiten Titan sowohl gefräst als auch gegossen und bieten meisterhafte Edelmetalltechnik für anspruchsvolle prothetische Lösungen.',
      image: '/images/Edelmetalltechnik.jpeg',
    },
    {
      title: 'Kombi-Arbeiten & Teleskope',
      description: 'Wir fertigen edelmetallfreie Restaurationen (NEM Primär- und Sekundärteleskope) sowie komplexe Kombi-Arbeiten mit Teleskopen, Riegeln und Geschieben.',
      image: '/images/Kombiarbeit.jpeg',
    },
    {
      title: 'Totalprothetik',
      description: 'Unsere Totalprothetik erfolgt nach der TiF-Methode (Totalprothetik in Funktion) und anderen gängigen Aufstellvarianten für optimalen Halt und Komfort.',
      image: '/images/Totalprotese.jpeg',
    },
    {
      title: 'Galvanotechnik',
      description: 'Mit modernster Galvanotechnik erstellen wir passgenaue Sekundärteile aus Feingold für eine optimale Biokompatibilität und Ästhetik.',
      image: '/images/Galvanotechnik.jpeg',
    },
    {
      title: 'Modellguss & Lasertechnik',
      description: 'Präzise Lasertechnik und hochwertige Modellgusstechnik gehören zu unseren Standards für stabile und langlebige Konstruktionen.',
      image: '/images/Modellguss.jpeg',
    },
    {
      title: 'Implantattechnik',
      description: 'Wir sind spezialisiert auf individuelle Implantattechnik für festsitzenden und herausnehmbaren Zahnersatz auf allen gängigen Systemen.',
      image: '/images/Implantattechnik.jpeg',
    },
  ]

  return (
    <div>
      <Seo
        title="Leistungen | ZAHNTECHNIK Frankenberg GmbH"
        description="Unser Angebot: Frontzahnkeramik, Zirkon, Kombitechnik, Implantattechnik und mehr. Entdecken Sie unser Leistungsspektrum."
      />
      
      {/* Intro */}
      <Section
        eyebrow="Unser Angebot"
        title="Zahntechnische Leistungen"
        intro="Im Detail bieten wir Ihnen folgende Leistungen an:"
        className="bg-stone-50"
      >
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <div key={index} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-100">
              <div className="h-64 overflow-hidden bg-stone-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm flex-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Additional Services List */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">Weitere Leistungen & Service</h2>
             <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                            <span className="text-stone-700">Funktionsdiagnostik (Gelenkbahnaufzeichnung mit Hilfe von Cadiax)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                            <span className="text-stone-700">Miniplast-, Relaxation- und Bleaching-Schienen</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                            <span className="text-stone-700">Flexibler Reparatur-Service</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-stone-500 mt-1 flex-shrink-0" />
                            <span className="text-stone-700">Individuelle Beratung & prothetische Planung</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-stone-500 mt-1 flex-shrink-0" />
                            <span className="text-stone-700">Individuelle Zahnfarbenbestimmung (digital)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-stone-500 mt-1 flex-shrink-0" />
                            <span className="text-stone-700">Schnelle Hilfe bei Problemen</span>
                        </li>
                    </ul>
                </div>
             </div>
        </div>
      </Section>
    </div>
  )
}

export default Services
