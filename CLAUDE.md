# Stepf und Stocker — Project Context

## What this is
Static website for the cooking project "Stepf und Stocker". Stepf und Stocker cook at guests' homes using ingredients the guests provide, creating a multi-course menu. The project is a statement against food waste.

## Domain & Hosting
- Domain: stepfundstocker.ch
- Hosted on GitHub Pages: matsthespatz/ste-und-sto
- Deployed from `main` branch root

## Design decisions
- Language: German
- Style: Clean & minimal
- Colors: off-white background (#FAFAF8), near-black text (#1A1A1A), sage green accent (#6B8F71)
- Fonts: Playfair Display (headings, via Google Fonts) + system sans-serif (body)
- Logo (`logo.svg`) uses the font "Tsukushi A Round Gothic"
- Single page, 5 sections: Hero → Konzept → Über uns → Impressionen → Kontakt

## Impressionen grid layout
Images are arranged in a CSS grid. Each image's span:
| Image                | Cols | Rows |
|----------------------|------|------|
| `zutaten.jpg`        | 2    | 2    |
| `schnetzeln.jpg`     | 1    | 1    |
| `teller_1.jpg`       | 1    | 1    |
| `teller_2.jpg`       | 1    | 1    |
| `anrichten.jpg`      | 1    | 2    |
| `tafel.jpg`          | 1    | 2    |
| `ueberlegen.jpg`     | 1    | 2    |
| `gang_mit_besteck.jpg` | 1  | 1    |
| `auftischen.jpg`     | 1    | 1    |

## Contact
- Email shown as plain text (no mailto link)
- Contact email: info@stepfundstocker.ch

## Owner preferences
- Author does not want to write or review code — all design/implementation decisions are Claude's
- No frameworks, no build pipeline — pure HTML + CSS + vanilla JS only
