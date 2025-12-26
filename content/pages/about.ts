import { siteContent } from '../site'

export const aboutContent = {
  pageHeader: {
    title: siteContent.name,
    description:
      'Full-stack web developer & consultant building React, Next.js, and WordPress-powered sites for performance- and SEO-critical, content-heavy platforms.',
  },
  images: {
    mobile: {
      source: '/Christopher-Eklund-mobile.webp',
      alt: siteContent.name,
      width: 480,
      height: 480,
      sizes: '(max-width: 767px) 100vw, 0px',
      className: 'h-auto w-full max-w-md rounded-lg object-cover',
    },
    desktop: {
      source: '/Christopher-Eklund.webp',
      alt: siteContent.name,
      width: 300,
      height: 650,
      sizes: '(max-width: 767px) 100vw, 300px',
      className: 'h-auto w-full max-w-65 rounded-lg object-cover',
    },
  },
  paragraphs: [
    `I'm Chris Eklund, a full-stack web developer & consultant who builds and modernizes content-heavy
web platforms for work that can't afford to break. Over the last 15+ years, I've designed and maintained
sites that need to be fast, stable, and reliable for corporate communications, advocacy campaigns,
reputation-sensitive matters, and high-stakes client work.`,
    `Most of my work sits where modern web development meets search and reputation. I use
React, Next.js, TypeScript, Node.js, and WordPress to ship sites, automations, and
dashboards, then tie them into technical SEO, analytics, and reporting so teams can see
how their message is actually landing.`,
    `I'm used to picking up projects when the brief is fuzzy and the stakes are high.
Executives, lawyers, and communications teams hand me complex requirements, and my job
is to turn that into a practical technical plan: standing up a new marketing or campaign site,
modernizing an existing WordPress install, wiring up monitoring and reporting, or hardening a system
so it behaves predictably under load.`,
    `Earlier in my career, I built operations and data tools for telecom companies and led
software development and SEO at PR and reputation firms. That mix of infrastructure,
product, and search experience shapes how I think about performance, reliability, and
what shows up when someone types a name into a search bar..`,
  ],
  focusAreas: [
    `Full-stack web development with React, Next.js, TypeScript, and Node.js`,
    `WordPress modernization and headless WordPress/content-driven architectures`,
    `Performance tuning and Core Web Vitals for content-heavy sites`,
    `Technical SEO, search landscape, and lead capture flows`,
  ],
} as const

export const aboutMetaData = {
  title: 'About',
  description:
    'Background, experience, and focus areas for Christopher Eklund, a full-stack web developer & consultant specializing in React, Next.js, and WordPress modernization for SEO-critical web platforms.',
  pathname: '/about',
  image: siteContent.ogImage,
} as const
