import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Head Office Address",
    content: "De Keyserlei 60C box 1301, 2018 Antwerp, Belgium",
    color: "text-red-500",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+32-491105135",
    color: "text-green-500",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "info@atlasgreen.eu",
    color: "text-blue-500",
  },
  
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM to 5:00 PM" },
  { day: "Saturday - Sunday", hours: "Closed" },
]


export function ContactInfo() {
  return (
    <section className="py-14 sm:py-20 bg-muted/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8">
          {/* Contact Details */}
          <Card className="hover-lift py-0">
            <CardContent className="p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon
                  return (
                    <div key={detail.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className={`h-6 w-6 ${detail.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{detail.title}</h4>
                        <p className="text-muted-foreground">{detail.content}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card className="hover-lift py-0">
            <CardContent className="p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Business Hours</h3>
              <div className="space-y-3">
                {businessHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center gap-4">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <Badge variant="secondary">{schedule.hours}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

      
        </div>
      </div>
    </section>
  )
}
