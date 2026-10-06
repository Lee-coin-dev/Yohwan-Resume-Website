import { motion } from 'framer-motion'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import type { PortfolioData } from '../../types/portfolio'

type Props = {
  data: PortfolioData['intro']
}

export function Introduction({ data }: Props) {
  return (
    <section
      id="intro"
      className="relative flex min-h-screen items-end overflow-hidden lg:items-center"
    >
      <div className="absolute inset-0">
        <ImagePlaceholder
          src={data.heroImage}
          alt="Introduction hero"
          aspect="h-full w-full"
          className="h-full min-h-screen border-0"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(245,243,238,0.92)_0%,rgba(245,243,238,0.72)_42%,rgba(245,243,238,0.28)_100%)]" />
      </div>

      <div className="relative z-10 w-full px-6 pb-24 pt-28 md:px-12 lg:px-16 lg:pb-20 lg:pt-0">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mb-6 font-body text-[11px] uppercase tracking-editorial text-accent"
        >
          {data.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="max-w-[12ch] font-display text-[clamp(3.4rem,9vw,7.5rem)] font-light leading-[0.92] tracking-wide-title text-ink md:max-w-[55%]"
        >
          {data.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.45 }}
          className="mt-8 max-w-md text-body-readable text-ink-muted md:text-[1.05rem]"
        >
          {data.bio}
        </motion.p>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-body text-[10px] uppercase tracking-editorial text-ink-muted lg:left-[calc(50%+3.5rem)]"
      >
        Scroll
        <span className="block h-8 w-px bg-accent/60" aria-hidden />
      </motion.a>
    </section>
  )
}
