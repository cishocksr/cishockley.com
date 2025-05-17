import fs from "fs"
import path from "path"
import matter from "gray-matter"

const POSTS_DIR = path.join(process.cwd(), "content/blog")

export function getAllPosts() {
  const files = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".mdx"))

  return files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "")
    const filePath = path.join(POSTS_DIR, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContent)

    return {
      ...data,
      slug,
    }
  }) as {
      
    id: number
    title: string
    excerpt: string
    image: string
    date: string
    readingTime: string
    slug: string
    tags: string[]
  }[]
}
