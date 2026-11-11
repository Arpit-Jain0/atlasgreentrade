"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type PageHeroProps = {
  icon: LucideIcon
  title: string
  children?: React.ReactNode
  action?: { href: string; label: string }
}

// Shared banner for inner pages: solid brand background, same spacing and type scale everywhere
export function PageHero({ icon: Icon, title, children, action }: PageHeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-primary pt-40 pb-20 md:pt-44 md:pb-24">
      <div
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center">
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance leading-tight tracking-tight">
          {title}
        </h1>

        {children && (
          <div className="space-y-4 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed text-pretty">
            {children}
          </div>
        )}

        {action && (
          <div className="flex justify-center mt-8">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 text-sm sm:text-base px-6 sm:px-8"
            >
              <Link href={action.href}>
                {action.label}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
