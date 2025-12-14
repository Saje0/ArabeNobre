'use client'

import Image from 'next/image'
import { useLanguage } from './language-context'
import { getTranslation } from '@/lib/i18n'

export function About() {
  const { language, dir } = useLanguage()
  const t = getTranslation(language)

  return (
    <section id='about' className='py-20 md:py-32 bg-background'>
      <div className='container mx-auto px-4'>
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            dir === 'rtl' ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image */}
          <div className={`relative ${dir === 'rtl' ? 'lg:order-2' : ''}`}>
            <div className='aspect-[5/5] rounded-lg overflow-hidden shadow-2xl'>
              <Image
                src='/images/ourStory/salah.jpg'
                width={500}
                height={600}
                alt='Chef at Arabe Nobre'
                className='w-full h-full object-cover'
              />
            </div>
            {/* Decorative Element */}
            <div className='absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 rounded-lg -z-10 hidden md:block' />
            <div className='absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10 hidden md:block' />
          </div>

          {/* Content */}
          <div className={dir === 'rtl' ? 'lg:order-1' : ''}>
            <span className='text-secondary font-semibold text-sm uppercase tracking-wider'>
              {t.about.subtitle}
            </span>
            <h2 className='font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6'>
              {t.about.title}
            </h2>
            <div className='space-y-4 text-muted-foreground text-lg leading-relaxed'>
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
              <p>{t.about.description3}</p>
            </div>
            {/* Signature */}
            <div className='mt-8 pt-8 border-t border-border'>
              <p className='font-serif text-2xl text-primary italic'>
                Chef Salah Abunabout
              </p>
              <p className='text-muted-foreground text-sm mt-1'>
                Founder & Head Chef
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
