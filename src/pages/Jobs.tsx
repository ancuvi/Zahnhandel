import { Briefcase, MapPin, Mail, Star, Heart, GraduationCap } from 'lucide-react'
import Section from '../components/UI/Section'
import Seo from '../components/SEO/Seo'
import Button from '../components/UI/Button'
import { Link } from 'react-router-dom'
import Card from '../components/UI/Card'

const Jobs = () => {
  const benefits = [
    {
      title: 'Modernste Technik',
      description: 'Arbeiten Sie mit neuester CAD/CAM-Technologie und hochwertigen Materialien.',
      icon: <Star size={24} />
    },
    {
      title: 'Starkes Team',
      description: 'Ein familiäres Betriebsklima und ein kollegiales Miteinander sind uns wichtig.',
      icon: <Heart size={24} />
    },
    {
      title: 'Weiterbildung',
      description: 'Wir fördern Ihre berufliche Entwicklung durch regelmäßige Fortbildungen.',
      icon: <GraduationCap size={24} />
    }
  ]

  const jobs = [
    {
      title: 'Zahntechniker (m/w/d)',
      subtitle: 'Schwerpunkt Edelmetall- und Modellgusstechnik',
      description: 'Sie beherrschen die Edelmetall- und Modellgusstechnik und haben einen hohen Anspruch an Ästhetik und Passgenauigkeit? Dann suchen wir genau Sie zur Verstärkung unseres Teams.',
      type: 'Vollzeit / Teilzeit'
    },
    {
      title: 'Zahntechniker (m/w/d)',
      subtitle: 'Schwerpunkt Kunststofftechnik',
      description: 'Sie haben Erfahrung in der Kunststofftechnik und Freude an der Herstellung hochwertiger Prothetik? Wir bieten Ihnen einen modernen Arbeitsplatz.',
      type: 'Vollzeit / Teilzeit'
    },
    {
      title: 'Auszubildende (m/w/d)',
      subtitle: 'zum Zahntechniker',
      description: 'Du hast handwerkliches Geschick, ein Auge für Details und möchtest einen kreativen Beruf mit Zukunft erlernen? Starte deine Ausbildung bei uns!',
      type: 'Ausbildung'
    },
  ]

  return (
    <div>
      <Seo
        title="Karriere & Jobs | ZAHNTECHNIK Frankenberg GmbH"
        description="Starten Sie Ihre Karriere bei uns. Aktuelle Stellenangebote für Zahntechniker und Auszubildende in Frankenberg."
      />

      {/* Hero Section */}
      <div className="relative bg-stone-900 text-white py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ 
               backgroundImage: "url('/images/Unser-Team.webp')", 
               backgroundSize: 'cover', 
               backgroundPosition: 'center' 
             }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/90 to-primary-900/20 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
             <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 text-xs md:text-sm font-medium text-white border border-white/20">
               <Briefcase size={16} />
               <span>Karriere bei uns</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white">
              Gestalten Sie mit uns <br/>
              <span className="text-secondary-300">das Lächeln von morgen</span>
            </h1>
            <p className="text-lg text-primary-50 leading-relaxed max-w-2xl">
              Werden Sie Teil eines engagierten Teams, das traditionelles Handwerk mit modernster Technologie verbindet. Wir freuen uns auf Sie!
            </p>
            <div className="pt-4">
                <Button as="a" href="#stellen" variant="secondary">
                    Zu den Stellenangeboten
                </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <Section title="Darum ZAHNTECHNIK Frankenberg" intro="Wir bieten mehr als nur einen Arbeitsplatz." background="stone">
         <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
               <Card key={idx} title={benefit.title} icon={benefit.icon} className="bg-white">
                  <p className="text-stone-600">{benefit.description}</p>
               </Card>
            ))}
         </div>
      </Section>

      {/* Jobs List */}
      <div id="stellen" className="scroll-mt-24"></div>
      <Section title="Aktuelle Stellenangebote" background="white">
         <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, idx) => (
               <div key={idx} className="group bg-white border border-stone-200 rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-primary-200 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Briefcase size={100} />
                  </div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start justify-between">
                      <div className="space-y-3">
                          <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider rounded-full">
                              {job.type}
                          </div>
                          <div>
                              <h3 className="text-2xl font-bold font-serif text-stone-900">{job.title}</h3>
                              <p className="text-lg text-primary-600 font-medium">{job.subtitle}</p>
                          </div>
                          <p className="text-stone-600 leading-relaxed max-w-2xl">
                              {job.description}
                          </p>
                      </div>
                      <div className="pt-2 shrink-0">
                           <Button as={Link} to="/contact" variant="outline" className="w-full md:w-auto">
                              Jetzt bewerben
                           </Button>
                      </div>
                  </div>
               </div>
            ))}
            
            {/* Initiativbewerbung Box */}
            <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden mt-12">
                 <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                     <h3 className="text-2xl md:text-3xl font-serif font-bold">Kein passendes Angebot dabei?</h3>
                     <p className="text-stone-300 text-lg">
                         Wir sind immer an talentierten Mitarbeitern interessiert. Senden Sie uns gerne Ihre Initiativbewerbung!
                     </p>
                     <Button as={Link} to="/contact" variant="primary">
                        Initiativ bewerben
                     </Button>
                 </div>
            </div>
         </div>
      </Section>

      {/* Contact Info Footer for Jobs */}
      <Section background="stone" className="text-center">
          <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-8">Ihr Weg zu uns</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 space-y-6">
                  <p className="text-stone-600">
                      Senden Sie Ihre aussagekräftigen Bewerbungsunterlagen bitte per E-Mail oder Post an:
                  </p>
                  <div className="space-y-4">
                      <div className="flex items-center justify-center gap-3 text-stone-800 font-medium">
                          <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                             <MapPin size={20} />
                          </div>
                          <div className="text-left">
                              <div className="font-bold">Zahntechnik Frankenberg GmbH</div>
                              <div className="text-sm font-normal text-stone-500">Gewerbering 17, 09669 Frankenberg</div>
                          </div>
                      </div>
                       <div className="flex items-center justify-center gap-3 text-stone-800 font-medium">
                          <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                             <Mail size={20} />
                          </div>
                          <a href="mailto:info@zahnhandel.de" className="hover:text-primary-600 transition-colors">info@zahnhandel.de</a>
                      </div>
                  </div>
              </div>
          </div>
      </Section>
    </div>
  )
}

export default Jobs
