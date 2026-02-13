import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '@/.velite';
import TableOfContents from '@/app/blog/components/toc';
import { Button } from '@/components/ui/button';
import { getStatusBadge } from '@/lib/project-utils';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container-section max-w-7xl py-8">
      <div className="flex gap-8">
        {/* Main Content */}
        <article className="max-w-3xl flex-1">
          {/* Back button */}
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/projects">
                <FiArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          {/* Header */}
          <header className="mb-12">
            {/* Status badge */}
            <div className="mb-4">{getStatusBadge(project.status)}</div>

            {/* Title */}
            <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
              {project.title}
            </h1>

            {/* Description */}
            {project.description && (
              <p className="mb-6 text-xl text-muted-foreground">
                {project.description}
              </p>
            )}

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Date */}
            <p className="mb-6 text-sm text-muted-foreground">
              Built:{' '}
              {new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              })}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {project.githubLink && (
                <Button variant="default" asChild>
                  <Link href={project.githubLink} target="_blank">
                    <FiGithub className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              )}

              {project.projectUrl && (
                <Button variant="outline" asChild>
                  <Link href={project.projectUrl} target="_blank">
                    <FiExternalLink className="mr-2 h-4 w-4" />
                    Live Project
                  </Link>
                </Button>
              )}
            </div>
          </header>

          {/* Body Content - Same as blog! */}
          {project.body && (
            <div
              className="prose prose-zinc dark:prose-invert max-w-none"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: content from our own MDX files
              dangerouslySetInnerHTML={{ __html: project.body }}
            />
          )}
        </article>

        {/* Sidebar with TOC - Same as blog! */}
        <aside className="w-64 shrink-0">
          {project.toc && project.toc.length > 0 && (
            <TableOfContents toc={project.toc} />
          )}
        </aside>
      </div>
    </div>
  );
}
