// jest.setup.ts
import { expect } from "@jest/globals"
import "@testing-library/jest-dom"
import { toHaveNoViolations } from "jest-axe"

// now "expect" is the Jest-provided one, and has "extend"
expect.extend(toHaveNoViolations)
