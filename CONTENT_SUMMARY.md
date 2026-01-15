# Website Content & SEO Struktur

Dieses Dokument enthält eine strukturierte Übersicht der erstellten Inhalte und SEO-Maßnahmen für die Praxis-Website.

## 1. SEO Keywords (8-12 Phrasen)

Diese Keywords eignen sich für die Verwendung in Texten, Blogbeiträgen und Meta-Tags.

1.  **Ganzheitliche Physiotherapie**
2.  **Heilpraktikerin Physiotherapie**
3.  **Naturheilkunde und Physiotherapie**
4.  **Manuelle Therapie Schmerzen**
5.  **Krankengymnastik ganzheitlich**
6.  **Stressabbau Entspannungsverfahren**
7.  **Pflanzenheilkunde Beratung**
8.  **Physiotherapie Privatpraxis**
9.  **Faszienbehandlung Mobilisation**
10. **Gesundheit Körper Geist**
11. **Rückenschmerzen Behandlung**
12. **Individuelle Schmerztherapie**

---

## 2. Seiteninhalte & Struktur

### Home (Startseite)
*   **H1:** Ganzheitliche Wege zu mehr Wohlbefinden & Beweglichkeit
*   **Intro:** Verbindung von fundierter Physiotherapie und sanften naturheilkundlichen Impulsen. Empathische Begleitung für Körper & Geist.
*   **USPs (Bulletpoints):**
    *   Individuelle Therapiekonzepte
    *   Verbindung Schulmedizin & Naturheilkunde
    *   Zeit & Ruhe
*   **CTA:** Termin anfragen / Leistungen entdecken

### Über mich
*   **H1:** Nicole Feiereis – Ihre Begleiterin für ganzheitliche Gesundheit
*   **Philosophie:** Gesundheit ist mehr als die Abwesenheit von Symptomen. Ressourcenorientierter Ansatz.
*   **Qualifikationen:** Staatlich anerkannte Physiotherapeutin, Heilpraktikerin, Fortbildungen in Manueller Therapie, Pflanzenheilkunde, etc.

### Leistungen
*   **Bereich 1: Physiotherapie**
    *   Manuelle Therapie (Gezielte Mobilisation)
    *   Krankengymnastik (Aktive Übungen)
    *   Faszienarbeit (Bindegewebe lösen)
    *   Atemtherapie (Physiologische Atemmuster)
    *   Klassische Massage (Lockerung)
*   **Bereich 2: Naturheilkunde**
    *   Pflanzenheilkunde (Phytotherapie)
    *   Ausleitungsverfahren (Stoffwechselanregung)
    *   Entspannungsverfahren (Stressreduktion)
    *   Ordnungstherapie (Lebensstil-Balance)
*   **Wichtig:** Alle Beschreibungen sind rechtssicher formuliert ("kann unterstützen", "kann dazu beitragen").

### Praxis
*   **H1:** Ein Raum für Ruhe und Konzentration
*   **Atmosphäre:** Hell, ruhig, diskret. Bestellpraxis ohne Wartezeiten.
*   **Standort:** Zentrale Lage, gut erreichbar (ÖPNV/Parken), barrierefreier Zugang.

### Preise
*   **H1:** Honorare & Kostenerstattung
*   **Preise (Beispiele):**
    *   Erstgespräch (ca. 60 Min): ab 90 €
    *   Folgetermin (ca. 45 Min): ab 75 €
    *   Kurztermin (ca. 30 Min): ab 55 €
*   **Erstattung:** Hinweis auf Privatliquidation und mögliche Erstattung durch private Kassen/Zusatzversicherungen. Keine Übernahme durch gesetzliche Kassen (in der Regel).

### FAQ
*   Fragen zu: Ärztlicher Verordnung, Kostenübernahme, Mitbringen zum Termin, Dauer, Terminabsage, Hausbesuche, Prävention.

### Kontakt
*   **H1:** Ich freue mich auf Sie
*   **Inhalt:** Einladung zur Kontaktaufnahme via Formular oder Telefon. Hinweis auf Terminvergabe nach Vereinbarung. Datenschutzhinweis.

---

## 3. Technische Implementierung

Die Texte wurden direkt in die React-Komponenten (`src/pages/*.tsx`) implementiert.
*   **SEO-Komponente:** Jede Seite nutzt die `<Seo />` Komponente mit individuellen `title` und `description` Tags.
*   **Struktur:** Verwendung von semantischen HTML-Tags (Section, H1-H3, Ul/Li) für gute Lesbarkeit und Accessibility.
