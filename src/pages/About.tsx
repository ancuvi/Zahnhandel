import Section from '../components/UI/Section'
import Seo from '../components/SEO/Seo'

const About = () => {
  return (
    <div>
      <Seo
        title="Über Uns | ZAHNTECHNIK Frankenberg GmbH"
        description="Erfahren Sie mehr über die Geschichte der Zahntechnik Frankenberg GmbH, unser Team und die Geschäftsführung."
      />
      <Section
        eyebrow="Über Uns"
        title="Unser Unternehmen"
        intro="Tradition und Innovation in Frankenberg."
      >
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* History Text */}
          <div className="space-y-6 text-lg text-stone-700 leading-relaxed text-justify">
            <p>
              Als Dentallabor Udo Gerschler GmbH wurde dieses Unternehmen Anfang der 90er Jahre gegründet.
            </p>
            <p>
              Nach fast 20 Jahren als Inhaber wollte Herr ZTM U. Gerschler aus gesundheitlichen Gründen dieses Unternehmen abgeben um kürzer zu treten und gab somit uns die Chance Geschäftsführer dieses Labors zu werden.
            </p>
            <p>
              Nach langjähriger Betriebszugehörigkeit im Dentallabor U. Gerschler und bestandenen Meisterprüfungen, fassten wir den Entschluss diese Möglichkeit zu nutzen und dieses Labor weiterhin so innovativ, attraktiv und erfolgreich weiterzuführen.
            </p>
            <p className="font-semibold text-primary-900">
              Am 2.8.2011 wurde dann die Zahntechnik Frankenberg GmbH ins Leben gerufen.
            </p>
            <p>
              Unser Unternehmen besteht derzeit aus 2 Geschäftsführern und 10 Mitarbeitern, wobei Frau J. Gerschler als Betriebswirtin die Verwaltung weiterhin übernimmt.
            </p>
            <p>
              3 Zahntechnikermeister sichern die hohe Qualität der angefertigten Arbeiten bei der Qualitätskontrolle. Weiterhin steht der Service am Kunden und Patienten bei uns im Vordergrund.
            </p>
          </div>

          {/* Team Image */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-primary-900">Unser Team</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <img 
                src="/images/Unser-Team.jpeg" 
                alt="Das Team der Zahntechnik Frankenberg GmbH" 
                className="w-full h-auto object-cover"
              />
              <div className="bg-stone-50 p-4 text-center text-stone-600 font-medium">
                Unser Team
              </div>
            </div>
          </div>

          {/* Management Image */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-primary-900">Die Geschäftsführung</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200">
               <img 
                src="/images/Geschäftsführung.jpeg" 
                alt="Die Geschäftsführung: Sven Börner, Udo Gerschler, Markus Schrambke" 
                className="w-full h-auto object-cover"
              />
              <div className="bg-stone-50 p-4 text-center text-stone-600 font-medium text-sm">
                ZTM Sven Börner (GF) / ZTM Udo Gerschler (ehem. GF) / ZTM Markus Schrambke (GF)
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default About
