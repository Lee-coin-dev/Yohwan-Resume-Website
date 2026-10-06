import { FadeIn, SectionHeading } from '../ui/FadeIn'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import type { Activity, PortfolioData } from '../../types/portfolio'

type Props = {
  data: PortfolioData['activities']
}

function ActivityBlock({ item, index }: { item: Activity; index: number }) {
  if (item.layout === 'text-only' || !item.media[0]) {
    return (
      <FadeIn delay={index * 0.04} className="border-t border-line pt-8">
        <div className="max-w-3xl">
          <ActivityText item={item} />
        </div>
      </FadeIn>
    )
  }

  const image = item.media[0]

  if (item.layout === 'full-bleed') {
    return (
      <FadeIn delay={index * 0.05} className="space-y-6">
        <ImagePlaceholder
          src={image}
          alt={item.title}
          aspect="aspect-[21/9] md:aspect-[2.4/1]"
          className="w-full"
        />
        <div className="mx-auto max-w-3xl px-1">
          <ActivityText item={item} />
        </div>
      </FadeIn>
    )
  }

  if (item.layout === 'right-offset') {
    return (
      <FadeIn
        delay={index * 0.05}
        className="grid items-start gap-8 md:grid-cols-12 md:gap-6"
      >
        <div className="md:col-span-5 md:col-start-1 md:pt-16">
          <ActivityText item={item} />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <ImagePlaceholder
            src={image}
            alt={item.title}
            aspect="aspect-[4/5]"
          />
        </div>
      </FadeIn>
    )
  }

  if (item.layout === 'left-small') {
    return (
      <FadeIn
        delay={index * 0.05}
        className="grid items-center gap-8 md:grid-cols-12"
      >
        <div className="md:col-span-4 md:col-start-2">
          <ImagePlaceholder
            src={image}
            alt={item.title}
            aspect="aspect-square"
          />
        </div>
        <div className="md:col-span-5 md:col-start-7">
          <ActivityText item={item} />
        </div>
      </FadeIn>
    )
  }

  return (
    <FadeIn
      delay={index * 0.05}
      className="grid items-end gap-8 md:grid-cols-12"
    >
      <div className="md:col-span-7">
        <ImagePlaceholder
          src={image}
          alt={item.title}
          aspect="aspect-[5/4]"
        />
      </div>
      <div className="md:col-span-4 md:col-start-9 md:pb-4">
        <ActivityText item={item} />
      </div>
    </FadeIn>
  )
}

function ActivityText({ item }: { item: Activity }) {
  return (
    <div>
      <p className="font-body text-[11px] uppercase tracking-editorial text-accent">
        {item.org}
        <span className="mx-2 text-line">·</span>
        {item.period}
      </p>
      <h3 className="mt-3 text-heading-item text-ink">{item.title}</h3>
      <p className="mt-2 font-body text-[0.95rem] text-ink-muted">{item.role}</p>
      {item.roles?.length ? (
        <ul className="mt-3 space-y-1 font-body text-[0.85rem] text-ink-muted">
          {item.roles.map((role) => (
            <li key={role.title}>
              {role.title} — {role.period}
            </li>
          ))}
        </ul>
      ) : null}
      <p className="mt-4 text-body-readable text-ink-muted">{item.description}</p>
      {item.link ? (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block font-body text-[11px] uppercase tracking-editorial text-accent underline decoration-line underline-offset-4 hover:text-ink"
        >
          Watch Video
        </a>
      ) : null}
      {item.related ? (
        <div className="mt-8 border-t border-line pt-6">
          <p className="font-body text-[11px] uppercase tracking-editorial text-accent">
            {item.related.org}
            <span className="mx-2 text-line">·</span>
            {item.related.period}
          </p>
          <h4 className="mt-2 font-display text-[clamp(1.4rem,2vw,1.85rem)] font-light leading-tight tracking-[-0.02em] text-ink">
            {item.related.title}
          </h4>
          <p className="mt-1 font-body text-[0.95rem] text-ink-muted">
            {item.related.role}
          </p>
          <p className="mt-3 text-body-readable text-ink-muted">
            {item.related.description}
          </p>
        </div>
      ) : null}
    </div>
  )
}

export function Activities({ data }: Props) {
  // Preserve original order; group consecutive text-only items for tighter spacing
  const blocks: Array<
    | { type: 'featured'; item: Activity }
    | { type: 'text-group'; items: Activity[] }
  > = []
  let textBuffer: Activity[] = []

  const flushText = () => {
    if (textBuffer.length) {
      blocks.push({ type: 'text-group', items: textBuffer })
      textBuffer = []
    }
  }

  for (const item of data) {
    if (item.layout === 'text-only' || !item.media[0]) {
      textBuffer.push(item)
    } else {
      flushText()
      blocks.push({ type: 'featured', item })
    }
  }
  flushText()

  return (
    <section id="activities" className="section-pad px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading eyebrow="Experience" title="Activities" />
        </FadeIn>
        <div className="space-y-24 md:space-y-32">
          {blocks.map((block, index) => {
            if (block.type === 'featured') {
              return (
                <ActivityBlock
                  key={block.item.title}
                  item={block.item}
                  index={index}
                />
              )
            }
            return (
              <div
                key={`text-group-${index}`}
                className="space-y-10 md:space-y-12"
              >
                {block.items.map((item, i) => (
                  <ActivityBlock key={item.title} item={item} index={i} />
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
