'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { LanguageProvider, useLanguage } from '@/components/language-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getTranslation, isRTL } from '@/lib/i18n'
import { menuItems, categories, categoryKeys } from '@/lib/menu-data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft,
  ArrowRight,
  Leaf,
  Flame,
  WheatOff,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

function MenuItemContent({ id }: { id: string }) {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const rtl = isRTL(language)

  const currentIndex = menuItems.findIndex((item) => item.id === id)
  const item = menuItems[currentIndex]

  if (!item) {
    notFound()
  }

  const prevItem = currentIndex > 0 ? menuItems[currentIndex - 1] : null
  const nextItem =
    currentIndex < menuItems.length - 1 ? menuItems[currentIndex + 1] : null

  const dietaryIcons = {
    vegan: {
      icon: Leaf,
      label: { pt: 'Vegano', en: 'Vegan', ar: 'نباتي' },
      color: 'text-green-600',
    },
    spicy: {
      icon: Flame,
      label: { pt: 'Picante', en: 'Spicy', ar: 'حار' },
      color: 'text-red-500',
    },
    'gluten-free': {
      icon: WheatOff,
      label: { pt: 'Sem Glúten', en: 'Gluten-Free', ar: 'خالٍ من الغلوتين' },
      color: 'text-amber-600',
    },
  }

  const pageTranslations = {
    pt: {
      backToMenu: 'Voltar ao Cardápio',
      ingredients: 'Ingredientes',
      addToOrder: 'Reservar com Este Prato',
      category: 'Categoria',
      previous: 'Anterior',
      next: 'Próximo',
    },
    en: {
      backToMenu: 'Back to Menu',
      ingredients: 'Ingredients',
      addToOrder: 'Reserve with This Dish',
      category: 'Category',
      previous: 'Previous',
      next: 'Next',
    },
    ar: {
      backToMenu: 'العودة للقائمة',
      ingredients: 'المكونات',
      addToOrder: 'احجز مع هذا الطبق',
      category: 'الفئة',
      previous: 'السابق',
      next: 'التالي',
    },
  }

  const pt = pageTranslations[language]

  const categoryIndex = categoryKeys.indexOf(item.category)
  const categoryLabel = categories[language][categoryIndex] || item.category

  const whatsappMessage = encodeURIComponent(
    language === 'pt'
      ? `Olá! Gostaria de fazer uma reserva e incluir o prato: ${item.name.pt}`
      : language === 'en'
      ? `Hello! I would like to make a reservation and include the dish: ${item.name.en}`
      : `مرحباً! أود إجراء حجز وإضافة الطبق: ${item.name.ar}`
  )

  return (
    <div className={rtl ? 'rtl' : 'ltr'} dir={rtl ? 'rtl' : 'ltr'}>
      <Header />
      <main className='pt-20 min-h-screen'>
        {/* Back Navigation */}
        <div className='container mx-auto px-4 py-6'>
          <Button asChild variant='ghost' className='gap-2 hover:bg-primary'>
            <Link href='/menu'>
              {rtl ? (
                <ArrowRight className='h-4 w-4' />
              ) : (
                <ArrowLeft className='h-4 w-4' />
              )}
              {pt.backToMenu}
            </Link>
          </Button>
        </div>

        {/* Main Content */}
        <section className='container mx-auto px-4 pb-16'>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-12'>
            {/* Image */}
            <div className='relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden'>
              <img
                src={item.image || '/placeholder.svg'}
                alt={item.name[language]}
                className='w-full h-full object-cover'
              />
              {item.dietary && item.dietary.length > 0 && (
                <div className='absolute top-4 right-4 flex gap-2'>
                  {item.dietary.map((diet) => {
                    const DietIcon = dietaryIcons[diet].icon
                    return (
                      <Badge
                        key={diet}
                        variant='secondary'
                        className='bg-background/90 backdrop-blur-sm gap-1 px-3 py-1'
                      >
                        <DietIcon
                          className={`h-4 w-4 ${dietaryIcons[diet].color}`}
                        />
                        <span className='text-sm'>
                          {dietaryIcons[diet].label[language]}
                        </span>
                      </Badge>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Details */}
            <div className='flex flex-col'>
              <Badge variant='outline' className='w-fit mb-4'>
                {categoryLabel}
              </Badge>

              <h1 className='font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
                {item.name[language]}
              </h1>

              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                {item.fullDescription[language]}
              </p>

              {/* Ingredients */}
              <div className='mb-8'>
                <h2 className='font-serif text-xl font-bold text-foreground mb-3'>
                  {pt.ingredients}
                </h2>
                <div className='flex flex-wrap gap-2'>
                  {item.ingredients[language].map((ingredient, index) => (
                    <Badge key={index} variant='secondary' className='text-sm'>
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Price and CTA */}
              <div className=''>
                <div className='flex items-center gap-4 mb-6'>
                  <span className='text-3xl font-bold text-secondary'>
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                {/* <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
                >
                  <a
                    href={`https://wa.me/5511999999999?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {pt.addToOrder}
                  </a>
                </Button> */}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className='flex justify-between items-center mt-12 pt-8 border-t border-border'>
            {prevItem ? (
              <Button
                asChild
                variant='outline'
                className='gap-2 bg-transparent hover:bg-primary'
              >
                <Link href={`/menu/${prevItem.id}`}>
                  {rtl ? (
                    <ChevronRight className='h-4 w-4' />
                  ) : (
                    <ChevronLeft className='h-4 w-4' />
                  )}
                  <span className='hidden sm:inline'>
                    {prevItem.name[language]}
                  </span>
                  <span className='sm:hidden'>{pt.previous}</span>
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextItem ? (
              <Button
                asChild
                variant='outline'
                className='gap-2 bg-transparent hover:bg-primary'
              >
                <Link href={`/menu/${nextItem.id}`}>
                  <span className='hidden sm:inline'>
                    {nextItem.name[language]}
                  </span>
                  <span className='sm:hidden'>{pt.next}</span>
                  {rtl ? (
                    <ChevronLeft className='h-4 w-4' />
                  ) : (
                    <ChevronRight className='h-4 w-4' />
                  )}
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function MenuItemPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  return <MenuItemContent id={id} />
}
