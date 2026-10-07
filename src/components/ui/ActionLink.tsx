import type { ReactNode } from 'react'

type ActionLinkProps = {
  href: string
  children: ReactNode
  className?: string
}

export function ActionLink({ href, children, className = '' }: ActionLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center border border-ink bg-transparent px-5 py-3 font-body text-[11px] font-medium uppercase tracking-editorial text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-bg ${className || 'mt-6'}`.trim()}
    >
      {children}
    </a>
  )
}
