// jest.config.js
const nextJest = require("next/jest")
const createJestConfig = nextJest({ dir: "./" })

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/$1" },
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/**/*.(spec|test).{js,jsx,ts,tsx}"],
}

module.exports = createJestConfig(customJestConfig)
