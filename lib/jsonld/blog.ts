type BlogPost = {
  id: number | string
  title: string
  excerpt: string
  image: string
  date: string
  readingTime: string
  slug: string
  tags: string[]
  content: string
}

export function generateBlogPostJsonLd(post: BlogPost, baseUrl = "https://cshockley.com") {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${baseUrl}${post.image}`,
    url: `${baseUrl}/blog/${post.slug}`,
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Chris Shockley",
      url: `${baseUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Chris Shockley",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/profile-photo.jpeg`,
      },
    },
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
  }
}
