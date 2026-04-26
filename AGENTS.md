# AGENTS.md

## This repo has no agents

This is the **trunk** — a substrate-agnostic mirror of universal principles for structured knowledge work. It has no skills, no agents, no commands. Those are stack-specific (they assume LLM tooling, Claude Code, a development workflow) and live in downstream repositories.

## Where to find agents

- **[agentic-workflow-and-tech-stack](https://github.com/cybersader/agentic-workflow-and-tech-stack)** — the LLM-agentic downstream repo. Has a full agent roster (project bootstrapper, workspace advisor, explore, plan, skill-writer, agent-writer, and more) plus skills they preload.

## Why not here

A foundation that pretends to be universal while shipping Claude-Code-specific agents would be false advertising. The principles are real whether you use an LLM agent, a human collaborator, or paper and pencil. Agent definitions assume the LLM case, so they live where that assumption is honest.

## Portability

This `AGENTS.md` file exists because multiple AI coding tools (Codex, Copilot, Cursor, Cline, etc.) read it as a convention. The fact that it's mostly "see the downstream repo" IS the message — this trunk is intentionally scope-limited.

If you want a working agentic setup, start with `agentic-workflow-and-tech-stack`. If you want the principles underneath without the stack lock-in, stay here.
