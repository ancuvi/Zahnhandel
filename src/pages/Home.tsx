import { Link } from 'react-router-dom'
import { Activity, Star, Clock, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'
import Button from '../components/UI/Button'
import Card from '../components/UI/Card'
import Section from '../components/UI/Section'
import Seo from '../components/SEO/Seo'

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DentalLaboratory",
    "name": "ZAHNTECHNIK Frankenberg GmbH",
    "description": "Ihr Dentallabor in Frankenberg. Ästhetische Frontzahnkeramik, Prothetik und individuelle Lösungen.",
    "url": window.location.origin,
    "telephone": "+493720675542",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gewerbering 17",
      "addressLocality": "Frankenberg",
      "postalCode": "09669",
      "addressCountry": "DE"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "07:00",
        "closes": "17:00"
      }
    ]
  }

  return (
    <div>
      <Seo
        title="ZAHNTECHNIK Frankenberg GmbH | Börner & Schrambke"
        description="Ihr Dentallabor in Frankenberg. Ästhetische Frontzahnkeramik, Prothetik und individuelle Lösungen. Telefon: 037206 / 75542."
        jsonLd={jsonLd}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] lg:min-h-[90vh] flex items-center py-16 lg:py-20">
        {/* Background Image with Parallax effect */}
        <div 
          className="absolute inset-0 z-0 hidden lg:block"
          style={{
            backgroundImage: "url('/images/Zahntechnik-wilkommen.webp')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        />
        
        {/* Mobile Background */}
        <div 
          className="absolute inset-0 z-0 lg:hidden"
          style={{
            backgroundImage: "url('/images/Zahntechnik-wilkommen.webp')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Gradient Overlay - Darker for more drama */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent lg:w-3/4"></div>
        
        <div className="mx-auto max-w-7xl relative z-10 px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="max-w-3xl space-y-6 lg:space-y-8 animate-fade-in flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-semibold text-white border border-white/20 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Meisterlabor in Frankenberg
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white leading-tight drop-shadow-sm">
              Willkommen bei <br/>
              <span className="text-secondary-400">ZAHNTECHNIK Frankenberg</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-stone-200 leading-relaxed font-medium max-w-2xl drop-shadow-sm">
              Ihr kompetenter Partner für hochwertigen Zahnersatz. Wir verbinden handwerkliche Präzision mit modernster Technologie für Ihr strahlendstes Lächeln.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button as={Link} to="/contact" variant="ghost" className="bg-white text-black border-none rounded-full !px-[3em] !py-[1.3em] !text-[12px] uppercase tracking-[2.5px] font-medium shadow-[0px_8px_15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out hover:bg-secondary-500 hover:text-white hover:shadow-[0px_15px_20px_rgba(236,72,153,0.4)] hover:-translate-y-[7px] active:-translate-y-[1px] outline-none">
                Kontakt aufnehmen
              </Button>
              <Button as={Link} to="/services" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:border-white hover:text-white backdrop-blur-sm">
                Unser Angebot
              </Button>
            </div>
            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-stone-300 border-t border-white/10 mt-8">
               <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm shadow-sm text-secondary-400 ring-1 ring-white/20">
                    <Clock size={18} />
                  </div>
                  <span className="font-medium">Mo-Do 7-19 Uhr, Fr 7-17 Uhr</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm shadow-sm text-secondary-400 ring-1 ring-white/20">
                    <MapPin size={18} />
                  </div>
                  <span className="font-medium">Gewerbering 17, Frankenberg</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section with Image */}
      <Section background="stone" className="relative">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-1 transition-transform hover:rotate-0 duration-500">
                    <img src="/images/Unser-Team.webp" alt="Unser Team" className="w-full h-auto object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                        <p className="font-serif font-bold text-xl">Unser Team</p>
                        <p className="text-sm opacity-90">Für Sie im Einsatz</p>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-100 rounded-full -z-10 blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-100 rounded-full -z-10 blur-xl"></div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-stone-900">Über uns</h2>
                <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500 shadow-sm">
                    <p className="font-bold text-primary-800 italic text-lg">
                    "Geht nicht, will nicht, kann nicht – gibt es hier nicht! <br/>
                    Wir finden immer eine Lösung......."
                    </p>
                </div>
                <p className="text-lg text-stone-700 leading-relaxed">
                    Ich möchte Ihnen auf diesem Wege einen kleinen Einblick in unser Dentallabor geben.
                    Als Zahnärztin und Zahnarzt, aber auch als Patient finden Sie auf unserer Homepage umfangreiche Informationen zu unseren Produkten und Dienstleistungen.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-secondary-600 font-semibold hover:text-secondary-700 transition-colors group">
                   Mehr über uns erfahren <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
         </div>
      </Section>

      {/* Video Section - Einblick */}
      <Section 
        background="white" 
        centered 
        title="Einblick in unser Labor" 
        intro="Schauen Sie uns über die Schulter. Wir verbinden digitale Präzision mit handwerklicher Perfektion."
        eyebrow="Video"
      >
        <div className="relative mx-auto max-w-5xl mt-8">
            {/* Abstract Background Blur */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-400/30 to-secondary-400/30 blur-3xl -z-10 rounded-full opacity-60"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-stone-900 aspect-video group cursor-pointer">
                <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/gaFEKlTf8yU?si=example&controls=1&rel=0" 
                    title="Zahntechnik Frankenberg Imagefilm" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
            </div>
            
            {/* Caption or Decoration */}
            <div className="absolute -bottom-10 -right-10 hidden lg:block -z-10">
                <div className="w-40 h-40 bg-primary-500 opacity-10 rounded-full blur-2xl"></div>
            </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section
        title="Unser Angebot"
        eyebrow="Leistungen"
        intro="Im Detail bieten wir Ihnen folgende Leistungen an:"
        headingLevel={2}
        background="white"
        className="relative"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2f8678 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 relative z-10">
          <Card
            title="Ästhetik & Keramik"
            description="Höchste Ansprüche an natürliche Ästhetik."
            icon={<Star size={24} />}
            className="border-t-4 border-t-secondary-400"
          >
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary-500 shrink-0" />
                <span>Ästhetische, individuelle Frontzahnkeramik</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary-500 shrink-0" />
                <span>Keramik gepresst und individuell geschichtet</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary-500 shrink-0" />
                <span>Individuelle Zahnfarbenbestimmung</span>
              </li>
            </ul>
            <Link to="/services" className="inline-flex items-center gap-2 text-secondary-600 font-semibold hover:text-secondary-700 transition-colors group-hover:translate-x-1 duration-300">
               Mehr erfahren <ArrowRight size={16} />
            </Link>
          </Card>
          
          <Card
            title="Service & Beratung"
            description="Wir sind für Sie da – persönlich und kompetent."
            icon={<Activity size={24} />}
            className="border-t-4 border-t-primary-500"
          >
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary-500 shrink-0" />
                <span>Individuelle Beratung & prothetische Planung</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary-500 shrink-0" />
                <span>Flexibler Reparaturservice</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary-500 shrink-0" />
                <span>Schnelle Hilfe bei Problemen</span>
              </li>
            </ul>
             <Link to="/services" className="inline-flex items-center gap-2 text-secondary-600 font-semibold hover:text-secondary-700 transition-colors group-hover:translate-x-1 duration-300">
               Mehr erfahren <ArrowRight size={16} />
            </Link>
          </Card>
        </div>
      </Section>

      {/* Showcase / Gallery Section */}
      <Section title="Unsere Arbeiten" eyebrow="Galerie" background="stone">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md cursor-pointer">
                <img src="/images/Frontzahnkeramik.webp" alt="Frontzahnkeramik" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-bold text-lg">Frontzahnkeramik</p>
                </div>
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md cursor-pointer">
                <img src="/images/Kombiarbeit.webp" alt="Kombiarbeit" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-bold text-lg">Kombitechnik</p>
                </div>
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md cursor-pointer">
                <img src="/images/Implantattechnik.webp" alt="Implantattechnik" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-bold text-lg">Implantattechnik</p>
                </div>
            </div>
        </div>
        <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-8 py-3 text-sm font-semibold text-stone-700 shadow-sm hover:bg-stone-50 hover:text-primary-600 transition-all">
                Alle Leistungen ansehen
            </Link>
        </div>
      </Section>

      {/* Slogan Banner with Background */}
      <section className="relative py-24 overflow-hidden">
         <div 
            className="absolute inset-0 z-0"
            style={{
                backgroundImage: "url('/images/Willkommen-2.webp')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }}
         >
            <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/30"></div>
         </div>
         
         <div className="mx-auto max-w-4xl relative z-10 px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase tracking-widest rotate-[-2deg] drop-shadow-lg">
               "SOVIEL ZAHN MUSS SEIN!"
            </h2>
            <p className="text-lg text-primary-100 leading-relaxed max-w-2xl mx-auto font-medium">
               Bei speziellen Fragen kontaktieren Sie uns einfach unter der Telefonnummer <strong>037206 / 75542</strong> oder senden uns eine E-Mail. Gern sind wir für Sie da.
            </p>
            <div className="pt-4">
               <Button as={Link} to="/contact" variant="ghost" className="bg-white text-stone-900 shadow-xl shadow-black/20 hover:bg-stone-100 border-2 border-transparent">
                  Jetzt Kontakt aufnehmen
               </Button>
            </div>
         </div>
      </section>
    </div>
  )
}

export default Home
