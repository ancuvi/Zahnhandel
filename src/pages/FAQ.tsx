import Section from '../components/UI/Section'
import Seo from '../components/SEO/Seo'

const faqs = [
  {
    question: 'Benötige ich eine ärztliche Verordnung?',
    answer:
      'Für die physiotherapeutische Behandlung auf Rezept benötigen Sie eine Verordnung von Ihrem Arzt. Als Heilpraktikerin kann ich Sie jedoch auch ohne ärztliches Rezept behandeln (Direktzugang). Wir besprechen gerne vorab, welcher Weg für Sie der richtige ist.',
  },
  {
    question: 'Wer übernimmt die Kosten?',
    answer:
      'Meine Leistungen rechne ich als Privatleistung ab. Private Krankenversicherungen und Zusatzversicherungen übernehmen die Kosten oft anteilig oder vollständig, sofern Heilpraktikerleistungen oder physiotherapeutische Leistungen in Ihrem Tarif enthalten sind. Gesetzliche Kassen übernehmen die Kosten in der Regel nicht.',
  },
  {
    question: 'Was sollte ich zum ersten Termin mitbringen?',
    answer:
      'Bitte bringen Sie vorhandene Befunde (Röntgenbilder, Arztbriefe), bequeme Kleidung und ein großes Handtuch mit. Falls Sie ein Rezept haben, denken Sie bitte auch an dieses.',
  },
  {
    question: 'Wie lange dauert eine Behandlung?',
    answer:
      'Der Ersttermin inkl. Anamnese und Untersuchung dauert in der Regel ca. 60 Minuten. Folgetermine liegen meist bei 45 bis 60 Minuten, je nach Vereinbarung und Therapieplan.',
  },
  {
    question: 'Was passiert, wenn ich einen Termin nicht wahrnehmen kann?',
    answer:
      'Falls Sie verhindert sind, geben Sie mir bitte so früh wie möglich Bescheid. Termine, die bis 24 Stunden vorher abgesagt werden, sind kostenfrei. Bei kurzfristigeren Absagen muss ich das Honorar leider in Rechnung stellen, da ich die Zeit fest für Sie reserviert habe.',
  },
  {
    question: 'Bieten Sie auch Hausbesuche an?',
    answer:
      'In bestimmten Fällen und im nahen Umkreis biete ich auch Hausbesuche an, wenn es Ihnen gesundheitlich nicht möglich ist, in die Praxis zu kommen. Sprechen Sie mich hierzu gerne an.',
  },
  {
    question: 'Kann ich auch präventiv zu Ihnen kommen?',
    answer:
      'Selbstverständlich. Prävention ist ein wichtiger Baustein meiner Arbeit. Wir können gemeinsam schauen, wie Sie Ihre Beweglichkeit erhalten und Stress abbauen können, bevor Beschwerden entstehen.',
  },
]

const FAQ = () => {
  return (
    <div>
      <Seo
        title="Häufige Fragen (FAQ) | Praxis Nicole Feiereis"
        description="Antworten auf Ihre Fragen zu Terminvergabe, Kosten, Ablauf und Verordnungen. Informieren Sie sich hier."
      />
      <Section 
        eyebrow="FAQ" 
        title="Häufige Fragen"
        intro="Hier finden Sie Antworten auf die Fragen, die mir am häufigsten gestellt werden. Sollte Ihre Frage nicht dabei sein, schreiben Sie mir gerne."
      >
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm open:bg-stone-50 transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold text-slate-900">
                <span>{item.question}</span>
                <span className="ml-4 transition-transform group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 animate-fade-in">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default FAQ
