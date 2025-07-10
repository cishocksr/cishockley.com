// components/FeaturedPosts.tsx
import FeaturedPostsClient from "./featured-post-client"
import { getAllPosts } from "@/lib/posts"
import type { PostMeta } from "@/types/post"

// opt-out of static‐optimization so you always see the latest featured flags
export const dynamic = "force-dynamic"

export default async function FeaturedPosts() {
  const { posts }: { posts: PostMeta[] } = await getAllPosts()
  // pick only the ones you want to feature:
  const featured = posts.filter((p) => p.featured).slice(0, 2)

  if (featured.length === 0) {
    return (
      <div className="text-muted-foreground">
        <p>No featured blog posts available yet.</p>
      </div>
    )
  }

  return <FeaturedPostsClient posts={featured} />
}
