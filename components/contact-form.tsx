"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle, FileText } from "lucide-react"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  })
  const documents = ["Company Brochure", "Product Catalog", "Quality Certificates", "Registration Documents"]

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Pre-select the product when arriving from a "Request a Quote" link
  const searchParams = useSearchParams()
  useEffect(() => {
    const product = searchParams.get("product")
    if (product) setFormData((prev) => ({ ...prev, product }))
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
          icon: <CheckCircle className="h-4 w-4" />,
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          product: "",
          message: "",
        })
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Failed to send message", {
        description: "Please try again or contact us directly.",
        icon: <AlertCircle className="h-4 w-4" />,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact-form" className="py-20 bg-background scroll-mt-24">
      <div className="space-y-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="bg-muted/50"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="bg-muted/50"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-muted/50"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="bg-muted/50"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="product">Product Interest</Label>
                <Select value={formData.product} onValueChange={(value) => value && handleChange("product", value)} disabled={isSubmitting}>
                  <SelectTrigger className="bg-muted/50">
                    <SelectValue placeholder="Select product category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plastics">Plastics & Polymers</SelectItem>
                    <SelectItem value="metals">Metals & Alloys</SelectItem>
                    <SelectItem value="paper">Paper & Cardboard</SelectItem>
                    <SelectItem value="rubber">Rubber Materials</SelectItem>
               
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  rows={5}
                  className="bg-muted/50"
                  placeholder="Please describe your requirements, quantities, and any specific questions..."
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                className="w-full gradient-primary text-primary-foreground text-lg py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* <Card className="hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Company Documents</h3>
              </div>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div key={doc} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground">{doc}</span>
                    <Badge variant="secondary" className="text-xs">
                      Available on Request
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  All company documents are available upon request. Please contact us for specific documentation needs.
                </p>
              </div>
            </CardContent>
          </Card> */}
      </div>
      </div>




    </section>
  )
}
