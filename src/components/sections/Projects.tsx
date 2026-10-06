import { FadeIn, SectionHeading } from '../ui/FadeIn'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import type { PortfolioData, Project } from '../../types/portfolio'

type Props = {
  data: PortfolioData['projects']
}

function ProjectSpread({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const reverse = index % 2 === 1
  const media = project.media[0]
  const hasVisual = Boolean(project.embedUrl || media)

  return (
    <FadeIn
      delay={0.05}
      className={`grid items-center gap-8 border-t border-line pt-12 md:gap-10 md:pt-16 ${
        hasVisual ? 'md:grid-cols-12' : 'md:grid-cols-1'
      }`}
    >
      {hasVisual ? (
        <div
          className={`md:col-span-7 ${reverse ? 'md:order-2 md:col-start-6' : 'md:col-start-1'}`}
        >
          {project.embedUrl ? (
            <div className="relative aspect-video w-full overflow-hidden border border-line bg-placeholder">
              <iframe
                src={project.embedUrl}
                title={project.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <ImagePlaceholder
              src={media!}
              alt={project.title}
              aspect="aspect-[16/10]"
            />
          )}
        </div>
      ) : null}

      <div
        className={
          hasVisual
            ? `md:col-span-5 ${reverse ? 'md:order-1 md:col-start-1' : 'md:col-start-8'}`
            : 'max-w-2xl'
        }
      >
        <p className="font-body text-[11px] uppercase tracking-editorial text-accent">
          {project.period}
        </p>
        <h3 className="mt-3 text-heading-item text-ink">{project.title}</h3>
        <p className="mt-2 font-body text-[0.95rem] text-ink-muted">{project.role}</p>
        {project.tools.length ? (
          <p className="mt-3 font-body text-[0.7rem] uppercase tracking-editorial text-ink-muted">
            {project.tools.join('  ·  ')}
          </p>
        ) : null}
        <p className="mt-5 text-body-readable text-ink-muted">{project.summary}</p>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block font-body text-[11px] uppercase tracking-editorial text-accent underline decoration-line underline-offset-4 transition-colors hover:text-ink"
          >
            View Project
          </a>
        ) : null}
      </div>
    </FadeIn>
  )
}

export function Projects({ data }: Props) {
  return (
    <section id="projects" className="section-pad px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading eyebrow="Selected Work" title="Projects" />
        </FadeIn>
        <div className="space-y-8 md:space-y-4">
          {data.map((project, index) => (
            <ProjectSpread
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
