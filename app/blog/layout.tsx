import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and insights about web development, programming, and technology by Chris Shockley.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Chris Shockley",
    description: "Articles and insights about web development, programming, and technology by Chris Shockley.",
    url: "/blog",
    type: "website",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
