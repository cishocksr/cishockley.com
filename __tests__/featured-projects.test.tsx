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
    // optional:
    // githubUrl: "https://github.com/...",
    // category: "Web",
    // featured: true,
    // highlights: ["Great UX", "Fast loading"],
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

  it("lists the technologies", () => {
    render(<FeaturedProjectsClient projects={mockProjects} />)
    for (const tech of mockProjects[0].technologies) {
      expect(screen.getByText(tech)).toBeInTheDocument()
    }
  })

  it("doesn’t render optional links when they’re not provided", () => {
    render(<FeaturedProjectsClient projects={mockProjects} />)
    expect(screen.queryByRole("link", { name: /github/i })).toBeNull()
    expect(screen.queryByRole("link", { name: /live site/i })).toBeNull()
  })
})
