# Loro — design-system repo

## Scope

Static design-spec + design-practice repo. Two files, no code, no build.

## Files

- `DESIGN-wise.md` — Wise-inspired design system: tokens (colors, typography, spacing, rounded), component definitions, do/don't rules. Token cross-references use `{section.key}` syntax (e.g. `{colors.primary}`, `{typography.display-mega}`).
- `SKILL.md` — "Frontend Design" guidance for distinctive, opinionated visual design. Process: brainstorm plan → review vs brief → build → critique. Referenced by styles & design process.

## Conventions

- DESIGN-wise.md frontmatter is the single token source. Component props reference tokens via `{section.key}`.
- Script `scripts/derive-examples-block.mjs` referenced in DESIGN-wise.md line 497 but does not exist in repo. Not a blocker — the `ex-*` example components are fully specified inline.
- SKILL.md is generic design-process guidance, not repo-specific. Read DESIGN-wise.md first for concrete tokens.

## No build / test / lint / deploy

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:

- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
