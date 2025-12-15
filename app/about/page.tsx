import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import { AboutContent } from '@/components/about/AboutContent'

export const metadata: Metadata = {
  title: 'About - Christopher Eklund',
  description:
    'Background, experience, and focus areas for Christopher Eklund, a full-stack engineer working on SEO-critical web platforms.',
}

export default function AboutPage(): ReactElement {
  return <AboutContent />
}
