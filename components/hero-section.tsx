"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    image: "/image 2.1 (1).png",
    alt: "Recycling arrows of metal and greenery around the globe",
    title: "Welcome to ATLAS GREENTRADE",
    subtitle: "Trusted Partner in Recycled and Secondary Raw Materials",
  },
  {
    image: "/image 2 (1).png",
    alt: "Container ship sailing beneath a world map of trade routes",
    title: "Over 15 Years of Global Experience",
  },
  {
    image: "/image 1 (1).png",
    alt: "Business handshake at a port with metal stock and a container ship",
    title: "Known for Precision, Integrity and Technical Expertise",
  },
]

const AUTOPLAY_MS = 6000

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const goTo = useCallback((i: number) => setCurrent((i + slides.length) % slides.length), [])
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [next, current])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const dx = e.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)()
        touchStartX.current = null
      }}
    >
      {/* Background Images */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className={`w-full h-full object-center object-cover brightness-75 transition-transform duration-[7000ms] ease-out ${
              i === current ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
      ))}

      {/* Caption */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div key={current} className="animate-fade-in-up" aria-live="polite">
          {current === 0 ? (
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 text-balance leading-tight tracking-tight max-w-4xl mx-auto">
              {slides[current].title}
            </h1>
          ) : (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 text-balance leading-tight tracking-tight max-w-4xl mx-auto">
              {slides[current].title}
            </h2>
          )}
          {slides[current].subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-pretty px-4 sm:px-0">
              {slides[current].subtitle}
            </p>
          )}

          <div className="flex justify-center mt-6 sm:mt-8 px-4 sm:px-0">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 text-sm sm:text-base px-6 sm:px-8"
            >
              <Link href="/products">
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Prev / Next */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm hover:bg-white/30 transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm hover:bg-white/30 transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-16 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
