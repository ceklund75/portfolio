// app/work/page.tsx
import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { styles } from '@/lib/styles'
import { ProjectCard } from '@/components/projects/ProjectCard'
import PageHeader from '@/components/layout/PageHeader'
import { jsonLd } from '@/content/site'
import { createPageMetadata } from '@/lib/metadata'
import { workContent, workMetaData } from '@/content/pages/work'

export const metadata: Metadata = createPageMetadata(
  workMetaData.title,
  workMetaData.description,
  workMetaData.pathname,
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
        title={workContent.pageHeader.title}
        description={workContent.pageHeader.description}
      />

      <div className={`${styles.section} space-y-8 md:space-y-12`}>
        {sortedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
