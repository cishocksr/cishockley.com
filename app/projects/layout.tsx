import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Chris Shockley's portfolio of web development projects including React, Next.js, and full-stack applications.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Chris Shockley",
    description:
      "Explore Chris Shockley's portfolio of web development projects including React, Next.js, and full-stack applications.",
    url: "/projects",
    type: "website",
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
