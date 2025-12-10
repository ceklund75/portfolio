import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { styles } from '@/lib/styles'

type WorkDetailPageParams = {
  slug: string
}

type WorkDetailPageProps = {
  params: Promise<WorkDetailPageParams>
}

export async function generateMetadata(props: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await props.params

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project not found',
    }
  }

  return {
    title: `${project.title} – Work | Christopher Eklund`,
    description: project.summary,
  }
}

export default async function WorkDetailPage(props: WorkDetailPageProps): Promise<ReactElement> {
  const { slug } = await props.params

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className={`${styles.container} items-center space-y-8 py-8`}>
      <header className={`${styles.header}`}>
        <p className={styles.eyebrow}>Project</p>
        <h1 className={styles.heading.h1}>{project.title}</h1>
        <p className={styles.text.lead}>{project.summary}</p>
      </header>

      <section className={styles.card.ghost}>
        <div className="space-y-4">
          <h2 className={styles.heading.h2}>Role & Stack</h2>
          <p className={styles.text.muted}>{project.role}</p>
          <div className="flex flex-wrap gap-1">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-400/40 px-2 py-0.5 text-[10px] tracking-[0.16em] text-[rgb(var(--fg))]/70 uppercase dark:bg-slate-700/40"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className={styles.heading.h2}>Highlights</h2>
          <ul className={styles.text.muted}>
            {project.highlights.map((item) => (
              <li key={item} className="list-inside list-disc pl-4">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {project.links && (project.links.live || project.links.repo) && (
          <div className="space-y-4">
            <h2 className={styles.heading.h2}>Links</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              {project.links.live && (
                <a
                  href={project.links.live}
                  className={styles.link.tiny}
                  target="_blank"
                  rel="noreferrer"
                >
                  View live site
                </a>
              )}
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  className={styles.link.default}
                  target="_blank"
                  rel="noreferrer"
                >
                  View source
                </a>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
