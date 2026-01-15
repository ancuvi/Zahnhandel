import { MapPin, Clock } from 'lucide-react'
import Section from '../components/UI/Section'
import Seo from '../components/SEO/Seo'

const Praxis = () => {
  return (
    <div>
      <Seo
        title="Die Praxis | Ruhige Atmosphäre in Musterstadt"
        description="Ein Ort zum Wohlfühlen. Barrierearme Praxisräume, diskrete Atmosphäre und zentrale Lage. Hier stehen Sie im Mittelpunkt."
      />

      <Section
        eyebrow="Praxis"
        title="Ein Raum für Ruhe und Konzentration"
        intro="Helle Räume, eine ruhige Atmosphäre und feste Termine ohne Zeitdruck. So schaffen wir den idealen Rahmen, um uns konzentriert Ihrem Anliegen zu widmen."
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-lg text-stone-600 leading-relaxed">
               In meiner Praxis finden Sie einen reduzierten, warmen Rahmen, der Ihnen das Ankommen erleichtert. Sie erwartet ein großzügiger Behandlungsraum mit viel Tageslicht, ausreichend Platz für Bewegungsanalysen und Übungen sowie ein Wartebereich ohne Hektik.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
               Mir ist wichtig, dass Sie sich wohlfühlen. Deshalb lege ich großen Wert auf Diskretion, Sauberkeit und eine Umgebung, die Ruhe ausstrahlt. Durch meine Bestellpraxis begegnen Sie in der Regel keinen anderen Patienten.
            </p>
            
            <div className="pt-6">
               <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">Ihr Besuch bei mir</h3>
               <ul className="space-y-4">
                  <li className="flex gap-4">
                     <div className="flex-shrink-0 mt-1">
                        <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                           <span className="font-bold text-sm">1</span>
                        </div>
                     </div>
                     <div>
                        <h4 className="font-bold text-stone-800">Ankommen</h4>
                        <p className="text-stone-600 text-sm mt-1">Bitte kommen Sie ca. 5 Minuten vor Ihrem Termin, damit Sie in Ruhe ankommen können.</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="flex-shrink-0 mt-1">
                        <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                           <span className="font-bold text-sm">2</span>
                        </div>
                     </div>
                     <div>
                        <h4 className="font-bold text-stone-800">Gespräch & Behandlung</h4>
                        <p className="text-stone-600 text-sm mt-1">Wir klären Ihr Anliegen in Ruhe, untersuchen gründlich und behandeln gezielt.</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="flex-shrink-0 mt-1">
                        <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                           <span className="font-bold text-sm">3</span>
                        </div>
                     </div>
                     <div>
                        <h4 className="font-bold text-stone-800">Nachklang & Übungen</h4>
                        <p className="text-stone-600 text-sm mt-1">Wir besprechen das weitere Vorgehen und ich zeige Ihnen ggf. erste Übungen für zuhause.</p>
                     </div>
                  </li>
               </ul>
            </div>
          </div>
          
          <div className="grid gap-6">
            <div className="aspect-video min-h-[220px] w-full overflow-hidden rounded-2xl bg-stone-100 shadow-md">
              <img
                src="/images/behandlungsraum.png"
                alt="Behandlungsraum mit Behandlungsliege"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="aspect-square min-h-[200px] w-full overflow-hidden rounded-2xl bg-stone-100 shadow-md">
                <img
                  src="/images/wartezimmer.png"
                  alt="Wartezimmer der Praxis"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square min-h-[200px] w-full overflow-hidden rounded-2xl bg-stone-100 shadow-md">
                <img
                  src="/images/eingangsbereich.png"
                  alt="Eingangsbereich der Praxis"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section background="stone">
         <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
               <div className="flex items-center gap-3 mb-4 text-primary-700">
                  <MapPin size={24} />
                  <h3 className="text-xl font-bold font-serif">Anfahrt</h3>
               </div>
               <p className="text-stone-600 mb-4">
                  Praxis Nicole Feiereis<br/>
                  (Genaue Adresse bei Terminbestätigung)<br/>
                  12345 Musterstadt
               </p>
               <p className="text-sm text-stone-500">
                  Die Praxis liegt zentral in Musterstadt und ist gut mit öffentlichen Verkehrsmitteln zu erreichen. Parkmöglichkeiten finden Sie in den umliegenden Straßen.
               </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
               <div className="flex items-center gap-3 mb-4 text-primary-700">
                  <Clock size={24} />
                  <h3 className="text-xl font-bold font-serif">Barrierefreiheit & Zugang</h3>
               </div>
               <p className="text-stone-600 mb-4">
                  Der Zugang zur Praxis ist ebenerdig bzw. über einen Aufzug erreichbar.
               </p>
               <p className="text-sm text-stone-500">
                  Sollten Sie spezielle Unterstützung benötigen, sprechen Sie mich bitte vorab an, damit wir Ihren Besuch so angenehm wie möglich gestalten können.
               </p>
            </div>
         </div>
      </Section>
    </div>
  )
}

export default Praxis
