import { getAllPosts } from "@/lib/mdx";
import BlogGrid from "@/components/blog-grid";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container py-12 px-4">
      <h1 className="text-4xl font-serif font-bold mb-6 text-charcoal dark:text-foreground">
        Blog
      </h1>
      <p className="text-slate dark:text-muted-foreground text-lg mb-8 max-w-3xl">
        Thoughts, ideas, and insights about web development, programming, and
        technology.
      </p>

      <BlogGrid posts={posts} />
    </div>
  );
}
