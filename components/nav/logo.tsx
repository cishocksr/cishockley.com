"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Logo() {
  const { resolvedTheme, theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Image
        src="/images/logo-light.png" // fallback while theme is loading
        alt="Chris Shockley Software Dev"
        width={49}
        height={49}
        className="object-contain"
        priority
      />
    )
  }

  const currentTheme = resolvedTheme ?? theme ?? systemTheme

  const logoSrc =
    currentTheme === "dark" ? "/images/logo-dark.png" : "/images/logo-light.png"

  return (
    <Image
      src={logoSrc}
      alt="Chris Shockley Software Dev"
      width={49}
      height={49}
      className="object-contain"
      priority
    />
  )
}
