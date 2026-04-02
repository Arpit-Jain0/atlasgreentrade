import Link from "next/link"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">AV</span>
              </div>
              <div>
                <div className="font-bold text-2xl">ATLAS GREENTRADE</div>
                <div className="text-sm text-background/70">Recycling Excellence</div>
              </div>
            </div>
            <p className="text-background/80 mb-6 max-w-md text-pretty">
              Serving with the power of recycling products. We are your versatile and proactive partner for sustainable
              raw materials trading worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-background/80">De Keyserlei 60C box 1301, 2018 Antwerp, BELGIUM</span>
              </div>
              <a
                href="tel:+32491105135"
                className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>+32-491105135</span>
              </a>
              <a
                href="mailto:info@atlasgreen.eu"
                className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>info@atlasgreen.eu</span>
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-background/80 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-background/80 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/products" className="block text-background/80 hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/contact" className="block text-background/80 hover:text-primary transition-colors">
                Contact
              </Link>
              <a
                href="/atlas-brochure.pdf"
                download
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Download Brochure
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Products</h3>
            <div className="space-y-3">
              <div className="text-background/80">Ferrous and Non-Ferrous</div>
              <div className="text-background/80">Paper & Cardboard</div>
              <div className="text-background/80">Secondary Coils</div>
              <div className="text-background/80">Plastics & Polymers</div>       
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
              <p className="text-background/80">Get the latest news about sustainable materials and recycling.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/60 text-sm">
            © 2025 Atlas GreenTrade. All Rights Reserved. Registered under the laws of BELGIUM.
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 p-4 bg-primary/10 rounded-lg">
          <p className="text-background/80 text-sm text-center">
            <strong>Important Notice:</strong> We do not change our bank details. Please contact customer service for
            any banking inquiries.
          </p>
        </div>
      </div>
    </footer>
  )
}
