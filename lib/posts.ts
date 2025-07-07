// lib/posts.ts
import { cache } from "react"
import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import type { PostMeta } from "@/types/post"
import { blogPostSchema } from "@/lib/schema" // your Zod schema

export const BLOG_DIR = path.join(process.cwd(), "content", "posts")

export function getPostSlugs(): Promise<string[]> {
  return fs
    .readdir(BLOG_DIR)
    .then((files) => files.filter((f) => f.endsWith(".mdx")))
    .then((mdxFiles) => mdxFiles.map((f) => f.replace(/\.mdx$/, "")))
}

// paginated loader
export const getAllPosts = cache(
  async (
    page = 1,
    limit = 6
  ): Promise<{ posts: PostMeta[]; total: number }> => {
    const files = (await fs.readdir(BLOG_DIR)).filter((f) => f.endsWith(".mdx"))

    const mapped = await Promise.all(
      files.map(async (filename) => {
        const slug = filename.replace(/\.mdx$/, "")
        const raw = await fs.readFile(path.join(BLOG_DIR, filename), "utf8")
        const { data } = matter(raw)

        // skip drafts
        if (data.draft) return null

        const parsed = blogPostSchema.safeParse(data)
        if (!parsed.success) {
          console.warn("Skipping invalid frontmatter:", filename)
          return null
        }

        return { ...(parsed.data as Omit<PostMeta, "slug">), slug }
      })
    )

    const all = mapped
      .filter((p): p is PostMeta => !!p)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    const start = (page - 1) * limit
    const paginated = all.slice(start, start + limit)

    return { posts: paginated, total: all.length }
  }
)
