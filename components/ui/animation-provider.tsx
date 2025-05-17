"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimationContextType {
  animationComplete: boolean
  setAnimationComplete: (complete: boolean) => void
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined)

export function useAnimation() {
  const context = useContext(AnimationContext)
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider")
  }
  return context
}

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [animationComplete, setAnimationComplete] = useState(false)

  return (
    <AnimationContext.Provider value={{ animationComplete, setAnimationComplete }}>
      {children}
    </AnimationContext.Provider>
  )
}

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}
