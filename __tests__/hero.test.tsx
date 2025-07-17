// __tests__/hero.test.tsx
import { render, screen } from "@testing-library/react"
import Hero from "@/components/home/hero"

describe("Hero component", () => {
  it("renders name and tagline", () => {
    render(<Hero />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Chris Shockley"
    )
    expect(screen.getByText(/software engineer/i)).toBeInTheDocument()
  })

  it("has no accessibility violations", async () => {
    const { container } = render(<Hero />)
    await expect(container).toHaveNoViolations()
  })
})
