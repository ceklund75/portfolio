import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { styles } from '@/lib/styles'
import PageHeader from '@/components/layout/PageHeader'
import ProjectDetailCard from '@/components/projects/ProjectDetailCard'
import { MotionDiv } from '@/components/motion'
import { fadeIn } from '@/lib/animations'
import { createPageMetadata, getProjectPathname } from '@/lib/metadata'

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
      description: 'The project you are looking for does not exist.',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  return createPageMetadata(`${project.title}`, project.summary, getProjectPathname(slug))
}

export default async function WorkDetailPage(props: WorkDetailPageProps): Promise<ReactElement> {
  const { slug } = await props.params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className={`${styles.container} project-page items-center space-y-8 py-8`}>
      <PageHeader title={project.title} description={project.summary} eyebrow="Project" />
      <ProjectDetailCard project={project} />
      <MotionDiv variants={fadeIn} initial="hidden" animate="visible">
        <Link href="/work" className={styles.button.ghost}>
          View all projects
        </Link>
      </MotionDiv>
    </div>
  )
}
