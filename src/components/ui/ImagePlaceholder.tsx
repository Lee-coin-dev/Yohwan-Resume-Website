import { useEffect, useState } from 'react'

type MediaImageProps = {
  src: string
  alt?: string
  className?: string
  aspect?: string
  objectFit?: 'cover' | 'contain'
}

export function MediaImage({
  src,
  alt = '',
  className = '',
  aspect = 'aspect-[4/3]',
  objectFit = 'cover',
}: MediaImageProps) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [src])

  if (!src || failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden border border-line bg-placeholder ${aspect} ${className}`.trim()}
        role="img"
        aria-label={alt || src || 'Image placeholder'}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,transparent_50%,rgba(44,59,46,0.06)_100%)]" />
        <p className="relative z-10 max-w-[90%] break-all px-4 text-center font-body text-[10px] uppercase tracking-editorial text-placeholder-dark md:text-[11px]">
          {src || 'No image'}
        </p>
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden border border-line bg-placeholder ${aspect} ${className}`.trim()}
    >
      <img
        key={src}
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full ${
          objectFit === 'contain' ? 'object-contain bg-bg p-2' : 'object-cover'
        }`}
        onError={() => setFailed(true)}
        loading="lazy"
      />
    </div>
  )
}

/** @deprecated Use MediaImage — kept as alias for existing imports */
export const ImagePlaceholder = MediaImage
