# Graph Report - loro-labs  (2026-07-19)

## Corpus Check
- 50 files · ~9,120 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 157 nodes · 327 edges · 8 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `39a37131`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Services and Showcase
- UI Card and Avatar
- Home Carousel and Navigation
- footer.tsx
- Sheet and Mobile Nav
- Pricing
- Home Features
- Theme and Root Layout

## God Nodes (most connected - your core abstractions)
1. `cn()` - 46 edges
2. `ScrollReveal()` - 15 edges
3. `Button()` - 13 edges
4. `useGsapReveal()` - 7 edges
5. `Navbar()` - 5 edges
6. `BrandShowcase()` - 4 edges
7. `CtaBanner()` - 4 edges
8. `HeroSection()` - 4 edges
9. `ServicesSection()` - 4 edges
10. `ContactSheet()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `cn()`  [EXTRACTED]
  src/app/layout.tsx → src/lib/utils.ts
- `SheetOverlay()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/sheet.tsx → src/lib/utils.ts
- `SheetFooter()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/sheet.tsx → src/lib/utils.ts
- `HeroCarousel()` --calls--> `cn()`  [EXTRACTED]
  src/features/home/components/hero-carousel.tsx → src/lib/utils.ts
- `Navbar()` --calls--> `useScrollThreshold()`  [EXTRACTED]
  src/components/layout/navbar.tsx → src/hooks/use-scroll.ts

## Import Cycles
- None detected.

## Communities (8 total, 0 thin omitted)

### Community 0 - "Services and Showcase"
Cohesion: 0.12
Nodes (16): metadata, metadata, ScrollReveal(), ScrollRevealProps, AI_FEATURES, ServicesAi(), CONSULTING_FEATURES, ServicesConsulting() (+8 more)

### Community 1 - "UI Card and Avatar"
Cohesion: 0.13
Nodes (20): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage(), Card(), CardAction() (+12 more)

### Community 2 - "Home Carousel and Navigation"
Cohesion: 0.25
Nodes (7): CAROUSEL_SLIDES, CarouselSlide, NAV_LINKS, Testimonial, TestimonialBorder, TESTIMONIALS, HeroCarousel()

### Community 3 - "footer.tsx"
Cohesion: 0.32
Nodes (5): SERVICE_LINKS, SOCIAL_ICONS, STUDIO_LINKS, Input(), Separator()

### Community 4 - "Sheet and Mobile Nav"
Cohesion: 0.17
Nodes (14): ContactSheet(), ContactSheetProps, Footer(), MobileNav(), Navbar(), Sheet(), SheetClose(), SheetContent() (+6 more)

### Community 5 - "Pricing"
Cohesion: 0.16
Nodes (10): metadata, ThemeToggle(), Badge(), badgeVariants, Button(), buttonVariants, PricingCta(), PricingGrid() (+2 more)

### Community 6 - "Home Features"
Cohesion: 0.13
Nodes (16): metadata, NoiseOverlay(), BRAND_FEATURES, BrandShowcase(), CtaBanner(), HeroSection(), ParallaxBackground(), BRAND_COLORS (+8 more)

### Community 8 - "Theme and Root Layout"
Cohesion: 0.22
Nodes (6): fontMono, fontSans, fontSerif, metadata, RootLayout(), ThemeProvider()

## Knowledge Gaps
- **26 isolated node(s):** `BRAND_FEATURES`, `BRAND_COLORS`, `GRID_PATTERN`, `BORDER_MAP`, `TESTIMONIAL_CARDS` (+21 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `UI Card and Avatar` to `Services and Showcase`, `Home Carousel and Navigation`, `footer.tsx`, `Sheet and Mobile Nav`, `Pricing`, `Theme and Root Layout`?**
  _High betweenness centrality (0.504) - this node is a cross-community bridge._
- **Why does `ScrollReveal()` connect `Services and Showcase` to `UI Card and Avatar`, `Pricing`, `Home Features`?**
  _High betweenness centrality (0.231) - this node is a cross-community bridge._
- **Why does `Button()` connect `Pricing` to `Services and Showcase`, `UI Card and Avatar`, `footer.tsx`, `Sheet and Mobile Nav`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **What connects `BRAND_FEATURES`, `BRAND_COLORS`, `GRID_PATTERN` to the rest of the system?**
  _26 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Services and Showcase` be split into smaller, more focused modules?**
  _Cohesion score 0.12096774193548387 - nodes in this community are weakly interconnected._
- **Should `UI Card and Avatar` be split into smaller, more focused modules?**
  _Cohesion score 0.1282051282051282 - nodes in this community are weakly interconnected._
- **Should `Home Features` be split into smaller, more focused modules?**
  _Cohesion score 0.1349206349206349 - nodes in this community are weakly interconnected._