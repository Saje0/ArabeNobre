'use client'

import { useLanguage } from './language-context'
import { getTranslation } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

export function Testimonials() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const testimonials = [
    {
      quote: t.testimonials.quote1,
      name: 'Maria Santos',
      avatar: '/images/testimonials/professional-woman-headshot.png',
    },
    {
      quote: t.testimonials.quote2,
      name: 'Carlos Mendez',
      avatar: '/images/testimonials/professional-man-headshot.png',
    },
    {
      quote: t.testimonials.quote3,
      name: 'Ana Oliveira',
      avatar: '/images/testimonials/smiling-woman-headshot.png',
    },
  ]

  return (
    <section className='py-20 md:py-32 bg-primary'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4'>
            {t.testimonials.title}
          </h2>
          <p className='text-primary-foreground/80 text-lg max-w-2xl mx-auto'>
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className='bg-background border-0 shadow-xl'>
              <CardContent className='p-8'>
                <Quote className='h-10 w-10 text-secondary mb-4' />
                <p className='text-foreground text-lg leading-relaxed mb-6 italic'>
                  "{testimonial.quote}"
                </p>
                <div className='flex items-center gap-4'>
                  <img
                    src={testimonial.avatar || '/placeholder.svg'}
                    alt={testimonial.name}
                    className='w-14 h-14 rounded-full object-cover'
                  />
                  <div>
                    <p className='font-semibold text-foreground'>
                      {testimonial.name}
                    </p>
                    <div className='flex gap-1 mt-1'>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className='text-secondary'>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
