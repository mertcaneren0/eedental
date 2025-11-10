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
                      [Tam Adres Bilgisi]<br />
                      Lüleburgaz, Kırklareli<br />
                      [Posta Kodu]
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
                    <a href="tel:+90" className="text-vizon hover:underline">
                      +90 [Telefon Numarası]
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
                    <div className="text-brown/70 space-y-1">
                      <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                      <p>Cumartesi: 09:00 - 14:00</p>
                      <p>Pazar: Kapalı</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <h2 className="text-2xl font-bold text-brown mb-8">Konum</h2>
              <div className="aspect-video rounded-lg bg-grey/20 flex items-center justify-center border border-grey/30">
                <p className="text-brown/50 text-center px-8">
                  [Google Maps Embed]<br />
                  Klinik konumu burada gösterilecek
                </p>
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
