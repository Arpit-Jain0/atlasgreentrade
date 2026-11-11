"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Globe, Phone, Mail } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-green-700 text-white py-2 px-0 transition-all duration-500 ${
          isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-center sm:justify-between items-center px-4 text-xs sm:text-base">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+32-491105135</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@atlasgreen.eu</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>Serving Globally</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
        style={{ marginTop: isScrolled ? "0" : "32px" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-auto h-10 overflow-hidden rounded-lg">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            {/* <div>
              <h1
                className={`text-lg font-bold transition-colors ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                ATLAS GREENTRADE
              </h1>
              <p
                className={`text-xs transition-colors ${
                  isScrolled ? "text-gray-600" : "text-gray-300"
                }`}
              >
                Recycling Excellence
              </p>
            </div> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isScrolled ? "text-gray-800 hover:text-green-700" : "text-white hover:text-green-300"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                isScrolled ? "text-gray-800 hover:text-green-700" : "text-white hover:text-green-300"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/products"
              className={`transition-colors ${
                isScrolled ? "text-gray-800 hover:text-green-700" : "text-white hover:text-green-300"
              }`}
            >
              Products
            </Link>
            <Link
              href="/certifications"
              className={`transition-colors ${
                isScrolled ? "text-gray-800 hover:text-green-700" : "text-white hover:text-green-300"
              }`}
            >
              Certifications
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                isScrolled ? "text-gray-800 hover:text-green-700" : "text-white hover:text-green-300"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden w-full transition-all ${
              isScrolled ? "bg-white border-t border-gray-200" : "bg-black/70"
            }`}
          >
            <div className="px-4 py-4 space-y-4">
              <Link
                href="/"
                className={`block transition-colors ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-green-500`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block transition-colors ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-green-500`}
              >
                About Us
              </Link>
              <Link
                href="/products"
                className={`block transition-colors ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-green-500`}
              >
                Products
              </Link>
              <Link
                href="/certifications"
                className={`block transition-colors ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-green-500`}
              >
                Certifications
              </Link>
              <Link
                href="/contact"
                className={`block transition-colors ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-green-500`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
