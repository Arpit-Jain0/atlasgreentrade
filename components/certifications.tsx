"use client"

import { useEffect, useRef, useState } from "react"
import { Award, X, FileText, ShieldCheck, Leaf, HardHat } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  {
    id: "iso-9001",
    title: "ISO 9001",
    subtitle: "Quality Management System",
    icon: ShieldCheck,
    description:
      "Our ISO 9001 certification demonstrates our commitment to consistent quality across all operations. Every process—from sourcing to delivery—is governed by documented procedures, continual improvement, and customer satisfaction benchmarks.",
    file: "/ISO 9001.pdf",
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-600",
    badge: "Quality",
  },
  {
    id: "iso-14001",
    title: "ISO 14001",
    subtitle: "Environmental Management System",
    icon: Leaf,
    description:
      "ISO 14001 certification reflects our proactive approach to environmental stewardship. We actively monitor, reduce, and manage our environmental footprint in compliance with international ecological standards.",
    file: "/ISO 14001.pdf",
    color: "from-green-500/10 to-green-600/5",
    iconColor: "text-green-600",
    badge: "Environment",
  },
  {
    id: "iso-45001",
    title: "ISO 45001",
    subtitle: "Occupational Health & Safety",
    icon: HardHat,
    description:
      "Our ISO 45001 certification underlines our dedication to a safe and healthy workplace. We systematically identify risks, implement controls, and foster a culture where worker wellbeing is non-negotiable.",
    file: "/ISO 45001.pdf",
    color: "from-orange-500/10 to-orange-600/5",
    iconColor: "text-orange-600",
    badge: "Safety",
  },
]

export function Certifications() {
  const [isVisible, setIsVisible] = useState(false)
  const [activePdf, setActivePdf] = useState<{ title: string; file: string } | null>(null)
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

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePdf(null)
    }
    if (activePdf) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", onKeyDown)
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [activePdf])

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Award className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-balance tracking-tight">
            Certifications &amp; Compliance
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Atlas GreenTrade holds internationally recognised certifications that validate our commitment to quality,
            environmental responsibility, and occupational safety. Click any certificate below to view the full document.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <Card
              key={cert.id}
              className={`hover-lift cursor-pointer transition-all duration-1000 border-2 border-transparent hover:border-primary/30 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
              onClick={() => setActivePdf({ title: cert.title, file: cert.file })}
            >
              <CardContent className={`p-8 bg-gradient-to-br ${cert.color} rounded-lg h-full flex flex-col`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-background rounded-xl flex items-center justify-center shadow-sm`}>
                    <cert.icon className={`h-7 w-7 ${cert.iconColor}`} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-1">{cert.title}</h3>
                <p className="text-sm font-medium text-primary mb-4">{cert.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{cert.description}</p>

                <div className="mt-6 flex items-center gap-2 text-primary text-sm font-semibold group">
                  <FileText className="h-4 w-4" />
                  <span className="group-hover:underline">View Certificate</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance note */}
        <div
          className={`mt-12 p-6 bg-muted/50 rounded-xl border border-border text-center transition-all duration-1000 delay-500 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl mx-auto">
            All certifications are issued by accredited third-party bodies and are regularly audited to ensure continued
            compliance. Our operations adhere to the Basel Convention, ISPM-15, and applicable regional environmental and
            trade regulations.
          </p>
        </div>
      </div>

      {/* PDF Modal */}
      {activePdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActivePdf(null)
          }}
        >
          <div className="relative w-full max-w-4xl h-[90vh] bg-background rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border flex-shrink-0">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">{activePdf.title} Certificate</span>
              </div>
              <button
                onClick={() => setActivePdf(null)}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>

            {/* PDF iframe */}
            <iframe
              src={activePdf.file}
              className="flex-1 w-full"
              title={`${activePdf.title} Certificate`}
            />
          </div>
        </div>
      )}
    </section>
  )
}
