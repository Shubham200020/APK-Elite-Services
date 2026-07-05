# APK Elite Services — Code & SEO Audit Report

**Site:** https://www.apkeliteservices.in/
**Date:** 2026-07-05
**Branch:** `new-web` (all changes verified-built, pending commit + deploy)
**Goal:** Google brand search should show sitelinks (About, Services, Contact) like established competitors, plus a Google Business Profile knowledge panel.

---

## 1. Executive Summary

The site is an Angular 18 app, prerendered to static HTML (16 routes) and deployed to a
static host with an SPA fallback (`public/_redirects`). The audit found one critical SEO
bug (site-wide canonical pointing at the homepage) that undermined all per-page SEO work,
plus broken prerender/sitemap coverage, a functional dead-link bug, ~7.5 MB of unnecessary
image payload on the homepage, and assorted hygiene issues. **All code-side issues are
fixed and verified.** Remaining actions are operational (deploy, Google Business Profile,
Search Console) — see §7.

---

## 2. Critical Fixes

| # | Issue | Fix |
|---|-------|-----|
| 1 | **Canonical bug**: every page (incl. prerendered service pages, confirmed live) carried `<link rel="canonical">` pointing to the homepage → Google folds all pages into one | `SeoService` now sets a per-page canonical; injected into every routed component. Verified in prerendered output for all 16 routes |
| 2 | **Sitemap covered 4 of 12 services** (missing pest-control, facade, floor-polishing, post-construction, sanitization, carpet, chair, gardening) | `public/sitemap.xml` now lists all 16 URLs |
| 3 | **Prerender mismatch**: `routes.txt` had non-existent `/services/garden-cleaning` (catalog slug is `gardening`); 5 services not prerendered at all → crawlers got empty homepage shell | `routes.txt` now matches `SERVICE_CATALOG` exactly; build prerenders 16/16 routes |
| 4 | **Dead links on every service page**: template used `routerLink` without importing `RouterLink` → anchors rendered with no `href` | `RouterLink` added to `ServicePageComponent` imports |
| 5 | **Soft-404s**: wildcard route redirected unknown URLs to homepage with HTTP 200 | Creative cleaning-themed 404 page (`NotFoundComponent`) with `noindex`, service links, WhatsApp CTA |

## 3. Performance Fixes

- **Homepage image payload: 7.5 MB → 484 KB (−94%).** The homepage has its own service
  list in `service-component.component.ts` (separate from `shared/service-catalog.ts`!)
  that still loaded ~1 MB PNGs; both lists now use the optimized `.webp` files (22–115 KB each).
- `why-choose.png` (~890 KB) → `why-choose.webp` (39 KB).
- `loading="lazy"` + explicit dimensions on the services-overview grid (12 images).
- Font Awesome self-hosted from `@fortawesome/fontawesome-free` (already a dependency);
  CDN `<link>` removed. Icon classes verified present in v7.2.0.
- Removed placeholder `<link rel="preconnect" href="https://your-image-server.com">`.

## 4. SEO Hygiene Fixes

- **JSON-LD**: two overlapping blocks (CleaningService + LocalBusiness) merged into one
  `@graph` (CleaningService `#business` + WebSite `#website`); the 50+ spammy typo
  `alternateName` variants cut to 5 genuine ones; `makesOffer` lists all 12 services with URLs.
- **Per-service structured data**: `Service` + `BreadcrumbList` JSON-LD injected on every
  service page (cleaned up on navigation).
- **Per-page `og:image`**: service pages share their own photo on WhatsApp/social.
- **Meta keywords removed entirely** (ignored by Google since 2009) — from index.html,
  SeoService, and all components.
- **Single title ownership**: route `title` properties and the duplicate meta block in
  `AppComponent.ngOnInit` removed; routed components own all tags via `SeoService`.
- **Twitter tags** fixed to use `name=` (were `property=`).

## 5. Security

- **CSP rewritten** from decorative (`unsafe-inline` + `unsafe-eval`, any https host) to strict:
  `default-src 'self'; script-src 'self' https://cloud.umami.is; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://cloud.umami.is https://gateway.umami.is https://api-gateway.umami.dev; object-src 'none'; base-uri 'self'`
- Browser testing caught two would-be production breakages:
  1. Angular's `inlineCritical` optimization emits an inline `onload` handler that the
     strict CSP blocks → pages would render half-styled. Disabled in `angular.json`
     (stylesheet is only 17 KB compressed; negligible cost).
  2. Umami actually beacons to `gateway.umami.is` (not its documented endpoints) —
     added to `connect-src`.
- ⚠️ **Maintenance note**: any new third-party resource (maps embed, chat widget, fonts)
  must be added to the CSP in `src/index.html` or the browser will block it.

## 6. Verification Performed

- `npm run build` green; **"Prerendered 16 static routes"**.
- Prerendered HTML inspected: unique canonical + title per route; breadcrumb JSON-LD present.
- Served via SSR server + Playwright: **0 console errors** under strict CSP; pages fully
  styled; icons render; Umami beacon permitted; 404 page screenshot-verified.
- No `.png`/`.jpg` references remain in app code except the small logo.

## 7. Remaining Actions (owner)

1. **Commit + push + deploy** — nothing reaches Google until deployed.
2. **Google Business Profile** (business.google.com) — this creates the map/reviews
   knowledge panel on brand searches. Verify by phone/postcard, then actively collect reviews.
3. **Google Search Console** — verify domain, submit `sitemap.xml`, Request Indexing on
   main pages to speed up recrawl of the canonical fixes.
4. Sitelinks appear automatically once Google recrawls — typically weeks, not days.
5. **Biggest content gap**: no locality landing pages (Baner, Wakad, Kharadi, Hinjewadi,
   PCMC…) — competitors win local searches with these.
6. Housekeeping (optional): delete unused multi-MB `.jpg`/`.png` files in
   `public/assets/images/`, duplicate `public/Images/` folder, `favicon1.ico`;
   rename project from `my-website` in package.json/angular.json.

## 8. Competitor Landscape (researched 2026-07-05)

- **National platforms:** Urban Company (biggest threat), NoBroker Home Services, HiCare,
  Rentokil PCI (pest control), Sulekha / Justdial / ZoopGo (directories).
- **Local Pune rivals:** Dirtblaster Cleaning Services (strongest — 2,100+ Google reviews
  @ 4.9★), Vijay Home Services, TechSquadTeam, Sadguru Facility Services, Mahalaxmi
  Cleaning & Pest Control, S3 Deep Cleaning, Mukesh Deep Cleaning, Deep Clean Pune,
  Infinite Xtensions.
- **Facility management (B2B):** BVG India (Pune HQ), SILA, Apollo FMS, SMC India,
  Arise Facility Solutions, Unicare Services, Naicon FMS.
- **Wedge:** locality pages + Google Business Profile reviews; Dirtblaster wins on review
  volume, Urban Company on brand.
