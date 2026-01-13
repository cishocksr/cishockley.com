import Link from "next/link";
import { notFound } from "next/navigation";
import { blog } from "@/.velite";
import TableOfContents from "@/app/blog/components/toc";

// create component that renders blog post based on slug

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
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex gap-8">
        <article className="flex-1 max-w-3xl">
          {/* Post Header */}
          <header>
            <h1>{post.title}</h1>

            {/* Metadata */}
            <div>
              <time dateTime={post.date}>{post.date}</time>

              {/* Update Info */}
              {post.updated && (
                <span>
                  (Updated: <time dateTime={post.updated}>{post.updated}</time>)
                </span>
              )}

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div>
                  {post.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Content */}

          <div
            className="prose prose-gray dark:prose-invert max-w-none"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: content from our own MDX files
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* Footer */}
          <Link href="/blog">← Back to Blog</Link>
        </article>
        <aside className="w-64 shrink-0 ">
          <TableOfContents toc={post.toc} />
        </aside>
      </div>
    </div>
  );
}
