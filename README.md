# Christopher Eklund – Portfolio

Senior full‑stack engineer focused on fast, SEO‑critical web platforms. This is a personal portfolio site built with the Next.js App Router, TypeScript, Tailwind CSS v4, and Motion for animations.[web:72][web:116][web:125]

> Note: Content sections (case studies, detailed writeups, MDX pages) are currently work in progress and will be expanded over time.[web:134][web:148]

## Tech stack

- **Framework:** Next.js 15 with App Router (`app/` directory)[web:72][web:109]
- **Language:** TypeScript with strict typing for props and data models[web:159]
- **Styling:** Tailwind CSS v4 with CSS‑first config using `@import`, `@theme`, and `@layer` in global styles[web:116]
- **Animation:** Motion (`motion/react`) for hero, project cards, and mobile navigation animations[web:125]
- **Fonts:** `Geist`, `Geist Mono`, and `TASA Orbiter` via `next/font` for consistent typography[web:72]
- **Linting/Formatting:** ESLint (flat config) with `eslint-config-next` and `eslint-plugin-prettier`, plus Prettier and `prettier-plugin-tailwindcss` for class sorting[web:159]
- **Icons:** `lucide-react` for lightweight, consistent iconography in navigation and theme controls[web:152]

## Features

- **Modern theming**
  - Light, dark, and system modes managed by a custom `ThemeContext`
  - No initial flash of incorrect theme using a small inline script and deferred hydration
  - Compact segmented control theme switcher using sun, monitor, and moon icons

- **Responsive layout & navigation**
  - Sticky header with desktop navigation and a mobile hamburger menu
  - Animated mobile menu using Motion variants for subtle slide and fade transitions[web:125]
  - Layout containers tuned for readable line lengths on large and small screens

- **Portfolio content model**
  - Typed `Project` model backed by `projects.ts` for consistent data across the app
  - Projects include headless marketing work, this portfolio, and prior custom builds
  - Reusable `ProjectCard` used on the home page, work index, and project detail routes

- **Design system**
  - Centralized Tailwind class patterns in `lib/styles.ts` for layout, typography, and cards
  - Palette built around neutral `slate` tones with a single primary accent for both themes
  - High‑level content configuration in `content/` (for example `content/site.ts` and `content/pages/home.ts`) to keep copy and code separate

## Running the project

### Prerequisites

- Node.js 18 or newer[web:72]
- npm, pnpm, or yarn as a package manager[web:159]

### Install dependencies

npm install

text

If you encounter integrity or cache issues, clear the npm cache and retry:

npm cache clean --force
npm install

text

### Development

npm run dev

text

Then open:

- http://localhost:3000

### Production build

npm run build
npm start

text

## Project structure

app/
layout.tsx # Root layout, fonts, ThemeProvider, header
page.tsx # Home (hero, featured project, project previews)
work/
page.tsx # Work index
[slug]/page.tsx # Project detail pages
about/page.tsx
contact/page.tsx

components/
layout/SiteHeader.tsx # Desktop + mobile nav, theme toggle
Hero.tsx # Animated hero section
ProjectCard.tsx
motion/ # Motion wrappers (MotionDiv, MotionSection, etc.)

context/
ThemeContext.tsx # Theme mode, resolved theme, and system preference

content/
site.ts # Global site content (nav, contact, metadata)
pages/
home.ts # Home hero and intro copy
work.ts # Work page intro, labels, etc.

data/
projects.ts # Typed Project[] data

text

This structure keeps routing, layout, theming, and content clearly separated, which aligns with common recommendations for Next.js portfolio and documentation projects.[web:136][web:139][web:150]
