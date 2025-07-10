// app/page.tsx
import type { Metadata } from "next"
import Hero from "@/components/hero"
import { getAllProjects } from "@/lib/projects"
import { getAllPosts } from "@/lib/posts"
import FeaturedProjects from "@/components/home/featured-projects"
import FeaturedPosts from "@/components/home/featured-post"

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
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <FeaturedProjects />
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">From the Blog</h2>
        <FeaturedPosts />
      </section>
    </main>
  )
}
