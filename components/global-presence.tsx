"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, MapPin, Ship } from "lucide-react"

export function GlobalPresence() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            🌎 Global Presence
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our strength lies in the relationships we build. We source from a trusted and strategically diversified
            network of suppliers across key industrial regions, ensuring consistent quality, regulatory compliance, and
            supply chain resilience.
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Continents */}
          <Card
            className={`text-center hover-lift transition-all duration-1000 ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-lg font-semibold text-foreground mb-1 tracking-tight">Continents</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Global reach across all major regions.
              </p>
            </CardContent>
          </Card>

          {/* Countries */}
          <Card
            className={`text-center hover-lift transition-all duration-1000 delay-200 ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-lg font-semibold text-foreground mb-1 tracking-tight">Countries</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Active trading partnerships worldwide.
              </p>
            </CardContent>
          </Card>

          {/* Shipping Routes */}
          <Card
            className={`text-center hover-lift transition-all duration-1000 delay-400 ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Ship className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-lg font-semibold text-foreground mb-1 tracking-tight">Shipping Routes</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprehensive logistics network.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
