import { ReactElement } from 'react'
import { Hero } from '@/components/home/Hero'
import { FeaturedProject } from '@/components/home/FeaturedProject'
import { ProjectListPreview } from '@/components/home/ProjectListPreview'
import { styles } from '@/lib/styles'

export default function HomePage(): ReactElement {
  return (
    <div className={`${styles.container} z-auto mx-2 px-4 sm:mx-auto`}>
      <Hero />
      <FeaturedProject />
      <ProjectListPreview />
    </div>
  )
}
