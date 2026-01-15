import { Users, History, Award, CheckCircle2 } from 'lucide-react'
import Section from '../components/UI/Section'
import Seo from '../components/SEO/Seo'
import Card from '../components/UI/Card'
import Button from '../components/UI/Button'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Seo
        title="Über Uns | ZAHNTECHNIK Frankenberg GmbH"
        description="Erfahren Sie mehr über die Geschichte der Zahntechnik Frankenberg GmbH, unser Team und die Geschäftsführung."
      />

      {/* Hero Section */}
      <div className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ 
               backgroundImage: "url('/images/Zahntechnik-wilkommen.webp')", 
               backgroundSize: 'cover', 
               backgroundPosition: 'center' 
             }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/90 to-transparent z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900 rounded-full blur-[100px] opacity-30 z-0 translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-900/50 px-4 py-1.5 text-sm font-medium text-primary-200 border border-primary-800">
               <Users size={16} />
               <span>Das Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Tradition und Innovation <br />
              <span className="text-primary-400">in Frankenberg</span>
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
              Seit über 30 Jahren stehen wir für qualitativ hochwertige Zahntechnik. 
              Was als kleines Labor begann, ist heute ein moderner Betrieb mit einem starken Team.
            </p>
          </div>
        </div>
      </div>

      {/* History Section - "Wie alles begann" */}
      <Section className="relative py-12 lg:py-16">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
               <div>
                  <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Unsere Geschichte</h2>
                  <div className="w-20 h-1.5 bg-primary-500 rounded-full"></div>
               </div>
               
               <div className="space-y-8 relative">
                  
                  {/* Timeline Item 1 */}
                  <div className="relative flex items-start gap-6 group">
                     <div className="absolute left-0 top-0 flex items-center justify-center bg-white rounded-full border-2 border-primary-500 w-10 h-10 shadow-sm shrink-0 z-10 group-hover:scale-110 transition-transform">
                        <History size={18} className="text-primary-600" />
                     </div>
                     <div className="pl-12">
                        <span className="text-sm font-bold text-primary-600 tracking-wider uppercase">Anfang der 90er</span>
                        <h3 className="text-xl font-bold text-stone-800 mt-1 mb-2">Die Gründung</h3>
                        <p className="text-stone-600 leading-relaxed">
                           Gründung als Dentallabor Udo Gerschler GmbH. Der Grundstein für jahrzehntelange Expertise wurde gelegt.
                        </p>
                     </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative flex items-start gap-6 group">
                     <div className="absolute left-0 top-0 flex items-center justify-center bg-white rounded-full border-2 border-primary-500 w-10 h-10 shadow-sm shrink-0 z-10 group-hover:scale-110 transition-transform">
                        <Users size={18} className="text-primary-600" />
                     </div>
                     <div className="pl-12">
                        <span className="text-sm font-bold text-primary-600 tracking-wider uppercase">Der Übergang</span>
                        <h3 className="text-xl font-bold text-stone-800 mt-1 mb-2">Generationswechsel</h3>
                        <p className="text-stone-600 leading-relaxed">
                           Nach fast 20 Jahren übergab Herr ZTM U. Gerschler das Unternehmen an die nächste Generation.
                        </p>
                     </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="relative flex items-start gap-6 group">
                     <div className="absolute left-0 top-0 flex items-center justify-center bg-white rounded-full border-2 border-primary-500 w-10 h-10 shadow-sm shrink-0 z-10 group-hover:scale-110 transition-transform">
                        <Award size={18} className="text-primary-600" />
                     </div>
                     <div className="pl-12">
                        <span className="text-sm font-bold text-primary-600 tracking-wider uppercase">2. August 2011</span>
                        <h3 className="text-xl font-bold text-stone-800 mt-1 mb-2">Neustart</h3>
                        <p className="text-stone-600 leading-relaxed">
                           Die Zahntechnik Frankenberg GmbH wurde ins Leben gerufen, um das Labor innovativ und erfolgreich weiterzuführen.
                        </p>
                     </div>
                  </div>

               </div>
            </div>
            
            <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                   <img src="/images/Geschäftsführung.webp" alt="Geschäftsführung" className="w-full h-auto" />
                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                      <p className="text-white font-medium">Unsere Geschäftsführung</p>
                      <p className="text-white/80 text-sm">ZTM Sven Börner (GF) / ZTM Udo Gerschler (ehem. GF) / ZTM Markus Schrambke (GF)</p>
                   </div>
                </div>
                {/* Decorative Pattern Dots */}
                <div className="absolute -top-10 -right-10 w-40 h-40 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
            </div>
         </div>
      </Section>

      {/* Team Stats Section */}
      <Section background="primary" className="text-white py-12 lg:py-16">
         <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="p-4">
               <div className="text-5xl font-bold mb-2">10</div>
               <div className="text-primary-100 font-medium">Mitarbeiter</div>
            </div>
            <div className="p-4">
               <div className="text-5xl font-bold mb-2">3</div>
               <div className="text-primary-100 font-medium">Meister</div>
            </div>
             <div className="p-4">
               <div className="text-5xl font-bold mb-2">100%</div>
               <div className="text-primary-100 font-medium">Qualität & Service</div>
            </div>
         </div>
      </Section>

      {/* Team Image Section */}
      <Section background="stone" className="relative overflow-hidden py-12 lg:py-16">
        <div className="container mx-auto">
           <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl font-serif font-bold text-stone-900">Unser Team</h2>
              <p className="text-stone-600 text-lg">
                 Kompetenz, Leidenschaft und jahrelange Erfahrung. Unser Team besteht aus hochqualifizierten Fachkräften, die jeden Tag ihr Bestes geben.
              </p>
           </div>
           
           <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto">
              <img src="/images/Unser-Team.webp" alt="Team der Zahntechnik Frankenberg" className="w-full h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                 <div>
                    <h3 className="text-xl font-bold text-stone-900">Das Team der Zahntechnik Frankenberg</h3>
                    <p className="text-stone-600 mt-1">Gemeinsam für Ihr Lächeln im Einsatz.</p>
                 </div>
                 <Button as={Link} to="/contact" variant="primary">Kontakt aufnehmen</Button>
              </div>
           </div>
           
           <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <Card title="Verwaltung" icon={<CheckCircle2/>} className="bg-white">
                  <p className="text-stone-600 mb-4">
                     Frau J. Gerschler übernimmt als Betriebswirtin die kaufmännische Leitung und Verwaltung unseres Unternehmens.
                  </p>
               </Card>
               <Card title="Qualitätssicherung" icon={<Award/>} className="bg-white">
                  <p className="text-stone-600 mb-4">
                     Unsere 3 Zahntechnikermeister sichern die konstant hohe Qualität aller angefertigten Arbeiten durch strenge Kontrollen.
                  </p>
               </Card>
           </div>
        </div>
      </Section>
      
      {/* CTA Bottom */}
       <section className="py-20 bg-stone-900 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Wir sind für Sie da</h2>
           <p className="text-lg text-stone-300 mb-8 leading-relaxed">
              Haben Sie Fragen zu unserem Labor oder unseren Leistungen? Wir freuen uns darauf, Sie kennenzulernen.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
               <Button as={Link} to="/contact" variant="primary">
                  Jetzt Kontaktieren
               </Button>
               <Button as={Link} to="/services" variant="outline" className="text-white border-white hover:bg-white hover:text-stone-900">
                  Unsere Leistungen
               </Button>
           </div>
        </div>
      </section>

    </div>
  )
}

export default About
