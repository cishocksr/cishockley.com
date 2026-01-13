// Import blog posts from .velite

import Link from "next/link";
import { blog } from "@/.velite";

// 2. Create a component that returns JSX.
export default function BlogPage() {
  console.log("Blog posts: ", blog);
  console.log(
    "Slugs:",
    blog.map((p) => p.slug)
  );
  return (
    <div>
      <h1>Blog Posts</h1>

      {blog.map((post) => (
        <div key={post.slug}>
          <Link href={post.permalink}>{post.title}</Link>
          <p>{post.date}</p>
          <p>{post.description}</p>
          <p>{post.tags?.join(", ")} </p>
        </div>
      ))}
    </div>
  );
}
