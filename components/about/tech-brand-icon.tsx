import { FC, SVGProps } from "react"
import techIcons, { IconKey, IconProps } from "@/components/icons/tech"
import clsx from "clsx"

const aliasMap: Record<string, IconKey> = {
  react: "react",
  "react.js": "react",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "java script": "javascript",
  "next.js": "nextjs",
  nextjs: "nextjs",
  tailwind: "tailwindcss",
  "tailwind css": "tailwindcss",
  postgres: "postgres",
  postgresql: "postgres",
  node: "nodejs",
  "node.js": "nodejs",
  git: "git",
  github: "github",
  redux: "redux",
  vercel: "vercel",
  java: "java",
}

export default function TechBrandIcon({
  name,
  size = 32,
  className,
}: IconProps & { name: string; size?: number }) {
  const key =
    aliasMap[name.toLowerCase().trim()] ??
    (name.toLowerCase().trim() as IconKey)
  const Icon = techIcons[key]

  if (!Icon) {
    if (process.env.NODE_ENV === "development") {
      console.error(`Missing tech icon for "${name}"`)
    }
    return null
  }

  return (
    <Icon
      width={size}
      height={size}
      className={clsx("object-contain", className)}
      title={name}
    />
  )
}
