'use client'

import { motion } from 'motion/react'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname} // Re-mount on route change
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2, // How long? (0.2-0.3s for page transitions)
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}
