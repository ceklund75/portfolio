'use client'
import { ReactElement } from 'react'
import Link from 'next/link'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { projects } from '@/data/projects'
import { styles } from '@/lib/styles'
import { MotionSection } from '@/components/motion'
import { fadeIn } from '@/lib/animations'

export function ProjectListPreview(): ReactElement {
  const nonFeaturedProjects = projects
    .filter((project) => !project.featured)
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 3)

  if (nonFeaturedProjects.length === 0) return <section />

  return (
    <MotionSection initial="hidden" animate="visible" variants={fadeIn} className="space-y-4">
      <header className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-tight">Other Work</h2>
        <Link href="/work" className={` ${styles.link.tiny} `}>
          See All Projects
        </Link>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {nonFeaturedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} compact index={index} />
        ))}
      </div>
    </MotionSection>
  )
}
