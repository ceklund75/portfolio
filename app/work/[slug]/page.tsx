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
