import { FadeIn } from '../ui/FadeIn'
import type { PortfolioData } from '../../types/portfolio'

type Props = {
  data: PortfolioData['contact']
}

export function Contact({ data }: Props) {
  return (
    <section
      id="contact"
      className="section-pad flex min-h-[70vh] items-center px-6 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <FadeIn>
          <p className="mb-6 font-body text-[11px] uppercase tracking-editorial text-accent">
            Contact
          </p>
          <h2 className="text-heading-section text-ink md:text-[clamp(3rem,7vw,5.5rem)]">
            {data.name}
          </h2>
          <a
            href={`mailto:${data.email}`}
            className="mt-8 inline-block font-body text-[1.05rem] font-light text-ink-muted underline decoration-line underline-offset-8 transition-colors hover:text-accent md:text-xl"
          >
            {data.email}
          </a>
          <p className="mt-6 text-body-readable text-ink-muted">{data.tel}</p>
          <p className="mt-2 text-body-readable text-ink-muted">{data.address}</p>
        </FadeIn>
      </div>
    </section>
  )
}
