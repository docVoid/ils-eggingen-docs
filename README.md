# ILS Eggingen – Dokumentation

Benutzerhandbuch für die [Integrierte Leitstelle Eggingen](https://ils.ulm-eggingen.de) – für alle, die das System **benutzen**: Einsatzkräfte, Disponentinnen und Disponenten sowie Administratoren der angeschlossenen Feuerwehren.

**Es geht hier nicht um Betrieb, Server oder Docker** – das ist bewusst kein Teil dieser Doku. Stattdessen: Zugang beantragen, Einsätze erfassen und alarmieren, Fahrzeuge verwalten, Berichte schreiben und mehr – Schritt für Schritt, mit Screenshots.

🔗 **Live:** https://docvoid.github.io/ils-eggingen-docs/ (perspektivisch auch unter `ils.ulm-eggingen.de/doku`)

## Struktur

Reines, statisches HTML/CSS/JS ohne Build-Schritt oder Abhängigkeiten – bewusst unabhängig von der eigentlichen Leitstellen-Anwendung und ihrem Docker-Betrieb, damit die Doku jederzeit erreichbar ist, auch wenn an der Anwendung selbst gearbeitet wird.

```
index.html              Startseite
zugang.html              Zugang bekommen
erste-schritte.html      Anmelden & Monitore
einsatz-erfassen.html    Einsatz erfassen & alarmieren
einsatz-bearbeiten.html  Bericht & Einsatz abschließen
fahrzeuge.html           Fahrzeuge & FMS-Status
alarmmonitor.html        Alarmmonitor
dashboard.html           Dashboard
verwaltung.html          Verwaltung (Admin)
rollen.html               Rollen & Rechte
faq.html                  Häufige Fragen
assets/                  CSS, JS, Screenshots
```

## Lokal ansehen

Kein Build nötig – einfach einen beliebigen statischen Webserver im Projektordner starten, z. B.:

```bash
python -m http.server 8080
```

und `http://localhost:8080` öffnen.

## Bearbeiten

Jede Seite ist eigenständiges HTML (Kopf-/Seitenleiste dupliziert sich bewusst pro Seite, damit die Seiten auch ohne JavaScript vollständig funktionieren). Gemeinsames Styling liegt in `assets/css/style.css`, Theme-Umschalter & mobiles Menü in `assets/js/site.js`.

## Zugang zur Leitstelle

Zugangsdaten für die eigentliche Anwendung gibt es **nicht** hier, sondern nur auf Anfrage bei **system@ils.ulm-eggingen.de** – siehe [Zugang bekommen](https://docvoid.github.io/ils-eggingen-docs/zugang.html).
