// src/lib/motion/variants.ts
import type { Variants, Easing } from "framer-motion"

const DEFAULT_EASE: Easing = [0.22, 1, 0.36, 1] as unknown as Easing

export const FADE_IN_UP: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: DEFAULT_EASE },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: DEFAULT_EASE },
  },
}

export const SCALE_IN: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: DEFAULT_EASE },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2, ease: DEFAULT_EASE },
  },
}

export const GROW_SCALE: Variants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: { duration: 1.2, ease: DEFAULT_EASE },
  },
}
