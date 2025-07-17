// __tests__/NavList.test.tsx
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import NavList from "@/components/nav/nav-list"
import { NAV_ITEMS } from "@/components/nav/nav-items"
import { usePathname } from "next/navigation"

// Mock the hook so we can control the “current” path
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}))

describe("NavList", () => {
  beforeEach(() => {
    // default to home
    ;(usePathname as jest.Mock).mockReturnValue("/")
  })

  it("renders all links with correct hrefs", () => {
    render(<NavList items={NAV_ITEMS} />)

    NAV_ITEMS.forEach(({ name, path }) => {
      const link = screen.getByRole("link", { name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute("href", path)
    })
  })

  it("applies the active class to the current route", () => {
    // simulate being on /projects
    ;(usePathname as jest.Mock).mockReturnValue("/projects")
    render(<NavList items={NAV_ITEMS} />)

    const activeLink = screen.getByRole("link", { name: "Projects" })
    expect(activeLink).toHaveClass("text-accent")
  })
})
