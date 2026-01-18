import rehypeSlug from 'rehype-slug';
import { defineCollection, defineConfig, s } from 'velite';

const blog = defineCollection({
  name: 'blog',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug('blog'),
      date: s.isodate(),
      updated: s.isodate().optional(),
      description: s.string().max(999).optional(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).optional(),
      body: s.markdown({
        rehypePlugins: [rehypeSlug],
      }),
      excerpt: s.excerpt(),
      metadata: s.metadata(),
      toc: s.toc({ maxDepth: 3 }),
    })
    .transform((data) => ({
      ...data,
      permalink: `/blog/${data.slug}`,
    })),
});

const projects = defineCollection({
  name: 'projects',
  pattern: 'projects/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug('projects'),
      date: s.isodate(),
      description: s.string().max(999).optional(),
      image: s.image().optional(),
      projectUrl: s.string().url().optional(),
      githubLink: s.string().url().optional(),
      tags: s.array(s.string()).optional(),
      status: s
        .enum(['planning', 'in-progress', 'completed'])
        .default('planning'),
      featured: s.boolean().default(false),
      body: s.markdown({
        rehypePlugins: [rehypeSlug],
      }),
      excerpt: s.excerpt(),
      metadata: s.metadata(),
      toc: s.toc({ maxDepth: 3 }),
    })
    .transform((data) => ({
      ...data,
      permalink: `/projects/${data.slug}`,
    })),
});

export default defineConfig({
  root: 'content',

  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash].[ext]',
    clean: true,
  },

  collections: { blog, projects },

  mdx: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug],
  },
});
