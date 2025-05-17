"use client"

import Script from "next/script"

interface BlogSchemaProps {
  id: number
  title: string
  description: string
  date: string
  image: string
  slug: string
  tags: string[]
}

export default function BlogSchema({ title, description, date, image, slug, tags }: BlogSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://chrisshockley.dev"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image.startsWith("http") ? image : `${baseUrl}${image}`,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: "Chris Shockley",
      url: baseUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Chris Shockley",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo-dark.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`,
    },
    keywords: tags.join(", "),
  }

  return (
    <Script
      id={`blog-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
