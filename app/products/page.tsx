import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsHero } from "@/components/products-hero"
import { ProductCategories } from "@/components/product-categories"
import { ProductShowcase } from "@/components/product-showcase"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductsHero />
      <ProductCategories />
      <Footer />
    </main>
  )
}
