# Änderungsprotokoll

Alle nennenswerten Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

## [0.1.0] - 2026-02-04

### ✨ Hinzugefügt

- Erstveröffentlichung mit Verbesserungen am Layout und einem responsiven Karten-Grid.
- Footer mit Versionsanzeige wurde ergänzt.
- Changelog-Seite im Frontend hinzugefügt und über einen Link im Footer erreichbar.

### 🔄 Geändert

- Struktur des Restaurant-Abschnitts angepasst: Titel bleibt im Haupt-Container, Karten liegen in einem vollbreiten Bereich.
- Kartenlayout auf ein responsives Grid umgestellt und Abstände optimiert; auf großen Viewports werden drei gleichmäßige Spalten dargestellt.

---

## [Unreleased]

- Kleinere Verbesserungen und Bugfixes

---

## [0.1.1] - 2026-02-04

### ✨ Hinzugefügt

- Kleine UI-Optimierungen und Performance-Verbesserungen.

### 🐛 Behoben

- Kleinere Fehlerkorrekturen im Layout und bei der Darstellung von Restaurant-Karten.

---

## [0.2.0] - 2026-02-06

### ✨ Hinzugefügt

- Globales Error-Handling im Routing-System implementiert
- ErrorPage-Komponente für benutzerfreundliche Fehlerdarstellung
- Unterstützung für Restaurant-Detail-Seiten (`/restaurants/:id`)

### 🔄 Geändert

- Router-Struktur erweitert mit `errorElement` für zentrale Fehlerbehandlung
- Routing-Konfiguration optimiert mit Kind-Routen-Definition

### 🐛 Behoben

- ErrorPage gibt nun korrekt React-Elemente zurück statt `void`
