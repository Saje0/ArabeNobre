'use client'

import { useState } from 'react'
import { useLanguage } from './language-context'
import { getTranslation } from '@/lib/i18n'
import { X } from 'lucide-react'

const galleryImages = [
  '/images/gallery/arabic-esfiha-meat-pastries-on-a-wooden-board.jpg',
  '/images/gallery/middle-eastern-mezze-platter-colorful-dishes.jpg',
  '/images/gallery/arabic-coffee-service-traditional-dallah.jpg',
  '/images/gallery/kunafa-arabic-cheese-dessert-with-syrup.jpg',
  '/images/gallery/baklava-dessert-with-nuts-honey-elegant-plating.jpg',
  '/images/gallery/fresh-salad-tabouleh-bowl.jpg',
  '/images/gallery/traditional-arabic-coffee-in-ornate-cup-with-dates.jpg',
  // '/images/gallery/restaurant-bar-area-cocktails.jpg',
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
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div
                className={`${
                  index === 0 || index === 5 ? 'aspect-square' : 'aspect-square'
                }`}
              >
                <img
                  src={image || '/placeholder.svg'}
                  alt={`Gallery image ${index + 1}`}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>
              <div className='absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300' />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4'
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
