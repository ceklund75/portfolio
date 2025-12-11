'use client'
import { motion, type HTMLMotionProps } from 'motion/react'

export function MotionNav(props: HTMLMotionProps<'nav'>) {
  return <motion.nav {...props} />
}
