# Philip Voultsos — Academic Profile

A personal academic profile and portfolio built with Astro. The site is designed to introduce Philip's academic interests, selected Model UN leadership experience, current studies, and CV. It is not structured as a blog.

## Getting started

This project uses Astro and is configured for static output with the Cloudflare adapter.

```sh
npm install
npm run dev
```

Astro's local development server will print the address to open in your browser, usually `http://localhost:4321`.

## Project structure

- `src/pages/index.astro` — the homepage and profile overview
- `src/pages/about.astro` — academic background and interests
- `src/pages/404.astro` — branded not-found page
- `src/components/Header.astro` — site navigation
- `src/components/Footer.astro` — contact links and footer
- `src/components/BaseHead.astro` — page metadata, fonts, and global stylesheet import
- `src/styles/global.css` — shared design system, layout, and responsive styles
- `public/profile.png` — portrait used on the homepage
- `public/cv.pdf` — downloadable academic CV

The original demo blog posts, sample article layout, and sample RSS feed have been removed so the project no longer ships with placeholder blog content. The MDX package remains available should you later want to build a curated research or project showcase.

## Before deploying

1. Confirm `site` in `astro.config.mjs` matches the final public domain. It is currently set to `https://voultsos.com` based on the email domain already used on the site.
2. Check that `public/cv.pdf`, `public/profile.png`, the email address, and LinkedIn profile are current.
3. Run `npm run build` to verify the production site.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Deploy using Wrangler / Cloudflare Workers |
