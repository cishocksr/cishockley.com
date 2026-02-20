import { projects } from '@/.velite';
import ProjectCard from './components/project-card';
import { StaggerContainer, StaggerItem, AnimateIn } from '@/components/motion';

export const metadata = {
  title: 'Projects',
  description:
    'A collection of my personal and professional projects showcasing my skills and experience.',
};

export default function ProjectsPage() {
  return (
    <div className="container-section max-w-7xl py-12">
      <AnimateIn className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Projects</h1>
        <p className="text-lg text-muted-foreground">
          A collection of my personal and professional projects showcasing my
          skills and experience.
        </p>
      </AnimateIn>

      <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              status={project.status}
              githubLink={project.githubLink}
              projectUrl={project.projectUrl}
              image={project.image?.src}
              slug={project.slug}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
