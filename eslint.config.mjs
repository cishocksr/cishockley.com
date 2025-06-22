import { FlatCompat } from "@eslint/eslintrc";
import path from "path";

// Create a compat instance pointing at this project root
const compat = new FlatCompat({ baseDirectory: __dirname });

/**
 * Flat ESLint configuration (eslint.config.js)
 */
export default [
  // ■ 1) Ignore build artifacts and external folders
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "public/**",
    ],
  },

  // ■ 2) Extend your existing shareable configs in flat mode
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

  // ■ 3) Add your custom rules
  {
    rules: {
      // React 17+ doesn’t need React in scope
      "react/react-in-jsx-scope": "off",
      // Next.js Link <a> validation
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],
      // TypeScript & prop-types
      "react/prop-types": "off",
      "no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      // Tailwind rules
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "error",
    },
  },
];
