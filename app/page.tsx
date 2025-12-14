"use client"

import { LanguageProvider } from "@/components/language-context"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dishes } from "@/components/dishes"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Reservation } from "@/components/reservation"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Dishes />
        <About />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
