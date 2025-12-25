import { Metadata } from 'next'
import { siteContent } from '@/content/site'

type PageMetadataInput = {
  title: string
  description: string
  pathname: string
  image?: string
}

function getCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${siteContent.url}${cleanPath}`
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteContent.url),
  title: {
    template: `%s – ${siteContent.name}`,
    default: siteContent.title,
  },
  description: siteContent.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteContent.url,
    siteName: siteContent.name,
    title: siteContent.title,
    description: siteContent.description,
    images: [
      {
        url: siteContent.ogImage,
        width: 1200,
        height: 630,
        alt: siteContent.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.title,
    description: siteContent.description,
    images: [siteContent.ogImage],
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
  const ogImage = image || siteContent.ogImage
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

export function createTypedMetadata({
  title,
  description,
  pathname,
  image,
}: PageMetadataInput): Metadata {
  return createPageMetadata(title, description, pathname, image)
}

export function getProjectPathname(slug: string): string {
  return `/work/${slug}`
}
