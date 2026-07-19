# Graph Report - loro-labs  (2026-07-19)

## Corpus Check
- 47 files · ~8,498 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 150 nodes · 345 edges · 7 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ec78407b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Services and Showcase
- UI Card and Avatar
- Home Carousel and Navigation
- Sheet and Mobile Nav
- Pricing
- Home Features
- Theme and Root Layout

## God Nodes (most connected - your core abstractions)
1. `cn()` - 52 edges
2. `ScrollReveal()` - 15 edges
3. `Button()` - 15 edges
4. `Badge()` - 6 edges
5. `ContactSheet()` - 5 edges
6. `Navbar()` - 5 edges
7. `Card()` - 4 edges
8. `CardContent()` - 4 edges
9. `Input()` - 4 edges
10. `SheetContent()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `cn()`  [EXTRACTED]
  src/app/layout.tsx → src/lib/utils.ts
- `SheetOverlay()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/sheet.tsx → src/lib/utils.ts
- `SheetFooter()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/sheet.tsx → src/lib/utils.ts
- `Navbar()` --calls--> `cn()`  [EXTRACTED]
  src/components/layout/navbar.tsx → src/lib/utils.ts
- `ScrollReveal()` --calls--> `cn()`  [EXTRACTED]
  src/components/shared/scroll-reveal.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (7 total, 0 thin omitted)

### Community 0 - "Services and Showcase"
Cohesion: 0.12
Nodes (16): metadata, metadata, ScrollReveal(), ScrollRevealProps, AI_FEATURES, ServicesAi(), CONSULTING_FEATURES, ServicesConsulting() (+8 more)

### Community 1 - "UI Card and Avatar"
Cohesion: 0.11
Nodes (25): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage(), Card(), CardAction() (+17 more)

### Community 2 - "Home Carousel and Navigation"
Cohesion: 0.11
Nodes (18): Footer(), SERVICE_LINKS, SOCIAL_ICONS, STUDIO_LINKS, MobileNav(), Navbar(), ThemeToggle(), Separator() (+10 more)

### Community 4 - "Sheet and Mobile Nav"
Cohesion: 0.21
Nodes (13): ContactSheet(), ContactSheetProps, Button(), buttonVariants, Sheet(), SheetClose(), SheetContent(), SheetDescription() (+5 more)

### Community 5 - "Pricing"
Cohesion: 0.25
Nodes (6): metadata, Badge(), badgeVariants, PricingCta(), PricingGrid(), PricingHero()

### Community 6 - "Home Features"
Cohesion: 0.29
Nodes (7): metadata, BRAND_FEATURES, BrandShowcase(), CtaBanner(), HeroSection(), ServicesSection(), TestimonialsSection()

### Community 8 - "Theme and Root Layout"
Cohesion: 0.22
Nodes (6): fontMono, fontSans, fontSerif, metadata, RootLayout(), ThemeProvider()

## Knowledge Gaps
- **24 isolated node(s):** `metadata`, `metadata`, `metadata`, `metadata`, `fontSans` (+19 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `UI Card and Avatar` to `Services and Showcase`, `Home Carousel and Navigation`, `Sheet and Mobile Nav`, `Pricing`, `Home Features`, `Theme and Root Layout`?**
  _High betweenness centrality (0.508) - this node is a cross-community bridge._
- **Why does `ScrollReveal()` connect `Services and Showcase` to `UI Card and Avatar`, `Sheet and Mobile Nav`, `Pricing`, `Home Features`?**
  _High betweenness centrality (0.140) - this node is a cross-community bridge._
- **Why does `Button()` connect `Sheet and Mobile Nav` to `UI Card and Avatar`, `Home Carousel and Navigation`, `Pricing`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **What connects `metadata`, `metadata`, `metadata` to the rest of the system?**
  _24 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Services and Showcase` be split into smaller, more focused modules?**
  _Cohesion score 0.12043010752688173 - nodes in this community are weakly interconnected._
- **Should `UI Card and Avatar` be split into smaller, more focused modules?**
  _Cohesion score 0.1126984126984127 - nodes in this community are weakly interconnected._
- **Should `Home Carousel and Navigation` be split into smaller, more focused modules?**
  _Cohesion score 0.10804597701149425 - nodes in this community are weakly interconnected._