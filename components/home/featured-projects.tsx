import FeaturedProjectsClient from "./featured-projects-client"
import { getAllProjects } from "@/lib/projects"
import type { Project } from "@/types/project"

// force dynamic rendering on every request
export const dynamic = "force-dynamic"

export default async function FeaturedProjects() {
  const allProjects: Project[] = await getAllProjects()
  const featured = allProjects.filter((p) => p.featured)

  if (featured.length === 0) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-muted-foreground">
        <p>No featured projects available yet.</p>
      </div>
    )
  }

  return <FeaturedProjectsClient projects={featured} />
}
