import { ReactElement } from 'react'
import Link from 'next/link'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { projects } from '@/data/projects'

export function ProjectListPreview(): ReactElement {
  const nonFeaturedProjects = projects
    .filter((project) => !project.featured)
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 3)

  console.log('nonFeaturedProjects', nonFeaturedProjects)

  if (nonFeaturedProjects.length === 0) return <section />

  return (
    <section className="space-y-4">
      <header className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-tight">Other Work</h2>
        <Link
          href="/work"
          className="text-xs text-[rgb(var(--fg))]/70 underline underline-offset-4"
        >
          See All Projects
        </Link>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {nonFeaturedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} compact />
        ))}
      </div>
    </section>
  )
}
