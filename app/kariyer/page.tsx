"use client"

import type { Metadata } from "next"
import { useState } from "react"
import { Microscope, GraduationCap, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const benefits = [
  {
    icon: Microscope,
    title: "Modern Teknoloji",
    description: "En güncel ekipmanlarla çalışma fırsatı.",
  },
  {
    icon: GraduationCap,
    title: "Sürekli Eğitim",
    description: "Ekip eğitimleri ve gelişim programları.",
  },
  {
    icon: Users,
    title: "Pozitif Çalışma Ortamı",
    description: "İnsan odaklı, destekleyici ekip kültürü.",
  },
]

const positions = [
  "Diş Hekimi Asistanı",
  "Ağız ve Diş Sağlığı Teknisyeni",
  "Resepsiyon Görevlisi",
  "Diğer"
]

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    cv: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // TODO: Strapi API integration with file upload
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", position: "", cv: null })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-cream to-vizon/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl">
            Ekibimize Katılın
          </h1>
          <p className="mt-6 text-lg text-brown/70 max-w-2xl mx-auto">
            Geleceğin diş hekimliğini birlikte inşa edelim.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown text-center mb-12">
            Neden Dt. Emrecan Eren Kliniği?
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-vizon/10">
                    <benefit.icon className="h-6 w-6 text-vizon" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown mb-8">Açık Pozisyonlar</h2>
          <ul className="space-y-3">
            {positions.slice(0, -1).map((position) => (
              <li key={position} className="flex items-center gap-3 text-brown/80">
                <div className="h-2 w-2 rounded-full bg-vizon" />
                {position}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Başvuru Formu</CardTitle>
              <CardDescription>
                Formu doldurun, CV'nizi yükleyin. En kısa sürede size dönüş yapacağız.
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
                  <Label htmlFor="email">E-posta *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  <Label htmlFor="position">Başvurulan Pozisyon *</Label>
                  <select
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-grey bg-cream px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vizon focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Seçiniz...</option>
                    {positions.map((position) => (
                      <option key={position} value={position}>
                        {position}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cv">CV Yükle (PDF veya DOCX) *</Label>
                  <Input
                    id="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setFormData({ ...formData, cv: e.target.files?.[0] || null })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Gönderiliyor..." : "Başvuruyu Gönder"}
                </Button>
                {submitStatus === "success" && (
                  <p className="text-center text-sm text-green-600">
                    Başvurunuz başarıyla alındı! En kısa sürede size dönüş yapacağız.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-center text-sm text-red-600">
                    Bir hata oluştu. Lütfen tekrar deneyin veya email ile iletişime geçin.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
