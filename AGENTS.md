# Repository Guidelines

## Project Structure & Module Organization
- Source: `components/` (PascalCase folders, e.g., `Button/`, `Footer/`).
- Package entry: `index.ts` exports public components and Stitches helpers.
- Docs site: `pages/` (Next.js), static assets in `public/`.
- Styling: `stitches.config.ts` and `styles.css`.
- Build tooling: `rollup.config.js`, TypeScript configs in `tsconfig*.json`.

## Build, Test, and Development Commands
- `npm run dev`: Start the Next.js docs site on port 8001.
- `npm run build`: Build the distributable library with Rollup to `dist/`.
- `npm run build:static`: Build and export the static docs site to `out/`.
- `npm run lint`: Lint using Next.js ESLint rules.
- `npm test`: Placeholder (no tests configured yet).

## Coding Style & Naming Conventions
- Language: TypeScript + React 18; strict mode enabled in `tsconfig.json`.
- Linting: ESLint (`extends: next/core-web-vitals`). Run `npm run lint`.
- Components: PascalCase files/folders; styled parts use `*.styled.tsx`.
- Exports: Add new public components to `index.ts`.
- Imports/quotes: Use double quotes; include semicolons; prefer named exports.

## Testing Guidelines
- Current: No test framework configured (`npm test` is a no-op).
- Recommendation: Jest + React Testing Library for components; place tests alongside components as `Component.test.tsx`.
- Add minimal accessibility checks (e.g., role/label assertions) and prop variant coverage.

## Commit & Pull Request Guidelines
- Commits: Use concise, present-tense messages (e.g., "Add Footer copyright prop").
- Bumps: Version bumps accompany publish (see prior `1.x.x` commits).
- PRs: Include description, linked issues, and screenshots/clips for UI changes.
- Docs: Update `pages/` examples and any `components/*/code-samples.ts` when APIs change.
- CI: Merges to `main` deploy static docs to `gh-pages` via GitHub Actions.

## Security & Configuration Tips
- Deployment base path: Set `NEXT_PUBLIC_BASE_PATH` for previews (e.g., `/design-system`).
- External deps: Library build marks React and peers as externals (see `rollup.config.js`).
- Accessibility: Follow Radix + Stitches patterns; verify keyboard/focus states in PRs.

