import { defineConfig, defineCollection, s } from "velite";

const blog = defineCollection({
  name: "blog",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug("blog"),
      date: s.isodate(),
      updated: s.isodate().optional(),
      description: s.string().max(999).optional(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).optional(),
      body: s.markdown(),
      excerpt: s.excerpt(),
      metadata: s.metadata(),
      toc: s.toc(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/blog/${data.slug}`,
    })),
});

export default defineConfig({
  root: "content",

  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash].[ext]",
    clean: true,
  },

  collections: { blog },

  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
