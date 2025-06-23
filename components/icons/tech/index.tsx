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

/**
 * SVG icon component type that supports an optional `title` prop.
 */
type SVGIconComponent = FC<SVGProps<SVGSVGElement> & { title?: string }>

/**
 * Map of technology names (normalized) to their SVG icon components.
 */
const techIcons: Record<string, SVGIconComponent> = {
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
