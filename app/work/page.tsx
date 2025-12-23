// app/work/page.tsx
import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { styles } from '@/lib/styles'
import { ProjectCard } from '@/components/projects/ProjectCard'
import PageHeader from '@/components/layout/PageHeader'
import { jsonLd } from '@/content/site'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata(
  'Work',
  'Selected projects from Christopher Eklund, including headless marketing sites, performance-focused refactors, and custom tools for high-stakes communications and SEO.',
  '/work',
)
export default function WorkPage(): ReactElement {
  const sortedProjects = [...projects].sort((a, b) => a.priority - b.priority)

  return (
    <section className={`${styles.container}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.workJsonLd) }}
      />
      <PageHeader
        title="Work"
        description="Selected projects spanning full-stack engineering, performance, and SEO-focused web platforms."
      />

      <div className={`${styles.section} space-y-8 md:space-y-12`}>
        {sortedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
