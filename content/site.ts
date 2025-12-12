/* Site-wide content and settings */
const SITE_URL = 'https://cmeklund.com'

export const siteContent = {
  //personal info
  name: 'Christopher Eklund',
  shortName: 'Chris Eklund',
  title: 'Christopher Eklund | Full-Stack Engineer',
  description: 'Senior full-stack engineer focused on fast, SEO-critical web platforms.',

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
    name: 'Christopher Eklund – Full-Stack Engineer',
    description: 'Senior full-stack engineer focused on fast, SEO-critical web platforms.',
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
      jobTitle: 'Senior Full-Stack Engineer',
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
    jobTitle: 'Senior Full-Stack Engineer',
    description:
      'Senior full-stack engineer and technology lead building content-heavy, SEO-critical web platforms.',
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
      'Selected engineering projects by Christopher Eklund, including headless marketing sites, performance refactors, and custom tools.',
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
      'Contact Christopher Eklund about full-stack engineering roles, freelance projects, or collaborations.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
    },
    inLanguage: 'en',
  },
} as const
