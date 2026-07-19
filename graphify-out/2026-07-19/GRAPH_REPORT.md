# Graph Report - c:/projects/loro-labs  (2026-07-19)

## Corpus Check
- 46 files · ~8,323 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 146 nodes · 259 edges · 10 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Services and Showcase
- UI Card and Avatar
- Home Carousel and Navigation
- Layout and Footer
- Sheet and Mobile Nav
- Pricing
- Home Features
- Theme and Root Layout
- Button and Utils

## God Nodes (most connected - your core abstractions)
1. `ScrollReveal()` - 14 edges
2. `ContactSheet()` - 5 edges
3. `Badge()` - 5 edges
4. `useScrollY()` - 5 edges
5. `Navbar()` - 4 edges
6. `Button()` - 3 edges
7. `cn()` - 3 edges
8. `Footer()` - 3 edges
9. `MobileNav()` - 3 edges
10. `Card()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Navbar()` --calls--> `useScrollY()`  [EXTRACTED]
  src/components/layout/navbar.tsx → src/hooks/use-scroll.ts
- `Button()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/button.tsx → src/lib/utils.ts
- `ParallaxBackground()` --calls--> `useScrollY()`  [EXTRACTED]
  src/features/home/components/parallax-background.tsx → src/hooks/use-scroll.ts

## Import Cycles
- None detected.

## Communities (10 total, 0 thin omitted)

### Community 0 - "Services and Showcase"
Cohesion: 0.14
Nodes (13): metadata, metadata, ScrollReveal(), ScrollRevealProps, ServicesAi(), ServicesConsulting(), ServicesCta(), ServicesHero() (+5 more)

### Community 1 - "UI Card and Avatar"
Cohesion: 0.14
Nodes (8): Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent(), BRAND_COLORS, GRID_PATTERN, BORDER_MAP

### Community 2 - "Home Carousel and Navigation"
Cohesion: 0.18
Nodes (11): MobileNav(), ThemeToggle(), CAROUSEL_SLIDES, CarouselSlide, NAV_LINKS, Testimonial, TestimonialBorder, TESTIMONIALS (+3 more)

### Community 3 - "Layout and Footer"
Cohesion: 0.20
Nodes (8): ContactSheet(), Footer(), SERVICE_LINKS, SOCIAL_ICONS, STUDIO_LINKS, Navbar(), Input(), Separator()

### Community 4 - "Sheet and Mobile Nav"
Cohesion: 0.25
Nodes (8): ContactSheetProps, Sheet(), SheetClose(), SheetContent(), SheetDescription(), SheetHeader(), SheetTitle(), SheetTrigger()

### Community 5 - "Pricing"
Cohesion: 0.28
Nodes (6): metadata, Badge(), badgeVariants, PricingCta(), PricingGrid(), PricingHero()

### Community 6 - "Home Features"
Cohesion: 0.27
Nodes (7): metadata, BRAND_FEATURES, BrandShowcase(), CtaBanner(), HeroSection(), ServicesSection(), TestimonialsSection()

### Community 8 - "Theme and Root Layout"
Cohesion: 0.22
Nodes (5): fontMono, fontSans, fontSerif, metadata, ThemeProvider()

### Community 9 - "Button and Utils"
Cohesion: 0.70
Nodes (3): Button(), buttonVariants, cn()

## Knowledge Gaps
- **20 isolated node(s):** `metadata`, `metadata`, `metadata`, `metadata`, `fontSans` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ScrollReveal()` connect `Services and Showcase` to `Pricing`, `Home Features`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **Why does `ContactSheet()` connect `Layout and Footer` to `Services and Showcase`, `Sheet and Mobile Nav`, `Pricing`, `Home Features`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `Badge()` connect `Pricing` to `UI Card and Avatar`, `Home Carousel and Navigation`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **What connects `metadata`, `metadata`, `metadata` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Services and Showcase` be split into smaller, more focused modules?**
  _Cohesion score 0.14039408866995073 - nodes in this community are weakly interconnected._
- **Should `UI Card and Avatar` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._