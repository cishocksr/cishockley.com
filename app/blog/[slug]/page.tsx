import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';
import { blog } from '@/.velite';
import TableOfContents from '@/app/blog/components/toc';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  return blog.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blog.find((post) => post.slug === slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className='container-section max-w-7xl py-8'>
      <div className='flex flex-col gap-8 lg:flex-row'>
        <article className='max-w-3xl flex-1'>
          {/* Back button */}
          <div className='mb-6'>
            <Button variant='ghost' size='sm' asChild>
              <Link href='/blog'>
                <FiArrowLeft className='mr-2 h-4 w-4' />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Post Header */}
          <header className='mb-8'>
            <h1 className='mb-4 text-4xl font-bold'>{post.title}</h1>

            {/* Metadata */}
            <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>

              {/* Update Info */}
              {post.updated && (
                <>
                  <span>•</span>
                  <span>
                    Updated:{' '}
                    <time dateTime={post.updated}>
                      {new Date(post.updated).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </span>
                </>
              )}

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <>
                  <span>•</span>
                  <div className='flex gap-2'>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className='bg-muted rounded-full px-2 py-1 text-xs'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          {/* Content */}
          <div
            className='prose-content'
            // biome-ignore lint/security/noDangerouslySetInnerHtml: content from our own MDX files
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* Footer */}
          <div className='mt-12 border-t border-border pt-8'>
            <Button variant='ghost' size='sm' asChild>
              <Link href='/blog'>
                <FiArrowLeft className='mr-2 h-4 w-4' />
                Back to Blog
              </Link>
            </Button>
          </div>
        </article>

        {post.toc.length > 0 && (
          <aside className='lg:w-64 lg:shrink-0'>
            <TableOfContents toc={post.toc} />
          </aside>
        )}
      </div>
    </div>
  );
}
