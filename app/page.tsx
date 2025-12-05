import Image from 'next/image'
import { ReactElement } from 'react'
import { Hero } from '@/components/home/Hero'
import { FeaturedProject } from '@/components/home/FeaturedProject'
import { ProjectListPreview } from '@/components/home/ProjectListPreview'

export default function HomePage(): ReactElement {
  return (
    <div className="flex flex-col items-center space-y-12">
      <Hero />
      <FeaturedProject />
      <ProjectListPreview />
    </div>
  )
}
