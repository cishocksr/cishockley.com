import { readdir } from "fs/promises"
import path from "path"

export async function getPostSlugs() {
  const postsDir = path.join(process.cwd(), "content", "posts")
  const files = await readdir(postsDir)
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}
