// components/MDXComponents.tsx
import Link, { LinkProps } from "next/link"
import Image from "next/image"
import React, { ReactNode } from "react"

interface MDXComponentProps {
  children?: ReactNode
  [key: string]: any
}

const MDXComponents = {
  // … other mappings …

  // Updated Link mapping
  a: ({
    href,
    children,
    ...props
  }: { href: LinkProps["href"]; children?: ReactNode } & MDXComponentProps) => {
    // External URLs: render a normal <a>
    const isExternal = typeof href === "string" && /^https?:\/\//.test(href)
    if (isExternal) {
      return (
        <a href={href} className="text-blue-600 hover:underline" {...props}>
          {children}
        </a>
      )
    }
    // Internal: use Next’s Link
    return (
      <Link href={href} className="text-blue-600 hover:underline" {...props}>
        {children}
      </Link>
    )
  },

  // … other mappings …
}

export default MDXComponents
