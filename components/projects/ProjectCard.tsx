import { ReactElement } from "react"
import type { Project } from "@/data/projects"

type ProjectCardProps = {
  project: Project,
  compact?: boolean
}

export function ProjectCard({ project, compact = false }: ProjectCardProps): ReactElement {
    const {
        title,
        role,
        summary,
        tech,
        links,
    } = project

    return (
        <article className="flex flex-col gap-2 rounded-lg border border-[rgb(var(--border-subtle))] bg-[rgb(var(--bg))]/80 p-4">
            <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-semibold">{title}</h3>
                {!compact && role && (
                    <p className="text-sm uppercase tracking-[0.16em] text-[rgb(var(--fg))]/60">
                        {role}
                    </p>
                )}
            </div>

            {!compact && (
                <p className="text-xs text-[rgb(var(--fg))]/80">{summary}</p>
            )}

            <div className="flex flex-wrap gap-1">
                {tech.map((item) => (
                <span
                    key={item}
                    className="rounded-full bg-[rgb(var(--border-subtle))]/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-[rgb(var(--fg))]/70"
                >
                    {item}
                </span>
                ))}
            </div>

            {!compact && links?.live && (
                <a
                href={links.live}
                className="mt-1 text-xs font-medium text-[rgb(var(--fg))] underline underline-offset-4"
                >
                View project
                </a>
            )}            
        </article>
    )
}