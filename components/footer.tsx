'use client'

import type React from 'react'

import { useLanguage } from './language-context'
import { getTranslation } from '@/lib/i18n'
import { Instagram, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const { language, dir } = useLanguage()
  const t = getTranslation(language)

  const quickLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.menu, href: '#dishes' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.reservations, href: '#reservation' },
    { label: t.nav.contact, href: '#location' },
  ]

  return (
    <footer className='bg-foreground text-background py-16'>
      <div className='container mx-auto px-4'>
        {/* GRID */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 ${
            dir === 'rtl' ? 'text-right' : ''
          }`}
        >
          {/* Brand + Logo */}
          <div className='lg:col-span-1 flex flex-col items-start gap-4'>
            <Image
              src='/images/logos/Shawarma Logo-03.png'
              alt='Arabe Nobre Logo'
              width={340}
              height={340}
              className='w-60 h-auto'
            />

            <p className='text-background/70 leading-relaxed text-sm max-w-xs'>
              {t.hero.description.slice(0, 100)}...
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-semibold text-lg mb-4'>
              {t.footer.quickLinks}
            </h4>
            <ul className='space-y-2'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className='text-background/70 hover:text-secondary transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className='font-semibold text-lg mb-4'>{t.footer.followUs}</h4>
            <div
              className={`flex gap-4 ${
                dir === 'rtl' ? 'flex-row-reverse justify-end' : ''
              }`}
            >
              {/* Instagram */}
              <a
                href='https://www.instagram.com/arabe_nobre?igsh=bXZzcGQ2OHhqZ2c2'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-colors'
              >
                <Instagram className='h-5 w-5' />
              </a>

              {/* WhatsApp */}
              <a
                href='https://wa.me/5548991454545'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-colors'
              >
                <MessageCircle className='h-5 w-5' />
              </a>
            </div>
          </div>

          {/* EMPTY (newsletter removed) */}
          {/* Visit Us Block */}
          <div className='space-y-4'>
            <h4 className='font-semibold text-lg mb-2'>
              {language === 'pt'
                ? 'Visite-nos'
                : language === 'en'
                ? 'Visit Us'
                : 'زورونا'}
            </h4>

            <p className='text-background/70 text-sm leading-relaxed max-w-xs'>
              {language === 'pt'
                ? 'Estamos esperando por você para saborear a autêntica culinária árabe.'
                : language === 'en'
                ? 'We are waiting for you to enjoy authentic Arabic cuisine.'
                : 'نحن بانتظاركم لتجربة المذاق العربي الأصيل  .'}
            </p>

            <p className='text-background/70 text-sm'>
              {language === 'pt'
                ? 'Aberto todos os dias das 11h às 23h'
                : language === 'en'
                ? 'Open daily from 11 AM to 11 PM'
                : 'مفتوح يوميًا من 11 صباحًا حتى 11 مساءً'}
              <br />
              <span className='text-secondary font-semibold'>
                {language === 'pt'
                  ? 'Fechado às terças'
                  : language === 'en'
                  ? 'Closed on Tuesdays'
                  : 'مغلق يوم الثلاثاء'}
              </span>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div
          className='
    pt-8 
    border-t border-background/20 
    text-background/60 
    text-sm
    flex flex-col md:flex-row 
    items-center md:items-center 
    justify-center md:justify-between
    gap-2
  '
        >
          {/* Copyright */}
          <p className='text-center md:text-left'>{t.footer.copyright}</p>

          {/* Designer Credit */}
          <a
            href='https://github.com/Saje0'
            target='_blank'
            rel='noopener noreferrer'
            className='text-background/60 hover:text-secondary transition-colors text-center md:text-right'
          >
            Designed and developed by{' '}
            <span className='font-semibold'>Saje Mohammed</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
