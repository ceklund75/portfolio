import { type Variant } from 'motion/react'

// Fade in from bottom (hero sections, page headers)
export const fadeInUp: Record<string, Variant> = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

// Simple fade (images, non-directional reveals)
export const fadeIn: Record<string, Variant> = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

// Stagger children animations (for lists, groups)
export const staggerContainer: Record<string, Variant> = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Scale in (buttons, interactive elements)
export const scaleIn: Record<string, Variant> = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Slide in from left (navigation items)
export const slideInLeft: Record<string, Variant> = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Scroll-triggered reveal (project cards, content sections)
export const scrollReveal: Record<string, Variant> = {
  hidden: { opacity: 0, y: 40 }, // More dramatic distance
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Slightly longer
      ease: [0.22, 1, 0.36, 1],
    },
  },
}
