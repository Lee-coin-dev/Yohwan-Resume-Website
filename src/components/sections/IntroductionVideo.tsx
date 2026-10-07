import { FadeIn, SectionHeading } from '../ui/FadeIn'
import { ActionLink } from '../ui/ActionLink'
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
          <ActionLink href={data.youtubeUrl} className="mt-5">
            Open on YouTube
          </ActionLink>
        </FadeIn>
      </div>
    </section>
  )
}
