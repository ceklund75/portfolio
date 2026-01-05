import { ReactElement } from 'react'
import { Hero } from '@/components/home/Hero'
import { FeaturedProject } from '@/components/home/FeaturedProject'
import { ProjectListPreview } from '@/components/home/ProjectListPreview'
import { styles } from '@/lib/styles'
import { jsonLd } from '@/content/site'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata(
  'Christopher Eklund - Full-Stack Web Developer',
  'Full-stack web developer focused on fast, SEO-critical web platforms.',
  '/',
)

export default function HomePage(): ReactElement {
  return (
    <div className={`${styles.container} z-auto mx-2 px-4 sm:mx-auto`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.siteJsonLd) }}
      />
      <Hero />
      <FeaturedProject />
      <ProjectListPreview />
    </div>
  )
}
