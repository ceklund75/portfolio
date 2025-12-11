// app/work/page.tsx
import type { ReactElement } from 'react'
import { projects } from '@/data/projects'
import { styles } from '@/lib/styles'
import { ProjectCard } from '@/components/projects/ProjectCard'
import PageHeader from '@/components/layout/PageHeader'

export default function WorkPage(): ReactElement {
  const sortedProjects = [...projects].sort((a, b) => a.priority - b.priority)

  return (
    <section className={`${styles.container}`}>
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
