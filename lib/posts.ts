import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export function getAllPosts() {
  const files = fs.readdirSync(BLOG_DIR)

  return files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "")
    const file = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8")
    const { data } = matter(file)
    return {
      ...(data as Record<string, any>),
      slug,
    }
  })
}

