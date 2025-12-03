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
    role: 'Architecture & performance lead',
    summary:
      'Headless WordPress marketing site built with Next.js and Faust, tuned for performance and SEO.',
    highlights: [
      'Designed the data and routing architecture for a headless WordPress setup',
      'Optimized Core Web Vitals and runtime performance',
      'Implemented SEO-conscious content and URL structures',
    ],
    tech: ['Next.js', 'Faust.js', 'WordPress', 'Node.js', 'Vercel'],
    featured: true,
    priority: 1,
    links: {
      live: 'https://example.com', // placeholder for now
    },
  },
]
