import { notFound } from "next/navigation"
import { promises as fs } from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import { getPostSlugs } from "@/lib/posts"
import { blogPostSchema } from "@/lib/schema"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), "content", "posts", `${slug}.mdx`)
  let raw: string
  try {
    raw = await fs.readFile(filePath, "utf8")
  } catch {
    return notFound()
  }

  const { content, frontmatter } = await compileMDX({
    source: raw,
    options: { parseFrontmatter: true },
  })

  const meta = blogPostSchema.parse(frontmatter)

  return (
    <>
      <h1>{meta.title}</h1>
      <time dateTime={meta.date}>{meta.date}</time>
      {content}
    </>
  )
}

export const revalidate = 60
