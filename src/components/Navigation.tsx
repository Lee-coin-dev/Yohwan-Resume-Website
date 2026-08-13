import { useEffect, useState } from 'react'
import type { NavItem } from '../types/portfolio'

type NavigationProps = {
  items: NavItem[]
}

export function Navigation({ items }: NavigationProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [items])

  const linkClass = (id: string) =>
    `block font-body text-[11px] uppercase tracking-editorial transition-colors duration-300 ${
      activeId === id
        ? 'text-accent'
        : 'text-ink-muted hover:text-ink'
    }`

  return (
    <>
      <nav
        aria-label="Primary"
        className="fixed left-0 top-0 z-50 hidden h-screen w-28 flex-col justify-between border-r border-line/60 bg-bg/80 px-5 py-10 backdrop-blur-sm lg:flex"
      >
        <a
          href="#intro"
          className="font-display text-lg font-light leading-none tracking-wide-title text-ink"
        >
          JYK
        </a>
        <ul className="flex flex-col gap-4">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={linkClass(item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="font-body text-[10px] uppercase tracking-editorial text-ink-muted">
          Portfolio
        </span>
      </nav>

      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-line/50 bg-bg/90 px-5 py-4 backdrop-blur-sm lg:hidden">
        <a
          href="#intro"
          className="font-display text-xl font-light tracking-wide-title text-ink"
        >
          John Yohwan Kim
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="font-body text-[11px] uppercase tracking-editorial text-accent"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-bg px-8 pt-24 lg:hidden">
          <ul className="flex flex-col gap-6">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${linkClass(item.id)} text-sm`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  )
}
