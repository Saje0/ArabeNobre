'use client'

import { useState } from 'react'
import { useLanguage } from './language-context'
import { getTranslation } from '@/lib/i18n'
import { X } from 'lucide-react'

const galleryImages = [
  // '/images/gallery/arabic-esfiha-meat-pastries-on-a-wooden-board.jpg',
  '/images/gallery/middle-eastern-mezze-platter-colorful-dishes.jpg',
  '/images/gallery/gallery-1.jpg',
  // '/images/gallery/arabic-coffee-service-traditional-dallah.jpg',
  '/images/gallery/gallery-2.jpg',
  // '/images/gallery/kunafa-arabic-cheese-dessert-with-syrup.jpg',
  '/images/gallery/baklava-dessert-with-nuts-honey-elegant-plating.jpg',
  // '/images/gallery/fresh-salad-tabouleh-bowl.jpg',
  '/images/gallery/traditional-arabic-coffee-in-ornate-cup-with-dates.jpg',
  '/images/gallery/gallery03.jpg',
  '/images/gallery/gallery-4.jpg',
  '/images/gallery/gallery-5.jpg',
]

export function Gallery() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id='gallery' className='py-20 md:py-32 bg-card'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4'>
            {t.gallery.title}
          </h2>
          <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className='columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className='group relative mb-4 w-full overflow-hidden rounded-2xl ring-1 ring-border/40 shadow-sm transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 hover:shadow-lg hover:-translate-y-0.5 break-inside-avoid'
            >
              <div className='aspect-square'>
                <img
                  src={image || '/placeholder.svg'}
                  alt={`Gallery image ${index + 1}`}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/0 to-foreground/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
              <div className='absolute bottom-3 left-3 rounded-full bg-foreground/80 px-2.5 py-1 text-xs font-medium tracking-wide text-background'>
                {String(index + 1).padStart(2, '0')} /{' '}
                {String(galleryImages.length).padStart(2, '0')}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm transition-opacity duration-300'
          onClick={() => setSelectedImage(null)}
        >
          <button
            className='absolute top-4 right-4 text-background hover:text-background/80 transition-colors'
            onClick={() => setSelectedImage(null)}
            aria-label='Close'
          >
            <X className='h-8 w-8' />
          </button>
          <img
            src={selectedImage || '/placeholder.svg'}
            alt='Gallery image enlarged'
            className='max-w-full max-h-[90vh] object-contain rounded-lg'
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
