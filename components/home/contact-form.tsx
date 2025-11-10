"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

export function ContactForm() {
  const formRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // TODO: Strapi API integration
      // const response = await fetch('/api/appointment-requests', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus("success")
      setFormData({ name: "", phone: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (!formRef.current) return

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )
  }, [])

  return (
    <section id="contact" className="py-24 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl" ref={formRef}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Gülüşünüzü Yeniden Keşfedin</CardTitle>
              <CardDescription className="text-base">
                Randevu almak için formu doldurun, sizi arayalım.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad Soyad *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Adınız ve soyadınız"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+90 (5XX) XXX XX XX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mesaj (Opsiyonel)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tedavi hakkında bilgi almak istediğiniz konuları yazabilirsiniz..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                </Button>
                {submitStatus === "success" && (
                  <p className="text-center text-sm text-green-600">
                    Formunuz başarıyla gönderildi! En kısa sürede sizi arayacağız.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-center text-sm text-red-600">
                    Bir hata oluştu. Lütfen tekrar deneyin veya telefon ile iletişime geçin.
                  </p>
                )}
              </form>
              <p className="mt-6 text-center text-sm text-brown/60">
                Formunuzu aldıktan sonra en kısa sürede sizi arayacağız. 
                Acil durumlar için lütfen telefon ile iletişime geçin.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
