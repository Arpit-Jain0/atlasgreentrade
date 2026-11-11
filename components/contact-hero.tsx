"use client"

import { Mail } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export function ContactHero() {
  return (
    <PageHero icon={Mail} title="Contact Us">
      <p>
        Get in touch with our team for enquiries about products, partnerships or any questions about sustainable
        materials trading.
      </p>
      <p className="text-sm sm:text-base text-white/80">
        We do not change our bank details. Please contact customer service for any banking enquiries.
      </p>
    </PageHero>
  )
}
