# Graph Report - c:/projects/loro-labs  (2026-07-17)

## Corpus Check
- Corpus is ~487 words - fits in a single context window. You may not need a graph.

## Summary
- 15 nodes · 21 edges · 3 communities (1 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- App Layout & Utilities
- Main Page & Button
- Theme Provider

## God Nodes (most connected - your core abstractions)
1. `cn()` - 5 edges
2. `Button()` - 4 edges
3. `RootLayout()` - 2 edges
4. `ThemeProvider()` - 2 edges
5. `buttonVariants` - 2 edges
6. `inter` - 1 edges
7. `fontMono` - 1 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `cn()`  [EXTRACTED]
  src/app/layout.tsx → src/lib/utils.ts
- `Button()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/button.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (3 total, 2 thin omitted)

### Community 0 - "App Layout & Utilities"
Cohesion: 0.47
Nodes (4): fontMono, inter, RootLayout(), cn()

## Knowledge Gaps
- **2 isolated node(s):** `inter`, `fontMono`
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `App Layout & Utilities` to `Main Page & Button`?**
  _High betweenness centrality (0.335) - this node is a cross-community bridge._
- **Why does `Button()` connect `Main Page & Button` to `App Layout & Utilities`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **What connects `inter`, `fontMono` to the rest of the system?**
  _2 weakly-connected nodes found - possible documentation gaps or missing edges._