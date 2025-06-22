// lib/constants/nav-items.ts

// 1. Define & export the **type** of a single item (PascalCase!)
export interface NavItem {
  name: string
  path: string
}

// 2. Export your **array** of items under a clear constant
export const NAV_ITEMS: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  // …etc
]
