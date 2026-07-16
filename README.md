# loro-labs

Design-spec and design-practice repo for a Wise-inspired design system.

## Contents

- `DESIGN-wise.md` — design tokens (colors, typography, spacing, rounded), component definitions, do/don't rules
- `docs/` — supplementary documentation
- `src/` — Next.js + shadcn/ui project with the design system applied

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** shadcn/ui (Base Mira style)
- **Styling:** Tailwind CSS v4 + PostCSS
- **Package Manager:** pnpm

## Scripts

| Command | Action |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm lint` | ESLint check |
| `pnpm typecheck` | TypeScript check |
| `pnpm validate` | TypeScript + ESLint |
| `pnpm format` | Prettier format |

## Adding components

```bash
pnpx shadcn@latest add button
```

Imports use `@/*` alias pointing to `./src/*`:

```tsx
import { Button } from "@/components/ui/button"
```
