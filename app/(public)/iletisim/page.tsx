import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/home/contact-form"

export const metadata: Metadata = {
  title: "İletişim ve Randevu | Dt. Emrecan Eren Lüleburgaz",
  description: "Lüleburgaz Dt. Emrecan Eren diş kliniği iletişim bilgileri, adres, telefon ve online randevu formu.",
  keywords: ["Lüleburgaz diş kliniği iletişim", "Lüleburgaz diş hekimi randevu"],
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-cream to-vizon/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl">
            İletişim ve Randevu
          </h1>
          <p className="mt-4 text-lg text-brown/70">
            Size nasıl yardımcı olabiliriz?
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-brown mb-8">İletişim Bilgileri</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-vizon/10">
                      <MapPin className="h-5 w-5 text-vizon" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown mb-1">Adres</h3>
                    <p className="text-brown/70">
                      8 Kasım Mahallesi, Hazal Sokak, No:44/A<br />
                      Lüleburgaz, Kırklareli
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-vizon/10">
                      <Phone className="h-5 w-5 text-vizon" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown mb-1">Telefon</h3>
                    <a href="tel:+905434860055" className="text-vizon hover:underline">
                      +90 543 486 00 55
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-vizon/10">
                      <Mail className="h-5 w-5 text-vizon" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown mb-1">E-posta</h3>
                    <a href="mailto:info@emrecaneren.com" className="text-vizon hover:underline">
                      info@emrecaneren.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-vizon/10">
                      <Clock className="h-5 w-5 text-vizon" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown mb-1">Çalışma Saatleri</h3>
                    <div className="text-brown/70 space-y-1 text-sm">
                      <p className="flex justify-between gap-4"><span>Pazartesi:</span> <span>13:00 - 22:00</span></p>
                      <p className="flex justify-between gap-4"><span>Salı:</span> <span>10:30 - 19:00</span></p>
                      <p className="flex justify-between gap-4"><span>Çarşamba:</span> <span>13:00 - 22:00</span></p>
                      <p className="flex justify-between gap-4"><span>Perşembe:</span> <span>10:30 - 19:00</span></p>
                      <p className="flex justify-between gap-4"><span>Cuma:</span> <span>10:30 - 19:00</span></p>
                      <p className="flex justify-between gap-4"><span>Cumartesi:</span> <span>11:00 - 17:00</span></p>
                      <p className="flex justify-between gap-4"><span>Pazar:</span> <span>11:00 - 17:00</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <h2 className="text-2xl font-bold text-brown mb-8">Konumumuz</h2>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.2590808254245!2d27.359614499999996!3d41.390179599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4a5f024a85985%3A0xf6409010502eb53d!2zRW1yZWNhbiBFcmVuIEHEn8SxeiB2ZSBEacWfIFNhxJ9sxLHEn8SxIFBvbGlrbGluacSfaQ!5e0!3m2!1str!2suk!4v1762827729240!5m2!1str!2suk" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  )
}
