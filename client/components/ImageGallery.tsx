interface GalleryImage {
  src: string
  alt: string
}

interface ImageGalleryProps {
  /** Which side the wide column sits on */
  layout: 'large-left' | 'large-right'
  /**
   * Three images: one tall + two stacked.
   *   large-left  -> [tall, top, bottom]
   *   large-right -> [top, bottom, tall]
   * Two images: side by side, no stacking.
   *   large-left  -> [wide, narrow]
   *   large-right -> [narrow, wide]
   */
  images: [GalleryImage, GalleryImage, GalleryImage?]
}

const imgClass = 'h-full w-full object-cover aspect-video md:aspect-auto'

export default function ImageGallery({ layout, images }: ImageGalleryProps) {
  const [a, b, c] = images
  const tallLeft = layout === 'large-left'
  const stacked = Boolean(c)

  // Placement on md+ (everything stacks on mobile)
  const aClass = stacked && !tallLeft ? 'md:col-start-1' : 'md:row-span-2'
  const bClass = stacked ? (tallLeft ? '' : 'md:col-start-1') : 'md:row-span-2'
  const cClass = tallLeft
    ? ''
    : 'md:col-start-2 md:row-span-2 md:row-start-1'

  return (
    <div
      className={`grid gap-5 md:aspect-[12/5] ${
        tallLeft ? 'md:grid-cols-[2fr_1fr]' : 'md:grid-cols-[1fr_2fr]'
      }`}
    >
      <img
        src={a.src}
        alt={a.alt}
        loading="lazy"
        className={`${imgClass} ${aClass}`}
      />
      <img
        src={b.src}
        alt={b.alt}
        loading="lazy"
        className={`${imgClass} ${bClass}`}
      />
      {c && (
        <img
          src={c.src}
          alt={c.alt}
          loading="lazy"
          className={`${imgClass} ${cClass}`}
        />
      )}
    </div>
  )
}