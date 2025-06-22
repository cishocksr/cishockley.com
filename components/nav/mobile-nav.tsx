// components/MobileNav.tsx
"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { NavList } from "./nav-list"
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
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggle()
          }}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Slide-down menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-b border-border"
          >
            <div className="container py-4 flex flex-col space-y-4">
              {/* Every link click fires `close()` */}
              <NavList items={NAV_ITEMS} onItemClick={close} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
