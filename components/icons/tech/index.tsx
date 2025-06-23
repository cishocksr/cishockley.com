// components/icons/tech/index.ts
import type { FC, SVGProps } from "react"
import JavaScriptIcon from "./javascript-icon"
import TypeScriptIcon from "./typescript-icon"
import ReactIcon from "./react-icon"
import NextJsIcon from "./next-icon"
import NodeJsIcon from "./nodejs-icon"
import TailwindIcon from "./tailwindcss-icon"
import GitIcon from "./git-icon"
import GitHubIcon from "./github-icon"
import PostgresIcon from "./postgres-icon"
import ReduxIcon from "./redux-icon"
import VercelIcon from "./vercel-icon"
import JavaIcon from "./java-icon"

// 1) Define & export the union of valid keys:
export type IconKey =
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "nodejs"
  | "tailwindcss"
  | "git"
  | "github"
  | "postgres"
  | "redux"
  | "vercel"
  | "java"

// 2) Define & export your shared IconProps:
export type IconProps = SVGProps<SVGSVGElement> & {
  title?: string
}

// 3) Build the strongly-typed map:
const techIcons: Record<IconKey, FC<IconProps>> = {
  javascript: JavaScriptIcon,
  typescript: TypeScriptIcon,
  react: ReactIcon,
  nextjs: NextJsIcon,
  nodejs: NodeJsIcon,
  tailwindcss: TailwindIcon,
  git: GitIcon,
  github: GitHubIcon,
  postgres: PostgresIcon,
  redux: ReduxIcon,
  vercel: VercelIcon,
  java: JavaIcon,
}

export default techIcons
