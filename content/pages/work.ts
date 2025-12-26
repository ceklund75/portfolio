import { siteContent } from '../site'

export const workContent = {
  pageHeader: {
    title: siteContent.name,
    description:
      'Selected projects spanning React and Next.js builds, WordPress modernization, performance optimization, and SEO-focused web platforms.',
  },
} as const

export const workMetaData = {
  title: 'Work',
  description:
    'Selected projects from Christopher Eklund, including React and Next.js sites, WordPress modernization, headless marketing builds, performance-focused refactors, and custom tools for SEO-critical, content-heavy businesses.',
  pathname: '/work',
} as const
