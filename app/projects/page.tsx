import { projects } from '@/.velite';
import ProjectCard, { type ProjectCardProps } from './components/project-card';

export default function ProjectsPage() {
  // const projects: ProjectCardProps[] = [
  //   {
  //     title: 'Project 1',
  //     description: 'Description for project 1',
  //     tags: ['react', 'nextjs'],
  //     slug: 'project-1',
  //     status: 'in-progress',
  //     githubLink: 'https://github.com/username/project1',
  //     projectUrl: 'https://project1.com',
  //     image: '/images/project1.png',
  //   },
  //   {
  //     title: 'Project 2',
  //     description: 'Description for project 2',
  //     tags: ['react', 'nextjs'],
  //     slug: 'project-2',
  //     status: 'in-progress',
  //     githubLink: 'https://github.com/username/project2',
  //     projectUrl: 'https://project2.com',
  //     image: '/images/project1.png',
  //   },
  //   {
  //     title: 'Project 3',
  //     description: 'Description for project 3',
  //     tags: ['react', 'nextjs'],
  //     slug: 'project-3',
  //     status: 'in-progress',
  //     githubLink: 'https://github.com/username/project3',
  //     projectUrl: 'https://project3.com',
  //     image: '/images/project1.png',
  //   },
  //   {
  //     title: 'Project 4',
  //     description: 'Description for project 4',
  //     tags: ['react', 'nextjs'],
  //     slug: 'project-4',
  //     status: 'in-progress',
  //     githubLink: 'https://github.com/username/project4',
  //     projectUrl: 'https://project4.com',
  //     image: '/images/project1.png',
  //   },
  //   {
  //     title: 'Project 5',
  //     description: 'Description for project 5',
  //     tags: ['react', 'nextjs'],
  //     slug: 'project-5',
  //     status: 'in-progress',
  //     githubLink: 'https://github.com/username/project5',
  //     projectUrl: 'https://project5.com',
  //     image: '/images/project1.png',
  //   },
  // ];
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Projects</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          A collection of my personal and professional projects showcasing my
          skills and experience.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}
