"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react"
import { usePathname } from "next/navigation"
import { motion, type MotionProps } from "framer-motion"

// Context to track animation completion
interface AnimationContextType {
  animationComplete: boolean
  setAnimationComplete: (complete: boolean) => void
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
)

export function useAnimation() {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider")
  }
  return context
}

export function AnimationProvider({ children }: { children: ReactNode }) {
  // Default to true so consumers don’t wait on unwanted animations
  const [animationComplete, setAnimationComplete] = useState(true)

  return (
    <AnimationContext.Provider
      value={{ animationComplete, setAnimationComplete }}
    >
      {children}
    </AnimationContext.Provider>
  )
}

interface PageWrapperProps extends MotionProps {
  children: ReactNode
}

export function PageWrapper({
  children,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  exit = { opacity: 0, y: 20 },
  transition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  ...rest
}: PageWrapperProps) {
  const pathname = usePathname()
  const disableAnimation = pathname === "/"
  const { setAnimationComplete } = useAnimation()

  useEffect(() => {
    // Reset or disable animation state on route change
    setAnimationComplete(disableAnimation)
  }, [disableAnimation, setAnimationComplete])

  if (disableAnimation) return <>{children}</>

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      className="w-full"
      {...rest}
    >
      {children}
    </motion.div>
  )
}
