import type { Metadata } from "next"
import Image from "next/image"
import { TeamMembers } from "@/components/team/team-members"
import { Users, Award, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Ekibimiz | Dt. Emrecan Eren Lüleburgaz Diş Kliniği",
  description: "Dt. Emrecan Eren diş kliniği profesyonel ekibi. Deneyimli diş hekimleri, asistanlar ve sağlık personeli.",
  keywords: ["Lüleburgaz diş kliniği ekip", "diş hekimi ekibi", "Dt. Emrecan Eren ekip"],
}

const values = [
  {
    icon: Users,
    title: "Profesyonel Ekip",
    description: "Alanında uzman, deneyimli ve sürekli eğitim alan ekip üyelerimiz.",
  },
  {
    icon: Award,
    title: "Kalite Odaklı",
    description: "Her hastamıza en yüksek kalitede hizmet sunmak için çalışıyoruz.",
  },
  {
    icon: Heart,
    title: "İnsan Odaklı",
    description: "Empati ve şefkatle, hastalarımızın konforunu ön planda tutuyoruz.",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.png"
            alt="Team background"
            fill
            className="object-cover opacity-10"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cream/95 to-vizon/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl">
            Ekibimiz
          </h1>
          <p className="mt-6 text-lg text-brown/70 max-w-2xl mx-auto">
            Gülüşünüzü yeniden tasarlamak için bir araya gelmiş, 
            deneyimli ve tutkulu bir ekibiz.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown text-center mb-12">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-vizon/10">
                    <value.icon className="h-7 w-7 text-vizon" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brown/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section - Strapi CMS Integration */}
      <TeamMembers />

      {/* Join Team CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brown mb-6">
            Ekibimize Katılın
          </h2>
          <p className="text-lg text-brown/70 mb-8">
            Geleceğin diş hekimliğini birlikte inşa etmek ister misiniz?
          </p>
          <a
            href="/kariyer"
            className="inline-flex items-center justify-center rounded-md bg-vizon px-8 py-3 text-base font-medium text-cream hover:bg-brown transition-colors"
          >
            Açık Pozisyonları Görüntüle
          </a>
        </div>
      </section>
    </main>
  )
}
