"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Target, Users, Lightbulb, ArrowRight } from "lucide-react"
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
      <div className="max-w-7xl mx-auto px-0">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            {/* <img
              src="/modern-sustainable-recycling-facility-with-workers.jpg"
              alt="ATLAS GREENTRADE Operations"
              className="rounded-lg shadow-2xl w-full h-auto max-h-96 sm:max-h-none object-cover"
            /> */}
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

        {/* Vision & Mission Cards */}
 
          {/* Vision */}
          <Card
            className={`hover-lift transition-all duration-1000 delay-600 ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col items-center gap-4 mb-4 sm:mb-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-pretty text-sm sm:text-base">
  To become a globally respected trading enterprise that redefines industrial value through:
</p>

<ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground text-sm sm:text-base">
  <li>
    <strong>Market balance:</strong> Strategically serving specialized and mainstream sectors with performance-validated materials
  </li>
  <li>
    <strong>Quality elevation:</strong> Upholding rigorous standards of product integrity, compliance, and technical excellence
  </li>
  <li>
    <strong>Relational capital:</strong> Building enduring partnerships rooted in trust, responsiveness, and shared growth
  </li>
  <li>
    <strong>Diversified reach:</strong> Expanding across geographies and industries while maintaining operational depth
  </li>
  <li>
    <strong>Ethical governance:</strong> Embedding sustainability, transparency, and professional ethics into every facet of our business
  </li>
  <li>
    <strong>Circular innovation:</strong> Advancing a recycling economy that connects raw material demand with resource protection—minimizing waste and maximizing industrial efficiency
  </li>
</ul>

<p className="text-muted-foreground text-pretty text-sm sm:text-base mt-4">
  We envision a future where our company is not just a supplier—but a strategic enabler of industrial transformation, known for its technical acumen, relational strength, and unwavering commitment to sustainable value creation.
</p>

            </CardContent>
          </Card>

          {/* Mission */}
          <Card
            className={`hover-lift transition-all duration-1000 delay-800 ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col items-center gap-4 mb-4 sm:mb-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-pretty text-sm sm:text-base">
  Our mission is to deliver technically compliant, high-quality, and specialized scrap and chemical products to both niche and mainstream markets. We emphasize quality, traceability, and long-term value over transactional volume—ensuring every shipment meets rigorous technical, environmental, and performance standards.
</p>

<p className="text-muted-foreground text-pretty text-sm sm:text-base mt-4">
  We are committed to forging resilient, trust-based partnerships across industries and geographies through transparent operations, ethical sourcing, and precision-driven logistics. Our goal is not only to meet demand, but to anticipate it—empowering clients with dependable supply chains, real-time responsiveness, and value-rich solutions tailored to evolving industrial needs.
</p>

<p className="text-muted-foreground text-pretty text-sm sm:text-base mt-4">
  Through our continuous investment in operational innovation, global market intelligence, and compliance excellence, we enable sustainable industrial growth while actively reducing waste, emissions, and inefficiencies. Our teams are driven by purpose and accountability—ensuring every action we take reflects our unwavering commitment to environmental responsibility, professional ethics, and technical advancement.
</p>

<p className="text-muted-foreground text-pretty text-sm sm:text-base mt-4">
  Above all, our mission is to be more than a materials supplier—we strive to be a strategic partner that empowers transformation across industries, connects recovery with opportunity, and advances a circular economy where performance, responsibility, and impact coexist.
</p>

            </CardContent>
          </Card>
      
      </div>
    </section>
  )
}
