import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact/ContactContent'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata(
  'Contact - Christopher Eklund',
  'Contact Christopher Eklund about full-stack engineering roles, freelance projects, or collaborations on SEO-critical web platforms.',
  '/contact',
)

export default function ContactPage(): ReactElement {
  return <ContactContent />
}
