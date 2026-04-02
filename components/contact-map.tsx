"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink } from "lucide-react"

export function ContactMap() {
  const openGoogleMaps = () => {
    const address = "C1-1207, Ajman Free Zone, PO Box 7722, Ajman, UAE"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Visit Our Office</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Located at De Keyserlei 60C box 1301, 2018 Antwerp, BELGIUM, our office is easily accessible for meetings and consultations
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Map Placeholder */}
              <div className="lg:col-span-2 h-96 bg-muted/30 flex items-center justify-center">
                
                  
                 
                  <iframe
                  title="ATLAS GREENTRADE LOCATION"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.2302389292555!2d4.416702176855269!3d51.21671773276327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f6e48ed00cb3%3A0x4f21c75b1a0c8358!2sDe%20Keyserlei%2060C%2C%202018%20Antwerpen%2C%20Belgium!5e0!3m2!1sen!2sbe!4v1730588800000!5m2!1sen!2sbe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
               
              </div>

              {/* Location Details */}
              <div className="p-8 bg-muted/10">
                <h3 className="text-2xl font-bold text-foreground mb-6">Location Details</h3>

                
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Full Address</h4>
                    <p className="text-muted-foreground text-sm">
                      ATLAS GREENTRADE
                      <br />
                      De Keyserlei 60C box 1301
                      <br />
                      2018 Antwer
                      <br />
                      BELGIUM
                    </p>
                  </div>

                  {/* <div>
                    <h4 className="font-semibold text-foreground mb-2">Nearby Landmarks</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Ajman Free Zone Authority</li>
                      <li>• Sheikh Rashid Port</li>
                      <li>• Ajman City Centre</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Transportation</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• 15 min from Dubai</li>
                      <li>• 10 min from Sharjah</li>
                      <li>• Taxi & Bus accessible</li>
                    </ul>
                  </div> */}

                  
              
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
