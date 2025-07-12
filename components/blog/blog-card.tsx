import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Clock, Calendar } from "lucide-react"
import type { PostMeta } from "@/types/post"

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Card className="flex flex-col h-full border transition-transform hover:shadow-md hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="text-sm text-muted-foreground">{post.excerpt}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.date}>{post.date}</time>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-accent hover:text-accent/80 text-sm"
        >
          Read more <Clock className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
