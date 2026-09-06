# SparkleClean Co.

> Laundry, done right.

A static marketing and landing page for SparkleClean Co., a fictional Portland-based laundry service. Built with Next.js (App Router) and styled with Tailwind CSS. All site content is driven by a single data file (`data/site.ts`).

## Features

- Single-page landing site with Hero, Services, About, Pricing, and Contact sections
- Content-driven layout -- edit `data/site.ts` to change services, pricing, hours, and contact info
- Contact form with client-side simulated confirmation (no backend)
- Fully static production build, deployable to any static host
- Respects `prefers-reduced-motion` for the hero entrance animation

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 15.5.25 (App Router) |
| React | 18.3.x |
| TypeScript | 5.7.x |
| Tailwind CSS | 3.4.x |
| Vitest | 3 + @testing-library/react 16 + @testing-library/jest-dom 6 |
| ESLint | 9 (flat config) |

Fonts are loaded via `next/font/google` and self-hosted at build time:
- **Fraunces** -- display serif for headings
- **Inter** -- body sans-serif

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the site at `http://localhost:3000`.

### Production Build & Serve

```bash
npm run build
npm run start
```

The build output is fully static and can be deployed to any platform that supports Next.js (Vercel, Netlify, Cloudflare Pages, etc.).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest in watch mode |
| `npm run test -- --run` | Run Vitest once (CI mode) |
| `npm run typecheck` | Type-check with `tsc --noEmit` |

## Testing

Tests live in `components/__tests__/site.test.tsx` (16 tests). The test environment uses jsdom with global test APIs enabled.

```bash
npm run test -- --run
```

Configuration is in `vitest.config.ts` and `vitest.setup.ts`.

## Linting & Type Checking

```bash
npm run lint
npm run typecheck
```

ESLint uses a flat config (`eslint.config.mjs`) with `next/core-web-vitals` and `next/typescript` via `FlatCompat`.

## Project Structure

```
app/
  layout.tsx          # Root layout -- fonts, metadata, Header/Footer shell, globals.css
  page.tsx            # Assembles all sections into the landing page
  globals.css         # Tailwind directives, base design tokens, reduced-motion support
  icon.svg            # Brand favicon (tide drop)

components/
  Header.tsx
  Hero.tsx
  Services.tsx
  About.tsx
  Pricing.tsx
  Contact.tsx
  ContactForm.tsx     # "use client" -- client-side form with simulated confirmation
  Footer.tsx
  __tests__/
    site.test.tsx

data/
  site.ts             # Site name, tagline, contact info, services, pricing, testimonial

tailwind.config.ts    # Design tokens (colors, fonts)
next.config.mjs       # React strict mode, image remote patterns (Unsplash)
vitest.config.ts      # Vitest configuration
vitest.setup.ts       # Test setup (jest-dom matchers)
eslint.config.mjs     # ESLint flat config
tsconfig.json         # TypeScript config with path aliases
```

## Design System

Defined in `tailwind.config.ts` and `globals.css`.

**Colors:**

| Token | Values | Usage |
|-------|--------|-------|
| `mist` | 50 `#fbfcfa`, 100 `#f4f7f3`, 200 `#e7ede4` | Warm off-white backgrounds |
| `ink` | DEFAULT `#1d2b2e`, soft `#4a5a5e`, faint `#6d7c80` | Text and UI elements |
| `tide` | 50 `#eef6f4` -- 600 `#348074` (accent: 400 `#5bb4a7`, 500 `#429b8f`) | Teal/water accent |

**Fonts:**

- `font-display` -- Fraunces (headings), fallback: Georgia, serif
- `font-body` -- Inter (body text), fallback: system-ui, sans-serif

**Accent mark:** A small `tide-500` dot serves as a quiet label marker in section headers.

**Motion:** A single hero entrance animation, fully disabled under `prefers-reduced-motion`.

**Images:** Remote images from Unsplash are loaded via `next/image` (remote pattern configured for `images.unsplash.com`).

## WSL / Windows Environment Note

This project is developed on Windows with WSL. Node.js is a Windows install (`C:\Program Files\nodejs\node.exe`), and `node`/`npm` are not on the WSL PATH. Use this wrapper pattern for all npm commands:

```bash
NODE="/mnt/c/Program Files/nodejs/node.exe"
NPMCLI='C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js'

"$NODE" "$NPMCLI" run dev
"$NODE" "$NPMCLI" test -- --run
"$NODE" "$NPMCLI" run typecheck
```

Contributors on a standard (non-WSL) setup can use `npm` / `npx` directly.

## Deployment

The project produces a fully static build via `npm run build`. Deploy the output to any static hosting platform that supports Next.js (Vercel, Netlify, Cloudflare Pages, etc.).

## Credits

- Photos via [Unsplash](https://unsplash.com/) (remote-linked, not bundled)
- Remote image pattern configured in `next.config.mjs` for `images.unsplash.com`

## Remote

Repository: https://github.com/marcdalangin/sample-project (branch: `main`)
