"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  words?: string[] // Optional with fallback
  className?: string
  cursorClassName?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export default function TypewriterComponent({
  words,
  className = "",
  cursorClassName = "animate-blink",
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseDuration = 1500,
}: TypewriterProps) {
  const wordList = words ?? ["Developer"] // ✅ Safe fallback
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let isMounted = true

    const word = wordList[currentWordIndex]
    const speed = isDeleting ? deletingSpeed : typingSpeed

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        if (isMounted) {
          setIsPaused(false)
          setIsDeleting(true)
        }
      }, pauseDuration)

      return () => {
        isMounted = false
        clearTimeout(pauseTimer)
      }
    }

    const handleTyping = () => {
      if (!isMounted) return

      if (!isDeleting && currentText === word) {
        setIsPaused(true)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % wordList.length) // ✅ Fixed here
      } else {
        setCurrentText((prev) =>
          isDeleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
        )
      }
    }

    const timer = setTimeout(handleTyping, speed)
    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    isPaused,
    wordList,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ])

  return (
    <span
      className={className}
      role="status"
      aria-live="polite"
      aria-label={currentText}
    >
      {currentText}
      <span className={cursorClassName}>|</span>
    </span>
  )
}
