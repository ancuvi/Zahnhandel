import { Link } from 'react-router-dom'
import { CheckCircle2, Diamond, Layers, Activity, Smartphone, Microscope, ShieldCheck, Clock, Users } from 'lucide-react'
import Section from '../components/UI/Section'
import Seo from '../components/SEO/Seo'
import Button from '../components/UI/Button'

const Services = () => {
  const offerings = [
    {
      title: 'Ästhetik & Keramik',
      description: 'Natürlichkeit ist unser Maßstab. Mit individueller Frontzahnkeramik und Schichttechnik schaffen wir lebendige Ergebnisse.',
      image: '/images/neue-Bilder/vollkeramikbruecke-metallfrei-zahnersatz.png',
      icon: <Diamond className="w-6 h-6" />,
      details: ['Individuelle Frontzahnkeramik', 'Veneers, Inlays, Onlays', 'Keramik gepresst & geschichtet']
    },
    {
      title: 'Kronen & Brücken',
      description: 'Präzise Passform und Langlebigkeit. Ob Zirkon, Vollkeramik oder Metallkeramik – wir finden die optimale Lösung.',
      image: '/images/neue-Bilder/zahnbruecke-teilverblendet-metallkeramik.png',
      icon: <Layers className="w-6 h-6" />,
      details: ['Zirkonkeramik & CAD/CAM', 'Perlmutkrone', 'Edelmetall & Titan']
    },
    {
      title: 'Digitaler Scanservice',
      description: 'Mit unserem DIGITALEN SCANSERVICE wird die Zahnabformung einfacher, schneller und angenehmer. Ein moderner Intraoralscanner erstellt in Minuten ein präzises 3D-Modell.',
      image: '/images/neue-Bilder/artikulator-zahnersatz-gipsmodell-zahnhandel.jpg',
      icon: <Smartphone className="w-6 h-6" />,
      details: ['Maximaler Komfort ohne Würgereiz', 'Berührungslose Abformung', 'Flexibler Vor-Ort-Service']
    },
    {
      title: '3D Druck & Innovation',
      description: 'Unsere moderne 3D-Drucktechnologie ermöglicht präzise Modelle und dentale Arbeiten direkt aus digitalen Scandaten.',
      image: '/images/neue-Bilder/rapidshape-3d-druck-nachbearbeitung-zahnhandel.jpg',
      icon: <Microscope className="w-6 h-6" />,
      details: ['Schnelle Fertigungszeiten', 'Präzises Gipsmodell-Druck', 'Innovativer digitaler Workflow']
    },
    {
      title: 'Kombitechnik',
      description: 'Funktionalität trifft Komfort. Hochwertige Teleskoparbeiten und Geschiebe für sicheren Halt und Ästhetik.',
      image: '/images/neue-Bilder/teleskopbruecke-zahnersatz-modell-technik.png',
      icon: <Activity className="w-6 h-6" />,
      details: ['Teleskoptechnik', 'Geschiebe & Riegel', 'Modellguss']
    },
    {
      title: 'Implantattechnik',
      description: 'Festsitzender Zahnersatz auf Implantaten. Wir versorgen alle gängigen Implantatsysteme mit höchster Präzision.',
      image: '/images/neue-Bilder/zahnimplantat-abutment-zirkon-krone.png',
      icon: <ShieldCheck className="w-6 h-6" />, 
      details: ['Suprakonstruktionen', 'Individuelle Abutments', 'Stegkonstruktionen']
    },
    {
      title: 'Totalprothetik',
      description: 'Lebensqualität zurückgewinnen. Prothesen nach der TiF-Methode für optimalen Sitz und natürliche Optik.',
      image: '/images/neue-Bilder/totalprothese-oberkiefer-unterkiefer-set.png',
      icon: <Diamond className="w-6 h-6" />,
      details: ['TiF-Methode', 'Totalprothesen', 'Reparaturen']
    },
    {
      title: 'Spezialtechniken',
      description: 'Innovation für besondere Anforderungen. Modernste Verfahren für perfekte Passung und Biokompatibilität.',
      image: '/images/neue-Bilder/schnarchschiene-unterkieferprotrusionsschiene-schlafapnoe.png',
      icon: <Layers className="w-6 h-6" />,
      details: ['Lasertechnik', 'Schienen & Diagnostik', 'Schnarchschutz']
    }
  ]

  const galleryImages = [
    { src: '/images/neue-Bilder/dentallabor-ausstattung-brennofen-zahnhandel.jpg', title: 'Keramikbrennofen' },
    { src: '/images/neue-Bilder/picodent-fraesmaschine-cad-cam-zahnhandel.jpg', title: 'CAD/CAM Fräsmaschine' },
    { src: '/images/neue-Bilder/fraeserstaender-rotierende-instrumente-technikertisch-zahnhandel.jpg', title: 'Präzisionswerkzeuge' },
    { src: '/images/neue-Bilder/laborzeile-gipsraum-arbeitsvorbereitung-zahnhandel.jpg', title: 'Gipsraum-Vorbereitung' },
    { src: '/images/neue-Bilder/poliereinheit-kavo-dentallabor-zahnhandel.jpg', title: 'Kavo Poliereinheit' },
    { src: '/images/neue-Bilder/schmelztiegel-metallguss-legierung-zahnhandel.jpg', title: 'Metallguss-Technik' },
    { src: '/images/neue-Bilder/lichthaertung-zahnersatz-verblendung-zahntechnik.jpg', title: 'Lichthärtung' },
    { src: '/images/neue-Bilder/keramikofen-dekema-austromat-zahnhandel.jpg', title: 'Dekema Keramikofen' }
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
               backgroundImage: "url('/images/neue-Bilder/dentallabor-arbeitsplaetze-innenansicht-zahnhandel.jpg')", 
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

      {/* Focus Section: Digitaler Scanservice */}
      <Section background="white" className="overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-secondary-600 font-bold tracking-wider uppercase text-sm">
              <Smartphone size={20} />
              <span>Innovation</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 leading-tight">
              Digitaler Scanservice
            </h2>
            <div className="space-y-4 text-primary-700 text-lg leading-relaxed">
              <p>
                Mit unserem <strong>DIGITALEN SCANSERVICE</strong> wird die Zahnabformung einfacher, schneller und deutlich angenehmer. 
                Statt der klassischen Abdruckmasse erfasst ein moderner Intraoralscanner Ihre Zähne berührungslos und erstellt in wenigen Minuten ein präzises 3D-Modell.
              </p>
              <p>
                Patientinnen und Patienten profitieren von maximalem Komfort ohne Würgereiz und können den Scan direkt auf dem Bildschirm mitverfolgen. 
                Die digitalen Daten werden sofort an unser Labor übermittelt und ermöglichen passgenauen Zahnersatz mit hoher Präzision.
              </p>
              <div className="bg-secondary-50 p-6 rounded-2xl border-l-4 border-secondary-400 shadow-sm mt-8">
                <h4 className="font-bold text-primary-900 mb-2">Vor-Ort-Service für Praxen</h4>
                <p className="text-primary-800">
                  Für Zahnarztpraxen ohne eigenen Scanner bieten wir einen flexiblen <strong>Vor-Ort-Scanservice</strong>: 
                  Ein geschulter Scan-Spezialist kommt direkt in Ihre Praxis und führt die digitale Abformung professionell durch.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 transition-transform hover:rotate-0 duration-700">
                <img 
                  src="/images/neue-Bilder/artikulator-zahntechnik-kiefergelenk-simulation.png" 
                  alt="Digitaler Intraoralscan am Computer-Monitor – Präzision im digitalen Workflow" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent"></div>
             </div>
             {/* Decorative Background Element */}
             <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
             <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </Section>

      {/* Focus Section: 3D Druck */}
      <Section background="stone" className="overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl transform lg:-rotate-2 transition-transform hover:rotate-0 duration-700">
                <img 
                  src="/images/neue-Bilder/rapidshape-3d-druck-nachbearbeitung-zahnhandel.jpg" 
                  alt="Nachbearbeitung von 3D-gedruckten dentalen Objekten mit höchster Genauigkeit" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-primary-900/20 to-transparent"></div>
             </div>
             {/* Decorative Background Element */}
             <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          </div>
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-primary-600 font-bold tracking-wider uppercase text-sm">
              <Microscope size={20} />
              <span>Technologie</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 leading-tight">
              3D Druck in der Zahntechnik
            </h2>
            <div className="space-y-4 text-primary-700 text-lg leading-relaxed">
              <p>
                Unsere moderne <strong>3D-Drucktechnologie</strong> ermöglicht es uns, präzise und effiziente zahntechnische Produkte herzustellen. 
                Digitale Scandaten werden direkt in hochwertige Modelle und dentaltechnische Arbeiten umgesetzt.
              </p>
              <p>
                Mit unseren modernen Drucksystemen fertigen wir Modelle, Zahnersatz, Schienen und Kronen mit höchster Genauigkeit an. 
                Der digitale Workflow sorgt für schnelle Produktionszeiten, optimale Passgenauigkeit und eine zuverlässige Qualität.
              </p>
              <p className="font-serif italic text-primary-800 border-l-4 border-primary-500 pl-6 py-2">
                So profitieren Zahnarztpraxen und Patienten von innovativer Technologie und moderner Zahntechnik auf höchstem Niveau aus unserem Hause...
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Main Grid */}
      <Section title="Exzellenz in jedem Bereich" intro="Wir verbinden Ästhetik mit Funktion für Ihr schönstes Lächeln." background="stone">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offerings.map((offer, idx) => (
                  <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col">
                      <div className="relative h-44 overflow-hidden">
                          <img src={offer.image} alt={offer.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg text-secondary-600 shadow-sm">
                              {offer.icon}
                          </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold font-serif text-primary-900 mb-2 group-hover:text-secondary-600 transition-colors leading-tight">{offer.title}</h3>
                          <p className="text-primary-700 text-xs leading-relaxed mb-4 flex-1">{offer.description}</p>
                          
                          <div className="space-y-1.5 border-t border-stone-100 pt-3 mt-auto">
                              {offer.details.map((detail, i) => (
                                  <div key={i} className="flex items-center gap-2 text-[11px] font-medium text-primary-600">
                                      <CheckCircle2 size={12} className="text-primary-500 shrink-0" />
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
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">Service & Beratung</h2>
                  <p className="text-primary-700 text-lg mb-8 leading-relaxed">
                      Unser Service endet nicht bei der Fertigung. Wir unterstützen Zahnärzte und Patienten mit umfassenden Dienstleistungen vor Ort.
                  </p>
                  
                  <div className="space-y-6">
                      <div className="flex gap-4">
                          <div className="bg-primary-50 p-3 rounded-full h-fit text-primary-600"><CheckCircle2 /></div>
                          <div>
                              <h4 className="font-bold text-primary-900 mb-1">Individuelle Beratung</h4>
                              <p className="text-primary-700 text-sm">Persönliche Beratung und prothetische Planung für optimale Ergebnisse.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <div className="bg-secondary-50 p-3 rounded-full h-fit text-secondary-600"><Clock /></div>
                          <div>
                              <h4 className="font-bold text-primary-900 mb-1">Flexibler Reparaturservice</h4>
                              <p className="text-primary-700 text-sm italic">
                                Modellgussreparaturen (Klammerrep., oder geg. Basisteil mit bis zu 2 zu ersetzenden Zähnen) können innerhalb von 24h ab Anruf geliefert werden.
                              </p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <div className="bg-stone-100 p-3 rounded-full h-fit text-primary-700"><Users /></div>
                          <div>
                              <h4 className="font-bold text-primary-900 mb-1">Meister-Support & Hilfe</h4>
                              <p className="text-primary-700 text-sm">Schnelle Hilfe bei Problemen und Unterstützung komplexer Fälle durch einen Zahntechnikermeister direkt in Ihrer Praxis.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl rotate-1">
                       <img 
                         src="/images/neue-Bilder/empfang-buero-zahnhandel-kundenservice.jpg" 
                         alt="Beratungsbereich und Empfang der Zahntechnik Frankenberg" 
                         className="w-full h-auto" 
                         loading="lazy"
                        />
                  </div>
                  {/* Banner */}
                   <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border-l-4 border-primary-500 hidden md:block">
                      <p className="font-serif font-bold text-lg text-primary-900">Digitaler Scanservice</p>
                      <p className="text-sm text-primary-700 mt-1">Ein geschulter Scan-Spezialist kommt direkt in Ihre Praxis für die digitale Abformung.</p>
                  </div>
              </div>
           </div>
      </Section>

      {/* Labor-Galerie */}
      <Section title="Einblick in unser Labor" intro="Werfen Sie einen Blick auf unsere moderne Ausstattung und Arbeitsplätze." background="stone">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                  <div key={i} className="group relative aspect-square overflow-hidden rounded-xl shadow-sm">
                      <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className="text-white text-xs font-bold">{img.title}</p>
                      </div>
                  </div>
              ))}
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
