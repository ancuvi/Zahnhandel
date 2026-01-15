import { MapPin, Phone, Mail, Clock, Printer } from 'lucide-react'
import ContactForm from '../components/Forms/ContactForm'
import Section from '../components/UI/Section'
import Seo from '../components/SEO/Seo'

const Contact = () => {
  return (
    <div>
      <Seo
        title="Kontakt & Anfahrt | ZAHNTECHNIK Frankenberg GmbH"
        description="Kontaktieren Sie uns. B&S Zahntechnik Frankenberg GmbH. Gewerbering 17, Frankenberg. Telefon: 037206 / 75542."
      />
      <Section
        eyebrow="Kontakt"
        title="Wir sind für Sie da"
        intro="Haben Sie Fragen oder Wünsche? Kontaktieren Sie uns telefonisch, per E-Mail oder nutzen Sie unser Kontaktformular."
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="grid gap-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary-50 text-secondary-600 rounded-lg">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-stone-900 mb-1">Anschrift</h3>
                        <p className="text-stone-600">
                            B&S Zahntechnik Frankenberg GmbH<br/>
                            Gewerbering 17<br/>
                            09669 Frankenberg
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary-50 text-secondary-600 rounded-lg">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-stone-900 mb-1">Telefon & Fax</h3>
                        <p className="text-stone-600 mb-1">
                            <span className="inline-block w-24 font-medium">Telefon:</span> 
                            <a href="tel:03720675542" className="hover:text-secondary-600 transition-colors">037206 / 75542</a>
                        </p>
                        <p className="text-stone-600">
                            <span className="inline-block w-24 font-medium">Fax:</span> 
                            037206 / 75660
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary-50 text-secondary-600 rounded-lg">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-stone-900 mb-1">E-Mail</h3>
                        <a href="mailto:info@zahnhandel.de" className="text-stone-600 hover:text-secondary-600 transition-colors">
                            info@zahnhandel.de
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary-50 text-secondary-600 rounded-lg">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-stone-900 mb-1">Öffnungszeiten</h3>
                        <div className="text-stone-600 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                            <span>Montag:</span> <span>07:00 - 19:00 Uhr</span>
                            <span>Dienstag:</span> <span>07:00 - 19:00 Uhr</span>
                            <span>Mittwoch:</span> <span>07:00 - 19:00 Uhr</span>
                            <span>Donnerstag:</span> <span>07:00 - 19:00 Uhr</span>
                            <span>Freitag:</span> <span>07:00 - 17:00 Uhr</span>
                        </div>
                        <p className="text-sm text-stone-500 mt-2">und nach Vereinbarung</p>
                    </div>
                </div>
            </div>

            <div className="h-64 rounded-2xl overflow-hidden bg-stone-200 border border-stone-300 relative">
                 {/* Placeholder for Map - In a real scenario, embed Google Maps iframe */}
                 <div className="absolute inset-0 flex items-center justify-center text-stone-500 font-medium">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight={0} 
                        marginWidth={0} 
                        src="https://maps.google.com/maps?q=B%26S%20Zahntechnik%20Frankenberg%20GmbH&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        style={{border: 0}}
                        title="Google Maps B&S Zahntechnik Frankenberg GmbH"
                    ></iframe>
                 </div>
            </div>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-stone-100 h-fit">
            <h3 className="text-xl font-serif font-bold text-stone-900 mb-6">Nachricht senden</h3>
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Contact
