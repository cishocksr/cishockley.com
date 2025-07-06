import { notFound } from "next/navigation"
import { promises as fs } from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import { blogPostSchema } from "@/lib/schema"
import { getPostSlugs } from "@/lib/posts"

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }))
}

export default async function BlogPost({ params: { slug } }: Props) {
  const file = path.join(process.cwd(), "content/posts", `${slug}.mdx`)
  let raw: string
  try {
    raw = await fs.readFile(file, "utf8")
  } catch {
    return notFound()
  }

  // 1) compile and get frontmatter
  const { content, frontmatter } = await compileMDX({
    source: raw,
    options: { parseFrontmatter: true },
  })

  // 2) validate with Zod
  const validMeta = blogPostSchema.parse(frontmatter)

  return (
    <article className="prose mx-auto">
      <h1>{validMeta.title}</h1>
      <time dateTime={validMeta.date}>{validMeta.date}</time>
      {/* 3) render the already-compiled MDX */}
      {content}
    </article>
  )
}

export const revalidate = 60
