export type IconName = "Github" | "Twitter" | "LinkedIn"

export interface SocialLink {
  href: string
  label: string
  iconName: IconName
}

export const socialLinks: SocialLink[] = [
  { href: "https://github.com", label: "GitHub", iconName: "Github" },
  { href: "https://twitter.com", label: "Twitter", iconName: "Twitter" },
  { href: "https://linkedin.com", label: "LinkedIn", iconName: "LinkedIn" },
]
