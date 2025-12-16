import { Metadata } from 'next'

export const SITE_CONFIG = {
  name: 'Christopher Eklund',
  title: 'Christopher Eklund – Full-Stack Engineer',
  description: 'Full-stack engineer focused on fast, SEO-critical web platforms.',
  url: 'https://cmeklund.com',
  ogImage: 'https://cmeklund.com/christopher-eklund-fse-og.webp',
}

function getCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_CONFIG.url}${cleanPath}`
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    template: '%s – Christopher Eklund',
    default: SITE_CONFIG.title,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export function createPageMetadata(
  title: string,
  description: string,
  pathname: string,
  image?: string,
): Metadata {
  const ogImage = image || SITE_CONFIG.ogImage
  const canonicalUrl = getCanonicalUrl(pathname)

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export function createDynamicMetadata(
  title: string,
  description: string,
  pathname: string,
  image?: string,
): Metadata {
  return createPageMetadata(title, description, pathname, image)
}

export function getProjectPathname(slug: string): string {
  return `/work/${slug}`
}
