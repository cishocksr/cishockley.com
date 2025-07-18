// jest.setup.ts
import React from "react"
import { expect } from "@jest/globals" // ← pull in Jest’s typed expect
import "@testing-library/jest-dom"
import { toHaveNoViolations } from "jest-axe"

expect.extend(toHaveNoViolations)

// 2️⃣ Mock next/link as a plain <a> with children typed correctly
jest.mock("next/link", () => {
  // PropsWithChildren will automatically include `children`
  type LinkProps = React.PropsWithChildren<{ href: string }>

  const MockLink = (props: LinkProps) => {
    const { href, children, ...rest } = props
    // Use createElement so TS doesn’t complain about JSX in .ts
    return React.createElement("a", { href, ...rest }, children)
  }

  return {
    __esModule: true,
    default: MockLink,
  }
})

// 3️⃣ Stub out IntersectionObserver so no act() warnings
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}
Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverStub,
})
Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverStub,
})
