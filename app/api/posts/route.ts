// app/api/posts/route.ts
import { getAllPosts } from "@/lib/posts"
import { NextResponse } from "next/server"
import { Post } from "@/types/post"

export async function GET() {
  const posts = getAllPosts()

  const featured = posts.slice(0, 2).map((post) => ({
    id: post.slug, // or add `id` in frontmatter
    slug: post.slug,
    title: post.title,
    date: post.date,
    tags: post.tags || [],
    excerpt: post.excerpt || "",
    readingTime: post.readingTime || "2 min", // optional default
  }))

  return NextResponse.json(featured)
}
