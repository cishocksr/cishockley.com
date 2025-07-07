import techIcons, { IconKey, IconProps } from "@/components/icons/tech"

const aliasMap: Record<string, IconKey> = {
  react: "react",
  "react.js": "react",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  nextjs: "nextjs",
  "next.js": "nextjs",
  tailwind: "tailwindcss",
  "tailwind css": "tailwindcss",
  nodejs: "nodejs",
  "node.js": "nodejs",
  git: "git",
  github: "github",
  postgresql: "postgres",
  redux: "redux",
  vercel: "vercel",
  java: "java",
}

export default function TechBrandIcon({
  name,
  size = 32,
  className,
}: { name: string; size?: number } & IconProps) {
  const normalized = name.toLowerCase().replace(/[\s.]+/g, "")
  const key = aliasMap[normalized] ?? (normalized as IconKey)

  const Icon = techIcons[key]
  if (!Icon) {
    if (process.env.NODE_ENV === "development") {
      console.error(`Missing tech icon for "${name}"`)
    }
    return null
  }

  return <Icon width={size} height={size} className={className} title={name} />
}
