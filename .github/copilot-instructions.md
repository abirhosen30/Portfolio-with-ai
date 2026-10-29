# Repository Guidelines

## Build, lint, and type-check

- `npm run dev` starts the local Next.js development server.
- `npm run build` creates the production build; `npm start` serves it.
- `npm run lint` runs ESLint for the repository. To lint one file, use `npm run lint -- src/components/Navbar.tsx` and replace the path as needed.
- `npx tsc --noEmit` runs the TypeScript check.
- There is no test script or test runner configured in `package.json`.

## Architecture

- This is a Next.js App Router application under `src/app`. `src/app/page.tsx` composes the single-page portfolio from section components in `src/components`; `src/app/projects/[id]/page.tsx` serves project detail routes.
- Portfolio-wide profile, skills, education, and experience content belongs in `src/data/portfolioData.ts`. Project records and their `Project` type belong in `src/data/projects.ts`; `generateStaticParams` and project lookup use this array to build the detail pages. Keep project IDs aligned with `/projects/[id]` links and preview images in `public/projects/`.
- App Router layouts and pages are Server Components by default. Components that use state, effects, event handlers, or browser APIs opt in with `"use client"`; keep that boundary in the interactive component rather than moving entire routes to the client.
- The `@/*` TypeScript alias maps to `src/*`.
- Global styles and Tailwind CSS v4 are in `src/app/globals.css`. Shared theme variables and reusable visual treatments are defined there; the root layout imports this stylesheet.

## Framework and styling conventions

- The project uses Next.js 16.4.3 with `cacheComponents`, partial prefetching, and the React Compiler enabled in `next.config.ts`. The `dev` and `build` scripts explicitly use `--webpack`; preserve these scripts when changing the build setup.
- Dynamic route `params` are asynchronous (`Promise`-typed) and must be awaited, as in `src/app/projects/[id]/page.tsx`. Follow the installed Next.js guides in `node_modules/next/dist/docs/` for framework APIs, and retain the generated Next.js guidance in the root `AGENTS.md`.
- Use Tailwind utility classes for component styling and the existing dark navy/teal palette. Put shared CSS primitives or theme values in `src/app/globals.css` rather than duplicating global rules in components.
