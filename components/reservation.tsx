'use client'

import { useLanguage } from './language-context'
import { getTranslation } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

export function Reservation() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section id='reservation' className='py-20 md:py-32 bg-background'>
      <div className='container mx-auto px-4'>
        {/* Centered Card */}
        <div
          className='
          max-w-3xl mx-auto 
          text-center 
          bg-card 
          border border-border 
          rounded-2xl 
          shadow-lg 
          p-10 md:p-14
        '
        >
          {/* Title */}
          <h2 className='font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4'>
            {t.reservation.title}
          </h2>

          {/* Subtitle */}
          <p className='text-muted-foreground text-lg max-w-2xl mx-auto mb-10'>
            {t.reservation.subtitle}
          </p>

          {/* WhatsApp Button */}
          <Button
            asChild
            size='lg'
            className='
              bg-primary 
              hover:bg-primary/90 
              text-primary-foreground 
              px-10 py-6 
              text-xl font-semibold
            '
          >
            <a
              href='https://wa.me/5548991454545'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              <MessageCircle className='h-6 w-6' />
              {language === 'pt'
                ? 'Reservar via WhatsApp'
                : language === 'en'
                ? 'Reserve via WhatsApp'
                : 'احجز عبر الواتساب'}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
