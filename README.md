# Knowledge Work Foundations

> Universal principles for structured knowledge work — the claims that hold with paper and pencil, with digital files, and with LLM agents alike.

This repo collects the substrate-agnostic foundations that underlie structured cognitive work. It's the **trunk** of a larger system; two downstream repos specialize these foundations into opinionated implementations.

## What's in scope

- **Principles** — ten claims about how cognitive work composes into durable artifacts, each justified on first principles (attention, memory, authority) rather than tooling.
- **Patterns** — universal structural patterns unopinionated about stack.
- **Philosophical alignment** — the thinkers and traditions the claims inherit from (Thomistic / virtue-ethics lineage for moral framings; Alexander, Drucker, Simon, Wittgenstein for the structural ones).

## What's NOT in scope here

Anything that assumes a specific tool, editor, AI model, operating system, or workflow. Those concerns live downstream:

- [agentic-workflow-and-tech-stack](https://github.com/cybersader/agentic-workflow-and-tech-stack) — the same principles applied to an LLM-agentic development stack (WSL + Claude Code + Obsidian + Zellij). Opinionated patterns, skills, agents.
- *(Future)* other domain-specific workflows that reference this trunk.

## Three classification axes

Every page carries metadata for three orthogonal dimensions:

- **Tier** (1/2/3) — WHO is this for? (This repo publishes Tier 1 content only.)
- **Stratum** (1–5) — HOW portable is this if copied? (Stable claims vs. instance-specific templates.)
- **Tier of abstraction** (0/1/2) — WHAT substrate does the claim assume? (Paper / digital / LLM-agentic.)

See the [Principles index](https://cybersader.github.io/knowledge-work-foundations/principles/) for the full model.

## Repo structure

```
01-kernel/
├── PHILOSOPHY.md                    Single-page condensed view
├── PHILOSOPHICAL-ALIGNMENT.md       Lineage glossary
├── principles/                      Ten principle pages
└── patterns/                        Universal structural patterns

site/                                Astro + Starlight rendering
```

## Contributing

This is a read-only mirror of a private source repo. To propose additions or corrections:

1. Open an issue or Discussion on this repo.
2. The maintainer reviews and applies approved changes in the source repo.
3. The next sync lands the change publicly.

See `CONTRIBUTING.md` for more.

## License

See `LICENSE` / `LICENSE.md`.
