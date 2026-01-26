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
          {/* 1. Allgemeine Hinweise */}
          <div>
            <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-semibold text-primary-800 mb-2">Allgemeine Hinweise</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
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

          {/* 2. Hosting */}
          <div>
            <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">2. Hosting</h2>
            <p className="text-primary-700 leading-relaxed mb-4">
              Wir hosten die Inhalte unserer Website bei einem externen Anbieter. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="text-primary-700 leading-relaxed mb-4">
              Das Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>

          {/* 3. Allgemeine Hinweise */}
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

            <h3 className="text-lg font-semibold text-primary-800 mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
               Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>

            <h3 className="text-lg font-semibold text-primary-800 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            {/* WICHTIG: Beschwerderecht und Auskunftsrecht */}
            <h3 className="text-lg font-semibold text-primary-800 mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
               Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
            </p>

            <h3 className="text-lg font-semibold text-primary-800 mb-2">Recht auf Auskunft, Löschung und Berichtigung</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
               Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>
          </div>

          {/* 4. Datenerfassung */}
          <div>
            <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">4. Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-semibold text-primary-800 mb-2">Cookies</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
              Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
            <h3 className="text-lg font-semibold text-primary-800 mb-2">Kontaktformular</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
          </div>
          
          {/* 5. Plugins und Tools */}
          <div>
            <h2 className="text-xl font-bold font-serif text-primary-900 mb-4">5. Plugins und Tools</h2>
            
            <h3 className="text-lg font-semibold text-primary-800 mb-2">Google Web Fonts (lokales Hosting)</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
            </p>

            {/* WICHTIG: YouTube */}
            <h3 className="text-lg font-semibold text-primary-800 mb-2">YouTube mit erweitertem Datenschutz</h3>
            <p className="text-primary-700 leading-relaxed mb-4">
               Diese Website bindet Videos der Website YouTube ein. Betreiber der Seiten ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="text-primary-700 leading-relaxed mb-4">
               Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus bewirkt laut YouTube, dass YouTube keine Informationen über die Besucher auf dieser Website speichert, bevor diese sich das Video ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch den erweiterten Datenschutzmodus hingegen nicht zwingend ausgeschlossen. So stellt YouTube – unabhängig davon, ob Sie sich ein Video ansehen – eine Verbindung zum Google DoubleClick-Netzwerk her.
            </p>
            <p className="text-primary-700 leading-relaxed mb-4">
               Sobald Sie ein YouTube-Video auf dieser Website starten, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Datenschutz