import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact/ContactContent'

export const metadata: Metadata = {
  title: 'Contact - Christopher Eklund',
  description:
    'Contact Christopher Eklund about full-stack engineering roles, freelance projects, or collaborations on SEO-critical web platforms.',
}

export default function ContactPage(): ReactElement {
  return <ContactContent />
}
