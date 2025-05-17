import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Sample featured blog posts data
const featuredPosts = [
  {
    id: 1,
    title: "TypeScript 5.6 Beta is Awesome",
    excerpt:
      "The new TypeScript update fixes some common dev headaches, and adds emojis?",
    date: "August 11, 2024",
    readingTime: "2 min",
    slug: "typescript-5-6-beta",
    tags: ["typescript", "javascript", "blog"],
  },
  {
    id: 2,
    title: "Create Your own ChatGPT Clone in Next.js with Just One Command",
    excerpt:
      "In this video I showcase a really cool project to bootstrap a ChatGPT like application that can be used to query and index your own data.",
    date: "November 16, 2023",
    readingTime: "1 min",
    slug: "create-chatgpt-clone-nextjs",
    tags: ["video", "nextjs", "ChatGPT", "AI", "LlamaIndex"],
  },
  {
    id: 3,
    title: "Building Accessible Web Components",
    excerpt:
      "Learn how to create web components that everyone can use, regardless of their abilities or disabilities.",
    date: "July 3, 2024",
    readingTime: "4 min",
    slug: "building-accessible-web-components",
    tags: ["accessibility", "web components", "HTML", "CSS"],
  },
];

export default function FeaturedPosts() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div ref={ref} className=" rounded-3xl bg-card p-8 md:p-10 mb-8">
      {featuredPosts.slice(0, 2).map((post, index) => (
        <motion.div
          key={post.id}
          className={index === 0 ? "mb-12" : "mb-8"}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Link
            href={`/blog/${post.slug}`}
            aria-label={`Read more about ${post.title}`}
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 hover:text-accent transition-colors">
              {post.title}
            </h3>
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-secondary/80 text-secondary-foreground border-none"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <p className="text-muted-foreground mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">{post.date}</span>
              <span className="flex items-center text-accent">
                <Clock className="mr-1 h-4 w-4" />
                {post.readingTime} read
              </span>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="text-accent hover:text-accent/80 inline-flex items-center"
            >
              Read more
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {index < featuredPosts.slice(0, 2).length - 1 && (
            <div className="border-t border-border my-8"></div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
