import { notFound } from 'next/navigation';
import { projects } from '@/.velite';
export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((proj) => proj.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="flex gap-8">
        <article className="max-w-3xl flex-1">
          <header>
            <h1>{project.title}</h1>
          </header>
        </article>
      </div>
    </div>
  );
}
