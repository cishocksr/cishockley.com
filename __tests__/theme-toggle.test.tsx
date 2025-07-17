// __tests__/theme-toggle.test.tsx
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

// 1️⃣ Tell Jest to mock the entire next-themes module
jest.mock("next-themes")

describe("ThemeToggle", () => {
  const setThemeMock = jest.fn()

  beforeEach(() => {
    // 2️⃣ Before each test, have useTheme() return:
    //    - theme = "light"  ⇒ initial state
    //    - setTheme = our spy
    ;(useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme: setThemeMock,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("calls setTheme('dark') when clicked while in light mode", () => {
    render(<ThemeToggle />)

    // The button's aria-label should reflect the light→dark action
    const btn = screen.getByRole("button", { name: /switch to dark mode/i })
    userEvent.click(btn)

    // 3️⃣ Assert we've asked the theme store to switch to "dark"
    expect(setThemeMock).toHaveBeenCalledWith("dark")
  })

  it("calls setTheme('light') when clicked while in dark mode", () => {
    // Simulate starting in dark mode
    ;(useTheme as jest.Mock).mockReturnValueOnce({
      theme: "dark",
      setTheme: setThemeMock,
    })

    render(<ThemeToggle />)
    const btn = screen.getByRole("button", { name: /switch to light mode/i })
    userEvent.click(btn)

    expect(setThemeMock).toHaveBeenCalledWith("light")
  })
})
