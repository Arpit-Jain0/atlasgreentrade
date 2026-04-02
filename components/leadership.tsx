"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, CheckCircle, FileText, Truck, Handshake, Shield, Settings, Leaf, Lightbulb } from "lucide-react"

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
    <section ref={sectionRef} className="py-20 bg-muted/30 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 💪 Our Strengths */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            💪 Our Strengths
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At <span className="font-semibold text-primary">Atlas GreenTrade</span>, we combine global reach with
            technical precision to deliver reliable, high-quality scrap and chemical trading solutions.
          </p>
        </div>

        {/* Strengths List */}
        <div className="space-y-6 mb-20 max-w-3xl mx-auto">
          {[
            {
              icon: <Globe className="h-6 w-6 text-primary mt-1" />,
              title: "🌍 Global Sourcing",
              text: "Trusted suppliers across Europe, the Middle East, Far East, North & South America.",
            },
            {
              icon: <CheckCircle className="h-6 w-6 text-primary mt-1" />,
              title: "✅ Verified Quality",
              text: "Every material is graded, inspected, and documented to meet international standards.",
            },
            {
              icon: <FileText className="h-6 w-6 text-primary mt-1" />,
              title: "📑 Compliance Expertise",
              text: "We handle documentation with precision—ensuring full regulatory alignment and audit readiness.",
            },
            {
              icon: <Truck className="h-6 w-6 text-primary mt-1" />,
              title: "🚢 Smart Logistics",
              text: "Efficient logistics systems ensuring smooth, timely, and cost-effective deliveries.",
            },
            {
              icon: <Handshake className="h-6 w-6 text-primary mt-1" />,
              title: "🤝 Reliable Partnerships",
              text: "Long-term relationships built on trust, responsiveness, and shared success.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              {item.icon}
              <div>
                <h4 className="font-semibold text-xl text-foreground mb-1">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🧭 Our Core Values */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              🧭 Our Core Values
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At <span className="font-semibold text-primary">Atlas GreenTrade</span>, our values are more than
              principles—they’re the foundation of every shipment, partnership, and decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "🔍 Integrity & Transparency",
                text: "We operate with honesty, clarity, and traceability. From documentation to delivery, clients know exactly what they’re getting—and why it matters.",
              },
              {
                icon: Settings,
                title: "⚙️ Technical Excellence",
                text: "Rigorous standards in grading, compliance, and logistics—backed by precision and expertise.",
              },
              {
                icon: Leaf,
                title: "🌍 Sustainability",
                text: "Responsible trade supporting circular economies and reducing environmental impact.",
              },
              {
                icon: Handshake,
                title: "🤝 Partnership-Driven",
                text: "Long-term relationships built on trust, responsiveness, and shared goals.",
              },
              {
                icon: Lightbulb,
                title: "📈 Innovation & Adaptability",
                text: "We stay ahead through continuous improvement and smarter digital solutions.",
              },
              {
                icon: Shield,
                title: "🛡️ Compliance & Accountability",
                text: "Our operations align with international trade laws, environmental protocols, and ethical business practices—always.",
              },
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
