// app/projects/page.tsx
import { getAllProjects, type Project } from "@/lib/projects"
import { ProjectCard } from "@/components/projects/project-card"

export default async function ProjectsPage() {
  const projects: Project[] = getAllProjects()

  return (
    <section className="container py-24">
      <header className="mx-auto max-w-6xl text-center mb-16">
        <h1 className="text-4xl font-bold sm:text-5xl mb-4">My Projects</h1>
        <p className="text-xl text-muted-foreground mx-auto max-w-2xl">
          A collection of projects I've worked on…
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
