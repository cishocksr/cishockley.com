// __tests__/BlogCard.test.tsx
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import BlogCard from "@/components/blog/blog-card"
import type { PostMeta } from "@/types/post"
import { format } from "date-fns"

const mockPost: PostMeta = {
  title: "Test Post",
  slug: "test-post",
  date: "2025-07-17",
  image: "",
  readingTime: "5 min read",
}

describe("BlogCard", () => {
  it("renders title, date, and reading time", () => {
    render(<BlogCard post={mockPost} />)

    // Title
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Test Post"
    )

    // Compute exactly what the component shows:
    const expected = format(new Date(mockPost.date), "LLLL d, yyyy")
    expect(screen.getByText(expected)).toBeInTheDocument()

    // Reading time
    expect(screen.getByText("5 min read")).toBeInTheDocument()
  })
})
