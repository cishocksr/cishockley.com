'use client';

import type { Transition, Variants } from 'motion/react';
import { motion, useInView } from 'motion/react';
import { type ReactNode, useRef } from 'react';

// ── Shared constants ─────────────────────────────────────────────

export const DEFAULT_EASE: Transition['ease'] = [0.22, 1, 0.36, 1];

export const VARIANTS_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const VARIANTS_SECTION: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const TRANSITION_SECTION: Transition = {
  duration: 0.6,
  ease: DEFAULT_EASE,
};

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
};

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
};

export const GROW_SCALE: Variants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: { duration: 1.2, ease: DEFAULT_EASE },
  },
};

export const VARIANTS_STAGGER_GRID: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const VARIANTS_GRID_ITEM: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: DEFAULT_EASE },
  },
};

export const VARIANTS_HERO_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const VARIANTS_HERO_ITEM: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: DEFAULT_EASE },
  },
};

export const VARIANTS_SLIDE_DOWN: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: DEFAULT_EASE },
  },
};

// ── Components ───────────────────────────────────────────────────

/**
 * Scroll-triggered fade-in wrapper.
 * Wrap any content that should animate when it enters the viewport.
 */
export function AnimateIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={VARIANTS_SECTION}
      transition={{ ...TRANSITION_SECTION, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Scroll-triggered stagger container for card grids.
 * Children should be wrapped in <StaggerItem>.
 */
export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={VARIANTS_STAGGER_GRID}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual item inside a StaggerContainer.
 */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={VARIANTS_GRID_ITEM} className={className}>
      {children}
    </motion.div>
  );
}
