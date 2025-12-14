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
          {/* Images */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
              dir === 'rtl' ? 'lg:order-2' : ''
            }`}
          >
            {/* Salah */}
            <div className='relative'>
              <div className='aspect-[5/5] rounded-lg overflow-hidden shadow-2xl'>
                <Image
                  src='/images/ourStory/salah.jpg'
                  width={500}
                  height={600}
                  alt='Chef Salah Abunabout'
                  className='w-full h-full object-cover'
                />
              </div>
              <p className='mt-3 text-center font-semibold'>Salah Abunabout</p>
              <p className='text-center text-sm text-muted-foreground'>
                {t.about.founderHeadChef}
              </p>
            </div>

            {/* Jaafar */}
            <div className='relative'>
              <div className='aspect-[5/5] rounded-lg overflow-hidden shadow-2xl'>
                <Image
                  src='/images/ourStory/jaafar.jpg'
                  width={500}
                  height={600}
                  alt='Chef Jaafar'
                  className='w-full h-full object-cover'
                />
              </div>
              <p className='mt-3 text-center font-semibold'>Jaafar</p>
              <p className='text-center text-sm text-muted-foreground'>
                {t.about.furnaceSpecialistChef}
              </p>
            </div>
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
              <p>{t.about.jaafarDescription}</p>
            </div>

            {/* Signatures */}
            <div className='mt-8 pt-8 border-t border-border space-y-3'>
              <div>
                <p className='font-serif text-xl text-primary italic'>
                  Salah Abunabout
                </p>
                <p className='text-muted-foreground text-sm'>
                  {t.about.founderHeadChef}
                </p>
              </div>

              <div>
                <p className='font-serif text-xl text-primary italic'>Jaafar</p>
                <p className='text-muted-foreground text-sm'>
                  {t.about.furnaceSpecialist}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
