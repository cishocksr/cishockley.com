"use client"

import { NavList } from "./nav-list"
import { NAV_ITEMS } from "./nav-items"
import { ThemeToggle } from "../theme-toggle"

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <NavList items={NAV_ITEMS} />
      <ThemeToggle aria-label="Toggle light/dark theme" />
    </nav>
  )
}
