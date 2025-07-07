// app/page.tsx
import type { Metadata } from "next"
import Hero from "@/components/hero"
import { getAllProjects } from "@/lib/projects"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Chris Shockley | Home",
  description: "Welcome to my portfolio—projects, blog posts, and more.",
}

export default async function HomePage() {
  const allProjects = await getAllProjects()
  const { posts: allPosts } = await getAllPosts()

  return (
    <main className="container mx-auto px-4">
      <Hero />
    </main>
  )
}
