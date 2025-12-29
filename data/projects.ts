import siteConfig from '@/app/site.config'

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
  updatedAt?: string
  hideFromSitemap?: boolean
}

export type WorkRouteInfo = {
  path: string
  lastModified?: string
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
      'Optimized Core Web Vitals: 98 Lighthouse Performance score, <3s LCP, 0 CLS',
      'Implemented SEO-aware URL structures, metadata, and content organization',
    ],
    tech: ['Next.js', 'Faust.js', 'WordPress', 'Node.js', 'WP Engine Atlas'],
    featured: true,
    priority: 1,
    links: {
      live: 'https://digitalstrategyltd.com', // placeholder for now
    },
    updatedAt: '2025-12-11T00:00:00.000Z',
    hideFromSitemap: false,
  },

  {
    id: 'personal-nextjs-portfolio',
    slug: 'personal-nextjs-portfolio',
    title: 'Personal Portfolio with Next.js & TypeScript',
    role: 'Solo full-stack developer',
    summary:
      'Personal portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and a custom theming system to showcase full-stack and SEO-focused work.',
    highlights: [
      'Implemented a typed project data model and shared UI components using Next.js App Router',
      'Built a custom light/dark/system theme switcher with React context and Tailwind CSS v4',
      'Structured the codebase with reusable layout, home, and project components for future expansion',
      'Configured ESLint and Prettier with Tailwind class sorting to enforce consistent code quality',
      'Optimized Core Web Vitals: 99 Lighthouse Performance score, <2.5s LCP, 0 CLS',
      'Enforced strict TypeScript across all components with zero any types and fully typed props/API responses.',
    ],
    tech: ['Next.js 16', 'TypeScript', 'React', 'Tailwind CSS v4', 'Motion'],
    featured: false,
    priority: 2,
    links: {
      live: 'https://cmeklund.com',
      repo: 'https://github.com/ceklund75/portfolio',
    },
    updatedAt: '2025-12-23T00:00:00.000Z',
    hideFromSitemap: false,
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
    updatedAt: '2025-12-11T00:00:00.000Z',
    hideFromSitemap: true,
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
    updatedAt: '2025-12-11T00:00:00.000Z',
    hideFromSitemap: true,
  },
  {
    id: 'client-list-plugin',
    slug: 'client-list-plugin',
    title: 'Client List Shortcode Plugin for WordPress',
    role: 'Solo plugin developer',
    summary:
      'Lightweight WordPress plugin that lets editors manage a text-based client roster in the Media Library and render it via a [client_list] shortcode, with optional A-Z tabbed navigation and accessible three-column layout.',
    highlights: [
      'Built a configurable shortcode that reads from an uploaded text file, so non-technical users can update client names without touching templates or code.',
      'Implemented an admin settings screen using the WordPress Settings API and Media Library integration to safely select and store the client list file URL.',
      'Rendered clients in an accessible, responsive three-column grid with optional A-Z tabs, including logic to group names by initial and handle numeric/edge cases.',
      'Added filters, sanitization, and pluggable helpers (cls_client_list_clients, cls_client_list_filtered_clients) so other developers can extend the output and integrate the plugin into larger themes.',
    ],
    tech: ['WordPress', 'PHP', 'JavaScript', 'Shortcodes'],
    featured: false,
    priority: 4,
    links: {
      repo: 'https://github.com/ceklund75/client-list-shortcode',
    },
    updatedAt: '2025-12-29T00:00:00.000Z',
    hideFromSitemap: true,
  },
]

export function getWorkProjectPaths(): WorkRouteInfo[] {
  const visibleProjects = projects.filter((project) => !project.hideFromSitemap)
  return visibleProjects.map((project) => {
    return {
      path: `/work/${project.slug}`,
      lastModified: project.updatedAt || siteConfig.PORTFOLIO_LAST_UPDATED,
    }
  })
}
