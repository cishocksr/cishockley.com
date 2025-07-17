"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { NavItem } from "./nav-items"

interface NavListProps {
  items: NavItem[]
  /** Optional callback to fire (e.g. to close a mobile menu) */
  onItemClick?: () => void
}

export default function NavList({ items, onItemClick }: NavListProps) {
  const pathname = usePathname()

  // Treat “/” as a special case, everything else matches via startsWith
  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path)

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          onClick={onItemClick}
          className={`
            font-display text-sm font-medium transition-colors hover:text-accent
            ${isActive(item.path) ? "text-accent" : "text-muted-foreground"}
          `}
        >
          {item.name}
        </Link>
      ))}
    </>
  )
}
