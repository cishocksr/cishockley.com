import { ReactNode } from "react"
import Link from "next/link"

export const metadata = {
  title: "Blog",
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      {/* Shared header/nav */}
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">My Blog</h1>
          <p className="text-gray-600">Thoughts on tech, life, and code.</p>
        </div>
      </header>

      {children}
    </section>
  )
}
