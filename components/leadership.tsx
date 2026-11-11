"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Handshake, Shield, BadgeCheck, Truck, Leaf, Scale } from "lucide-react"

export function Leadership() {
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
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Core Values */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance tracking-tight">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Integrity", text: "Transparent and ethical business practices" },
              { icon: BadgeCheck, title: "Quality", text: "Focus on material specifications and consistency" },
              { icon: Truck, title: "Reliability", text: "Dependable service and trade coordination" },
              { icon: Leaf, title: "Sustainability", text: "Promoting resource recovery and responsible material use" },
              { icon: Handshake, title: "Partnership", text: "Building lasting relationships with suppliers and customers" },
              { icon: Scale, title: "Compliance", text: "Respecting applicable trade and regulatory requirements" },
            ].map((item, i) => (
              <Card key={i} className="hover-lift">
                <CardContent className="p-8 text-center">
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-3 tracking-tight">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
