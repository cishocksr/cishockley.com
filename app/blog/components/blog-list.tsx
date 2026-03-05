'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { VARIANTS_CONTAINER, VARIANTS_SECTION } from '@/components/motion';

type Post = {
  slug: string;
  permalink: string;
  title: string;
  date: string;
  description?: string;
  excerpt?: string;
  tags?: string[];
  metadata: { readingTime: number };
};

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <motion.div
      className='space-y-8'
      variants={VARIANTS_CONTAINER}
      initial='hidden'
      animate='visible'
      transition={{
        staggerChildren: 0.08,
        delayChildren: 0.1,
      }}
    >
      {posts.map((post) => (
        <motion.article
          key={post.slug}
          className='group border-border border-b pb-8 last:border-0'
          variants={VARIANTS_SECTION}
        >
          <Link href={post.permalink} className='block'>
            <h2 className='group-hover:text-primary mb-2 text-2xl font-semibold transition-colors'>
              {post.title}
            </h2>
          </Link>

          <div className='text-muted-foreground mb-3 flex items-center gap-4 text-sm'>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{post.metadata.readingTime} min read</span>
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

          <p className='text-muted-foreground'>
            {post.description || post.excerpt}
          </p>

          <Link
            href={post.permalink}
            aria-label={`Read more about ${post.title}`}
            className='text-primary mt-3 inline-block text-sm font-medium hover:underline'
          >
            Read more →
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
}
