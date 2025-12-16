import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import { AboutContent } from '@/components/about/AboutContent'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata(
  'About - Christopher Eklund ',
  'Background, experience, and focus areas for Christopher Eklund, a full-stack engineer working on SEO-critical web platforms.',
  '/about',
)

export default function AboutPage(): ReactElement {
  return <AboutContent />
}
