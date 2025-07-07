// app/blog/page.tsx
import BlogCard from "@/components/blog/blog-card"
import { getAllPosts } from "@/lib/posts"

export const revalidate = 60

type Props = { searchParams?: { page?: string } }

export default async function BlogIndex({ searchParams }: Props) {
  const page = parseInt(searchParams?.page ?? "1", 10)
  const { posts } = await getAllPosts(page, 6)

  return (
    <div>
      {/* You could still put a page-specific title if you like */}
      <h2 className="text-3xl font-bold mb-6">All Posts</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
