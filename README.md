# NEURIVANTA

A responsive, multi-page brand site built with Next.js App Router, React, TypeScript, and Tailwind CSS. The current routes are content-first and statically rendered by Next.js. They use Server Components by default, so client-side JavaScript is only needed when an interactive feature is added.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — brand landing page
- `/about` — brand story and principles
- `/contact` — static contact page with an email link

## Project structure

- `src/app/` — route pages, shared layout, metadata, and global styles
- `src/components/` — shared site header and footer
- `src/lib/site.ts` — brand details and navigation data
- `public/` — static assets

## Brand settings

The contact page uses `hello@neurivanta.com` as a starter address. Set `NEXT_PUBLIC_CONTACT_EMAIL` in your environment (or update `src/lib/site.ts`) to use the final contact address. `.env.example` shows the variable.

The page copy is intentionally broad because the brand’s products and services have not been defined yet. Update the content in `src/app/` when the positioning is ready.

## Grow into dynamic features

The site does not enable static-export mode. Its current pages are prerendered, while the standard Next.js runtime remains available for future data-backed pages, route handlers, forms, or authentication. Add client components only for UI that needs browser interaction.

## Build and run

```bash
npm run build
npm run start
```

The app was scaffolded with Next.js 16.4.6, React 19.3, and Tailwind CSS 4.3.3. Dependency versions are recorded in `package-lock.json`.
