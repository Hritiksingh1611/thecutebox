# thecutebox.in — Pages & Routes

## Route Map

| Path | Component | Description |
|---|---|---|
| `/` | `HomePage` | Hero, occasions, bento categories, featured products, gift finder quiz, build CTA, artisan spotlight, testimonials, newsletter |
| `/catalog` | `CatalogPage` | Search + filter by category, sort, responsive product grid |
| `/hampers` | `HampersPage` | Ready-to-ship curated hampers + corporate upsell |
| `/build` | `BuildYourBoxPage` | 3-step interactive gift builder (choose → personalise → review) |
| `/artisans` | `ArtisansPage` | Artisan profiles + artisan products + partner CTA |
| `/corporate` | `CorporatePage` | B2B pricing tiers + bulk enquiry form |
| `*` | `NotFoundPage` | 404 with friendly messaging |

---

## HomePage Sections

1. **HeroSection** — Full-viewport hero with headline, CTAs, floating product cards, trust badges
2. **OccasionsStrip** — Horizontally scrollable occasion filter pills
3. **CategoryBento** — CSS grid bento layout with 5 categories, image backgrounds
4. **FeaturedProducts** — 4-column product grid of bestsellers
5. **GiftFinder** — 3-step mini quiz (who/occasion/budget) → results
6. **BuildYourBoxCTA** — Split layout with step bubbles and feature list
7. **ArtisanSpotlight** — 3 artisan profile cards
8. **Testimonials** — 3 review cards
9. **Newsletter** — Email capture with animated submit state

---

## Routing Notes
- Uses **HashRouter** (required for GitHub Pages SPA)
- `vite.config.js` sets `base: '/thecutebox/'`
- `ScrollToTop` component resets scroll on route change
- CartDrawer is global (outside Routes, inside HashRouter)
