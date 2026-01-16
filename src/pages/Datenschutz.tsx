import Section from '../components/UI/Section'

const Datenschutz = () => {
  return (
    <div className="pt-20">
      <Section 
        title="Datenschutzerklärung" 
        headingLevel={1}
        className="pb-10"
      >
        <div className="space-y-12 max-w-4xl">
          {/* Allgemeine Hinweise */}
          <div>
            <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-semibold text-primary-800 mb-2">Allgemeine Hinweise</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
            <h3 className="text-lg font-semibold text-primary-800 mb-2">Datenerfassung auf dieser Website</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="text-primary-700 leading-relaxed mb-4">
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br />
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
          </div>

          {/* Hosting */}
          <div>
            <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">2. Hosting</h2>
            <p className="text-primary-700 leading-relaxed mb-4">
              Wir hosten die Inhalte unserer Website bei einem externen Anbieter.
            </p>
          </div>

          {/* Allgemeine Hinweise und Pflichtinformationen */}
          <div>
            <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-semibold text-primary-800 mb-2">Datenschutz</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <h3 className="text-lg font-semibold text-primary-800 mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              B&S Zahntechnik Frankenberg GmbH<br />
              Gewerbering 17<br />
              09669 Frankenberg<br /><br />
              Telefon: 037206 / 75542<br />
              E-Mail: info@zahnhandel.de
            </p>
            <h3 className="text-lg font-semibold text-primary-800 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
          </div>

          {/* Datenerfassung auf dieser Website */}
          <div>
            <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">4. Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-semibold text-primary-800 mb-2">Cookies</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
              Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
            <h3 className="text-lg font-semibold text-primary-800 mb-2">Kontaktformular</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          
          {/* Plugins und Tools */}
          <div>
            <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">5. Plugins und Tools</h2>
            <h3 className="text-lg font-semibold text-primary-800 mb-2">Google Web Fonts (lokales Hosting)</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Datenschutz
