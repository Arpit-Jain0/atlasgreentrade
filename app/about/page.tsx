import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { FounderVision } from "@/components/founder-vision"
import { Leadership } from "@/components/leadership"


export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <FounderVision />
      <Leadership />
      <Footer />
    </main>
  )
}
