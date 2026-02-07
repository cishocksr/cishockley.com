import { projects } from '@/.velite';
import ProjectCard from './components/project-card';

export default function ProjectsPage() {
  return (
    <div className="container-section max-w-7xl py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Projects</h1>
        <p className="text-lg text-muted-foreground">
          A collection of my personal and professional projects showcasing my
          skills and experience.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            tags={project.tags}
            status={project.status}
            githubLink={project.githubLink}
            projectUrl={project.projectUrl}
            image={project.image?.src}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
}
