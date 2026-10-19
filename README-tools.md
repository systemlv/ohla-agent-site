# OhLa Agent Curated Tools

This repo contains a lightweight curated directory for AI developer tools, MCP servers, agent frameworks, and workflow templates.

## Goal

- Help developers discover useful AI tools quickly
- Organize around MCP, agents, orchestration, local LLM tools, and template collections
- Keep the site lightweight and content-driven
- Preserve a Git-based, reviewable moderation model

## Data model

The main data file is `data/tools.json`.

Each item includes:
- `id`
- `title`
- `category`
- `short_desc`
- `url`
- `official_site`
- `repo`
- `tags`
- `type`
- `status`

## Site structure

- `/tools` — tool directory listing
- `/` — homepage cards / highlighted tools

## Future directions

- Add star counts / external review summaries
- Add short category pages
- Add sponsor / affiliate slots for curated listings
- Add deeper evaluation notes (pros / cons / best for use-cases)
