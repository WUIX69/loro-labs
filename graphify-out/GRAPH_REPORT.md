# Graph Report - loro-labs  (2026-07-19)

## Corpus Check
- 47 files · ~8,514 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 150 nodes · 287 edges · 13 communities (10 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `267ed0d5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Services and Showcase
- UI Card and Avatar
- Home Carousel and Navigation
- index.ts
- Sheet and Mobile Nav
- Pricing
- Home Features
- hero-section.tsx
- Theme and Root Layout
- scroll-reveal.tsx
- ScrollReveal
- services-consulting.tsx
- services-web-app.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 42 edges
2. `ScrollReveal()` - 14 edges
3. `Button()` - 10 edges
4. `ContactSheet()` - 5 edges
5. `Navbar()` - 4 edges
6. `Badge()` - 4 edges
7. `NAV_LINKS` - 3 edges
8. `ParallaxBackground()` - 3 edges
9. `ShowcaseCta()` - 3 edges
10. `ShowcaseGamification()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `cn()`  [EXTRACTED]
  src/app/layout.tsx → src/lib/utils.ts
- `SheetOverlay()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/sheet.tsx → src/lib/utils.ts
- `SheetHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/sheet.tsx → src/lib/utils.ts
- `SheetFooter()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/sheet.tsx → src/lib/utils.ts
- `SheetTitle()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/sheet.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (13 total, 3 thin omitted)

### Community 0 - "Services and Showcase"
Cohesion: 0.24
Nodes (5): metadata, AI_FEATURES, ServicesAi(), ServicesCta(), ServicesHero()

### Community 1 - "UI Card and Avatar"
Cohesion: 0.12
Nodes (21): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage(), Card(), CardAction() (+13 more)

### Community 2 - "Home Carousel and Navigation"
Cohesion: 0.19
Nodes (9): Footer(), SERVICE_LINKS, SOCIAL_ICONS, STUDIO_LINKS, MobileNav(), Navbar(), Input(), NAV_LINKS (+1 more)

### Community 3 - "index.ts"
Cohesion: 0.31
Nodes (5): metadata, ShowcaseCta(), ShowcaseGamification(), ShowcaseHero(), ShowcaseIntelligence()

### Community 4 - "Sheet and Mobile Nav"
Cohesion: 0.18
Nodes (11): Button(), buttonVariants, Sheet(), SheetClose(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader() (+3 more)

### Community 5 - "Pricing"
Cohesion: 0.32
Nodes (4): metadata, PricingCta(), PricingGrid(), PricingHero()

### Community 6 - "Home Features"
Cohesion: 0.13
Nodes (14): CAROUSEL_SLIDES, CarouselSlide, Testimonial, TestimonialBorder, TESTIMONIALS, BRAND_FEATURES, BrandShowcase(), CtaBanner() (+6 more)

### Community 7 - "hero-section.tsx"
Cohesion: 0.29
Nodes (6): Badge(), badgeVariants, HeroCarousel(), HeroSection(), ParallaxBackground(), useScrollY()

### Community 8 - "Theme and Root Layout"
Cohesion: 0.22
Nodes (6): fontMono, fontSans, fontSerif, metadata, RootLayout(), ThemeProvider()

### Community 9 - "scroll-reveal.tsx"
Cohesion: 0.43
Nodes (3): ContactSheet(), ContactSheetProps, ScrollRevealProps

## Knowledge Gaps
- **24 isolated node(s):** `metadata`, `ContactSheetProps`, `ScrollRevealProps`, `CarouselSlide`, `TestimonialBorder` (+19 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `UI Card and Avatar` to `Home Carousel and Navigation`, `Sheet and Mobile Nav`, `Home Features`, `hero-section.tsx`, `Theme and Root Layout`?**
  _High betweenness centrality (0.359) - this node is a cross-community bridge._
- **Why does `ContactSheet()` connect `scroll-reveal.tsx` to `Home Carousel and Navigation`, `Home Features`?**
  _High betweenness centrality (0.207) - this node is a cross-community bridge._
- **Why does `Button()` connect `Sheet and Mobile Nav` to `UI Card and Avatar`, `Home Carousel and Navigation`, `Home Features`, `hero-section.tsx`?**
  _High betweenness centrality (0.143) - this node is a cross-community bridge._
- **What connects `metadata`, `ContactSheetProps`, `ScrollRevealProps` to the rest of the system?**
  _24 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UI Card and Avatar` be split into smaller, more focused modules?**
  _Cohesion score 0.12183908045977011 - nodes in this community are weakly interconnected._
- **Should `Home Features` be split into smaller, more focused modules?**
  _Cohesion score 0.13157894736842105 - nodes in this community are weakly interconnected._