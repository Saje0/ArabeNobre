'use client'

import { useState, useMemo } from 'react'
import { LanguageProvider, useLanguage } from '@/components/language-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getTranslation, isRTL } from '@/lib/i18n'
import { menuItems, categories, categoryKeys } from '@/lib/menu-data'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Leaf, Flame, WheatOff } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

function MenuContent() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const rtl = isRTL(language)
  const [activeCategory, setActiveCategory] = useState('shawarmas')
  const categoryLabels = categories[language]

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return menuItems
    return menuItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const dietaryIcons = {
    vegan: { icon: Leaf, label: { pt: 'Vegano', en: 'Vegan', ar: 'نباتي' } },
    spicy: { icon: Flame, label: { pt: 'Picante', en: 'Spicy', ar: 'حار' } },
    'gluten-free': {
      icon: WheatOff,
      label: { pt: 'Sem Glúten', en: 'Gluten-Free', ar: 'خالٍ من الغلوتين' },
    },
  }

  const menuTranslations = {
    pt: {
      title: 'Nosso Cardápio',
      viewDetails: 'Ver Detalhes',
    },
    en: {
      title: 'Our Menu',
      viewDetails: 'View Details',
    },
    ar: {
      title: 'قائمتنا',
      viewDetails: 'عرض التفاصيل',
    },
  }

  const mt = menuTranslations[language]

  return (
    <div className={rtl ? 'rtl' : 'ltr'} dir={rtl ? 'rtl' : 'ltr'}>
      <Header />
      <main className=''>
        {/* Hero Banner */}
        <section className='relative py-28 lg:py-40'>
          <div className='absolute inset-0'>
            <Image
              src='/images/menu/pizza/pizza.jpg'
              alt='pattern'
              fill
              className='object-cover'
              priority
            />
          </div>
          <div className='relative container mx-auto px-4 text-center'>
            <h1 className='font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4'>
              {mt.title}
            </h1>
          </div>
        </section>

        {/* Category Filter */}
        <section className='top-20 z-30 bg-background border-b border-border py-4'>
          <div className='container mx-auto px-1'>
            <div className='grid grid-cols-4 lg:grid-cols-4 gap-3 max-w-3xl mx-auto'>
              {categoryKeys.map((key, index) => (
                <Button
                  key={key}
                  variant={activeCategory === key ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(key)}
                  className={`
            w-full h-10 
            justify-center text-sm font-medium
            transition-all duration-300
            ${
              activeCategory === key
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-primary/80 hover:text-white'
            }
          `}
                >
                  {categoryLabels[index]}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <section className='py-16 bg-muted/30'>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {filteredItems.map((item, index) => (
                <Card
                  key={item.id}
                  className='group py-0 overflow-hidden border-border hover:shadow-xl transition-all duration-300'
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className='relative aspect-[4/3] overflow-hidden'>
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.name[language]}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    {item.dietary && item.dietary.length > 0 && (
                      <div className='absolute top-2 right-2 flex gap-1'>
                        {item.dietary.map((diet) => {
                          const DietIcon = dietaryIcons[diet].icon
                          return (
                            <Badge
                              key={diet}
                              variant='secondary'
                              className='bg-background/90 backdrop-blur-sm'
                              title={dietaryIcons[diet].label[language]}
                            >
                              <DietIcon className='h-3 w-3' />
                            </Badge>
                          )
                        })}
                      </div>
                    )}
                  </div>
                  <CardContent className='p-4'>
                    <h3 className='font-serif text-xl font-bold text-foreground mb-2'>
                      {item.name[language]}
                    </h3>
                    <p className='text-muted-foreground text-sm mb-4 line-clamp-2'>
                      {item.description[language]}
                    </p>
                    <div className='flex items-center justify-between'>
                      <span className='text-xl font-bold text-secondary'>
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </span>
                      <Button asChild size='sm' variant='outline'>
                        <Link href={`/menu/${item.id}`}>{mt.viewDetails}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function MenuPage() {
  return <MenuContent />
}
