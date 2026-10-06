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
      <div className="mx-auto w-full max-w-[92rem]">
        <FadeIn className="mb-10 md:mb-16 lg:mb-20">
          <p className="mb-3 font-body text-[0.64rem] font-medium uppercase tracking-editorial text-ink">
            A portrait in words
          </p>
          <h2 className="max-w-[10ch] font-display text-[clamp(2.8rem,6.4vw,6rem)] font-light leading-[0.88] tracking-tight-display text-ink">
            About me
          </h2>
        </FadeIn>

        <div className="grid items-start gap-12 lg:grid-cols-[7fr_3fr] lg:gap-[8vw]">
          <FadeIn delay={0.08} className="min-w-0">
            <p className="font-display text-[clamp(1.24rem,2.2vw,2.2rem)] font-light leading-[1.28] tracking-[-0.02em] text-ink">
              {data.bio}
            </p>
          </FadeIn>

          <FadeIn delay={0.16} className="flex min-w-0 flex-col gap-8">
            <ImagePlaceholder
              src={data.profileImage}
              alt={`${data.name} profile`}
              aspect="aspect-[4/5]"
              className="w-full border-0"
            />

            <aside className="border-b border-ink pb-8 pt-2">
              <p className="mb-2 font-body text-[0.64rem] font-medium uppercase tracking-editorial text-ink">
                Personal card
              </p>
              <dl className="mt-4">
                {(
                  [
                    ['Name', data.contact.name],
                    ['Email', data.contact.email, `mailto:${data.contact.email}`],
                    ['Tel', data.contact.tel],
                    ['Address', data.contact.address],
                  ] as const
                ).map(([label, value, href]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[4rem_1fr] gap-x-3 border-t border-line py-[0.55rem] font-body text-[0.79rem] font-light leading-[1.45]"
                  >
                    <dt className="opacity-50">{label}</dt>
                    <dd className="m-0 break-words text-ink">
                      {href ? (
                        <a
                          href={href}
                          className="underline decoration-line underline-offset-4 transition-colors hover:text-accent"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
