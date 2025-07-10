// components/FeaturedPostsClient.tsx
"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { PostMeta } from "@/types/post"
import { motion } from "framer-motion"
import { format } from "date-fns"

export default function FeaturedPostsClient({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="flex flex-col gap-y-8">
      {posts.map((post, postIndex) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: postIndex * 0.1,
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="w-full border-l-4 border-[#8C7851] dark:border-[#B2A17F] transition-all hover:shadow-md hover:-translate-y-1">
            <CardContent className="p-6">
              <Link
                href={`/blog/${post.slug}`}
                aria-label={`Read more about ${post.title}`}
              >
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 hover:text-accent transition-colors">
                  {post.title}
                </h3>
              </Link>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags?.map((tag, index) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-secondary/80 text-secondary-foreground border-none"
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>
            </CardContent>

            <CardFooter className="flex justify-between items-center p-6 pt-0">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {/* formatted date */}
                <span>{format(new Date(post.date), "LLLL d, yyyy")}</span>
                <span className="flex items-center text-accent">
                  <Clock className="mr-1 h-4 w-4" />
                  {post.readingTime} read
                </span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-accent hover:text-accent/80 inline-flex items-center text-sm"
                aria-label={`Read more about ${post.title}`}
              >
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
