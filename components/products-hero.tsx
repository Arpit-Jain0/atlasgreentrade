"use client"

import { Package } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export function ProductsHero() {
  return (
    <PageHero icon={Package} title="Our Product Portfolio" action={{ href: "/contact", label: "Contact Us" }}>
      <p>
        A comprehensive range of recyclable raw materials supporting the circular economy across multiple industries.
      </p>
    </PageHero>
  )
}
