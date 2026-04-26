# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Identity

**Knowledge Work Foundations** — a read-only public mirror of substrate-agnostic principles for structured knowledge work. No stack assumed, no tooling required. This repo is a reference; it's not an active development workspace.

**Start here:** [`README.md`](README.md) — repo overview and how to navigate.

---

## Scope

This repo publishes only **tier 1, universal content**:

- `01-kernel/PHILOSOPHY.md` — condensed philosophical summary
- `01-kernel/PHILOSOPHICAL-ALIGNMENT.md` — thinker lineage glossary
- `01-kernel/principles/` — the ten principle pages
- `01-kernel/patterns/` — universal structural patterns
- `site/` — Astro + Starlight site rendering the above

It does **not** contain skills, agents, commands, a stack tier, or personal workflow (work tier). Those live downstream in specialized repositories.

## If Claude Code is invoked in this repo

Three realistic reasons someone would:

1. **Reading** — answering a question about a principle, navigating to related content, or citing source.
2. **Proposing a refinement** — improving a principle's wording, adding a worked example, adding a philosophical-alignment entry. The change should flow upstream to the source repo (this is a read-only mirror; direct PRs here will be overwritten on next sync).
3. **Adapting into a new downstream repo** — someone wants to fork a domain-specific workflow off these foundations. Claude should understand the principles well enough to help.

For (2) and (3), Claude should:

- Keep claims substrate-agnostic. If a proposed addition assumes a specific tool or stack, flag it as belonging downstream, not in trunk.
- Preserve the three-axes metadata (tier / stratum / tier-of-abstraction) on new pages.
- Point the user at the source repo for changes that will persist (this mirror is overwritten on every upstream push).

## Related repos

- **[agentic-workflow-and-tech-stack](https://github.com/cybersader/agentic-workflow-and-tech-stack)** — same principles applied to an opinionated LLM-agentic dev stack. Has skills, agents, commands, stack tier.

## Conventions used in site content

- Page frontmatter may include `stratum: 1..5`, `tier_of_abstraction: 0..2`, and `branches: [trunk, agentic, ...]`. These drive the classification badges on each page title and control per-branch filtering in the sync pipeline (though only relevant upstream).
- Markdown links use absolute site-prefixed paths (e.g., `/knowledge-work-foundations/principles/07-five-strata/`) — the sync rewrites these per-repo when the content ships.
- Obsidian-style callouts (`> [!note]`, `> [!important]`) render natively via `remark-obsidian-callout`.

## Out of scope

This repo does not track:

- Tool configuration, editor settings, or terminal setup
- Agent memory design, skill definitions, command implementations
- Personal project patterns or rebuild procedures
- Deployment, CI/CD, or infrastructure decisions

See the downstream repos for those concerns.
