// __tests__/theme-toggle.test.tsx

/**
 * 1️⃣ This must come *before* we import ThemeToggle,
 *    so Jest replaces the real module.
 */
jest.mock("next-themes", () => ({
  __esModule: true,
  useTheme: jest.fn(),
}))

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/components/theme-toggle"

describe("ThemeToggle", () => {
  const setThemeMock = jest.fn()

  beforeEach(() => {
    setThemeMock.mockReset()
    // default to light mode for each test
    ;(useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme: setThemeMock,
    })
  })

  it("calls setTheme('dark') when clicked in light mode", async () => {
    render(<ThemeToggle />)
    // After hydration, the button appears with this label:
    const btn = screen.getByRole("button", { name: /switch to dark mode/i })

    // 🔑 use the async setup click so the event propagates:
    const user = userEvent.setup()
    await user.click(btn)

    expect(setThemeMock).toHaveBeenCalledWith("dark")
  })

  it("calls setTheme('light') when clicked in dark mode", async () => {
    // override default: start in dark mode
    ;(useTheme as jest.Mock).mockReturnValue({
      theme: "dark",
      setTheme: setThemeMock,
    })

    render(<ThemeToggle />)
    const btn = screen.getByRole("button", { name: /switch to light mode/i })

    const user = userEvent.setup()
    await user.click(btn)

    expect(setThemeMock).toHaveBeenCalledWith("light")
  })
})
