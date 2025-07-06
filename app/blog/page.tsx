// app/blog/page.tsx
import BlogCard from "@/components/blog/blog-card"
import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import { blogPostSchema } from "@/lib/schema"
import { getPostSlugs } from "@/lib/posts"

export const revalidate = 60

export default async function BlogIndex() {
  const slugs = await getPostSlugs()

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const file = path.join(process.cwd(), "content", "posts", `${slug}.mdx`)
      const raw = await fs.readFile(file, "utf8")
      const { data } = matter(raw)
      const meta = blogPostSchema.parse(data)

      return {
        slug,
        title: meta.title,
        date: meta.date,
        excerpt: meta.excerpt,
        image: meta.image,
      }
    })
  )

  return (
    <main className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  )
}
