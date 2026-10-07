import { FadeIn, SectionHeading } from '../ui/FadeIn'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import type { HonorItem, PortfolioData } from '../../types/portfolio'

type Props = {
  data: PortfolioData['honors']
}

function HonorGroup({
  title,
  items,
  objectFit = 'contain',
  aspect = 'aspect-[3/4]',
}: {
  title: string
  items: HonorItem[]
  objectFit?: 'cover' | 'contain'
  aspect?: string
}) {
  const withMedia = items.filter((item) => item.media[0])

  return (
    <div className="grid gap-8 border-t border-line pt-10 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-5">
        <h3 className="text-heading-item text-ink">{title}</h3>
        <ul className="mt-6 space-y-5">
          {items.map((item) => (
            <li key={item.title}>
              <p className="font-body text-[1rem] font-normal leading-snug text-ink">
                {item.title}
              </p>
              <p className="mt-1 font-body text-[0.8rem] text-ink-muted">
                {[item.issuer, item.date, item.grade]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
              {item.description ? (
                <p className="mt-2 text-body-readable text-ink-muted">
                  {item.description}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      {withMedia.length ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7">
          {withMedia.map((item) => (
            <ImagePlaceholder
              key={`${item.title}-media`}
              src={item.media[0]}
              alt={item.title}
              aspect={aspect}
              objectFit={objectFit}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export function Honors({ data }: Props) {
  const school = data.filter((h) => h.category === 'School')
  const violin = data.filter((h) => h.category === 'Violin')
  const rowing = data.filter((h) => h.category === 'Rowing & Academic')

  return (
    <section id="honors" className="section-pad px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading eyebrow="Recognition" title="Honors & Certificate" />
        </FadeIn>

        <div className="space-y-16 md:space-y-20">
          {violin.length ? (
            <FadeIn>
              <HonorGroup title="Violin Honors & Certificate" items={violin} />
            </FadeIn>
          ) : null}
          {school.length ? (
            <FadeIn delay={0.08}>
              <HonorGroup title="School Award" items={school} />
            </FadeIn>
          ) : null}
          {rowing.length ? (
            <FadeIn delay={0.12}>
              <HonorGroup
                title="Rowing Honors & Certificate"
                items={rowing}
                aspect="aspect-[4/3]"
                objectFit="cover"
              />
            </FadeIn>
          ) : null}
        </div>
      </div>
    </section>
  )
}
