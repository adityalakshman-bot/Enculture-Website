# Enculture Website

The public marketing site for Enculture (enculture.ai) — a culture intelligence platform. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Tech stack

- **Framework:** Next.js 16 (App Router), forced to the **webpack** bundler (not Turbopack — see note below)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme` in `src/app/globals.css` — there is no `tailwind.config.ts`)
- **Fonts:** Outfit (display) + Spline Sans (body), loaded via `next/font/google`
- **Icons:** Lucide React only — no emoji
- **Animation:** Framer Motion, used for scroll reveals and the FAQ accordion; respects `prefers-reduced-motion`
- **Sitemap:** `next-sitemap`, generated on every build via the `postbuild` script
- **Deployment:** Vercel (`vercel.json`)

### Why webpack instead of Turbopack

This repo lives on a deeply nested OneDrive-synced path on Windows. Turbopack's dev/build chunk writer hits Windows' max path length on a path this long and crashes with `TurbopackInternalError`. Both `npm run dev` and `npm run build` pass `--webpack` to work around it. If the project is ever moved to a shorter path, Turbopack can be re-enabled by dropping that flag — there's nothing else tying the codebase to webpack specifically.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.example`. All are optional in development (sensible defaults are used as fallback) but should be set in production:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID, loaded in the root layout |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used by `next-sitemap` |
| `NEXT_PUBLIC_CALENDLY_URL` | Embedded on `/demo` |

## Project structure

```
src/
  app/                  App Router pages — one folder per route, matching the site IA
  components/           Shared component library (Nav, Footer, Eyebrow, Button, AccentCard,
                         StatBox, QuoteCard, FAQ, CTASection, MidPageCTA, FromToRow,
                         NightSection, Callout, RevealOnScroll, plus page-support helpers)
public/                 Static assets, including the real Enculture logo and hero background
                         SVGs pulled from the live site (see "Brand assets" below)
```

Most visual patterns (cards, stat boxes, quote cards, FAQ, loop steps, etc.) are implemented as
plain CSS classes in `globals.css` rather than ad hoc Tailwind utility soup — this keeps every
page's JSX short and guarantees visual consistency across all ~30 pages. Use the existing classes
(`.accent-card`, `.stat-box`, `.quote-card`, `.timeline-card`, `.vis-card`, etc.) before reaching
for one-off styles.

## Brand assets

`public/enculture-logo.svg` and `public/bg-hero.svg` / `public/bg-blob-*.svg` were pulled directly
from the current live site (enculture.ai, Webflow-hosted) rather than recreated, so the rebuild
matches the real brand mark and hero background treatment. If the brand refreshes these assets,
replace the files in `public/` directly — nothing else needs to change.

## Known placeholders — fix before launch

A few pieces of content are intentionally left as placeholders because they require real data or
decisions this build didn't have access to. Search the codebase for these before going live:

- **`/pricing`** — tier cards have no real price ranges (`"Indicative range shared during your
  scoping call"`). Fill in actual numbers once approved.
- **`/resources/case-studies`** — client cards show industry/use-case only; no specific outcome
  stats are attributed to named clients (Linde, PGP Glass, etc.) since none were verified. Replace
  "Full case study coming soon" with real numbers as case studies are written.
- **`/culture-dialogue`** — only the Delhi edition has brief-confirmed themes and a date. Mumbai,
  Bangalore, Hyderabad, and Chennai show generic "Recap available on request" placeholders —
  supply real themes/dates before publishing.
- **`/platform/perform`** — the email capture form (`EmailCaptureForm` / `GuideCard`) only shows a
  local confirmation message; it does not send anywhere yet. Wire it to a real CRM/ESP endpoint.
- **`/demo`** — embeds `NEXT_PUBLIC_CALENDLY_URL` directly in an iframe. Confirm this is the
  desired embed approach (vs. Calendly's official widget script) before launch.
- **`/about/founders-note`** — drafted in Samir Parikh's voice per the brief's instructions. This
  is a draft for his review/edit, not a verbatim quote.

## `/resources` and the CMS

`/resources`, `/resources/case-studies`, and `/resources/guides` are currently static. The decision
(see project discussion) is to source this section from the **existing Webflow CMS** via its Data
API rather than adopting a new headless CMS — Enculture's marketing team already publishes there.
That integration isn't built yet; it needs a Webflow API token and the relevant collection IDs.
The rest of the site (~28 bespoke conversion pages) is intentionally code-driven and should stay
that way — it doesn't belong in a CMS.

## SEO

- Every page exports `metadata` (title + description) per the build brief.
- `Organization` JSON-LD is in the root layout; `FAQPage` JSON-LD (`FAQSchema` component) is added
  on every page with an FAQ section.
- `next-sitemap` runs automatically after `npm run build` (the `postbuild` script), generating
  `sitemap.xml` and `robots.txt` in `public/` using the priority tiers defined in
  `next-sitemap.config.js`. `/demo` and `/culture-health-check` are excluded from the sitemap.

## Deployment

Deploys on Vercel. `vercel.json` sets security headers and one permanent redirect
(`/white-papers` → `/resources/guides`). Note: the brief's original `vercel.json` snippet included
two self-redirects (`/solutions` → `/solutions`, `/features` → `/features`) that would have caused
redirect loops — these were dropped as clearly unintended.
