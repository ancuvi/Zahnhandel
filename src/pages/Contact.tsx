import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import ContactForm from '../components/Forms/ContactForm'
import Section from '../components/UI/Section'
import Seo from '../components/SEO/Seo'

const Contact = () => {
  return (
    <div>
      <Seo
        title="Kontakt & Anfahrt | ZAHNTECHNIK Frankenberg GmbH"
        description="Wir freuen uns auf Ihre Nachricht. Telefon: 037206 / 75542. Ihr Dentallabor in Frankenberg."
      />

      {/* Hero Section */}
      <div className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40" 
             style={{ 
               backgroundImage: "url('/images/Willkommen-2.webp')", 
               backgroundSize: 'cover', 
               backgroundPosition: 'center' 
             }} 
        />
        <div className="hero-gradient"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
             <div className="inline-flex items-center gap-2 rounded-full bg-secondary-900/50 px-3 py-1.5 md:px-4 text-xs md:text-sm font-medium text-secondary-200 border border-secondary-800">
               <Send size={16} />
               <span>Wir sind für Sie da</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              <span className="text-white">Nehmen Sie</span>{" "}
              <span className="text-secondary-400">Kontakt </span>
              <span className="text-white">auf</span>{" "}
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
              Ob Fragen zu unseren Leistungen, Terminvereinbarungen oder allgemeine Anliegen – wir helfen Ihnen gerne weiter.
            </p>
          </div>
        </div>
      </div>

      <Section className="relative -mt-6 md:-mt-10 pt-0 pb-16 md:pb-20 z-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Contact Info Cards (Left Side) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
             {/* Address Card */}
             <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 flex items-start gap-4">
                 <div className="p-3 bg-primary-50 text-primary-600 rounded-xl shrink-0">
                     <MapPin size={24} />
                 </div>
                 <div>
                     <h3 className="font-bold text-lg text-primary-900 mb-2">Anschrift</h3>
                     <address className="not-italic text-primary-700 leading-relaxed">
                         B&S Zahntechnik Frankenberg GmbH<br/>
                         Gewerbering 17<br/>
                         09669 Frankenberg
                     </address>
                 </div>
             </div>

             {/* Phone Card */}
             <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 flex items-start gap-4">
                 <div className="p-3 bg-primary-50 text-primary-600 rounded-xl shrink-0">
                     <Phone size={24} />
                 </div>
                 <div className="w-full">
                     <h3 className="font-bold text-lg text-primary-900 mb-2">Telefon & Fax</h3>
                     <div className="space-y-2 text-primary-700">
                        <div className="flex justify-between border-b border-stone-100 pb-2">
                           <span>Telefon:</span>
                           <a href="tel:03720675542" className="font-medium hover:text-primary-600">037206 / 75542</a>
                        </div>
                        <div className="flex justify-between pt-1">
                           <span>Fax:</span>
                           <span className="font-medium">037206 / 75660</span>
                        </div>
                     </div>
                 </div>
             </div>

             {/* Email Card */}
             <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 flex items-start gap-4">
                 <div className="p-3 bg-primary-50 text-primary-600 rounded-xl shrink-0">
                     <Mail size={24} />
                 </div>
                 <div className="w-full">
                     <h3 className="font-bold text-lg text-primary-900 mb-2">E-Mail</h3>
                     <a href="mailto:info@zahnhandel.de" className="text-primary-700 font-medium hover:text-primary-600 break-all">
                         info@zahnhandel.de
                     </a>
                 </div>
             </div>

             {/* Hours Card */}
             <div className="bg-stone-900 text-white p-6 rounded-2xl shadow-lg flex items-start gap-4 flex-1">
                 <div className="p-3 bg-white/10 text-primary-300 rounded-xl shrink-0">
                     <Clock size={24} />
                 </div>
                 <div className="w-full flex flex-col justify-center">
                     <h3 className="font-bold text-lg text-white mb-4">Öffnungszeiten</h3>
                     <div className="space-y-2 text-stone-300 text-sm">
                         <div className="flex justify-between border-b border-white/10 pb-2">
                             <span>Mo - Do:</span>
                             <span className="font-medium text-white">07:00 - 19:00 Uhr</span>
                         </div>
                         <div className="flex justify-between pt-1">
                             <span>Freitag:</span>
                             <span className="font-medium text-white">07:00 - 17:00 Uhr</span>
                         </div>
                     </div>
                     <p className="mt-4 text-xs text-stone-400">Termine auch nach Vereinbarung möglich.</p>
                 </div>
             </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:col-span-7">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-stone-100 h-full">
                  <h2 className="text-2xl font-serif font-bold text-primary-900 mb-2">Schreiben Sie uns</h2>
                  <p className="text-primary-700 mb-8">
                      Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
                  </p>
                  <ContactForm />
              </div>
          </div>

        </div>
        
        {/* Map Full Width */}
        <div className="mt-8 md:mt-12 h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-stone-200">
            <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=Gewerbering+17,+09669+Frankenberg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                style={{border: 0}}
                title="Google Maps B&S Zahntechnik Frankenberg GmbH"
                className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
        </div>
      </Section>
    </div>
  )
}

export default Contact
