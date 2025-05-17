"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/dark-mode-toggle"
import { AnimatePresence ,motion } from "framer-motion"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Guestbook", path: "/guestbook" },
  
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the theme-dependent content
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center">
  <div className="relative h-10 w-10">
    {!mounted ? (
      <div className="h-full w-full rounded-full bg-muted animate-pulse" />
    ) : theme === "dark" ? (
      <Image
        src="/images/logo-light.png"
        alt="Chris Shockley Software Dev"
        width={40}
        height={40}
        className="object-contain"
      />
    ) : (
      <Image
        src="/images/logo-dark.png"
        alt="Chris Shockley Software Dev"
        width={40}
        height={40}
        className="object-contain"
      />
    )}
  </div>
</Link>

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`font-display text-sm font-medium transition-colors hover:text-accent ${
                pathname === item.path ? "text-accent" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setMobileMenuOpen(!mobileMenuOpen)
              }
            }}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden overflow-hidden border-b border-border"
    >
      <div className="container py-4 flex flex-col space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`font-display text-sm font-medium transition-colors hover:text-accent ${
              pathname === item.path ? "text-accent" : "text-muted-foreground"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>


    </motion.header>
  )
}
