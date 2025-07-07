// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc"
import path from "path"
import { fileURLToPath } from "url"
// Pull in the actual recommended config object
import recommended from "eslint/conf/eslint-recommended"

// emulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: recommended,  // ← use the imported object here
})

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "public/**",
    ],
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "next",
    "next/core-web-vitals",
    "prettier"
  ),
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "jsx-a11y/anchor-is-valid": ["error", {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      }],
      "react/prop-types": "off",
      "no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "error",
    },
  },
]
