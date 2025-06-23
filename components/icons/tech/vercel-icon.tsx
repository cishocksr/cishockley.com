import * as React from "react"
import { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement> & {
  title?: string
}

const VercelIcon = ({ title = "Vercel", ...props }: IconProps) => (
  <svg
    role="img"
    aria-label={title}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>{title}</title>
    <path d="M12 0L24 22H0L12 0z" />
  </svg>
)

export default VercelIcon
