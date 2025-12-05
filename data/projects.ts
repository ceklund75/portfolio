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
    role: 'Solo full‑stack developer',
    summary:
      'Designed and built a headless WordPress marketing site with Next.js and Faust, focusing on clean architecture, performance, and SEO.',
    highlights: [
      'Owned the project end to end: architecture, implementation, deployment, and monitoring',
      'Designed a headless WordPress + Faust data model and routing strategy for flexible content',
      'Optimized image loading, caching, and Core Web Vitals to keep pages feeling fast',
      'Implemented SEO‑aware URL structures, metadata, and content organization',
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
    role: 'Solo full‑stack developer',
    summary:
      'In‑progress personal portfolio built with Next.js 15, TypeScript, Tailwind CSS v4, and a custom theming system to showcase full‑stack and SEO‑focused work.',
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
      live: 'https://your-portfolio-url.com',
      repo: 'https://github.com/your-username/your-portfolio-repo',
    },
  },
  {
    id: 'ecommerce-performance-optimization',
    slug: 'ecommerce-performance-optimization',
    title: 'E-commerce Performance Optimization',
    role: 'Lead performance engineer',
    summary:
      'Led performance optimization for a high-traffic e-commerce platform, improving load times and user experience during peak shopping periods.',
    highlights: [
      'Conducted comprehensive performance audits to identify bottlenecks',
      'Implemented code-splitting and lazy loading to enhance page load speeds',
      'Optimized server response times and database queries for faster data retrieval',
      'Collaborated with the UX team to ensure performance improvements aligned with user experience goals',
    ],
    tech: ['React', 'Node.js', 'Webpack', 'Lighthouse', 'New Relic'],
    featured: false,
    priority: 3,
    links: {
      live: 'https://example-ecommerce.com', // placeholder
    },
  },
  {
    id: 'ecommerce-performance-optimization-2',
    slug: 'ecommerce-performance-optimization-4',
    title: 'E-commerce Performance Optimization',
    role: 'Lead performance engineer',
    summary:
      'Led performance optimization for a high-traffic e-commerce platform, improving load times and user experience during peak shopping periods.',
    highlights: [
      'Conducted comprehensive performance audits to identify bottlenecks',
      'Implemented code-splitting and lazy loading to enhance page load speeds',
      'Optimized server response times and database queries for faster data retrieval',
      'Collaborated with the UX team to ensure performance improvements aligned with user experience goals',
    ],
    tech: ['React', 'Node.js', 'Webpack', 'Lighthouse', 'New Relic'],
    featured: false,
    priority: 4,
    links: {
      live: 'https://example-ecommerce.com', // placeholder
    },
  },
]
