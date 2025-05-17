// components/scroll-progress.tsx
"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100
      setScroll(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 z-[60] w-full h-1 bg-transparent">
      <div
        className="h-full bg-accent transition-all"
        style={{ width: `${scroll}%` }}
      />
    </div>
  )
}
