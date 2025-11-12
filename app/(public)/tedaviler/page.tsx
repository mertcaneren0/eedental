import type { Metadata } from "next"
import Link from "next/link"
import { 
  Drill, 
  Smile, 
  Microscope, 
  Sparkles, 
  Stethoscope, 
  Scissors,
  Zap,
  Heart,
  Shield,
  Baby,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Tedavilerimiz | Dt. Emrecan Eren Lüleburgaz Diş Kliniği",
  description: "İmplant, ortodonti, mikroskopik tedavi, estetik diş hekimliği ve daha fazlası. Lüleburgaz'ın en kapsamlı diş tedavi seçenekleri.",
  keywords: ["Lüleburgaz diş tedavileri", "implant", "ortodonti", "estetik diş"],
}

const treatments = [
  {
    icon: Drill,
    title: "Estetik Diş Hekimliği",
    description: "Gülüşünüzü, kompozit/porselen lamina, bonding ve zirkonyum kaplamalarla yeniden tasarlıyoruz.",
    href: "/tedaviler/estetik-dis-hekimligi",
  },
  {
    icon: Smile,
    title: "İmplant Tedavisi",
    description: "Eksik dişleriniz için 3D rehberli cerrahi desteğiyle, kalıcı ve doğal görünümlü implant çözümleri.",
    href: "/tedaviler/implant-tedavisi",
  },
  {
    icon: Microscope,
    title: "Mikroskopik Diş Tedavisi",
    description: "25x büyütme altında; kanal tedavisi ve kompozit dolgularda en üst düzey hassasiyet ve başarı.",
    href: "/tedaviler/mikroskopik-dis-tedavisi",
  },
  {
    icon: Sparkles,
    title: "Ağız, Diş ve Çene Cerrahisi",
    description: "Gömülü 20 yaş dişleri, kist operasyonları ve komplike diş çekimlerinde uzman cerrahi müdahaleler.",
    href: "/tedaviler/agiz-dis-cene-cerrahisi",
  },
  {
    icon: Stethoscope,
    title: "Ortodonti (Şeffaf Plak)",
    description: "Diş teli olmadan, tamamen görünmez şeffaf plaklar kullanarak dişlerinizi ideal pozisyonuna getirme.",
    href: "/tedaviler/ortodonti-seffaf-plak",
  },
  {
    icon: Scissors,
    title: "Periodontoloji (Diş Eti Tedavisi)",
    description: "Pembe estetik, diş taşı temizliği (detartraj) ve ileri seviye greft operasyonları ile sağlıklı diş etleri.",
    href: "/tedaviler/periodontoloji-dis-eti-tedavisi",
  },
  {
    icon: Zap,
    title: "Protetik Diş Tedavisi",
    description: "Zirkonyum köprülerden akrilik protezlere kadar, çiğneme fonksiyonunuzu geri kazandıran sabit ve hareketli protezler.",
    href: "/tedaviler/protetik-dis-tedavisi",
  },
  {
    icon: Heart,
    title: "Pedodonti (Çocuk Diş Hekimliği)",
    description: "Çocuklarınızın diş sağlığını koruyucu (flor, fissür) ve tedavi edici, onlara özel nazik bir yaklaşım.",
    href: "/tedaviler/pedodonti-cocuk-dis-hekimligi",
  },
  {
    icon: Shield,
    title: "Bruksizm (Diş Sıkma) Tedavisi",
    description: "Diş sıkma ve gıcırdatmanın çenenize verdiği zararı durdurmak için Masseter (çene) botoksu ve gece plakları.",
    href: "/tedaviler/dis-sikma-bruksizm-tedavisi",
  },
]

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-cream to-vizon/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl">
            Tedavi Alanlarımız
          </h1>
          <p className="mt-6 text-lg text-brown/70 max-w-2xl mx-auto">
            Modern teknoloji ve uzman yaklaşımla, gülüşünüz için kapsamlı çözümler sunuyoruz.
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment) => (
              <Card key={treatment.title} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-vizon/10">
                    <treatment.icon className="h-7 w-7 text-vizon" />
                  </div>
                  <CardTitle className="text-xl">{treatment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brown/70 mb-6 min-h-[80px]">
                    {treatment.description}
                  </CardDescription>
                  <Link href={treatment.href}>
                    <Button variant="outline" className="w-full">
                      Detaylı Bilgi
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brown mb-6">
            Hangi Tedavi Size Uygun?
          </h2>
          <p className="text-lg text-brown/70 mb-8">
            Detaylı muayene ve danışmanlık için randevu alın
          </p>
          <Button size="lg" asChild>
            <Link href="/iletisim">Randevu Al</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
