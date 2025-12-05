// components/home/FeaturedProject.tsx
import type { ReactElement } from 'react'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'

export function FeaturedProject(): ReactElement {
  const featured = projects.find((project) => project.featured)

  if (!featured) {
    return <section />
  }

  return (
    <section className="space-y-4">
      <header className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-tight">Featured Project</h2>
        <a href="/work" className="text-xs text-[rgb(var(--fg))]/70 underline underline-offset-4">
          View all
        </a>
      </header>

      <ProjectCard project={featured} />
    </section>
  )
}
