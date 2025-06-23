// src/lib/motion/hooks.ts
import { useReducedMotion, Variants } from "framer-motion"
import { FADE_IN_UP, SCALE_IN, GROW_SCALE } from "./variants"

// no-op variants matching the same keys as your real ones
const NOOP_FADE: Variants = {
  initial: {},
  animate: {},
  exit: {},
}

const NOOP_SCALE: Variants = {
  initial: {},
  animate: {},
  exit: {},
}

const NOOP_GROW: Variants = {
  initial: {},
  animate: {},
}

export function useFadeInUpVariants(): Variants {
  return useReducedMotion() ? NOOP_FADE : FADE_IN_UP
}

export function useScaleInVariants(): Variants {
  return useReducedMotion() ? NOOP_SCALE : SCALE_IN
}

export function useGrowVariants(): Variants {
  return useReducedMotion() ? NOOP_GROW : GROW_SCALE
}
