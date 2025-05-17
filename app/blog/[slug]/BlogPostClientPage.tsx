"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import BlogSchema from "@/components/blog-schema"
import { notFound } from "next/navigation"

// Sample blog posts data - in a real app, this would come from MDX files



export default function BlogPostClientPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container py-12 px-4 max-w-4xl mx-auto">
      {/* Add structured data for the blog post */}
      <BlogSchema
        id={post.id}
        title={post.title}
        description={post.excerpt || post.content.substring(0, 160)}
        date={post.date}
        image={post.image}
        slug={post.slug}
        tags={post.tags}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {post.readingTime}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="relative w-full h-[300px] md:h-[400px] mb-8">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* In a real app, this would be rendered MDX content */}
        {post.content.split("\n").map((line, index) => {
          if (line.startsWith("# ")) {
            return (
              <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                {line.substring(2)}
              </h1>
            )
          } else if (line.startsWith("## ")) {
            return (
              <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                {line.substring(3)}
              </h2>
            )
          } else if (line.startsWith("### ")) {
            return (
              <h3 key={index} className="text-xl font-bold mt-5 mb-2">
                {line.substring(4)}
              </h3>
            )
          } else if (line.startsWith("- ")) {
            return (
              <li key={index} className="ml-6 mb-1">
                {line.substring(2)}
              </li>
            )
          } else if (line.startsWith("```")) {
            return null // Skip code block markers
          } else if (line.trim() === "") {
            return <br key={index} />
          } else {
            return (
              <p key={index} className="mb-4">
                {line}
              </p>
            )
          }
        })}
      </div>
    </article>
  )
}
