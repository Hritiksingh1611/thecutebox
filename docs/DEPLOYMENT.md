# thecutebox.in — Deployment Guide

## Tech Stack

| Layer | Tool | Version |
|---|---|---|
| Framework | React + Vite | React 19, Vite 6 |
| Styling | Tailwind CSS | v3 |
| Routing | React Router | v7 (HashRouter) |
| State | Zustand | v5 |
| Animation | Framer Motion | v12 |
| Icons | Lucide React | latest |
| Hosting | GitHub Pages | via Actions |

---

## Local Development

```bash
npm install
npm run dev
# → http://localhost:5173/thecutebox/
```

## Production Build

```bash
npm run build
# → dist/ folder
```

## GitHub Pages Deployment

### Auto-deploy via GitHub Actions
Pushes to `main` branch automatically trigger the workflow at `.github/workflows/deploy.yml`.

### Manual first setup
1. Push repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial thecutebox.in"
   git remote add origin https://github.com/YOUR_USERNAME/thecutebox.git
   git push -u origin main
   ```

2. In GitHub repo settings:
   - Go to **Settings → Pages**
   - Set **Source** to **GitHub Actions**

3. The workflow will:
   - Install deps with `npm ci`
   - Build with `npm run build`
   - Add `.nojekyll` to prevent Jekyll processing
   - Deploy `./dist` to GitHub Pages

### Live URL
```
https://YOUR_USERNAME.github.io/thecutebox/
```

---

## Vite Config Notes

```js
// vite.config.js
base: '/thecutebox/',  // must match repo name exactly
```

HashRouter is used instead of BrowserRouter because GitHub Pages doesn't support server-side redirects for SPA fallback.

---

## Environment

No environment variables required for static deployment.
For future backend integration, add a `.env` file:
```
VITE_API_URL=https://api.thecutebox.in
```

