"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ImageCarousel } from "@/components/Imagecarousel"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-10 sm:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-balance tracking-tight">
            About ATLAS GREENTRADE
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Headquartered in Antwerp, Belgium, Atlas GreenTrade is an international trading and sourcing company specialising in recycled and secondary industrial raw materials. With over 15 years of specialised experience, we connect global suppliers with industrial buyers, backed by a global reach across 6 continents and partnerships in 50+ countries.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed mt-4">
            Our core business spans ferrous and non-ferrous metals, including stainless steel, alloy steel, aluminium, brass and lead, as well as motors, compressors, metal scrap, recyclable plastic materials and more. Guided by trust, integrity and professionalism, we deliver reliable sourcing solutions, quality-focused service and efficient trade coordination while building long-term business relationships.
          </p>
          <Button asChild size="lg" className="mt-6 sm:mt-8 text-base sm:text-lg px-6 sm:px-8">
            <Link href="/about">
              Know More
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </div>

        {/* Image & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <ImageCarousel />
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
              Our Commitment to Sustainability
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 text-pretty">
              Our operations are built on a deep understanding of global supply chains, regulatory compliance, and sustainable resource management. We specialize in sourcing, processing, and supplying a wide range of industrial-grade materials, including:
            </p>

            <ul className="list-disc list-inside text-base sm:text-lg text-muted-foreground space-y-2 mb-6">
              <li>
                <strong>Metals:</strong> Prime, secondary, foundry-grade, and scrap
              </li>
              <li>
                <strong>Ferrous & Non-Ferrous Materials:</strong> Stainless steel, alloy steel, motors, compressors, lead, brass, aluminium, and general ferrous scrap
              </li>
              <li>
                <strong>Plastic Scrap:</strong> Industrial-grade polymers and recyclable plastic materials
              </li>
            </ul>

            <p className="text-base sm:text-lg text-muted-foreground mb-4 text-pretty">
              By aligning raw material demand with responsible recovery practices, we actively contribute to a circular economy—promoting environmental stewardship and long-term value creation.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground text-pretty">
              Our reputation is built on strong relationships, ethical governance, and continuous innovation. From navigating complex logistics to ensuring full product traceability, we bring professionalism and reliability to every transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
