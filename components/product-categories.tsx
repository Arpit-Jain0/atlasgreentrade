"use client"

import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Package, Factory, Recycle, Leaf, Droplets, Zap } from "lucide-react"

// Product data
const productCategories = [
  {
    icon: Leaf,
    title: "Ferrous & Non-Ferrous",
    description: "Steel, Copper, Aluminum, and other high-grade metal scrap",
    color: "bg-green-500",
    products: [
      { name: "Butyl Tubes", image: "/ferrousnonferrous1.png" },
      { name: "Crumb Rubber", image: "/ferrous_nonferrous.png" },
      { name: "Butyl Tubes", image: "/home2.jpg" },
      { name: "Crumb Rubber", image: "/fnf2.png" },
      { name: "Butyl Tubes", image: "/fnf3.png" },
      { name: "Crumb Rubber", image: "/fnf5.png" },
      { name: "Butyl Tubes", image: "/fnf4.png" },
      { name: "Crumb Rubber", image: "/fnf6.png" },],
  },
  {
    icon: Recycle,
    title: "Paper & Cardboard",
    description: "Recyclable paper grades and stock lots",
    color: "bg-amber-500",
    products: [
      { name: "OCC Bales", image: "/pc1.png" },
      { name: "Mixed Paper", image: "/pc2.png" },
      { name: "Kraft Rolls", image: "/pc3.png" },
      { name: "Tissue Stock", image: "/pc4.png" },
    ],
  },
  
  {
    icon: Droplets,
    title: "Secondary Coils",
    description: "Reprocessed and reusable materials for sustainable manufacturing",
    color: "bg-purple-500",
    products: [
      { name: "Crude Glycerin", image: "/sc11.png" },
      { name: "Crude Glycerin", image: "/sc2.png" },

    ],
  },
  {
    icon: Package,
    title: "Plastics & Polymers",
    description: "Explore our range of recycled and virgin plastics",
    color: "bg-blue-500",
    products: [
      { name: "R-PET", image: "/plastic_products1.png" },
      { name: "PET Flakes", image: "/plastic_products2.png" },
      { name: "HDPE Regrind", image: "/plastic_products3.png" },
      { name: "PP Granules", image: "/plastic_products4.png" },
    ],
  },
  {
    icon: Factory,
    title: "Others",
    description: "Premium scrap metals for recycling and industrial applications",
    color: "bg-gray-500",
    products: [
      { name: "Work In Progress", image: "/wip.png" },
     
    ],
  }
 
]

export function ProductCategories() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()

  // Handle ?category=
  useEffect(() => {
    const cat = searchParams?.get("category")
    if (!cat) return
    const key = cat.toLowerCase().trim()
    const map: Record<string, number> = {
      fnf: 0,
      paper:1,
      secondary: 2,
      plastics: 3,
      
      
      others: 4,
      
    }
    const idx = map[key]
    if (typeof idx === "number") {
      setSelectedCategory(idx)
      sectionRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [searchParams])

  // Intersection animation
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Product Categories</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Explore our diverse product portfolio designed to promote recycling and sustainability.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {productCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-card-foreground hover:bg-primary/10"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{category.title}</span>
              </button>
            )
          })}
        </div>

        {/* Selected Category */}
        <Card className="p-8 shadow-lg">
          <CardHeader className="flex items-center gap-4 mb-8">
            <div
              className={`w-16 h-16 ${productCategories[selectedCategory].color} rounded-lg flex items-center justify-center`}
            >
              {(() => {
                const Icon = productCategories[selectedCategory].icon
                return <Icon className="h-8 w-8 text-white" />
              })()}
            </div>
            <div>
              <CardTitle className="text-2xl">{productCategories[selectedCategory].title}</CardTitle>
              <p className="text-muted-foreground">{productCategories[selectedCategory].description}</p>
            </div>
          </CardHeader>

          {/* Image Grid */}
          <div
  key={selectedCategory} // 👈 ensures a clean re-render when switching category
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
>
  {productCategories[selectedCategory].products.map((product, index) => (
    <div
      key={`${product.name}-${index}`} // 👈 ensures unique key per item
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => setZoomedImage(product.image)}
    >
      <div className="flex flex-col">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-lg"
  />
  <div className="bg-white dark:bg-gray-900 text-center py-2 rounded-b-lg">
    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
      {product.name}
    </span>
  </div>
</div>
      {/* Optional: Hover overlay */}
      {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white text-lg font-semibold">{product.name}</span>
      </div> */}
    </div>
  ))}
</div>
        </Card>
      </div>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 text-white bg-black/60 p-2 rounded-full hover:bg-black/80 transition"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={zoomedImage}
            alt="Zoomed product"
            className="max-w-4xl max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-300 scale-100"
          />
        </div>
      )}
    </section>
  )
}
