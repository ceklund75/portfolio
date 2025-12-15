// data/projects.ts

export type ProjectLink = {
  live?: string
  repo?: string
}

export type Project = {
  id: string
  slug: string
  title: string
  role: string
  summary: string
  highlights: string[]
  tech: string[]
  featured: boolean
  priority: number
  links?: ProjectLink
}

export const projects: Project[] = [
  {
    id: 'faust-nextjs-site',
    slug: 'faust-nextjs-site',
    title: 'Headless Marketing Site with Next.js & Faust',
    role: 'Solo full-stack developer',
    summary:
      'Designed and built a headless WordPress marketing site with Next.js and Faust, focusing on clean architecture, performance, and SEO.',
    highlights: [
      'Owned the project end to end: architecture, implementation, deployment, and monitoring',
      'Designed a headless WordPress + Faust data model and routing strategy for flexible content',
      'Optimized image loading, caching, and Core Web Vitals to keep pages feeling fast',
      'Implemented SEO-aware URL structures, metadata, and content organization',
    ],
    tech: ['Next.js', 'Faust.js', 'WordPress', 'Node.js', 'WP Engine Atlas'],
    featured: true,
    priority: 1,
    links: {
      live: 'https://digitalstrategyltd.com', // placeholder for now
    },
  },

  {
    id: 'personal-nextjs-portfolio',
    slug: 'personal-nextjs-portfolio',
    title: 'Personal Portfolio with Next.js & TypeScript',
    role: 'Solo full-stack developer',
    summary:
      'In-progress personal portfolio built with Next.js 15, TypeScript, Tailwind CSS v4, and a custom theming system to showcase full-stack and SEO-focused work.',
    highlights: [
      'Implemented a typed project data model and shared UI components using Next.js App Router',
      'Built a custom light/dark/system theme switcher with React context and Tailwind CSS v4',
      'Structured the codebase with reusable layout, home, and project components for future expansion',
      'Configured ESLint and Prettier with Tailwind class sorting to enforce consistent code quality',
    ],
    tech: ['Next.js 15', 'TypeScript', 'React', 'Tailwind CSS v4', 'Motion'],
    featured: false,
    priority: 2,
    links: {
      live: 'https://cmeklund.com',
      repo: 'https://github.com/ceklund75/portfolio',
    },
  },
  {
    id: 'quantum-encryption-marketing-site',
    slug: 'quantum-encryption-marketing-site',
    title: 'Quantum Encryption Marketing Site Refactor & Lead Flow',
    role: 'Consulting web engineer',
    summary:
      'Inherited and refactored a newly launched corporate marketing site for a quantum-secure encryption solutions provider, restructuring templates and rebuilding lead capture flows around Marketo and Salesforce.',
    highlights: [
      'Took over an agency-built WordPress + Laravel Blade + Tailwind CSS codebase and stabilized it for ongoing product marketing needs',
      'Reworked core page templates and built new ones from partial Figma specs, improving maintainability and visual consistency',
      'Implemented Marketo form integrations across the site, wiring submissions into Salesforce according to marketing operations requirements',
      'Simplified and standardized lead capture forms so marketing could run campaigns with cleaner data and fewer friction points',
    ],
    tech: ['WordPress', 'Laravel Blade', 'Tailwind CSS', 'Marketo', 'Salesforce'],
    featured: false,
    priority: 3,
    links: {
      live: 'https://qrypt.com',
    },
  },
  {
    id: 'dues-calculator-plugin',
    slug: 'dues-calculator-plugin',
    title: 'Union Dues Calculator WordPress Plugin',
    role: 'Solo plugin developer',
    summary:
      'Custom WordPress plugin that calculates union dues based on configurable rules and renders an embeddable calculator via shortcode for use on campaign and informational sites.',
    highlights: [
      'Designed a reusable plugin instead of hard-coding calculator logic into individual themes or pages',
      'Implemented a shortcode-based calculator UI so non-technical editors can embed it anywhere in WordPress content',
      'Encapsulated the dues calculation logic in PHP functions to keep business rules testable and easy to adjust',
      'Handled user input and output formatting to present clear, predictable results for site visitors',
    ],
    tech: ['WordPress', 'PHP', 'JavaScript', 'Shortcodes'],
    featured: false,
    priority: 4,
    links: {
      repo: 'https://github.com/ceklund75/dues-calculator-plugin',
    },
  },
]
