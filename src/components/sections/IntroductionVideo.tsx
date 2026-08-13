import { FadeIn, SectionHeading } from '../ui/FadeIn'
import type { PortfolioData } from '../../types/portfolio'

type Props = {
  data: PortfolioData['introVideo']
}

export function IntroductionVideo({ data }: Props) {
  return (
    <section id="intro-video" className="section-pad px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading title={data.title} eyebrow="Watch" />
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="relative aspect-video w-full overflow-hidden border border-line bg-placeholder">
            <iframe
              src={data.embedUrl}
              title={data.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="mt-3 font-body text-[11px] text-ink-muted">
            <a
              href={data.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-line underline-offset-4 hover:text-accent"
            >
              Open on YouTube
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
