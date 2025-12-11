'use client'
import { motion, type HTMLMotionProps } from 'motion/react'

export function MotionSection(props: HTMLMotionProps<'section'>) {
  return <motion.section {...props} />
}
