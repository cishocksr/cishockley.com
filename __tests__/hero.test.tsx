import { render } from "@testing-library/react"
import { axe } from "jest-axe"
import Hero from "@/components/home/hero"

describe("Hero accessibility", () => {
  it("has no a11y violations", async () => {
    const { container } = render(<Hero />)
    const results = await axe(container)
    expect(results.violations).toHaveLength(0)
  })
})
