import { FadeIn, SectionHeading } from '../ui/FadeIn'
import type { PortfolioData } from '../../types/portfolio'

type Props = {
  data: PortfolioData['sportsVolunteer']
}

export function Volunteership({ data }: Props) {
  return (
    <section id="volunteer" className="section-pad px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading eyebrow="Service" title="Volunteership" />
        </FadeIn>

        <ul className="space-y-16 md:space-y-20">
          {data.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <li>
                <h3 className="text-heading-item text-ink md:text-[clamp(2rem,3vw,3rem)]">
                  {item.title}
                </h3>
                <p className="mt-4 font-body text-[0.95rem] text-ink-muted">
                  <span className="text-accent">{item.role}</span>
                  <span className="mx-2 text-line">·</span>
                  {item.org}
                  <span className="mx-2 text-line">·</span>
                  {item.period}
                </p>
                <p className="mt-6 text-body-readable text-ink-muted">{item.result}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block font-body text-[11px] uppercase tracking-editorial text-accent underline decoration-line underline-offset-4 hover:text-ink"
                  >
                    Watch Video
                  </a>
                ) : null}
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
