import { motion, type MotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
} & MotionProps

export function FadeIn({
  children,
  className = '',
  delay = 0,
  ...rest
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string
  title: string
}) {
  return (
    <div className="mb-12 md:mb-16 lg:mb-20">
      {eyebrow ? (
        <p className="mb-3 font-body text-[0.64rem] font-medium uppercase tracking-editorial text-ink">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-[14ch] text-heading-section text-ink">{title}</h2>
    </div>
  )
}
