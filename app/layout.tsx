import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { LanguageProvider } from '@/components/language-context'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-arabic',
})

export const metadata: Metadata = {
  title: 'Arabe Nobre | Arabic-Brazilian Fusion Restaurant',
  description:
    'O sabor autêntico do Oriente Médio, com alma brasileira. Experience the authentic taste of the Middle East with a Brazilian soul.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body
        className={`
          ${inter.variable}
          ${playfair.variable}
          ${cairo.variable}
          font-sans antialiased
        `}
      >
        <LanguageProvider>{children}</LanguageProvider>

        <Analytics />
      </body>
    </html>
  )
}
