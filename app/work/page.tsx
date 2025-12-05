// app/work/page.tsx
import type { ReactElement } from 'react'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'

export default function WorkPage(): ReactElement {
  const sorted = [...projects].sort((a, b) => a.priority - b.priority)

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Work</h1>
        <p className="text-sm text-[rgb(var(--fg))]/80">
          Selected projects spanning full-stack engineering, performance, and SEO-focused web
          platforms.
        </p>
      </header>

      <div className="space-y-4">
        {sorted.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
