# Technisches Datenblatt: Website-Infrastruktur & Datenverarbeitung

**Projekt:** zahnhandel.de (ZAHNTECHNIK Frankenberg GmbH)  
**Stand:** März 2026

## 1. Hosting & Infrastruktur

Die Website wird über eine moderne Cloud-Infrastruktur bereitgestellt, die auf hohe Sicherheit und Performance ausgelegt ist.

*   **Anbieter:** Netlify, Inc.
*   **Technologie:** Globales Content Delivery Network (CDN) mit Serverless Functions.
*   **Serverstandort:** Die Bereitstellung erfolgt primär über Rechenzentren in der Europäischen Union (z. B. Frankfurt am Main), um geringe Latenzen und die Einhaltung europäischer Datenschutzstandards zu gewährleisten.
*   **Verschlüsselung:** Alle Verbindungen zur Website sind über **HTTPS (SSL/TLS)** verschlüsselt. Es wird ein zertifiziertes SSL-Zertifikat verwendet, das eine sichere Datenübertragung zwischen Browser und Server garantiert.

## 2. E-Mail-Infrastruktur (Resend)

Der Versand von E-Mails (z. B. aus dem Kontaktformular) erfolgt über eine professionelle Schnittstelle (API), die höhere Sicherheitsstandards als herkömmlicher SMTP-Versand bietet.

*   **Schnittstelle:** Resend (Resend Labs Inc.).
*   **Datenverarbeitung in der EU:** Die Verarbeitung erfolgt in der Region **EU-West-1 (Irland)**. Personenbezogene Daten verbleiben somit innerhalb des Europäischen Wirtschaftsraums (EWR).
*   **DNS-Sicherheitsmerkmale:** Zur Sicherstellung der Authentizität und zum Schutz vor Identitätsdiebstahl (Spoofing) sind moderne Sicherheitsmechanismen implementiert:
    *   **SPF (Sender Policy Framework):** Autorisiert Resend als legitimen Versender.
    *   **DKIM (DomainKeys Identified Mail):** Signiert E-Mails digital zur Verifizierung der Integrität.
    *   **DMARC (Domain-based Message Authentication, Reporting, and Conformance):** Gibt Anweisungen zum Umgang mit nicht authentifizierten E-Mails.

## 3. Kontaktformular & Datensicherheit

Das Kontaktformular wurde mit besonderem Fokus auf Datensicherheit und Spam-Prävention entwickelt.

*   **Serverless Verarbeitungslogik:** Die Daten werden von der Website an eine verschlüsselte Netlify Function übergeben. Es erfolgt kein Zwischenschritt über unsichere Standard-Webserver-Skripte.
*   **Input-Validierung (Zod):** Jede Eingabe wird serverseitig streng auf Korrektheit und Plausibilität geprüft (z. B. E-Mail-Syntax, Zeichenlängen), um fehlerhafte oder maliziöse Daten auszuschließen.
*   **XSS-Schutz (Sanitization):** Um Cross-Site Scripting (XSS) zu verhindern, werden alle Nachrichteninhalte mittels `sanitize-html` bereinigt. Potenziell schädliche HTML-Tags oder Skripte werden vor der Weiterleitung konsequent entfernt.
*   **Honeypot-Verfahren:** Ein technischer Spam-Schutz (unsichtbares Feld) blockiert automatisierte Bot-Angriffe effektiv, ohne die Benutzerfreundlichkeit durch Captchas (wie ReCaptcha) zu beeinträchtigen.

## 4. Frontend & Drittanbieter

Beim Design der Benutzeroberfläche wurde konsequent auf Datensparsamkeit geachtet.

*   **Local Fonts:** Schriftarten (Google Fonts) werden nicht von externen Google-Servern geladen, sondern sind **lokal auf dem eigenen Server** eingebunden. Dadurch findet beim Seitenaufruf kein Datenaustausch mit Google CDN statt.
*   **Videos (YouTube Privacy):** YouTube-Einbindungen erfolgen im **erweiterten Datenschutzmodus** (`youtube-nocookie.com`). Cookies werden erst gesetzt, wenn der Nutzer das Video aktiv startet.
*   **Kein Tracking:** Die Website verzichtet vollständig auf Analyse-Tools wie Google Analytics, Facebook-Pixel oder ähnliche Tracking-Verfahren.

## 5. Datenfluss & Speicherung

*   **Flüchtige Verarbeitung:** Personenbezogene Projektdaten (Name, E-Mail, Nachricht) werden auf dem Webserver **nicht dauerhaft gespeichert**.
*   **Zweckbindung:** Die Daten dienen ausschließlich der Zustellung der Anfrage an den Betreiber (`info@zahnhandel.de`). Nach der erfolgreichen Übergabe an den E-Mail-Dienst Resend werden die Daten aus dem Arbeitsspeicher der Serverless Function gelöscht.

---
*Dieses Dokument dient zur Vorlage bei einem Datenschutzbeauftragten oder Rechtsanwalt als Nachweis über die implementierten technischen und organisatorischen Maßnahmen (TOM).*
