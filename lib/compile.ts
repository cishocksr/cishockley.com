import { compileMDX } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"
import { useMDXComponents } from "@/components/mdx-components"

export async function compilePost(content: string, scope: any = {}) {
  return compileMDX({
    source: content,
    components: useMDXComponents(scope),
    options: {
      scope,
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark",
              keepBackground: false,
            },
          ],
        ],
      },
    },
  })
}
