/* Site-wide content and settings */

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
