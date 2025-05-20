"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterComponent({
  words,
  className = "",
  cursorClassName = "animate-blink",
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseDuration = 1500,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const word = words[currentWordIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const handleTyping = () => {
      if (!isDeleting && currentText === word) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText((prev) =>
          isDeleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
        );
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    isPaused,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={className} role="status" aria-live="polite">
      {currentText}
      <span className={cursorClassName}>|</span>
    </span>
  );
}
