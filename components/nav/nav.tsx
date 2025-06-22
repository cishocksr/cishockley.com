// components/Nav.tsx
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { DesktopNav } from "./dektop-nav"
import { MobileNav } from "./mobile-nav"
import { Logo } from "./logo"

export default function Nav() {
  const { theme } = useTheme()

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-10">
            <Logo />
          </div>
        </Link>

        <DesktopNav />
        <MobileNav />
      </div>
    </motion.header>
  )
}
