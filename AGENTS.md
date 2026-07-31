# AGENTS.md

## Cursor Cloud specific instructions

This repository is a single static **Astro 7** portfolio site (TypeScript, no backend/database). There is exactly one service to run: the Astro dev server.

### Services and commands

All commands run from the repo root. Standard scripts are defined in `package.json`:

- `pnpm dev` — start the Astro dev server at `http://localhost:4321` (the only service to run for end-to-end testing).
- `pnpm check` — run type/diagnostics checking (`astro check`). This is the closest thing to a lint step; there is no separate ESLint config.
- `pnpm build` — produce the static build in `dist/`.
- `pnpm preview` — serve the built `dist/` output.

### Non-obvious notes

- Requires Node.js `>=22` and pnpm `10.15.1` (both are pre-provisioned by the update script / environment).
- `pnpm install` prints a warning that the `esbuild` build script is ignored. This is expected and harmless: the build, type check, and dev server all work correctly because `esbuild` ships its platform binary via optional dependencies. Do NOT run the interactive `pnpm approve-builds`.
- No environment variables or `.env` files are needed. The site uses no `import.meta.env` / `process.env` values.
- Two external calls happen only in the browser and both degrade gracefully, so they never block local testing:
  - The homepage GitHub contribution graph (`github-contrib-graph`, user `IcaroAguiar`) has a built-in fallback on error.
  - The contact form (`src/pages/contato.astro`) POSTs to a hardcoded Formspree endpoint; the page renders and can be filled in without connectivity.
- Content is typed data under `src/data/`; project case-study pages (`/projeto/[projectId]`) are prerendered from `src/data/projects.ts`.
