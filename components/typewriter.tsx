"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  words: string[]
  className?: string
}

export default function TypewriterComponent({ words, className = "" }: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]

    const typeSpeed = isDeleting ? 50 : 150

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        // Pause at complete word
        setTimeout(() => {
          setIsDeleting(true)
        }, 1500)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      } else {
        setCurrentText((prev) => {
          if (isDeleting) {
            return prev.substring(0, prev.length - 1)
          } else {
            return word.substring(0, prev.length + 1)
          }
        })
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentWordIndex, isDeleting, words])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}
