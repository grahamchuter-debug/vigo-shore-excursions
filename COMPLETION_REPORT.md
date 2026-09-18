# Vigo Shore Excursions — Completion Report

**Status:** World 2.0 Gold PASS (localhost)  
**Domain:** vigoshoreexcursions.com  
**Date:** 2026-07-28  
**Infrastructure:** Not deployed (per brief)

---

## Configuration

| Field | Value |
|-------|--------|
| Slug | `vigo` |
| Name | Vigo Shore Excursions |
| Strapline | Gateway to Atlantic Galicia |
| Domain / URL | vigoshoreexcursions.com |
| Currency | EUR |
| Booking prefix | VG |
| Contact mode | central (`info@wowatour.com`) |
| Country | Spain |
| Registry | Added to World-2.0 `sites.json` as `development` |

---

## Editorial content

- **Spirit of Place** — Europe’s largest fishing port; Atlantic Galicia; Ría de Vigo; seafood; underrated cruise gateway
- **Honest Advice** — three excellent options (independent / organised Galicia / Cíes where practical); never push tours; Cíes seasonal & capacity-controlled
- **Choose Your Day** — Explore Vigo · Discover Galicia · Editor's Choice Adventure
- **Editorial Promise** — platform standard
- Tone — premium travel magazine; maritime, authentic, coastal, gastronomic, proudly Galician

---

## Experience Cards

1. ⭐ Editor's Choice — Discover Galicia → Santiago EC
2. 🚶 Walk It Yourself — Historic Vigo
3. 🏝 Atlantic Islands — Cíes Islands & Ría de Vigo
4. 🦪 Food & Seafood — Markets, oysters and Galician cuisine
5. 🌊 Coastal Galicia — Fishing villages & Atlantic scenery

---

## Walk It Yourself

Enabled on `/guides/explore-independently` with full `independentWalk` (no interactive maps).

Route: Cruise terminal → Waterfront promenade → Praza da Compostela → Porta do Sol → Casco Vello → Praza da Constitución → Santa María Collegiate Church → A Pedra oyster market → Marina → Return to ship

---

## Editor's Choice

**Journey to Santiago de Compostela from Vigo** (`santiago-de-compostela-from-vigo`)

Preference order applied: Santiago > Best of Galicia > Scenic coastal — Santiago selected as strongest overall cruise experience.

Includes: Editor's Choice badge, full `whyWeChose`, trust / return-to-ship messaging. `bookingStatus: comingSoon` (no public pricing).

---

## Your Day Ashore

Walk It Yourself · Editor's Choice · History · Seafood · Photography · Families · Atlantic Coast

---

## Guides

| Guide | Slug |
|-------|------|
| Cruise Port Guide | `cruise-port-guide` (+ `/cruise-port-guide`) |
| One Day in Vigo | `one-day-in-vigo` |
| Walk It Yourself | `explore-independently` |
| Casco Vello Guide | `casco-vello` |
| Seafood Guide | `seafood-guide` |
| Galician Cuisine Guide | `galician-cuisine` |
| Cíes Islands Guide | `cies-islands` |
| Best Viewpoints | `best-viewpoints` |
| Cruise Tips | `cruise-tips` |
| FAQ | `cruise-faq` (+ `/faq`) |

Also: `walking-from-port` for port logistics links.

---

## Products (SEG catalogue)

Imported from [Shore Excursions Group — Vigo](https://www.shoreexcursionsgroup.com/port/vigo-shore-excursions):

1. Journey to Santiago de Compostela from Vigo — **Editor's Choice**
2. Galician Heritage and Vigo Discovery by E-Bike
3. Galician Culture and Historical Walk in Vigo
4. Private Galician Old Town Walk in Vigo

All `bookingStatus: "comingSoon"`. Bookable catalogue + Worker catalogue empty until EUR prices verified.

---

## SEO

- Metadata from `destinationConfig` / `buildMetadata`
- JSON-LD: Organization, WebSite, TravelAgency, FAQPage, breadcrumbs, TravelGuide
- Canonicals: `https://vigoshoreexcursions.com/...`
- `public/_redirects` www → apex
- Sitemap + robots present

---

## Images

Placeholder JPGs from shared World 2.0 Gold role assets (documented in `image-sources/SOURCES.md`). Not production photography. Replace before launch.

---

## QA

```
TOTAL 113/115 — World 2.0 Gold
Overall: PASS (zero FAIL categories)
```

| Category | Score | Status |
|----------|-------|--------|
| configuration | 9/10 | PASS |
| scaffold | 15/15 | PASS |
| domain | 15/15 | PASS |
| seo | 20/20 | PASS |
| links | 15/15 | PASS |
| images | 15/15 | PASS |
| build | 10/10 | PASS |
| performance | 9/10 | PASS |
| editorial | 5/5 | PASS |

Local checks: `npm run build`, `check-links`, `seo-qa`, `qa:world2 -- --build` — all pass.

---

## Outstanding items

- Licensed production photography
- Verified EUR pricing → flip products from `comingSoon` to `live`
- Confirmed cruise schedules (none published fictitiously)
- Stripe / Worker / D1 / email secrets
- DNS + Cloudflare Custom Domain (when deploying)
- Search Console + analytics
- Switch `contactMode` to `local` after email forwarding
- Manual editorial worksheet (≥28/31) before public launch

---

## Production readiness

**Localhost-ready Gold destination.** Not production-ready for booking or public launch until pricing, images, schedules and Workers Static Assets deploy (ADR-0001) are completed.

**Do not deploy** until requested. No Cloudflare Pages project. No Stripe configuration in this pass.

---

## Localhost

```bash
cd /Users/graham.chuter/Desktop/vigo-shore-excursions
npm run dev
```
