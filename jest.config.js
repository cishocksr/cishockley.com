// jest.config.js
const nextJest = require("next/jest")
const createJestConfig = nextJest({ dir: "./" })

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testEnvironment: "jsdom", // ← only this line is needed
  testMatch: ["<rootDir>/**/*.(spec|test).{js,jsx,ts,tsx}"],
}

module.exports = createJestConfig(customJestConfig)
