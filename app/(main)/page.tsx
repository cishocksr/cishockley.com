import Link from 'next/link';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { blog, projects } from '@/.velite';
import ProjectCard from '@/app/projects/components/project-card';
import { Button } from '@/components/ui/button';
import Typewriter from '@/components/typewriter';
import { socialLinks } from '@/config/site';

export default function HomePage() {
  // Get featured projects
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  // Get recent blog posts
  const recentPosts = blog
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mb-6">
          <h1 className="mb-4 bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100">
            Hi, I'm Chris!
          </h1>
          <Typewriter
            phrases={['Software Developer', 'Problem Solver', 'Tech Enthusiast']}
            className="mb-2 h-[2.25rem] text-2xl font-semibold text-zinc-800 md:h-[2.5rem] md:text-3xl dark:text-zinc-200"
          />
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 md:text-xl dark:text-zinc-400">

          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/projects">
              View My Work
              <FiArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <Icon className="h-6 w-6" />
              </a>)

          })}

        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Featured Projects
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Some of my recent work
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
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

            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="/projects">
                  View All Projects
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Recent Blog Posts Section */}
      {recentPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Latest Posts
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Thoughts on development, learning, and more
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={post.permalink}
                  className="group rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
                >
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                      {post.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-sm text-zinc-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  View All Posts
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Tech Stack</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Technologies I work with
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[
              'React',
              'TypeScript',
              'Next.js',
              'Tailwind CSS',
              'Java',
              'Spring Boot',
              'PostgreSQL',
              'Git',
            ].map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center rounded-lg border border-zinc-200 bg-white p-6 text-center font-semibold dark:border-zinc-800 dark:bg-zinc-900"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Let's Work Together
          </h2>
          <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
            I'm always open to discussing new projects, opportunities, or how I
            can help bring your ideas to life.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get In Touch
              <FiArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
