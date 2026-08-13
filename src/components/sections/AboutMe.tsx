import { FadeIn } from '../ui/FadeIn'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import type { PortfolioData } from '../../types/portfolio'

type Props = {
  data: PortfolioData['about']
}

export function AboutMe({ data }: Props) {
  return (
    <section
      id="about"
      className="section-pad flex min-h-screen items-center px-6 md:px-12 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-12 lg:items-start lg:gap-8">
        <FadeIn className="order-2 lg:order-1 lg:col-span-4">
          <p className="mb-4 font-body text-[11px] uppercase tracking-editorial text-accent">
            About Me
          </p>
          <p className="font-body text-sm font-light leading-[1.85] text-ink-muted md:text-[15px]">
            {data.bio}
          </p>
        </FadeIn>

        <FadeIn delay={0.12} className="order-1 lg:order-2 lg:col-span-4">
          <ImagePlaceholder
            src={data.profileImage}
            alt={`${data.name} profile`}
            aspect="aspect-[3/4]"
            className="mx-auto w-full max-w-sm"
          />
          <p className="mt-4 text-center font-display text-2xl font-light tracking-wide-title text-ink">
            {data.name}
          </p>
          <p className="mt-1 text-center font-body text-xs text-ink-muted">
            {data.school}
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="order-3 lg:col-span-4">
          <aside className="border border-line bg-bg-warm/60 p-6 md:p-8">
            <p className="mb-6 font-body text-[11px] uppercase tracking-editorial text-accent">
              Contact
            </p>
            <dl className="space-y-5 font-body text-sm font-light">
              <div>
                <dt className="text-[10px] uppercase tracking-editorial text-ink-muted">
                  Name
                </dt>
                <dd className="mt-1 text-ink">{data.contact.name}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-editorial text-ink-muted">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent"
                  >
                    {data.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-editorial text-ink-muted">
                  Tel
                </dt>
                <dd className="mt-1 text-ink">{data.contact.tel}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-editorial text-ink-muted">
                  Address
                </dt>
                <dd className="mt-1 text-ink">{data.contact.address}</dd>
              </div>
            </dl>
          </aside>
        </FadeIn>
      </div>
    </section>
  )
}
