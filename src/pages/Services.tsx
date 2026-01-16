import { Link } from 'react-router-dom'
import { CheckCircle2, Diamond, Layers, Activity, Smartphone, Microscope, ShieldCheck } from 'lucide-react'
import Section from '../components/UI/Section'
import Seo from '../components/SEO/Seo'
import Button from '../components/UI/Button'

const Services = () => {
  const offerings = [
    {
      title: 'Ästhetik & Keramik',
      description: 'Natürlichkeit ist unser Maßstab. Mit individueller Frontzahnkeramik und Schichttechnik schaffen wir lebendige Ergebnisse.',
      image: '/images/Frontzahnkeramik.webp',
      icon: <Diamond className="w-6 h-6" />,
      details: ['Individuelle Frontzahnkeramik', 'Veneers, Inlays, Onlays', 'Keramik gepresst & geschichtet']
    },
    {
      title: 'Kronen & Brücken',
      description: 'Präzise Passform und Langlebigkeit. Ob Zirkon, Vollkeramik oder Metallkeramik – wir finden die optimale Lösung.',
      image: '/images/Kronen-und-Bruecken.webp',
      icon: <Layers className="w-6 h-6" />,
      details: ['Zirkonkeramik & CAD/CAM', 'Perlmutkrone', 'Edelmetall & Titan']
    },
    {
      title: 'Kombitechnik',
      description: 'Funktionalität trifft Komfort. Hochwertige Teleskoparbeiten und Geschiebe für sicheren Halt und Ästhetik.',
      image: '/images/Kombiarbeit.webp',
      icon: <Activity className="w-6 h-6" />,
      details: ['Teleskoptechnik', 'Geschiebe & Riegel', 'Modellguss']
    },
    {
      title: 'Implantattechnik',
      description: 'Festsitzender Zahnersatz auf Implantaten. Wir versorgen alle gängigen Implantatsysteme mit höchster Präzision.',
      image: '/images/Implantattechnik.webp',
      icon: <Smartphone className="w-6 h-6" />, 
      details: ['Suprakonstruktionen', 'Individuelle Abutments', 'Stegkonstruktionen']
    },
    {
      title: 'Totalprothetik',
      description: 'Lebensqualität zurückgewinnen. Prothesen nach der TiF-Methode für optimalen Sitz und natürliche Optik.',
      image: '/images/Totalprotese.webp',
      icon: <ShieldCheck className="w-6 h-6" />,
      details: ['TiF-Methode', 'Totalprothesen', 'Reparaturen']
    },
    {
      title: 'Spezialtechniken',
      description: 'Innovation für besondere Anforderungen. Modernste Verfahren für perfekte Passung und Biokompatibilität.',
      image: '/images/Galvanotechnik.webp',
      icon: <Microscope className="w-6 h-6" />,
      details: ['Galvanotechnik', 'Lasertechnik', 'Schienen & Diagnostik']
    }
  ]

  return (
    <div>
      <Seo
        title="Leistungen | ZAHNTECHNIK Frankenberg GmbH"
        description="Unser Angebot: Frontzahnkeramik, Zirkon, Kombitechnik, Implantattechnik und mehr. Entdecken Sie unser Leistungsspektrum."
      />
      
      {/* Hero */}
      <div className="relative bg-stone-900 text-white py-24 overflow-hidden">
        {/* Background Image/Overlay */}
         <div className="absolute inset-0 z-0 opacity-30" 
             style={{ 
               backgroundImage: "url('/images/zirkon.webp')", 
               backgroundSize: 'cover', 
               backgroundPosition: 'center' 
             }} 
        />
        <div className="hero-gradient"></div>
        
         <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-900/50 px-4 py-1.5 text-sm font-medium text-secondary-200 border border-secondary-800">
               <Diamond size={16} />
               <span>Meisterhafte Präzision</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              <span className="text-white">Unser</span>{" "}
              <span className="text-secondary-400">Leistungsspektrum</span>
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
              Von klassischer Handwerkskunst bis zu modernster digitaler Fertigung. 
              Wir bieten Ihnen die gesamte Bandbreite zeitgemäßer Zahntechnik.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <Section title="Exzellenz in jedem Bereich" intro="Wir verbinden Ästhetik mit Funktion für Ihr schönstes Lächeln." background="stone">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((offer, idx) => (
                  <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                          <img src={offer.image} alt={offer.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-secondary-600 shadow-sm">
                              {offer.icon}
                          </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold font-serif text-stone-900 mb-2 group-hover:text-secondary-600 transition-colors">{offer.title}</h3>
                          <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-1">{offer.description}</p>
                          
                          <div className="space-y-2 border-t border-stone-100 pt-4 mt-auto">
                              {offer.details.map((detail, i) => (
                                  <div key={i} className="flex items-center gap-2 text-sm text-stone-500">
                                      <CheckCircle2 size={14} className="text-primary-500 shrink-0" />
                                      <span>{detail}</span>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </Section>

      {/* Feature List / Additional Services */}
      <Section background="white">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">Mehr als nur Zahnersatz</h2>
                  <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                      Unser Service endet nicht bei der Fertigung. Wir unterstützen Zahnärzte und Patienten mit umfassenden Dienstleistungen für ein optimales Ergebnis.
                  </p>
                  
                  <div className="space-y-6">
                      <div className="flex gap-4">
                          <div className="bg-primary-50 p-3 rounded-full h-fit text-primary-600"><ShieldCheck /></div>
                          <div>
                              <h4 className="font-bold text-stone-900 mb-1">Qualitätssicherung</h4>
                              <p className="text-stone-600 text-sm">Strenge Kontrollen durch unsere Meister sichern gleichbleibend hohe Qualität.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <div className="bg-secondary-50 p-3 rounded-full h-fit text-secondary-600"><Activity /></div>
                          <div>
                              <h4 className="font-bold text-stone-900 mb-1">Funktionsdiagnostik</h4>
                              <p className="text-stone-600 text-sm">Gelenkbahnaufzeichnung mit Cadiax für präzise funktionelle Ergebnisse.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <div className="bg-stone-100 p-3 rounded-full h-fit text-stone-600"><Smartphone /></div>
                          <div>
                              <h4 className="font-bold text-stone-900 mb-1">Digitale Farbestimmung</h4>
                              <p className="text-stone-600 text-sm">Exakte Bestimmung der Zahnfarbe für perfekte ästhetische Integration.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl rotate-1">
                       <img src="/images/unser-angebot-2.webp" alt="Behandlungsraum" className="w-full h-auto" />
                  </div>
                  {/* Banner */}
                   <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs border-l-4 border-primary-500 hidden md:block">
                      <p className="font-serif font-bold text-lg text-stone-900">Individuelle Beratung</p>
                      <p className="text-sm text-stone-600 mt-1">Wir nehmen uns Zeit für die Planung Ihrer perfekten Lösung.</p>
                  </div>
              </div>
           </div>
      </Section>
      
      {/* CTA */}
      <section className="bg-primary-900 py-20 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="container mx-auto px-6 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Interesse geweckt?</h2>
              <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
                  Lassen Sie uns gemeinsam die beste Lösung für Ihre Patienten finden. Kontaktieren Sie uns für ein unverbindliches Angebot.
              </p>
              <Button as={Link} to="/contact" variant="secondary" className="shadow-lg shadow-primary-900/50">
                  Kontakt aufnehmen
              </Button>
          </div>
      </section>
    </div>
  )
}
export default Services
