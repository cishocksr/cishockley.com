import { z } from "zod"

export const blogPostSchema = z.object({
  title: z.string(),
  date: z.string().refine((d) => !Number.isNaN(Date.parse(d)), {
    message: "Invalid date",
  }),
  // add more fields here…
})
export type BlogPostFrontmatter = z.infer<typeof blogPostSchema>
