"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
    <section ref={sectionRef} className="py-14 sm:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div
          className={`text-center transition-all duration-1000 ${
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
      </div>
    </section>
  )
}
