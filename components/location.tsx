'use client'

import { useLanguage } from './language-context'
import { getTranslation } from '@/lib/i18n'
import { MapPin, Phone, Mail, Instagram } from 'lucide-react'

export function Location() {
  const { language, dir } = useLanguage()
  const t = getTranslation(language)

  const hours = [
    { day: t.location.monday, hours: '11:00 - 23:00' },
    { day: t.location.tuesday, hours: t.location.closed },
    { day: t.location.wednesday, hours: '11:00 - 23:00' },
    { day: t.location.thursday, hours: '11:00 - 23:00' },
    { day: t.location.friday, hours: '11:00 - 23:00' },
    { day: t.location.saturday, hours: '11:00 - 23:00' },
    { day: t.location.sunday, hours: '11:00 - 23:00' },
  ]

  return (
    <section id='location' className='py-20 md:py-32 bg-card'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4'>
            {t.location.title}
          </h2>
          <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
            {t.location.subtitle}
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-12 ${
            dir === 'rtl' ? 'justify-center lg:justify-end' : ''
          }`}
        >
          {/* Google Maps */}
          <div
            className={`rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-auto ${
              dir === 'rtl' ? 'lg:order-2' : ''
            }`}
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.6959665828035!2d-48.575956299999994!3d-27.602954099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273700281cd387%3A0x94adf43736e54d9!2s%C3%81rabe%20nobre%20restaurante!5e0!3m2!1sen!2sbr!4v1764373531654!5m2!1sen!2sbr'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>

          {/* Info */}
          <div
            className={`space-y-8 ${
              dir === 'rtl' ? 'lg:order-1' : ''
            } text-center md:text-start`}
          >
            {/* Address */}
            <div
              className={`
                flex flex-col md:flex-row 
                items-center md:items-start 
                gap-4 
                ${dir === 'rtl' ? 'md:text-start' : ''}
              `}
            >
              <div className='flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
                <MapPin className='h-6 w-6 text-primary' />
              </div>
              <div>
                <h3 className='font-semibold text-foreground text-lg mb-1'>
                  {language === 'pt'
                    ? 'Endereço'
                    : language === 'en'
                    ? 'Address'
                    : 'العنوان'}
                </h3>
                <p className='text-muted-foreground'>{t.location.address}</p>
              </div>
            </div>

            {/* Hours */}
            <div className='text-center md:text-start'>
              <h3 className='font-semibold text-foreground text-lg mb-4'>
                {t.location.hours}
              </h3>

              <div className='space-y-2'>
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      flex 
                      justify-between 
                      py-2 
                      border-b border-border last:border-0
                      ${dir === 'rtl' ? 'flex-row-reverse' : ''}
                      text-center md:text-start
                    `}
                  >
                    <span className='text-foreground font-medium'>
                      {item.day}
                    </span>
                    <span
                      className={`text-muted-foreground ${
                        item.hours === t.location.closed
                          ? 'text-destructive'
                          : ''
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className='space-y-4 text-center md:text-start'>
              <div className='flex flex-col md:flex-row items-center md:items-center gap-4'>
                <Phone className='h-5 w-5 text-primary' />

                <a
                  href='tel:+5548991454545'
                  className='
      text-foreground 
      hover:text-primary 
      transition-colors 
      font-medium
    '
                  dir='ltr'
                >
                  +55 (48) 99145-4545
                </a>
              </div>

              {/* Social */}
              <div className='flex justify-center md:justify-start gap-4 mt-6'>
                <a
                  href='https://www.instagram.com/arabe_nobre?igsh=bXZzcGQ2OHhqZ2c2'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors'
                >
                  <Instagram className='h-5 w-5' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
