'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from './language-context'
import { getTranslation, type Language } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { Menu, X, Globe } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'

export function Header() {
  const { language, setLanguage, dir } = useLanguage()
  const t = getTranslation(language)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'menu', href: '/menu' },
    { key: 'about', href: '/#about' },
    { key: 'gallery', href: '/#gallery' },
    { key: 'reservations', href: '/#reservation' },
    { key: 'contact', href: '/#location' },
  ] as const

  const languages: { code: Language; label: string }[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'عربي' },
  ]

  return (
    <header className='absolute top-0 left-0 right-0 z-50 bg-background/5 backdrop-blur-sm lg:backdrop-blur-xs'>
      <div className='container mx-auto px-4  sm:bg-transparent'>
        <div className='flex items-center justify-between h-20 md:h-20 xl:h-24'>
          {/* Logo */}
          <Link href='/' className='h-full flex items-center'>
            <div
              className='
                w-52 h-auto
                md:w-60
                lg:w-60
                xl:w-72
              '
            >
              <Image
                src='/images/logos/Shawarma Logo-03.png'
                alt='Arabe Nobre Logo'
                width={300}
                height={200}
                className='w-full h-auto'
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-8 h-full'>
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className='text-white/80 hover:text-primary transition-colors font-medium'
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div
            className={`flex items-center gap-3 h-full ${
              dir === 'rtl' ? 'flex-row-reverse' : ''
            }`}
          >
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='sm' className='gap-3'>
                  <Globe className='!h-7 !w-7' />
                  <span className='hidden sm:inline'>
                    {language.toUpperCase()}
                  </span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align={dir === 'rtl' ? 'start' : 'end'}>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? 'bg-muted' : ''}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Us (WhatsApp) */}
            <Button
              asChild
              className='hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground'
            >
              <Link
                href='https://wa.me/5548991454545'
                target='_blank'
                rel='noopener noreferrer'
              >
                {t.nav.contact}
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className='lg:hidden p-2 text-foreground'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label='Toggle menu'
            >
              {mobileMenuOpen ? (
                <X className='h-8 w-8 transition-all duration-300' />
              ) : (
                <Menu className='h-8 w-8 transition-all duration-300' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with animation */}
        <div
          className={`
            lg:hidden overflow-hidden border-t border-border 
            transition-all duration-300
            ${
              mobileMenuOpen
                ? 'max-h-[500px] animate-in fade-in slide-in-from-top'
                : 'max-h-0 animate-out fade-out slide-out-to-top'
            }
          `}
        >
          <nav className='flex flex-col gap-4 py-4'>
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className='text-black hover:text-primary transition-colors font-medium py-2'
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav[item.key]}
              </Link>
            ))}

            {/* Contact Us Button (WhatsApp) */}
            <Button
              asChild
              className='mt-2 bg-primary hover:bg-primary/90 text-primary-foreground'
            >
              <Link
                href='https://wa.me/5548991454545'
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
