import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import type { Post } from "@/types"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export async function getAllPosts(): Promise<Post[]> {
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
        } satisfies Post
      })
  )

  return posts
}

export async function getPostBySlug(slug: string): Promise<{ meta: Post; content: string }> {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`)
  const file = await fs.readFile(fullPath, "utf8")
  const { content, data } = matter(file)

  const meta: Post = {
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
