import type { MetadataRoute } from 'next'
import { getWorkProjectPaths } from '@/data/projects'
import siteConfig from './site.config'

export default function sitemap(): MetadataRoute.Sitemap {
  const workProjectPaths = getWorkProjectPaths()

  const dynamicRoutes = workProjectPaths.map((route) => ({
    url: `${siteConfig.SITE_URL}${route.path}`,
    lastModified: route.lastModified ?? siteConfig.PORTFOLIO_LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const staticRoutes = [
    {
      url: siteConfig.SITE_URL,
      lastModified: siteConfig.PORTFOLIO_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteConfig.SITE_URL}/work`,
      lastModified: siteConfig.PORTFOLIO_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.SITE_URL}/about`,
      lastModified: siteConfig.PORTFOLIO_LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${siteConfig.SITE_URL}/contact`,
      lastModified: siteConfig.PORTFOLIO_LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ] as const

  return [...staticRoutes, ...dynamicRoutes]
}
