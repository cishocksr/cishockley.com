// lib/schema.ts
import { z } from "zod"

export const blogPostSchema = z.object({
  title: z.string(),
  date: z.string().refine((d) => !Number.isNaN(Date.parse(d)), {
    message: "Invalid date",
  }),
  excerpt: z.string().optional(),
  // accept any string (URL or local path)
  image: z.string().optional(),
  featured: z.boolean().optional(),
})
export type BlogPostFrontmatter = z.infer<typeof blogPostSchema>
