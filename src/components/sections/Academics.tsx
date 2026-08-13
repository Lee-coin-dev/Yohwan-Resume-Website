import { FadeIn, SectionHeading } from '../ui/FadeIn'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import type { PortfolioData } from '../../types/portfolio'

type Props = {
  data: PortfolioData['academics']
}

export function Academics({ data }: Props) {
  return (
    <section id="academics" className="section-pad px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading eyebrow="Education" title="Academics" />
        </FadeIn>

        <ul className="space-y-10 md:space-y-14">
          {data.schools.map((school, index) => (
            <FadeIn key={school.name} delay={index * 0.06}>
              <li className="grid gap-5 border-t border-line pt-8 md:grid-cols-[88px_1fr] md:gap-8">
                <ImagePlaceholder
                  src={school.logo}
                  alt={`${school.name} logo`}
                  aspect="aspect-square"
                  objectFit="contain"
                  className="w-20 md:w-full"
                />
                <div>
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-6">
                    <h3 className="font-display text-2xl font-light tracking-wide-title text-ink md:text-3xl">
                      {school.name}
                    </h3>
                    <p className="shrink-0 font-body text-[11px] uppercase tracking-editorial text-accent">
                      {school.grades}
                    </p>
                  </div>
                  <p className="mt-2 font-body text-sm text-ink-muted">
                    {school.location}
                    <span className="mx-2 text-line">·</span>
                    {school.period}
                  </p>
                  <p className="mt-3 max-w-2xl font-body text-sm font-light leading-relaxed text-ink-muted">
                    {school.address}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
