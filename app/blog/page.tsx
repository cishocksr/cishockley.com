"use client";
import Link from 'next/link';
import { blog } from '@/.velite';
import { motion } from 'motion/react';
import { VARIANTS_CONTAINER, VARIANTS_SECTION } from '@/components/motion'


export default function BlogPage() {
  const posts = blog
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container-section max-w-3xl py-12">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground text-lg">
          Thoughts, tutorials, and updates
        </p>
      </div>
      <motion.div
        className="space-y-8"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.08,
          delayChildren: 0.1
        }}>
        {posts.map((post) => (
          <motion.article
            key={post.slug}
            className="group border-border border-b pb-8 last:border-0"
            variants={VARIANTS_SECTION}
          >
            {/* Post Title */}
            <Link href={post.permalink} className="block">

              <h2 className="group-hover:text-primary mb-2 text-2xl font-semibold transition-colors">

                {post.title}
              </h2>
            </Link>

            {/* Post Metadata */}
            <div className="text-muted-foreground mb-3 flex items-center gap-4 text-sm">
              {/* Date */}
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              {/* Reading Time */}
              <span>{post.metadata.readingTime} min read</span>
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <>
                <span>•</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted rounded-full px-2 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                </>
              )}
            </div>

            {/* Post Description or Excerpt */}
            <p className="text-muted-foreground">
              {post.description || post.excerpt}
            </p>

            {/* Read More Link */}
            <Link
              href={post.permalink}
              aria-label={`Read more about ${post.title}`}
              className="text-primary mt-3 inline-block text-sm font-medium hover:underline"

            >
              Read more →
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
