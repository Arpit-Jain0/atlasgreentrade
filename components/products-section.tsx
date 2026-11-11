"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type ProductTile = {
  key: string
  title: string
  subtitle: string
  href: string
  image: string
  quoteProduct: string
}

const tiles: ProductTile[] = [
  {
    key: "ferrous-nonferrous",
    title: "Ferrous & Non-Ferrous",
    subtitle: "Steel, Copper, Aluminum, and other high-grade metal scrap",
    href: "/products?category=fnf",
    image: "/Ferrous & Non Ferrous Metals/Alloys/Alloy 2.jpg",
    quoteProduct: "metals",
  },
  {
    key: "plastics",
    title: "Plastics",
    subtitle: "R-PET, HDPE, LDPE, PP, and engineered plastic recyclables",
    href: "/products?category=plastics",
    image: "/Plastics/HDPE BOTTLES.png",
    quoteProduct: "plastics",
  },
  {
    key: "secondary",
    title: "Secondary Coils",
    subtitle: "Reprocessed and reusable materials for sustainable manufacturing",
    href: "/products?category=secondary",
    image: "/sc2.png",
    quoteProduct: "metals",
  },
  {
    key: "paper",
    title: "Paper",
    subtitle: "OCC, Kraft, Mixed Paper, and other recovered paper grades",
    href: "/products?category=paper",
    image: "/paper.png",
    quoteProduct: "paper",
  },
  {
    key: "others",
    title: "Others",
    subtitle: "Woods And Crude Glycerine",
    href: "/products?category=others",
    image: "/Wood/Logs.jpg",
    quoteProduct: "other",
  },
]


export function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.15 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-balance tracking-tight">
            What We Offer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Five core categories across Metals, Plastics, Paper, Secondary Coils, Woods and Crude Glycerine.
          </p>
        </div>

        {/* Image Grid: mosaic with featured hero tile */}
        <div className="relative -mx-4 px-4">
          <div
            className={`flex overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none
    md:h-[420px] transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {tiles.map((t) => (
              <div
                key={t.key}
                className={`
                group snap-start relative overflow-hidden md:rounded-xl ring-1 ring-border/60 bg-muted/10
                transition-all duration-500 will-change-transform
                flex-[0_0_85%] sm:flex-[0_0_60%] md:basis-0 md:transition-[flex] md:duration-500
                ${hovered ? (hovered === t.key ? "md:flex-[1.6_1_0%]" : "md:flex-[0.8_1_0%]") : "md:flex-[1_1_0%]"}
              `}
                onMouseEnter={() => setHovered(t.key)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link href={t.href} className="absolute inset-0 z-[1]" aria-label={`Explore ${t.title}`} />
                <div className="relative h-[240px] sm:h-[300px] md:h-full">
                  <img
                    src={t.image || "/placeholder.svg"}
                    alt={`${t.title} - ${t.subtitle}`}
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out"
                    crossOrigin="anonymous"
                  />
                  {/* gradient for legibility */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/0
                    opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                </div>

                {/* Text overlay */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] p-4 sm:p-6 flex items-end">
                  <div className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight">{t.title}</h3>
                    <p className="text-sm sm:text-base text-white/90">{t.subtitle}</p>
                    <Link
                      href={`/contact?product=${t.quoteProduct}#contact-form`}
                      className={`pointer-events-auto relative z-10 mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground drop-shadow-none hover:opacity-90
                        transition-all duration-300 ease-out
                        ${isVisible ? "max-md:animate-[fadeInUp_0.6s_ease-out_0.5s_both]" : "max-md:opacity-0"}
                        md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0
                        md:group-focus-within:opacity-100 md:group-focus-within:translate-y-0`}
                    >
                      Request a Quote
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="ml-auto translate-y-1 opacity-90 group-hover:translate-x-1 group-hover:opacity-100 transition-all">
                    <ArrowRight className="h-5 w-5 text-white/95" aria-hidden="true" />
                  </div>
                </div>

                {/* Focus ring for accessibility */}
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 group-has-[a:focus-visible]:ring-2 ring-primary/60 transition" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Explore All Products
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
