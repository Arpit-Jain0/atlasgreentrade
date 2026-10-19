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
}

const tiles: ProductTile[] = [
  {
    key: "ferrous-nonferrous",
    title: "Ferrous & Non-Ferrous",
    subtitle: "Steel, Copper, Aluminum, and other high-grade metal scrap",
    href: "/products?category=fnf",
    image: "/Ferrous & Non Ferrous Metals/Alloys/Alloy 2.jpg",
  },
  {
    key: "plastics",
    title: "Plastics",
    subtitle: "R-PET, HDPE, LDPE, PP, and engineered plastic recyclables",
    href: "/products?category=plastics",
    image: "/Plastics/HDPE BOTTLES.png",
  },
  {
    key: "secondary",
    title: "Secondary Coils",
    subtitle: "Reprocessed and reusable materials for sustainable manufacturing",
    href: "/products?category=secondary",
    image: "/sc2.png",
  },
  {
    key: "paper",
    title: "Paper",
    subtitle: "OCC, Kraft, Mixed Paper, and other recovered paper grades",
    href: "/products?category=paper",
    image: "/paper.png",
  },
  {
    key: "others",
    title: "Others",
    subtitle: "Woods And Crude Glycerine",
    href: "/products?category=others",
    image: "/Wood/Logs.jpg",
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
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            What We Offer
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Four core categories across metals, plastics, paper, and secondary coils.
          </p>
        </div>

        {/* Image Grid: mosaic with featured hero tile */}
        <div className="relative -mx-4 px-4">
          <div
            className={`flex overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none
    md:h-[420px] transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {tiles.map((t, idx) => (
              <Link
                key={t.key}
                href={t.href}
                className={`
                group snap-start relative overflow-hidden md:rounded-xl ring-1 ring-border/60 bg-muted/10
                transition-all duration-500 will-change-transform
                flex-[0_0_85%] sm:flex-[0_0_60%] md:basis-0 md:transition-[flex] md:duration-500
                ${hovered ? (hovered === t.key ? "md:flex-[1.6_1_0%]" : "md:flex-[0.8_1_0%]") : "md:flex-[1_1_0%]"}
              `}
                onMouseEnter={() => setHovered(t.key)}
                onMouseLeave={() => setHovered(null)}
              >
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
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-6 flex items-end">
                  <div className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight">{t.title}</h3>
                    <p className="text-sm sm:text-base text-white/90">{t.subtitle}</p>
                  </div>
                  <div className="ml-auto translate-y-1 opacity-90 group-hover:translate-x-1 group-hover:opacity-100 transition-all">
                    <ArrowRight className="h-5 w-5 text-white/95" aria-hidden="true" />
                    <span className="sr-only">Explore {t.title}</span>
                  </div>
                </div>

                {/* Focus ring for accessibility */}
                <span className="absolute inset-0 rounded-xl ring-0 group-focus-visible:ring-2 ring-primary/60 transition" />
              </Link>
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
