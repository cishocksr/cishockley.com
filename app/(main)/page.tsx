import Link from 'next/link';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { blog, projects } from '@/.velite';
import ProjectCard from '@/app/projects/components/project-card';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/config/social';
import Typewriter from '@/components/typewriter';

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
    <div className="flex flex-col" role="main">
      {/* Hero Section */}
      <section className="container-section flex min-h-[80vh] max-w-6xl flex-col items-center justify-center py-20 text-center">
        <div className="mb-6">


          <h1 className="mb-4 bg-linear-to-r from-blue-900 via-blue-600 to-blue-900 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl dark:from-blue-100 dark:via-blue-300 dark:to-blue-100">
            Hi, I'm Chris!
          </h1>
          <Typewriter
            phrases={['Software Developer', 'Problem Solver', 'Tech Enthusiast']}
            className="mb-2 h-[2.25rem] text-2xl font-semibold text-zinc-800 md:h-[2.5rem] md:text-3xl dark:text-zinc-200"
          />
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
            Building modern web applications with a focus on user experience and clean code.
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
            const Icon =
              link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.name === 'Email' ? undefined : '_blank'}
                rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                aria-label={link.label}
                className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="border-t border-border bg-muted/50 py-20">
          <div className="container-section max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground">
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
          <div className="container-section max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Latest Posts
              </h2>
              <p className="text-lg text-muted-foreground">
                Thoughts on development, learning, and more
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={post.permalink}
                  className="group rounded-lg border border-border p-6 transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={`Read article: ${post.title}`}
                >
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="mb-4 text-muted-foreground">
                      {post.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
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
      <section className="border-t border-border bg-muted/50 py-20">
        <div className="container-section max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Tech Stack</h2>
            <p className="text-lg text-muted-foreground">
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
                className="flex items-center justify-center rounded-lg border border-border bg-card p-6 text-center font-semibold text-card-foreground"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-section max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Let's Work Together
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
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
