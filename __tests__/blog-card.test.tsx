import { render, screen } from "@testing-library/react"
import BlogCard from "@/components/blog/blog-card"
import type { PostMeta } from "@/types/post"

const mockPost: PostMeta = {
  title: "Test Post",
  slug: "test-post",
  date: "2025-07-17",
  image: "",
  readingTime: "",
}

describe("BlogCard", () => {
  it("renders title and date", () => {
    render(<BlogCard post={mockPost} />)
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Test Post"
    )
    expect(screen.getByText(/Jul 17, 2025/)).toBeInTheDocument()
  })
})
