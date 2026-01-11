// Import blog post from .velite
import { blog } from "@/.velite";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    <article>
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
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: content from our own MDX files */}
      <div dangerouslySetInnerHTML={{ __html: post.body }} />

      {/* Footer */}
      <Link href="/blog">← Back to Blog</Link>
    </article>
  );
}
