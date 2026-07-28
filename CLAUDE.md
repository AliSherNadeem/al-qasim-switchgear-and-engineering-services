@AGENTS.md

# Al-Qasim Switch Gear and Engineering Services — Project Guide

## About the Project

This is the official business website for **Al-Qasim Switch Gear and Engineering Services**.

- **Type**: Fully static marketing/catalog website. No backend, no database, no auth, no order
  placement, no forms that persist data. Every page is static content served at build time.
- **Purpose**: Present the business, its services, and its products (with images and videos) to
  the public and to search engines. This site is a digital storefront/brochure, not a transactional
  e-commerce app.
- **Audience**: Prospective B2B/B2C customers searching for switch gear and engineering services,
  and search engine crawlers.
- **Primary success metric**: Search engine ranking. This site must be engineered from the ground
  up to rank at the top of search results once deployed to production — SEO is not an afterthought,
  it is a hard requirement on every page and every component.

## Tech Stack

- **Next.js 16** (App Router) — read `node_modules/next/dist/docs/` before using any API; do not
  assume older Next.js (Pages Router, older data-fetching/caching patterns) conventions apply.
- **TypeScript** — strict mode. No `any`, no unchecked casts, no silencing the type checker.
- **Tailwind CSS v4** — the only styling mechanism (see rules below).
- **shadcn/ui** (radix base, Nova preset) — the component primitive library. Components live in
  `src/components/ui` and are customized in place, not treated as black boxes.

## Strict Development Rules (non-negotiable)

These rules apply to every change, no matter how small. Do not ask whether to follow them — follow
them by default.

1. **Simplicity first.** Make every change as simple as possible. Prefer the boring, obvious
   solution over a clever one. If a simpler implementation achieves the same result, use it.
2. **No laziness.** Find and fix root causes, never symptoms. No temporary fixes, no "TODO, fix
   later", no quick hacks to make something appear to work. Every change should meet the standard
   of a senior engineer who will be held accountable for it in production.
3. **Minimal impact.** Only touch the files and code paths necessary for the task at hand. No
   drive-by refactors, no unrelated cleanups bundled into a feature change, no side effects. If you
   notice unrelated issues, mention them — don't silently fix them in the same change.
4. **Clean, scalable architecture.** Structure code the way a senior developer would for a
   production codebase meant to grow over time: clear separation of concerns, predictable file
   organization, no god components/files, no copy-pasted logic.
5. **Reusable components, always.** Never hardcode a repeated UI pattern inline more than once.
   Extract shared UI (cards, sections, headers, media galleries, CTAs, etc.) into components under
   `src/components/`. Compose pages from components rather than writing page-specific markup walls.
6. **Tailwind CSS only.** Style exclusively with Tailwind utility classes.
   - No plain CSS files beyond the required `globals.css` (fonts/theme tokens/Tailwind layers only).
   - No external CSS libraries or frameworks (Bootstrap, MUI CSS, etc.).
   - No inline `style={{ ... }}` unless a value is truly dynamic/computed at runtime and cannot be
     expressed as a Tailwind class.
   - Use `cn()` (from `src/lib/utils`) for conditional/merged class names, not string concatenation.
7. **Industry-standard, senior-level code.** Descriptive naming, small focused functions/components,
   no premature abstraction but no duplicated logic either, proper TypeScript types/interfaces for
   all props and data shapes, accessible semantic HTML.
8. **Use the `ui-ux-pro-max` skill** whenever building, reviewing, or refining any UI — layout,
   components, styling, spacing, color, typography, responsiveness. Invoke it as part of the design
   process, not as an afterthought bolted on after markup is written.
9. **Mobile-first, fully responsive, always.** This site must work and look correct on every device
   class — mobile, tablet, laptop, and desktop. Write base (unprefixed) Tailwind classes for the
   smallest screen first, then layer in `sm:`/`md:`/`lg:`/`xl:` overrides for larger viewports —
   never the reverse (no desktop-first layouts patched with `max-*` breakpoints). Every new
   component or page must be checked across common breakpoints (≈375px mobile, ≈768px tablet,
   ≈1024px laptop, ≈1440px+ desktop) before being considered done: no horizontal scrolling, no
   overlapping/clipped content, touch targets at least 44x44px, readable text at every size.

## SEO Requirements (critical — this determines whether the business is found online)

This site must be built to achieve the best possible organic search ranking. Every page must be
implemented with these practices from the start, not retrofitted later:

- **Metadata**: Every route provides unique, descriptive `title` and `description` via the Next.js
  Metadata API (`generateMetadata`/`metadata` export). No duplicate or generic titles across pages.
- **Structured data (JSON-LD)**: Use appropriate schema.org types — `Organization`/`LocalBusiness`
  for company info, `Product` for product pages, `BreadcrumbList` for navigation, `VideoObject` for
  product videos. Inject via a reusable JSON-LD component, never inline duplicated per page.
- **Sitemap & robots**: Maintain `sitemap.ts` and `robots.ts` (App Router file conventions) that
  accurately reflect every public route, kept in sync as pages are added.
- **Canonical URLs & Open Graph**: Every page sets a canonical URL and complete Open Graph/Twitter
  card metadata (title, description, image) for correct link previews.
- **Semantic HTML & heading hierarchy**: One `<h1>` per page, logical `h2`/`h3` nesting, semantic
  landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), no heading levels skipped.
- **Images**: Always use `next/image`, always with meaningful `alt` text describing the product/
  content (never empty or filler alt text), explicit dimensions to avoid layout shift, and
  `priority` only for actual above-the-fold/LCP images.
- **Videos**: Lazy-load below-the-fold video, provide poster images, keep formats/bitrates web-
  optimized, and pair with `VideoObject` structured data where videos represent products/services.
- **Performance / Core Web Vitals**: Favor static generation, minimize client-side JavaScript
  (Server Components by default; use `"use client"` only where interactivity is required), avoid
  unnecessary re-renders, keep bundle size lean, and avoid layout shift.
- **URLs**: Clean, descriptive, human-readable slugs (e.g. `/products/low-voltage-switchgear`), not
  IDs or query strings, for every static route.
- **Accessibility**: Treat accessibility as part of SEO, not separate from it — proper landmarks,
  alt text, color contrast, keyboard navigability, and ARIA only where semantic HTML is insufficient.
- **Internal linking**: Cross-link related products/services/pages logically so crawlers can
  discover and rank the full site, not just the homepage.

## Project Conventions

- `src/app/` — routes only (pages, layouts, `loading`/`error`/`not-found`, `sitemap.ts`, `robots.ts`).
- `src/components/ui/` — shadcn/ui primitives.
- `src/components/` — reusable, composed application components (sections, cards, media galleries,
  navigation, footer, JSON-LD helpers, etc.).
- `src/lib/` — utilities, constants, shared types, structured-data builders.
- No unnecessary dependencies — before adding a package, confirm the same result can't be achieved
  with what's already installed (Next.js, Tailwind, shadcn/ui, lucide-react).
