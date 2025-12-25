import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import { AboutContent } from '@/components/about/AboutContent'
import { createTypedMetadata } from '@/lib/metadata'
import { aboutMetaData } from '@/content/pages/about'

export const metadata: Metadata = createTypedMetadata(aboutMetaData)

export default function AboutPage(): ReactElement {
  return <AboutContent />
}
