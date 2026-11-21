# Baydream Books

Bionic Lettering editions of public domain classics, published by Baydream Books.

**Live site:** [baydreambooks.com](https://baydreambooks.com) (coming soon)

---

## How the site works

- One home page with search, Shop by grade (K-2, 3-5, 6-8, 9-12) and an A-Z browse
- One book entry page per row of the Baydream production Google Sheet
- Books are sold on Amazon; each book page links to the paperback and hardback listings
- Reading themes: Light, Dark and Dyslexic, plus a separate Bionic Lettering toggle

---

## Repo layout

```
src/            site source (copied to dist/ by the build)
  index.html    home page
  404.html      not-found page
  _headers      Cloudflare cache rules
  _redirects    Cloudflare routing rules
  robots.txt
  sitemap.xml
  fonts/        self-hosted Fraunces, Inter, Atkinson Hyperlegible (OFL 1.1)
  covers/       cover art, named TitleAuthor-CardImage.png
scripts/
  build.mjs     builds dist/ from src/ (sheet-to-pages step comes later)
wrangler.toml   Cloudflare Workers config (serves dist/)
```

---

## Stack

- Static HTML, CSS, vanilla JS, no frameworks
- Self-hosted fonts, no Google Fonts
- Built and deployed by Cloudflare Workers Builds on every push to `main`

## Local commands

```
npm install
npm run build     # writes dist/
npm run dev       # build + local preview
```
