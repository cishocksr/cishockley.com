// components/social-links.tsx
"use client"

import Link from "next/link"
import type { SocialLink, IconName } from "./social-link"
import { socialLinks } from "./social-link"

// Import your custom icons
import GitHubIcon from "@/components/icons/tech/github-icon"
import TwitterIcon from "@/components/icons/social/twitter-icon"
import { LinkedInIcon } from "@/components/icons/social/linkedin-icon"

import type { SVGProps } from "react"

// If your icons accept a `title?: string` prop, include it here:
type IconProps = SVGProps<SVGSVGElement> & { title?: string }

// Map your union keys to those icon components
const iconMap: Record<IconName, React.ComponentType<IconProps>> = {
  Github: GitHubIcon,
  Twitter: TwitterIcon,
  LinkedIn: LinkedInIcon,
}

export function SocialLinks() {
  return (
    <ul role="list" className="flex items-center space-x-4">
      {socialLinks.map(({ href, label, iconName }) => {
        const Icon = iconMap[iconName] // TS knows this always exists

        return (
          <li key={label}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="focus:outline-none focus:ring-2 focus:ring-accent rounded"
            >
              {/* Pass through size, className, etc. */}
              <Icon
                title={label}
                className="h-5 w-5 text-muted-foreground hover:text-accent transition-colors"
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
