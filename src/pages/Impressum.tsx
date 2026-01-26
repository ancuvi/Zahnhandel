import Section from '../components/UI/Section'

const Impressum = () => {
  return (
    <div className="pt-20">
      <Section 
        title="Impressum" 
        headingLevel={1}
        intro="Angaben gemäß § 5 TMG"
        className="pb-10"
      >
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {/* Kontaktdaten */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">Herausgeber und verantwortlich für den Inhalt</h2>
              <div className="prose prose-stone text-primary-700">
                <p>
                  <strong>B&S Zahntechnik Frankenberg GmbH</strong><br />
                  Markus Schrambke<br />
                  Gewerbering 17<br />
                  09669 Frankenberg
                </p>
                <p className="mt-4">
                  <strong>Kontakt:</strong><br />
                  Telefon: 037206 / 75542<br />
                  Fax: 037206 / 75660<br />
                  E-Mail: info@zahnhandel.de
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">Handelsregister & Steuernummern</h2>
              <div className="prose prose-stone text-primary-700">
                <p>
                  <strong>Geschäftsführer:</strong><br />
                  Sven Börner, Markus Schrambke
                </p>
                <p className="mt-4">
                  <strong>Registergericht:</strong><br />
                  Amtsgericht Chemnitz<br />
                  Registernummer: HRB 26717
                </p>
                <p className="mt-4">
                    <strong>Steuernummern:</strong><br />
                    Steuernummer: 222/106/01108<br />
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE278070939
                </p>
                 <p className="mt-4">
                    <strong>Unternehmenssitz:</strong><br />
                    Frankenberg
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">Zuständige Kammer & Berufsbezeichnung</h2>
              <div className="prose prose-stone text-primary-700">
                <p>
                  <strong>Zuständige Kammer:</strong><br />
                  Handwerkskammer Chemnitz, Limbacher Straße 195, 09116 Chemnitz
                </p>
                <p className="mt-4">
                  <strong>Berufsbezeichnung:</strong><br />
                  Zahntechnikermeister (verliehen in der Bundesrepublik Deutschland)
                </p>
                <p className="mt-4">
                   <strong>Berufsrechtliche Regelungen:</strong><br />
                   Handwerksordnung (HwO)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Haftungsausschluss */}
        <div className="mt-16 pt-16 border-t border-stone-200 space-y-8">
          <div>
            <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">Haftung für Inhalte</h2>
            <p className="text-primary-700 leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">Haftung für Links</h2>
            <p className="text-primary-700 leading-relaxed">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">Urheberrecht</h2>
            <p className="text-primary-700 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Impressum
