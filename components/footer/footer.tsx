import Link from "next/link"
import { SocialLinks } from "@/components/socials/social-links"

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Chris Shockley. All rights reserved.
            </p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
