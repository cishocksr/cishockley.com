// __tests__/FeaturedProjects.test.tsx
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import FeaturedProjectsClient from "@/components/home/featured-projects-client"
import type { Project } from "@/types/project"

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Foo Project",
    description: "This is a test project for unit testing.",
    technologies: ["TypeScript", "React"],
    status: "completed",
  },
]

describe("FeaturedProjectsClient", () => {
  it("renders the project title and description", () => {
    render(<FeaturedProjectsClient projects={mockProjects} />)
    expect(screen.getByText("Foo Project")).toBeInTheDocument()
    expect(
      screen.getByText("This is a test project for unit testing.")
    ).toBeInTheDocument()
  })

  it("doesn’t render optional links when they’re not provided", () => {
    render(<FeaturedProjectsClient projects={mockProjects} />)
    expect(screen.queryByRole("link", { name: /github/i })).toBeNull()
    expect(screen.queryByRole("link", { name: /live site/i })).toBeNull()
  })
})
