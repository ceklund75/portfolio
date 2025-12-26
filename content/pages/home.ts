import { siteContent } from '../site'

export const homeContent = {
  hero: {
    eyebrow: 'Christopher Eklund – Full-stack web developer & consultant',
    headline: 'React, Next.js & WordPress modernization for performance and SEO-critical sites.',
    description: `Full-stack web developer & consultant specializing in React, Next.js, and WordPress modernization. I upgrade and build content-heavy sites with modern React/Next.js frontends and WordPress or other CMSs as content backends, with a focus on performance, technical SEO, and reliable deployment. Recent work includes headless WordPress + Next.js builds, marketing site refactors, and custom WordPress solutions for reputation-sensitive and professional services clients.`,
    services: {
      title: 'What I do',
      items: [
        'Modernize and refactor existing WordPress sites (themes, performance, Core Web Vitals)',
        'Build React & Next.js frontends (including headless WordPress setups)',
        'Improve SEO, Core Web Vitals, and analytics foundations',
        'Provide ongoing care and optimization for critical marketing and content sites',
      ],
    },
    cta: {
      primary: {
        label: 'View my work',
        href: '/work',
      },
      secondary: {
        label: 'Get in touch',
        href: '/contact',
      },
    },
  },
} as const

export const homeMetaData = {
  title: siteContent.title,
  description: siteContent.description,
  pathname: '/',
  image: siteContent.ogImage,
} as const
