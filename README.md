# Website Zahntechnik Frankenberg

Moderne Unternehmenswebsite für die **B&S Zahntechnik Frankenberg GmbH**.
Entwickelt mit Vite, React, TypeScript und Tailwind CSS.

## 🛠 Tech Stack

- **Framework:** [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- **Sprache:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router Dom](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **E-Mail-Service:** [Resend](https://resend.com/)
- **Bot-Schutz:** Honeypot & Netlify Functions

## 🚀 Setup & Entwicklung

1.  **Installation:**
    ```bash
    npm install
    ```

2.  **Entwicklungsserver starten:**
    ```bash
    npm run dev
    ```
    Die Seite ist dann unter `http://localhost:5173` erreichbar.

3.  **Production Build:**
    ```bash
    npm run build
    ```
    Erstellt die optimierten Dateien im `dist/` Ordner.

## 📂 Projektstruktur

```
src/
├── assets/
│   └── fonts/      # Lokale Schriftarten (Figtree) - DSGVO-konform
├── components/
│   ├── Forms/      # Kontaktformular (ContactForm.tsx)
│   ├── Layout/     # MainLayout (Header, Footer, Navigation)
│   ├── Navigation/ # Navbar & MobileNav
│   ├── SEO/        # Seo-Komponente für Meta-Tags
│   └── UI/         # Wiederverwendbare UI-Elemente (Button, Section, Card)
├── pages/          # Seiten-Komponenten (Home, About, Jobs, ...)
├── router/         # Routing-Konfiguration (index.tsx)
└── main.tsx        # Entry Point
public/
├── images/         # Statische Bilder (inkl. neue-Bilder Subfolder)
├── sitemap.xml     # Sitemap für Suchmaschinen
└── robots.txt      # Crawler-Konfiguration
```

## ✨ Features & Besonderheiten

### 1. DSGVO & Datenschutz (Compliance)
- **Lokale Schriftarten:** Die Schriftart "Figtree" wird lokal geladen (`src/assets/fonts`), um Verbindungen zu Google Servern zu vermeiden.
- **YouTube:** Videos sind über `youtube-nocookie.com` eingebunden und nutzen `loading="lazy"` für bessere Performance und Datenschutz.
- **Google Maps:** Einbindung via iFrame (Privacy-friendly Embed ohne API-Key).
- **Rechtstexte:** Impressum enthält alle Pflichtangaben für Handwerker (Zuständige Kammer, Berufsbezeichnung).

- **Meta-Daten:** Jede Seite nutzt die `<Seo />` Komponente für individuelle Titel und Descriptions.
- **Bild-Optimierung:** Alle Bilder nutzen beschreibende Alt-Tags und `loading="lazy"` für optimale Performance und Indexierung.
- **Schema.org JSON-LD:**
    - **Startseite (`Home.tsx`):** Auszeichnung als `MedicalBusiness` (Lokales Unternehmen) mit Öffnungszeiten und Geo-Koordinaten.
    - **Jobs (`Jobs.tsx`):** Automatische Generierung von `JobPosting` Daten für Google Jobs.
- **Technisches SEO:** `sitemap.xml` und `robots.txt` im `public/` Ordner vorhanden.

### 3. Kontaktformular (Resend Integration)
- Das Formular (`ContactForm.tsx`) nutzt eine **Netlify Function** (`submit-contact.ts`) als Backend.
- **E-Mail-Versand:** Erfolgt über die **Resend API**.
- **Konfiguration:** Erfordert die Umgebungsvariable `RESEND_API_KEY` im Netlify-Dashboard.
- **Sicherheit:** Serverseitige Validierung via Zod und XSS-Sanitization aller Eingaben.

## 📝 Anpassungen für Entwickler

### Inhalte ändern
- **Texte & Bilder:** Direkt in den jeweiligen Komponenten unter `src/pages/` bearbeiten.
- **Navigation:** Links werden in `src/components/Layout/MainLayout.tsx` im Array `navLinks` definiert.
- **Stellenangebote:** Neue Jobs einfach in das `jobs` Array in `src/pages/Jobs.tsx` eintragen – das JSON-LD Schema aktualisiert sich automatisch.

### Design & Farben
Die Farben sind in `tailwind.config.js` definiert:
- `primary`: Türkis/Grüntöne (Hauptfarbe)
- `secondary`: Pink/Magenta (Akzentfarbe)
- `stone`: Grautöne für Hintergründe

### Hosting
Das Projekt ist eine statische Seite (SPA) und kann problemlos auf Plattformen wie Netlify, Vercel oder einem klassischen Webserver (Apache/Nginx) gehostet werden. Der `dist/` Ordner enthält alles Notwendige.

---
*Stand: März 2026*
