# Abir Hosen — Portfolio

A personal portfolio for **Abir Hosen**, a frontend developer and Computer Science undergraduate based in Dhaka, Bangladesh. Built with Next.js, React, TypeScript, and Tailwind CSS.

The site brings together an introduction, background, categorized skills, education, selected projects, and contact links. Each project has its own detail page with its technology stack, links, development challenges, and future plans.

## Contents

- [Features](#features)
- [Projects](#projects)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)

## Features

- Responsive single-page portfolio with section navigation.
- Profile, about, education, and categorized skills sections.
- Filterable project cards with preview images and detail pages.
- Project detail pages with descriptions, technologies, live demos, repository links, challenges, and future plans.
- Direct email and social links.
- Downloadable resume link.
- SEO metadata and a custom not-found page.

## Projects

| Project | Description | Demo | Repository |
| --- | --- | --- | --- |
| **Bazar Dor** | Browse products and compare daily market prices in Bangladesh. | [Live site](https://bazar-dor-lime-nine.vercel.app) | [GitHub](https://github.com/abirhosen30/bazar-dor) |
| **Book Vibe** | Discover books and manage Read and Wishlist shelves. | [Live site](https://book-vibe-five-phi.vercel.app/) | [GitHub](https://github.com/abirhosen30/Book-vibe) |
| **Dev-Fit** | REST API and workout-planning project. | [Live site](https://dev-fit-node-js-assignment.vercel.app/) | [GitHub](https://github.com/abirhosen30/Dev-fit-node-js-assignment) |
| **Bangla News 24** | News website project built with Next.js. | [Live site](https://bangla-news-24-six-iota.vercel.app) | [GitHub](https://github.com/abirhosen30/bangla-news-24) |

## Tech stack

- **Framework:** Next.js App Router
- **UI:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** React Icons
- **Deployment configuration:** Vercel

## Getting started

### Prerequisites

- Node.js compatible with the installed Next.js version
- npm

### Install and run locally

```bash
git clone https://github.com/abirhosen30/Portfolio-with-AI.git
cd my-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server using Webpack. |
| `npm run build` | Create a production build using Webpack. |
| `npm start` | Serve the production build. |
| `npm run lint` | Run ESLint. |
| `npx tsc --noEmit` | Check TypeScript types without emitting files. |

## Project structure

```text
my-portfolio/
├── public/
│   ├── profile.jpeg
│   ├── resume.pdf
│   └── projects/              # Project preview artwork
├── src/
│   ├── app/
│   │   ├── projects/[id]/     # Project detail route
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/            # Page sections and shared UI
│   └── data/
│       ├── portfolioData.ts   # Profile, skills, and education
│       └── projects.ts        # Project content and links
├── next.config.ts
├── package.json
└── vercel.json
```

## Customization

- **Profile, contact, skills, and education:** edit [`src/data/portfolioData.ts`](src/data/portfolioData.ts).
- **Project content and detail pages:** edit [`src/data/projects.ts`](src/data/projects.ts). Keep each project `id` aligned with its `/projects/[id]` route and provide a matching image under `public/projects/`.
- **Profile photo:** replace `public/profile.jpeg` and update `profilePhoto` in the portfolio data if the filename changes.
- **Resume:** replace `public/resume.pdf` with your resume PDF. The hero link downloads this file.
- **Appearance and shared styles:** edit `src/app/globals.css` and the relevant component in `src/components/`.
- **Page metadata:** update the metadata in `src/app/layout.tsx`.

## Deployment

This project is configured for Next.js and includes a Vercel configuration. To deploy with Vercel:

1. Push the repository to your Git provider.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Keep the detected Next.js framework and default build settings.
4. Deploy the project.

The production build can also be tested locally:

```bash
npm run build
npm start
```
