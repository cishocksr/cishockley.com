export type PostMeta = {
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
  readingTime: string
  tags: string[]
}

export type Post = PostMeta & {
  content: string
}
