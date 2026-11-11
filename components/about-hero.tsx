"use client"

import { Users } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export function AboutHero() {
  return (
    <PageHero icon={Users} title="About Atlas GreenTrade" action={{ href: "/contact", label: "Contact Us" }}>
      <p>
        Headquartered in Antwerp, Belgium, Atlas GreenTrade is an international trading and sourcing company
        specialising in recycled and secondary industrial raw materials. With over 15 years of specialised experience,
        we connect global suppliers with industrial buyers, backed by a global reach across 6 continents and
        partnerships in 50+ countries.
      </p>
      <p>
        Our core business spans ferrous and non-ferrous metals, including stainless steel, alloy steel, aluminium,
        brass and lead, as well as motors, compressors, metal scrap, recyclable plastic materials and more. Guided by
        trust, integrity and professionalism, we deliver reliable sourcing solutions, quality-focused service and
        efficient trade coordination while building long-term business relationships.
      </p>
    </PageHero>
  )
}
