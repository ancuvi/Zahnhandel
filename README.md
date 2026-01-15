# Praxis-Website – Projektübersicht

Vite + React + TypeScript + Tailwind + React Router + (vorbereitet) Framer Motion. Ziel: moderne Website für eine Praxis (Heilpraktikerin & Physiotherapeutin).

## Setup & Commands
- Install: `npm install`
- Dev-Server: `npm run dev`
- Build: `npm run build`
- Preview Build: `npm run preview`
- Lint (Basis): `npm run lint`

## Struktur (wichtigste Ordner/Dateien)
- `src/main.tsx` – Einstieg, rendert `<App />`.
- `src/App.tsx` – bindet den Router (`RouterProvider`).
- `src/router/index.tsx` – Route-Definitionen; nutzt `MainLayout` als Shell.
- `src/components/Layout/MainLayout.tsx` – globales Layout mit Header, Desktop-/Mobile-Navigation, Footer.
- `src/components/Navigation/{Navbar,MobileNav}.tsx` – Navigation (Desktop/Mobil).
- `src/components/UI/{Button,Section,Card}.tsx` – Basis-UI-Bausteine.
- `src/components/Forms/ContactForm.tsx` – Kontaktformular (controlled, Client-Validation, TODO-Hook für API/E-Mail).
- `src/components/SEO/Seo.tsx` – setzt Title, Meta-Description, OG-Platzhalter.
- `src/pages/*.tsx` – Seiten (Home, About, Services, Praxis, Prices, FAQ, Contact, ThankYou, Datenschutz).
- `public/images/…` – statische Assets (Hero/Praxis-Bilder).
- `tailwind.config.js` / `postcss.config.js` – Tailwind/PostCSS-Konfiguration.
- `src/index.css` – Tailwind-Direktiven + Basis-Reset/Typo.

## Routing (React Router)
- Shell: `MainLayout` (Header/Footer) mit `<Outlet />`.
- Pfade: `/` (Home), `/about`, `/services`, `/praxis`, `/prices`, `/faq`, `/contact`, `/thank-you`, `/datenschutz`.

## Wichtige UX/SEO-Notizen
- SEO: `Seo`-Komponente auf Home (Title/Description + OG-Platzhalter). Weitere Seiten können bei Bedarf eigene `Seo`-Instanzen bekommen.
- Kontaktformular: Client-Validation (Pflichtfelder, E-Mail-Check), Status/Success-Meldung, klarer TODO-Kommentar für spätere API-/E-Mail-Integration.
- Navigation: `aria-label` für Mobile-Menü, semantische Elemente (`header`, `main`, `section`, `footer`, `nav`).
- Mobile: Hero-Hintergrundbild nur auf Desktop, Praxis-Bilder mit festen Mindesthöhen damit sie auch mobil sichtbar sind.

## Stil & Komponenten
- Tailwind Utilities mit ein paar Grundfarben (`primary`-ähnlich per Klassenwahl), weiche Schatten, abgerundete Karten/Buttons.
- Buttons: Varianten `primary`, `secondary`, `ghost` (Props: `as`, `variant`, `className`).
- Sections: Titel/Eyebrow/Intro optional, `headingLevel` wählbar.
- Cards: kompakte Info-Karten, optionales Icon.

## Inhalte/Platzhalter
- Texte auf Deutsch, thematisch passend für Praxis (keine Heilversprechen).
- Rechtliches: Im Footer als TODO (Impressum/Datenschutz), Seite `Datenschutz` ist als eigene Route angelegt.
- Praxis-Seite: echte Bilder (Behandlungsraum, Wartezimmer, Eingangsbereich) aus `public/images`.

## Erweiterungen (später)
- Framer Motion ist installiert, aber noch nicht genutzt (Animations-Hook für spätere Übergaben).
- Eigene Farbpalette/Typografie kann in `tailwind.config.js` erweitert werden.
- Echte OG-Bilder/SEO je Seite ergänzen; Impressum finalisieren; API-/Mailservice ans Formular hängen.

## Änderungen pushen (GitHub)
1. Status prüfen: `git status`
2. Änderungen vormerken: `git add .` (oder gezielt Dateien)
3. Commit: `git commit -m "Kurze Nachricht zur Änderung"`
4. Push auf Hauptbranch: `git push origin main` (ggf. Branchnamen anpassen)
5. Vor nächstem Push aktuell holen: `git pull --rebase origin main` (oder eigener Branch)
6. Bei Konflikten: Konflikte lösen, `git add …`, danach `git rebase --continue` oder neuer Commit, dann erneut pushen.
