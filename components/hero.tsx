'use client'

import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from './language-context'
import { getTranslation, isRTL } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

const sliderItems = [
  {
    image:
      '/images/hero/creamy-hummus-plate-with-pita-bread-olive-oil-and-.jpg',
    titleKey: 'slide4',
  },
  {
    image: '/images/hero/pizza45.png',
    titleKey: 'slide2',
  },

  {
    image:
      '/images/hero/delicious-chicken-shawarma-wrap-with-garlic-sauce-.jpg',
    titleKey: 'slide1',
  },

  // {
  //   image: '/grilled-kebab-plate-with-rice-and-grilled-vegetabl.jpg',
  //   titleKey: 'slide3',
  // },

  // {
  //   image: '/arabic-esfiha-meat-pastries-on-a-wooden-board.jpg',
  //   titleKey: 'slide5',
  // },
]

export function Hero() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const rtl = isRTL(language)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrentSlide(index)
      setTimeout(() => setIsAnimating(false), 500)
    },
    [isAnimating]
  )

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % sliderItems.length)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + sliderItems.length) % sliderItems.length)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {sliderItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={item.image || '/placeholder.svg'}
            alt={`Slide ${index + 1}`}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-foreground/60' />
        </div>
      ))}

      <div className='absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2'>
        {sliderItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-secondary w-8'
                : 'bg-background/50 hover:bg-background/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight text-balance'>
            {t.hero.headline}
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl text-background/90 mb-10 max-w-2xl mx-auto text-pretty'>
            {t.hero.description}
          </p>
          <Button
            asChild
            size='lg'
            className='bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 font-semibold'
          >
            <a
              href='https://wa.me/5548991454545'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t.nav.contact}
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href='#dishes'
        className='absolute bottom-8 left-1/2 -translate-x-1/2 text-background/80 hover:text-background transition-colors animate-bounce'
        aria-label='Scroll down'
      >
        <ChevronDown className='h-8 w-8' />
      </a>
    </section>
  )
}
