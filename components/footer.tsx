import Link from "next/link"
import { Github, Linkedin, Mail, Rss, Twitter, Youtube } from "lucide-react"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// import { siteMetadata } from "@/lib/siteMetadata" // Make sure this file exists or inline the metadata
import { buttonVariants } from "@/components/ui/button"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const iconClass =
        "h-5 w-5 text-muted-foreground hover:text-primary transition-colors"

    return (
        <footer className="mt-14 mb-6 flex flex-col items-center text-center">
            <div className="mb-3 flex space-x-4">
                <Link href={`mailto:c.shocksr3@gmail.com`} className={iconClass} aria-label="Email">
                    <Mail />
                </Link>

                <Link href='https://github.com/cishocksr' className={iconClass} aria-label="GitHub">
                    <FaGithub />

                </Link>
                <Link href='https://www.linkedin.com/in/christopherishockley/' className={iconClass} aria-label="LinkedIn">
                    <FaLinkedinIn />
                </Link>
                <Link href='https://x.com/cshocksr' className={iconClass} aria-label="Twitter">
                    <FaTwitter />
                </Link>
                <Link href="/feed.xml" className={iconClass} aria-label="RSS Feed">
                    <Rss />
                </Link>
            </div>

            <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:underline">
                    Christpher I. Shockley, Sr.
                </Link>
                <span>•</span>
                <span>© {currentYear}</span>
            </div>
        </footer>
    )
}
