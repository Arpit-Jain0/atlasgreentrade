import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "ATLAS GREENTRADE - Trusted Partners in Recyclable Raw Materials",
  description:
    "ATLAS GREENTRADE is a versatile and proactive partner in the trade of recyclable, prime, and non-prime raw materials. We deal in Plastics, Rubber, Paper, Metals, Oleo chemicals, and Fertilizers.",
  keywords:
    "recycling, raw materials, plastics, metals, paper, rubber, oleo chemicals, fertilizers, sustainability, circular economy",
  authors: [{ name: "ATLAS GREENTRADE" }],
  creator: "ATLAS GREENTRADE",
  publisher: "ATLAS GREENTRADE",
  robots: "index, follow",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "ATLAS GREENTRADE - Trusted Partners in Recyclable Raw Materials",
    description:
      "Serving with the power of recycling products. Your trusted partner for sustainable raw materials trading.",
    siteName: "ATLAS GREENTRADE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATLAS GREENTRADE - Trusted Partners in Recyclable Raw Materials",
    description:
      "Serving with the power of recycling products. Your trusted partner for sustainable raw materials trading.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "hsl(var(--background))",
              color: "hsl(var(--foreground))",
              border: "1px solid hsl(var(--border))",
            },
          }}
        />
      </body>
    </html>
  )
}
