import { ReactNode } from "react"

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <article className="prose dark:prose-invert mx-auto py-8">
      {children}
    </article>
  )
}
