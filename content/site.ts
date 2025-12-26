/* Site-wide content and settings */
const SITE_URL = 'https://cmeklund.com'

export const siteContent = {
  //personal info
  name: 'Christopher Eklund',
  shortName: 'Chris Eklund',
  title: 'Christopher Eklund - Full-Stack Web Developer & Consultant',
  description:
    'Full-stack web developer & consultant specializing in React, Next.js, and WordPress modernization. I build and upgrade performance and SEO-critical sites for agencies, PR/reputation firms, and professional services, often using WordPress or other CMSs as content backends.',
  url: 'https://cmeklund.com',
  ogImage: 'https://cmeklund.com/christopher-eklund-fse-og.webp',

  //nav items
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  copyright: `© ${new Date().getFullYear()}`,
  //contact info
  contact: {
    name: 'Christopher Eklund',
    email: 'chris@cmeklund.com',
    linkedin: 'https://linkedin.com/in/cmeklund',
    github: 'https://github.com/ceklund75',
  },
} as const

export const jsonLd = {
  siteJsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: 'Christopher Eklund - Full-Stack Web Developer & Consultant',
    description:
      'Full-stack web developer & consultant specializing in React, Next.js, and WordPress modernization for performance and SEO-critical sites.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Christopher Eklund Portfolio',
    },
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Christopher Eklund',
      jobTitle: 'Full-Stack Web Developer & Consultant',
      url: SITE_URL,
      sameAs: ['https://linkedin.com/in/cmeklund', 'https://github.com/ceklund75'],
    },
  },
  personJsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Christopher Eklund',
    givenName: 'Christopher',
    familyName: 'Eklund',
    url: `${SITE_URL}/about`,
    jobTitle: 'Full-Stack Web Developer & Consultant',
    description:
      'Full-stack web developer & consultant specializing in React, Next.js, and WordPress modernization for content-heavy, SEO-critical web platforms.',
    worksFor: {
      '@type': 'Organization',
      name: 'Independent / Freelance',
    },
    homeLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Redondo Beach',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
    },
    sameAs: ['https://linkedin.com/in/cmeklund', 'https://github.com/ceklund75'],
  },
  workJsonLd: {
    '@context': 'https://schema.org',
    '@type': ['WebPage', 'CollectionPage'],
    '@id': `${SITE_URL}/work#webpage`,
    url: `${SITE_URL}/work`,
    name: 'Work – Christopher Eklund',
    description:
      'Selected web development projects by Christopher Eklund, including React and Next.js builds, WordPress modernization, headless marketing sites, performance refactors, and custom tools.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
    },
    inLanguage: 'en',
  },
  contactJsonLd: {
    '@context': 'https://schema.org',
    '@type': ['WebPage', 'ContactPage'],
    '@id': `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: 'Contact – Christopher Eklund',
    description:
      'Contact Christopher Eklund about web development consulting, WordPress modernization, React/Next.js projects, or ongoing performance and SEO-focused support.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
    },
    inLanguage: 'en',
  },
} as const
