import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CertificationsHero } from "@/components/certifications-hero"
import { Certifications } from "@/components/certifications"

export default function CertificationsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CertificationsHero />
      <Certifications />
      <Footer />
    </main>
  )
}
