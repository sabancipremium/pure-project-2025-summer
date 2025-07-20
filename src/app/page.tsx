import Hero from '@/components/Hero'
import ProjectOverview from '@/components/ProjectOverview'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <ProjectOverview />
    </div>
  )
}
