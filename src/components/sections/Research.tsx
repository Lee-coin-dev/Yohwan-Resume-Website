import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeIn, SectionHeading } from '../ui/FadeIn'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import type { PortfolioData, ResearchItem } from '../../types/portfolio'

type Props = {
  data: PortfolioData['research']
}

function ResearchCard({ item }: { item: ResearchItem }) {
  const [open, setOpen] = useState(false)
  const thumb = item.media[0] ?? '/images/research/placeholder.png'

  return (
    <article className="border border-line bg-bg">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group w-full text-left"
        aria-expanded={open}
      >
        <ImagePlaceholder
          src={thumb}
          alt={item.title}
          aspect="aspect-[4/3]"
          objectFit="contain"
          className="border-0 border-b border-line"
        />
        <div className="p-5 md:p-6">
          <p className="font-body text-[11px] uppercase tracking-editorial text-accent">
            {item.period}
          </p>
          <h3 className="mt-2 font-display text-2xl font-light tracking-wide-title text-ink md:text-3xl">
            {item.title}
          </h3>
          <p className="mt-2 font-body text-sm text-ink-muted">
            {item.institution}
          </p>
          <p className="mt-4 font-body text-[11px] uppercase tracking-editorial text-ink-muted group-hover:text-accent">
            {open ? 'Close' : 'Read Abstract'}
          </p>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="overflow-hidden border-t border-line"
          >
            <div className="space-y-4 p-5 md:p-6">
              <p className="font-body text-sm font-light leading-relaxed text-ink-muted">
                {item.abstract}
              </p>
              <p className="font-body text-xs uppercase tracking-editorial text-ink">
                {item.publication}
              </p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block font-body text-[11px] uppercase tracking-editorial text-accent underline decoration-line underline-offset-4"
                >
                  View Document
                </a>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  )
}

export function Research({ data }: Props) {
  return (
    <section id="research" className="section-pad px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Scholarship"
            title="Research & Publication"
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {data.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <ResearchCard item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
