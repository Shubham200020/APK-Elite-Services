# APK Elite Services — Pending Action List

Saved 2026-07-05. Full context in `SEO-AUDIT-REPORT.md`.

## 🔴 Do first — nothing works until these are done

- [ ] **Commit + push + deploy** the SEO overhaul sitting uncommitted on `new-web`
      (ask Claude: "commit")
- [ ] **Create Google Business Profile** at business.google.com — this is the
      map/reviews panel on Google. Verify by phone/postcard. Add real photos.
- [ ] **Google Search Console** — verify domain, submit `sitemap.xml`,
      Request Indexing on home/about/services/contact.

## 🟠 Website improvements (Claude can build these on request)

- [ ] **WhatsApp click tracking** in Umami — measure which pages produce leads
      (~30 min, highest-value remaining code change)
- [ ] **"Starting from ₹X" prices** on service pages — the About page already
      promises transparent pricing but the site shows none
- [ ] **Contact form** for corporate/builder enquiries (static-site form service)
- [ ] **Bring back testimonials + FAQ** — quote real Google reviews once they exist;
      FAQ targets "People also ask" boxes
- [ ] **"Diwali deep cleaning Pune" landing page — publish by August** so it ranks
      by the Oct–Nov peak season
- [ ] **Locality landing pages** (Baner, Wakad, Kharadi, Hinjewadi, PCMC…) —
      biggest content gap vs competitors
- [ ] **Privacy policy page** (required if you ever run Google Ads)
- [ ] Replace stock photos with real team/job photos (also feeds GBP)

## 🟡 Business / marketing (owner tasks)

- [ ] **Monsoon push (now):** promote pest control, tank cleaning, sanitization
- [ ] **NAP consistency:** identical name/address/phone on website, GBP, Justdial,
      Sulekha, IndiaMART, Facebook, Instagram — create the free listings
- [ ] **Review engine:** send the Google review link on WhatsApp after every job
      (Dirtblaster's 2,100+ reviews is the benchmark)
- [ ] **Switch to WhatsApp Business app** — catalog, quick replies, fast responses

## ⚠️ Maintenance rules (don't re-break the site)

- New service? Update BOTH service lists (`shared/service-catalog.ts` AND
  `service-component.component.ts`) + `routes.txt` + `public/sitemap.xml`.
- New third-party script/widget/font? Add it to the CSP in `src/index.html`
  or the browser blocks it.
- Keep `inlineCritical: false` in angular.json (strict CSP requirement).
