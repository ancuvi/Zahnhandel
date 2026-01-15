import Section from '../components/UI/Section'
import Seo from '../components/SEO/Seo'

const Prices = () => {
  return (
    <div>
      <Seo
        title="Preise & Kostenerstattung | Praxis Nicole Feiereis"
        description="Transparente Honorare für Selbstzahler. Infos zur Abrechnung über private Krankenkassen und Zusatzversicherungen."
      />
      <Section
        eyebrow="Preise"
        title="Honorare & Kostenerstattung"
        intro="Transparente Preise und klare Absprachen sind mir wichtig. Ich nehme mir Zeit für Sie – ohne Zeitdruck im Nacken."
      >
        <div className="space-y-6 text-base text-slate-700 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-6">Honorare für Selbstzahler</h2>
            <div className="space-y-4">
               <div className="flex flex-col sm:flex-row justify-between items-baseline border-b border-slate-100 pb-2">
                  <div>
                     <span className="font-semibold block">Erstgespräch & Anamnese (ca. 60 Min.)</span>
                     <span className="text-sm text-slate-500">Ausführliche Befunderhebung und erste Behandlung</span>
                  </div>
                  <span className="font-semibold text-primary-700 mt-2 sm:mt-0">ab 90 €</span>
               </div>
               <div className="flex flex-col sm:flex-row justify-between items-baseline border-b border-slate-100 pb-2">
                  <div>
                     <span className="font-semibold block">Folgebehandlung (ca. 45 Min.)</span>
                     <span className="text-sm text-slate-500">Individuelle Therapieeinheit</span>
                  </div>
                  <span className="font-semibold text-primary-700 mt-2 sm:mt-0">ab 75 €</span>
               </div>
               <div className="flex flex-col sm:flex-row justify-between items-baseline pb-2">
                  <div>
                     <span className="font-semibold block">Beratung / Kurztermin (ca. 30 Min.)</span>
                     <span className="text-sm text-slate-500">Fokussierte Behandlung oder Beratung</span>
                  </div>
                  <span className="font-semibold text-primary-700 mt-2 sm:mt-0">ab 55 €</span>
               </div>
            </div>
            <p className="mt-6 text-sm text-slate-500 italic">
               * Die genannten Preise dienen als Orientierung und können je nach therapeutischem Aufwand und angewendeten Verfahren leicht variieren.
            </p>
          </div>
          
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">Wichtige Informationen zur Kostenerstattung</h2>
            <div className="space-y-4 text-sm text-slate-700">
               <p>
                  Als Heilpraktikerin und Physiotherapeutin rechne ich meine Leistungen direkt mit Ihnen ab (Privatliquidation).
               </p>
               <h3 className="font-bold text-slate-900 pt-2">Private Krankenversicherungen & Zusatzversicherungen</h3>
               <p>
                  Viele private Kassen und Zusatzversicherungen erstatten Heilpraktikerleistungen (nach GebüH) sowie physiotherapeutische Leistungen ganz oder teilweise. Bitte erkundigen Sie sich vorab bei Ihrer Versicherung nach Ihren individuellen Tarifkonditionen. Sie erhalten von mir eine detaillierte Rechnung, die Sie einreichen können.
               </p>
               <h3 className="font-bold text-slate-900 pt-2">Gesetzliche Krankenkassen</h3>
               <p>
                  Die gesetzlichen Krankenkassen übernehmen die Kosten für Heilpraktikerleistungen in der Regel leider nicht. Einige Kassen beteiligen sich jedoch im Rahmen von Bonusprogrammen oder speziellen Satzungsleistungen an osteopathischen oder naturheilkundlichen Behandlungen. Fragen lohnt sich!
               </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Prices
