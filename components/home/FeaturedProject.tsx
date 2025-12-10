// components/home/FeaturedProject.tsx
import type { ReactElement } from 'react'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { styles } from '@/lib/styles'
import { style } from 'motion/react-client'

export function FeaturedProject(): ReactElement {
  const featured = projects.find((project) => project.featured)

  if (!featured) {
    return <section />
  }

  return (
    <section className={styles.section}>
      <header className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-tight">Featured Project</h2>
        <a href="/work" className={styles.link.tiny}>
          View All
        </a>
      </header>

      <ProjectCard project={featured} />
    </section>
  )
}
