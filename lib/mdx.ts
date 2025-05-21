import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import type { PostMeta } from "@/types"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

/**
 * Get all blog post metadata (used for blog index, no content included)
 */
export async function getAllPosts(): Promise<PostMeta[]> {
  const files = await fs.readdir(BLOG_DIR)

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (filename) => {
        const slug = filename.replace(/\.mdx$/, "")
        const fullPath = path.join(BLOG_DIR, filename)
        const file = await fs.readFile(fullPath, "utf8")
        const { data } = matter(file)

        return {
          title: data.title,
          excerpt: data.excerpt,
          date: data.date,
          image: data.image,
          readingTime: data.readingTime,
          tags: data.tags ?? [],
          slug,
        } satisfies PostMeta
      })
  )

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Get full blog post data by slug (metadata + content)
 */
export async function getPostBySlug(slug: string): Promise<{ meta: PostMeta; content: string }> {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`)
  const file = await fs.readFile(fullPath, "utf8")
  const { content, data } = matter(file)

  const meta: PostMeta = {
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    image: data.image,
    readingTime: data.readingTime,
    tags: data.tags ?? [],
    slug,
  }

  return { meta, content }
}
