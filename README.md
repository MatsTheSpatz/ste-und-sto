# Stepf und Stocker

Website for the cooking project "Stepf und Stocker" — we cook at your home using ingredients you bring. A multi-course menu made from what you have. A project against food waste.

Live at **[stepfundstocker.ch](https://stepfundstocker.ch)**

---

## Tech stack

Pure HTML + CSS + vanilla JS. No framework, no build step. GitHub Pages serves it directly from the `main` branch root.

---

## Swapping in real content

### Logo
Replace `assets/logo.svg` with your real logo file (SVG or PNG). If using PNG, update the `<img>` src in `index.html`.

### Photos
Drop your event photos (JPG or PNG) into `assets/images/`. Then update the `<img>` tags in the gallery section of `index.html`.

### Text & email
Edit the placeholder text directly in `index.html`. Search for `<!-- PLACEHOLDER` comments to find all spots that need real content.

---

## Deployment

### GitHub Pages setup
1. Go to **Settings → Pages** in the GitHub repo
2. Source: **Deploy from a branch**
3. Branch: `main` / `/ (root)`
4. Save — the site will be live at `https://matsthespatz.github.io/ste-und-sto`

### Custom domain DNS (stepfundstocker.ch)
Add these records at your domain registrar (e.g. Infomaniak):

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | matsthespatz.github.io |

After DNS propagates (up to 24h), enable **Enforce HTTPS** in GitHub Pages settings.

---

## Development

Open `index.html` directly in a browser — no server needed.
