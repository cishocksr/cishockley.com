// app/blog/page.tsx
import BlogCard from "@/components/blog/blog-card"
import { getAllPosts } from "@/lib/posts"

// ISR: rebuild at most once per minute
export const revalidate = 60

// Tell TS that searchParams is asynchronous
type Props = {
  searchParams: Promise<{
    page?: string
  }>
}

export default async function BlogIndex({ searchParams }: Props) {
  // await the searchParams object before accessing its properties
  const { page } = await searchParams
  const pageNum = parseInt(page ?? "1", 10)

  const { posts } = await getAllPosts(pageNum, 6)

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
