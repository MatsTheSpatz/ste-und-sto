# Stepf und Stocker

Website for the cooking project "Stepf und Stocker".

Live at **[stepfundstocker.ch](https://stepfundstocker.ch)**

---

## Tech stack

Pure HTML + CSS + vanilla JS. No framework, no build step. GitHub Pages serves it directly from the `main` branch root.

---

## Development

Open `index.html` directly in a browser — no server needed.

---

## Deployment

### GitHub Pages setup
1. Go to **Settings → Pages** in the GitHub repo
2. Source: **Deploy from a branch**
3. Branch: `main` / `/ (root)`
4. Save — the site will be live at `https://matsthespatz.github.io/ste-und-sto`

### Custom domain DNS (stepfundstocker.ch)
Domain registrar is **Infomaniak**.
Added these records to domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | matsthespatz.github.io |

After DNS propagates (up to 24h), enable **Enforce HTTPS** in GitHub Pages settings.
