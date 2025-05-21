"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Clock, Calendar, Search } from "lucide-react";
import { PostMeta } from "@/types";

// Debounce hook
function useDebouncedValue(value: string, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}

export default function BlogGrid({ posts }: { posts: PostMeta[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebouncedValue(searchQuery);

  const filteredPosts = posts.filter((post) => {
    const searchContent = `${post.title} ${post.excerpt} ${post.tags.join(
      " "
    )}`.toLowerCase();
    return searchContent.includes(debouncedQuery.toLowerCase());
  });

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2 text-charcoal dark:text-foreground">
          No articles found
        </h3>
        <p className="text-slate dark:text-muted-foreground">
          Try adjusting your search query to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="relative max-w-md mb-10">
        <Search
          aria-label="Search icon"
          className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
        />
        <Input
          placeholder="Search articles by title, content, or tags..."
          className="pl-8 border-clay/20 dark:border-slate/30"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Card
            key={post.slug}
            className="overflow-hidden flex flex-col h-full border-clay/20 dark:border-slate/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="relative h-48 w-full">
              <Image
                src={post.image?.trim() || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute bottom-0 right-0 bg-navy dark:bg-primary text-white dark:text-navy px-3 py-1 m-2 rounded-full text-xs font-medium flex items-center">
                <Clock
                  aria-label="Reading time icon"
                  className="mr-1 h-3 w-3"
                />
                {post.readingTime}
              </div>
            </div>
            <CardContent className="flex-1 p-6">
              <div className="flex items-center text-sm text-slate dark:text-muted-foreground mb-3">
                <Calendar aria-label="Date icon" className="mr-1 h-4 w-4" />
                {post.date}
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-serif font-bold mb-2 hover:text-navy dark:hover:text-primary transition-colors text-charcoal dark:text-foreground">
                  {post.title}
                </h3>
              </Link>
              <p className="text-slate dark:text-muted-foreground mb-4">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-sage/20 hover:bg-sage/30 text-navy dark:bg-slate/20 dark:text-primary dark:hover:bg-slate/30"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Link
                href={`/blog/${post.slug}`}
                className="text-navy dark:text-primary hover:text-slate dark:hover:text-primary/80 inline-flex items-center text-sm font-medium"
              >
                Read more
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
