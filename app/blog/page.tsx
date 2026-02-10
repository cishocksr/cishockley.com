import Link from "next/link";
import { blog } from "@/.velite";

export const metadata = {
  title: 'Blog',
  description:
    'Collection of thoughts, and writing in the world of technology. Part of my attempt tot learn in public',
};

export default function BlogPage() {
  const posts = blog
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Thoughts, tutorials, and updates
        </p>
      </div>
      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group border-b border-zinc-200 pb-8 last:border-0 dark:border-zinc-800"
          >
            {/* Post Title */}
            <Link href={post.permalink} className="block">
              <h2 className="mb-2 text-2xl font-semibold transition-colors group-hover:text-amber-700 dark:group-hover:text-amber-500">
                {post.title}
              </h2>
            </Link>

            {/* Post Metadata */}
            <div className="mb-3 flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              {/* Date */}
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              {/* Reading Time */}
              <span>{post.metadata.readingTime} min read</span>
              <span>•</span>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-2 py-1 text-xs dark:bg-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Post Description or Excerpt */}
            <p className="text-zinc-600 dark:text-zinc-400">
              {post.description || post.excerpt}
            </p>

            {/* Read More Link */}
            <Link
              href={post.permalink}
              aria-label={`Read more about ${post.title}`}
              className="mt-3 inline-block text-sm font-medium text-amber-700 hover:underline dark:text-amber-500"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
