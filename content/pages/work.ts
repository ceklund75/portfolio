import { siteContent } from '../site'

export const workContent = {
  pageHeader: {
    title: siteContent.name,
    description:
      'Selected projects spanning full-stack engineering, performance, and SEO-focused web platforms.',
  },
} as const

export const workMetaData = {
  title: 'Work',
  description:
    'Selected projects from Christopher Eklund, including headless marketing sites, performance-focused refactors, and custom tools for high-stakes communications and SEO.',
  pathname: '/work',
} as const
