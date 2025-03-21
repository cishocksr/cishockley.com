"use client"

import * as React from "react"
import { HiSun, HiMoon } from "react-icons/hi2";
import { useTheme } from "next-themes"

export function DarkToggle() {
    const { theme, setTheme } = useTheme()

    // Function to toggle between light and dark modes
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-transparent dark:border-gray-600"
        >
            {theme === "dark" ? (
                <HiSun className="h-5 w-5 transition-all" />
            ) : (
                <HiMoon className="h-5 w-5 transition-all" />
            )}
        </button>
    )
}
