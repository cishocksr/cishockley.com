// components/MobileNav.tsx
"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import NavList from "./nav-list"
import { NAV_ITEMS } from "./nav-items"
import { ThemeToggle } from "../theme-toggle"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((o) => !o)
  const close = () => setOpen(false)

  return (
    <>
      {/* Always-visible row: theme toggle + hamburger */}
      <div className="flex md:hidden items-center gap-2">
        <ThemeToggle aria-label="Toggle light/dark theme" />

        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle menu"
          onClick={toggle}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Slide-down menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden
              fixed top-0 left-0
              w-full
              bg-background
              shadow-lg
              border-b border-border
              z-50
              overflow-hidden
            "
          >
            <div className="relative pt-20 pb-6 px-4">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                onClick={close}
                className="absolute top-4 right-4"
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Navigation links */}
              <div className="flex flex-col space-y-4">
                <NavList items={NAV_ITEMS} onItemClick={close} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
