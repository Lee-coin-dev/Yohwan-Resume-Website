import { FadeIn, SectionHeading } from '../ui/FadeIn'
import type { PortfolioData, ResearchItem } from '../../types/portfolio'

type Props = {
  data: PortfolioData['research']
}

function ResearchItemRow({ item }: { item: ResearchItem }) {
  return (
    <article className="border-t border-line pt-8 md:pt-10">
      <p className="font-body text-[11px] uppercase tracking-editorial text-accent">
        {item.period}
      </p>
      <h3 className="mt-3 text-heading-item text-ink">
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            {item.title}
          </a>
        ) : (
          item.title
        )}
      </h3>
      <p className="mt-2 font-body text-[0.95rem] text-ink-muted">{item.institution}</p>
      <p className="mt-1 font-body text-[0.7rem] uppercase tracking-editorial text-ink-muted">
        {item.publication}
      </p>
      <p className="mt-5 max-w-3xl text-body-readable text-ink-muted">{item.abstract}</p>
      {item.link ? (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block font-body text-[11px] uppercase tracking-editorial text-accent underline decoration-line underline-offset-4 hover:text-ink"
        >
          Read Publication
        </a>
      ) : null}
    </article>
  )
}

export function Research({ data }: Props) {
  return (
    <section id="research" className="section-pad px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Scholarship"
            title="Research & Publication"
          />
        </FadeIn>
        <div className="space-y-4 md:space-y-6">
          {data.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <ResearchItemRow item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
