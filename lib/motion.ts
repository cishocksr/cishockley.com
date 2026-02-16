import type { Variants, Transition } from 'motion/react'

export const DEFAULT_EASE: Transition['ease'] = [0.22, 1, 0.36, 1]

export const VARIANTS_CONTAINER: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
}

export const VARIANTS_SECTION: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

export const TRANSITION_SECTION: Transition = {
    duration: 0.6,

    ease: DEFAULT_EASE,
}

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
