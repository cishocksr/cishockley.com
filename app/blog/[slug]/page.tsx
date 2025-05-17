import type { Metadata } from "next"
import BlogPostClientPage from "./BlogPostClientPage"

// Sample blog posts data - in a real app, this would come from MDX files
const blogPosts = [
  {
    id: 1,
    title: "Building a Blog with Next.js and MDX",
    content: `
      # Building a Blog with Next.js and MDX

      Next.js is a powerful React framework that enables you to build server-rendered applications with ease. Combined with MDX, it becomes an excellent choice for creating a blog.

      ## What is MDX?

      MDX is a format that lets you write JSX in your markdown documents. You can import components, such as interactive charts or alerts, and embed them within your content.

      ## Setting up Next.js with MDX

      First, you'll need to install the necessary dependencies:

      \`\`\`bash
      npm install next @next/mdx @mdx-js/loader @mdx-js/react
      \`\`\`

      Then, configure your Next.js project to use MDX by updating your \`next.config.js\` file.

      ## Creating blog posts

      With MDX, you can create blog posts as \`.mdx\` files in your project. Each file can include frontmatter for metadata like title, date, and tags.

      ## Styling your blog

      Tailwind CSS is a great choice for styling your Next.js blog. It provides utility classes that make it easy to create responsive designs.

      ## Conclusion

      Building a blog with Next.js and MDX offers a great developer experience and results in a fast, SEO-friendly website for your readers.
    `,
    image: "/nextjs-blog.png",
    date: "May 15, 2023",
    readingTime: "5 min read",
    slug: "building-blog-nextjs-mdx",
    tags: ["Next.js", "MDX", "React"],
    excerpt: "Learn how to build a blog using Next.js and MDX for a great developer and user experience.",
  },
  {
    id: 2,
    title: "The Power of Server Components in Next.js",
    content: `
      # The Power of Server Components in Next.js

      React Server Components represent a paradigm shift in how we build React applications. Next.js has embraced this technology, making it easier than ever to build performant web applications.

      ## What are Server Components?

      Server Components are a new kind of React component that runs only on the server. They can access server-side resources directly, like databases or file systems, without adding to the JavaScript bundle sent to the client.

      ## Benefits of Server Components

      - **Reduced Bundle Size**: Server Components don't send their code to the client, resulting in smaller JavaScript bundles.
      - **Direct Access to Backend Resources**: No need for API routes for data fetching.
      - **Improved Performance**: Initial page load is faster due to reduced client-side JavaScript.
      - **Better SEO**: Content is rendered on the server, making it more accessible to search engines.

      ## Using Server Components in Next.js

      In Next.js App Router, all components are Server Components by default. You only need to use the "use client" directive when you need client-side interactivity.

      ## Conclusion

      Server Components in Next.js provide a powerful way to build performant web applications with improved user experience and developer workflow.
    `,
    image: "/server-components-concept.png",
    date: "June 22, 2023",
    readingTime: "8 min read",
    slug: "power-of-server-components",
    tags: ["Next.js", "React", "Performance"],
    excerpt: "Discover how Server Components in Next.js can improve performance and developer experience.",
  },
  {
    id: 3,
    title: "Creating Accessible Web Applications",
    content: `
      # Creating Accessible Web Applications

      Web accessibility is about ensuring that websites and web applications can be used by everyone, including people with disabilities. This article explores best practices for building accessible web applications.

      ## Why Accessibility Matters

      Accessibility is not just about compliance with regulations; it's about creating inclusive experiences that everyone can use. By building accessible applications, you:

      - Reach a wider audience
      - Improve SEO
      - Enhance usability for all users
      - Fulfill ethical and sometimes legal obligations

      ## Key Accessibility Principles

      ### Semantic HTML

      Using the right HTML elements for their intended purpose provides a solid foundation for accessibility.

      ### Keyboard Navigation

      Ensure that all interactive elements can be accessed and operated using only a keyboard.

      ### ARIA Attributes

      When HTML semantics aren't enough, ARIA attributes can provide additional context to assistive technologies.

      ### Color Contrast

      Ensure sufficient contrast between text and background colors to make content readable for users with visual impairments.

      ## Testing for Accessibility

      Regular testing is crucial for maintaining accessibility. Tools like axe, WAVE, and screen readers can help identify issues.

      ## Conclusion

      Building accessible web applications is a continuous process that should be integrated into your development workflow from the start.
    `,
    image: "/web-accessibility-concept.png",
    date: "July 10, 2023",
    readingTime: "6 min read",
    slug: "creating-accessible-web-applications",
    tags: ["Accessibility", "HTML", "CSS"],
    excerpt: "Learn essential practices for building web applications that everyone can use, regardless of abilities.",
  },
]

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: post.title,
    description: post.excerpt || post.content.substring(0, 160),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || post.content.substring(0, 160),
      type: "article",
      url: `/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.content.substring(0, 160),
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClientPage params={params} />
}
