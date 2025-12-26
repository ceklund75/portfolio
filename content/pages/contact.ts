import { siteContent } from '../site'

export const contactContent = {
  pageHeader: {
    title: siteContent.title,
    description: 'Open to individual contributor roles and select freelance projects.',
  },
  paragraphs: [
    `The easiest way to reach me is by email. If you'd like to talk about a role, a project,
            or how I can help with performance, SEO, or technical architecture for high-stakes web
            platforms, feel free to get in touch.`,
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
    'Contact Christopher Eklund about full-stack engineering roles, freelance projects, or collaborations on SEO-critical web platforms.',
  pathname: '/contact',
} as const
