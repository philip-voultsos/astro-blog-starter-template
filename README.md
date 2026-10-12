# Philip Voultsos — Academic Profile

An Astro site for academic interests, current research, selected Model UN work, and a downloadable CV.

## Run locally

```sh
npm install
npm run dev
```

Astro prints the local address after the development server starts.

## Project structure

- `src/content/profile.ts` — profile copy, research details, studies, and appointments
- `src/pages/index.astro` — overview and selected work
- `src/pages/about.astro` — academic background
- `src/pages/cv.astro` — embedded CV viewer and download action
- `src/pages/404.astro` — not-found page
- `src/components/` — shared header, footer, and metadata
- `src/styles/global.css` — typography, layout, responsive rules, and reduced-motion styles
- `src/scripts/motion.ts` — GSAP button response and scroll reveals
- `src/scripts/liquid-nav.ts` — responsive floating navigation indicator
- `public/cv.pdf` — academic CV

The site builds to static output and uses the Cloudflare adapter. Profile text is kept in `src/content/profile.ts` so it can be reviewed and edited without changing the page structure.

## Before deployment

Confirm the canonical URL in `astro.config.mjs` and check that the CV, email address, and LinkedIn profile are current.

```sh
npm run build
```

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run deploy` | Deploy with Wrangler / Cloudflare Workers |
