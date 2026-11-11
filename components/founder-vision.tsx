"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, CloudOff, Zap, Recycle, Target, Lightbulb } from "lucide-react"

const reasons = [
  {
    icon: CloudOff,
    title: "Lower Emissions",
    text: "Less extraction and processing can mean lower carbon emissions.",
  },
  {
    icon: Zap,
    title: "Lower Energy and Costs",
    text: "Producing aluminium from recycled material uses around 95% less energy than using raw materials.",
  },
  {
    icon: Recycle,
    title: "Conserve Resources",
    text: "Recycling keeps valuable materials in circulation and reduces waste.",
  },
]

export function FounderVision() {
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
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder's Thoughts */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Founder&apos;s Thoughts</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance tracking-tight">
            The Founder&apos;s Vision for a Circular Future
          </h2>
          <blockquote className="relative max-w-3xl mx-auto">
            <Quote className="h-10 w-10 text-primary/30 mx-auto mb-4" aria-hidden="true" />
            <p className="text-2xl md:text-3xl font-semibold italic text-foreground text-balance">
              Recycling is no longer a choice. It is a need.
            </p>
          </blockquote>
        </div>

        <div
          className={`space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty transition-all duration-1000 delay-200 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p>
            The world&apos;s natural resources are under growing pressure. At{" "}
            <span className="font-semibold text-primary">Atlas GreenTrade</span>, we believe recycling is essential to
            reducing emissions, conserving resources and building a more sustainable industrial future.
          </p>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-6">
            <p>
              According to the United Nations Environment Programme (UNEP), resource extraction and processing account
              for <span className="font-bold text-foreground">over 55% of global greenhouse gas emissions</span>.
              Recycling offers a practical way to reduce this impact.
            </p>
          </div>
        </div>

        {/* Why recycling matters */}
        <div
          className={`mt-12 transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8 tracking-tight">Why Recycling Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <p
          className={`mt-12 text-lg text-muted-foreground leading-relaxed text-center text-pretty max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          At <span className="font-semibold text-primary">Atlas GreenTrade</span>, we connect global suppliers of
          recycled and secondary industrial raw materials with businesses worldwide, helping valuable resources find a
          new life.
        </p>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {[
            {
              icon: Target,
              title: "Our Vision",
              text: "To become a preferred global partner in recycled and secondary raw materials, supporting a resource-efficient circular economy.",
            },
            {
              icon: Lightbulb,
              title: "Our Mission",
              text: "To connect reliable global suppliers with industrial buyers through quality-driven sourcing, transparent dealings and efficient trading solutions.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <Card
              key={title}
              className={`hover-lift transition-all duration-1000 delay-500 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed text-pretty">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
