'use client'

import Link from 'next/link'
import { useLanguage } from './language-context'
import { getTranslation } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const dishData = [
  {
    image:
      '/images/menu/shawerma/beef-shawarma-wrap-with-vegetables-and-sauce.jpg',
    menuId: 'shawarma-carne',
  },
  {
    image: '/images/menu/shawerma/ShawermaSandwish.jpg',
    menuId: 'shawarma-carne',
  },
  {
    image: '/images/menu/pizza/PizzaCheese.jpg',
    menuId: 'pizza-margherita',
  },
  {
    image: '/images/menu/manakish/manqoosh muharramahwjubn.webp',
    menuId: 'mhammara-com-queijo',
  },
]

export function Dishes() {
  const { language, dir } = useLanguage()
  const t = getTranslation(language)

  const viewDetailsText = {
    pt: 'Ver Detalhes',
    en: 'View Details',
    ar: 'عرض التفاصيل',
  }

  const dishes = [
    { ...t.dishes.dish1, ...dishData[0] },
    { ...t.dishes.dish2, ...dishData[1] },
    { ...t.dishes.dish3, ...dishData[2] },
    { ...t.dishes.dish4, ...dishData[3] },
  ]

  return (
    <section id='dishes' className='py-20 md:py-32 bg-card'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4'>
            {t.dishes.title}
          </h2>
          <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
            {t.dishes.subtitle}
          </p>
        </div>

        {/* Dishes Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12'>
          {dishes.map((dish, index) => (
            <Card
              key={index}
              className='group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col'
            >
              <div className='aspect-square overflow-hidden'>
                <img
                  src={dish.image || '/placeholder.svg'}
                  alt={dish.name}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>

              <CardContent className='p-6 flex flex-col flex-1'>
                <h3 className='font-serif text-xl font-bold text-foreground mb-2'>
                  {dish.name}
                </h3>

                <p className='text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3'>
                  {dish.description}
                </p>

                <Button
                  asChild
                  size='sm'
                  variant='outline'
                  className='w-full bg-transparent hover:bg-primary mt-auto'
                >
                  <Link href={`/menu/${dish.menuId}`}>
                    {viewDetailsText[language]}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA - Made button link to /menu page */}
        <div className='text-center'>
          <Button
            asChild
            variant='outline'
            size='lg'
            className='border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent'
          >
            <Link href='/menu'>{t.dishes.viewMenu}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
