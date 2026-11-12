"use client"

import { Suspense, useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import {
  X,
  Package,
  Factory,
  Shell,
  Recycle,
  PackageOpen,
  type LucideIcon,
} from "lucide-react"

type Product = {
  name: string
  image: string
}

type Subgroup = {
  name: string
  products: Product[]
}

type Category = {
  id: string // used for the ?category= URL param
  icon: LucideIcon
  title: string
  description: string
  color: string
  subgroups?: Subgroup[]
  products?: Product[]
}

const productCategories: Category[] = [
  {
    id: "fnf",
    icon: Factory,
    title: "Ferrous & Non-Ferrous",
    description: "Steel, Aluminium, Copper and other high-grade metal scrap",
    color: "bg-green-500",
    subgroups: [
      {
        // The two duplicate "Alloys" subgroups are merged into one.
        name: "Alloys",
        products: [
          { name: "", image: "/Ferrous & Non Ferrous Metals/Alloys/Alloy 1.jpg" },
          { name: "", image: "/Ferrous & Non Ferrous Metals/Alloys/Alloy 2.jpg" },
          { name: "", image: "/Ferrous & Non Ferrous Metals/Alloys/Alloy 3.jpg" },
          { name: "", image: "/Ferrous & Non Ferrous Metals/Alloys/Alloy 4.jpg" },
        ],
      },
      {
        name: "Stainless Steel",
        products: [
          { name: "", image: "/Stainless Steel/Stainless Steel 1.png" },
          { name: "", image: "/Stainless Steel/Stainless Steel 2.png" },
          { name: "", image: "/Stainless Steel/Stainless Steel 3.png" },
          { name: "", image: "/Stainless Steel/Stainless Steel 4.png" },
          { name: "", image: "/Stainless Steel/Stainless Steel 5.png" },
          { name: "", image: "/Stainless Steel/Stainless Steel 6.png" },
          { name: "", image: "/Stainless Steel/Stainless Steel 7.png" },


        ],
      },
      {
        name: "Motors and Compressors",
        products: [
          { name: "", image: "/Motors and Compressors/Mixed motors 1.png" },
          { name: "", image: "/Motors and Compressors/Mixed motors 2.png" },
          { name: "", image: "/Motors and Compressors/Small black fridge compressor 1.png" },
          { name: "", image: "/Motors and Compressors/Small black fridge compressor 2.png" },
        ],
      },
      {
        name: "Aluminium",
        products: [
          { name: "", image: "/Alluminium/Alluminium 1.png" },
          { name: "", image: "/Alluminium/Alluminium 2.png" },
          { name: "", image: "/Alluminium/Alluminium3.png" },
          { name: "", image: "/Alluminium/Alluminium4.png" },

        ],
      },
      
    ],
  },
  {
    id: "paper",
    icon: Package,
    title: "Paper & Cardboard",
    description: "Recyclable paper grades and stock lots",
    color: "bg-amber-500",
    subgroups: [
      {
        name: "OCC",
        products: [
          { name: "", image: "/Paper/OCC.png" },
       
        ],
      },
      {
        name: "Stock lot of Paper Rolls/Bales/Loose",
        products: [
          { name: "", image: "/Paper/Stock lot of Paper RollsBalesLoose - 1.png" },
          { name: "", image: "/Paper/Stock lot of Paper RollsBalesLoose - 2.png" },
          { name: "", image: "/Paper/Stock lot of Paper RollsBalesLoose - 3.png" },

        ],
      },
    ],
  },
  {
    id: "secondary",
    icon: Shell,
    title: "Secondary Coils",
    description: "Reprocessed and reusable materials for sustainable manufacturing",
    color: "bg-purple-500",
    // No subgroups: shows products directly, no buttons.
    products: [
     
      { name: "", image: "/sc2.png" },
    ],
  },
  {
    id: "plastics",
    icon: Recycle,
    title: "Plastics",
    description: "Explore our range of recycled and virgin plastics",
    color: "bg-blue-500",
    subgroups: [
      {
        name: "PET",
        products: [
          { name: "", image: "Plastics/PET Family (1).png" },
          { name: "", image: "Plastics/PET Family (2).png" },
          { name: "", image: "Plastics/PET Family (3).png" },
          { name: "", image: "Plastics/PET Family (4).png" },
          { name: "", image: "Plastics/PET Family (5).png" },
          { name: "", image: "Plastics/PET Family (6).png" },

        ],
      },
      {
        name: "LDPE",
        products: [{ name: "", image: "Plastics/LDPE Family (1).png" },
          { name: "", image: "Plastics/LDPE Family (2).png" },
          { name: "", image: "Plastics/LDPE Family (3).png" },
          { name: "", image: "Plastics/LDPE REPROCESSED.png" }
        ],
        
      },
      {
        name: "HDPE",
        products: [{ name: "", image: "Plastics/HDPE BOTTLES.png" },
          { name: "", image: "Plastics/HDPE REGRIND.png" },
         
        ],
      },
    ],
  },
  {
    id: "others",
    icon: PackageOpen,
    title: "Others",
    description: "Premium materials for Industrial Applications",
    color: "bg-gray-500",
    subgroups: [
      {
        name: "Crude Glycerin",
        products: [{ name: "", image: "/Crude Glycerine.png" }],
      },
      {
        name: "Wood",
        products: [{ name: "", image: "Wood/Logs.jpg" },
          { name: "", image: "Wood/Lumber.jpg" },
          
        ],
      },
    ],
  },
]

// Full class names are written out so Tailwind can detect them.
function getSubgroupGridCols(count: number) {
  switch (count) {
    case 1:
      return "grid-cols-1"
    case 2:
      return "grid-cols-1 sm:grid-cols-2"
    case 3:
      return "grid-cols-1 sm:grid-cols-3"
    case 4:
      return "grid-cols-2 sm:grid-cols-4"
    default:
      return "grid-cols-2 sm:grid-cols-3" // 5+ wrap in rows of 3
  }
}

function ProductCategoriesContent() {
  const [isVisible, setIsVisible] = useState(false)
  // Category and subgroup live in ONE state object so they always change together.
  const [selection, setSelection] = useState({ category: 0, subgroup: 0 })
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  const sectionRef = useRef<HTMLElement>(null)
  const searchParams = useSearchParams()

  const selectCategory = (index: number) =>
    setSelection({ category: index, subgroup: 0 })

  const selectSubgroup = (index: number) =>
    setSelection((prev) => ({ ...prev, subgroup: index }))

  // Select a category from ?category=... in the URL
  useEffect(() => {
    const cat = searchParams?.get("category")
    if (!cat) return

    const key = cat.toLowerCase().trim()
    const idx = productCategories.findIndex((c) => c.id === key)

    if (idx !== -1) {
      selectCategory(idx)
      sectionRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [searchParams])

  // Fade-in when the section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Close the zoom modal with Escape
  useEffect(() => {
    if (!zoomedImage) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomedImage(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [zoomedImage])

  const selectedCategoryData = productCategories[selection.category]
  const subgroups = selectedCategoryData.subgroups

  // Clamp so a stale index can never point at a subgroup that doesn't exist.
  const activeSubgroup =
    subgroups && selection.subgroup < subgroups.length ? selection.subgroup : 0

  const productsToShow: Product[] = subgroups
    ? subgroups[activeSubgroup]?.products ?? []
    : selectedCategoryData.products ?? []

  const CategoryIcon = selectedCategoryData.icon

  return (
    <section ref={sectionRef} className="py-14 sm:py-20 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-balance tracking-tight">
            Product Categories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Explore our diverse product portfolio designed to promote
            recycling and sustainability.
          </p>
        </div>

        {/* Main Category Buttons */}
        <div
          className={`grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4 mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {productCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => selectCategory(index)}
                className={`flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 rounded-lg text-sm sm:text-base transition-all duration-300 last:odd:col-span-2 ${
                  selection.category === index
                    ? "bg-primary text-primary-foreground border border-primary shadow-lg"
                    : "bg-card text-card-foreground border border-border hover:bg-primary/10 hover:border-primary/40"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="font-medium">{category.title}</span>
              </button>
            )
          })}
        </div>

        {/* Main Product Container */}
        <Card className="p-4 sm:p-8 shadow-lg">
          {/* Category Header */}
          <CardHeader className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 mb-6 sm:mb-8 p-0">
            <div
              className={`w-16 h-16 ${selectedCategoryData.color} rounded-lg flex items-center justify-center shrink-0`}
            >
              <CategoryIcon className="h-8 w-8 text-white" />
            </div>

            <div>
              <CardTitle className="text-xl sm:text-2xl mb-1">
                {selectedCategoryData.title}
              </CardTitle>
              <p className="text-muted-foreground">
                {selectedCategoryData.description}
              </p>
            </div>
          </CardHeader>

          {/* Subgroup buttons: only rendered for categories that have subgroups.
              The key includes the category id so the block fully remounts
              when you switch categories (no leftover buttons). */}
          {subgroups && subgroups.length > 0 && (
            <div key={`subgroups-${selectedCategoryData.id}`} className="mb-8 w-full">
              <div
                className={`grid ${getSubgroupGridCols(subgroups.length)} gap-3 w-full`}
              >
                {subgroups.map((subgroup, index) => (
                  <button
                    key={`${selectedCategoryData.id}-${index}`}
                    onClick={() => selectSubgroup(index)}
                    className={`w-full min-h-[48px] px-4 py-3 rounded-lg border transition-all duration-300 ${
                      activeSubgroup === index
                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                        : "bg-muted/50 text-foreground border-border hover:bg-primary/10 hover:border-primary/40"
                    }`}
                  >
                    <span className="font-medium">{subgroup.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Product Images */}
          <div
            key={`${selectedCategoryData.id}-${activeSubgroup}`}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {productsToShow.map((product, index) => (
              <div
                key={`${selectedCategoryData.id}-${activeSubgroup}-${index}`}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setZoomedImage(product.image)}
              >
                <div className="flex flex-col">
                  <img
                    src={encodeURI(product.image)}
                    alt={product.name || selectedCategoryData.title}
                    className={`w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ${
                      product.name ? "rounded-t-lg" : "rounded-lg"
                    }`}
                  />

                  {product.name && (
                    <div className="bg-white dark:bg-gray-900 text-center py-3 rounded-b-lg">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {product.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            aria-label="Close"
            className="absolute top-6 right-6 text-white bg-black/60 p-2 rounded-full hover:bg-black/80 transition"
          >
            <X className="h-6 w-6" />
          </button>

          <img
            src={encodeURI(zoomedImage)}
            alt="Zoomed product"
            className="max-w-4xl w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export function ProductCategories() {
  return (
    <Suspense fallback={null}>
      <ProductCategoriesContent />
    </Suspense>
  )
}