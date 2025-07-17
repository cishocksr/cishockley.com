// __tests__/GuestbookForm.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import GuestbookForm from "@/components/guestbook/guestbook-form"

describe("GuestbookForm", () => {
  const mockUser = { id: "1", name: "Test User" }
  let mockOnSubmit: jest.Mock<Promise<void>, [string]>

  beforeEach(() => {
    mockOnSubmit = jest.fn().mockResolvedValue(undefined)
  })

  it("renders the message textarea and submit button", () => {
    render(<GuestbookForm user={mockUser} onSubmit={mockOnSubmit} />)

    const textarea = screen.getByRole("textbox", {
      name: /message text area/i,
    })
    expect(textarea).toBeInTheDocument()

    const button = screen.getByRole("button", {
      name: /sign guestbook/i,
    })
    expect(button).toBeInTheDocument()
  })

  it("calls onSubmit with the message text when submitted", async () => {
    render(<GuestbookForm user={mockUser} onSubmit={mockOnSubmit} />)

    const textarea = screen.getByRole("textbox", {
      name: /message text area/i,
    })
    const button = screen.getByRole("button", {
      name: /sign guestbook/i,
    })

    // Type a message
    fireEvent.change(textarea, {
      target: { value: "Hello Guestbook!" },
    })

    // Submit the form
    fireEvent.click(button)

    // Wait for onSubmit to be called
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith("Hello Guestbook!")
    })
  })
})
