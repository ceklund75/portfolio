import { siteContent } from '../site'

export const contactContent = {
  pageHeader: {
    title: 'Contact',
    description:
      'Open to web development consulting, WordPress modernization, React/Next.js projects, and ongoing performance and SEO-focused support.',
  },
  paragraphs: [
    `The easiest way to reach me is by email. If you'd like to talk about a project or how I can help with WordPress modernization, React/Next.js builds, performance, SEO, or technical architecture for content-heavy sites, feel free to get in touch.`,
  ],
  links: [
    {
      label: 'Email',
      url: 'mailto:chris@cmeklund.com',
      linkName: 'chris@cmeklund.com',
      target: undefined,
      rel: undefined,
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/cmeklund',
      linkName: 'linkedin.com/in/cmeklund',
      target: '_blank',
      rel: 'noopener',
    },
    {
      label: 'Github',
      url: 'https://github.com/ceklund75',
      linkName: 'github.com/ceklund75',
      target: '_blank',
      rel: 'noopener',
    },
  ],
} as const

export const contactMetaData = {
  title: 'Contact',
  description:
    'Contact Christopher Eklund about web development consulting, WordPress modernization, React/Next.js projects, or collaborations on performance and SEO-critical web platforms.',
  pathname: '/contact',
} as const
