'use client'
import { motion, type HTMLMotionProps } from 'motion/react'

export function MotionArticle(props: HTMLMotionProps<'article'>) {
  return <motion.article {...props} />
}
