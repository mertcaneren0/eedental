import type { Metadata } from "next"
import { Award, GraduationCap, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dt. Emrecan Eren Hakkında | Lüleburgaz Diş Hekimi",
  description: "Dt. Emrecan Eren'in akademik geçmişi, uzmanlık alanları ve diş hekimliği felsefesi. TDB üyesi, mikroskopik tedavi uzmanı.",
  keywords: ["Dt. Emrecan Eren", "Lüleburgaz diş hekimi", "TDB üyesi"],
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-cream to-vizon/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl">
                Dt. Emrecan Eren
              </h1>
              <p className="mt-4 text-xl text-vizon font-semibold">
                Mikroskopik Diş Tedavisi ve Estetik Diş Hekimliği Uzmanı
              </p>
              <p className="mt-6 text-lg text-brown/80 leading-relaxed">
                Diş hekimliği, sadece teknik bir uygulama değil; bilim, sanat ve empati birleşimidir. 
                Her hastamın gülüşünü yeniden tasarlarken, en güncel teknolojileri kullanmayı, 
                minimal invaziv yaklaşımları benimsemeyi ve her adımda şeffaf iletişimi ilke edindim.
              </p>
            </div>
            <div className="relative">
              {/* Placeholder for professional photo */}
              <div className="aspect-square rounded-2xl bg-vizon/20 flex items-center justify-center">
                <p className="text-brown/50 text-center px-8">
                  [Profesyonel Fotoğraf]<br />
                  Beyaz önlük, klinik ortamı
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown mb-8">Diş Hekimliği Felsefem</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-brown/80 leading-relaxed mb-6">
              Lüleburgaz'a getirdiğim mikroskop destekli tedavi anlayışı, diş hekimliğinde yeni bir 
              standart oluşturuyor. 25 kat büyütme altında çalışmak, dişlerinizin sağlıklı dokularını 
              maksimum düzeyde korumamı sağlıyor.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Akademik temelli, kanıt odaklı diş hekimliği yapıyorum. Sürekli eğitim ve uluslararası 
              kongrelere katılım, hastalarıma en güncel tedavileri sunmamı mümkün kılıyor.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown text-center mb-16">
            Eğitim ve Sertifikalar
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-vizon/10">
                  <GraduationCap className="h-6 w-6 text-vizon" />
                </div>
                <CardTitle>Akademik Geçmiş</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-brown/70">
                  <li>• [Üniversite Adı] Diş Hekimliği Fakültesi</li>
                  <li>• Mezuniyet: [Yıl]</li>
                  <li>• Mikroskopik Endodonti Sertifikası</li>
                  <li>• İleri Estetik Diş Hekimliği</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-vizon/10">
                  <Award className="h-6 w-6 text-vizon" />
                </div>
                <CardTitle>Sertifikalar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-brown/70">
                  <li>• İmplantoloji Sertifika Programı</li>
                  <li>• Mikroskopik Endodonti</li>
                  <li>• Estetik Diş Hekimliği</li>
                  <li>• Dijital Gülüş Tasarımı</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-vizon/10">
                  <Users className="h-6 w-6 text-vizon" />
                </div>
                <CardTitle>Üyelikler</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-brown/70">
                  <li>• Türk Diş Hekimleri Birliği (TDB)</li>
                  <li>• Uluslararası Kongre Katılımları</li>
                  <li>• Sürekli Eğitim Programları</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brown mb-6">
            Detaylı Bilgi ve Randevu
          </h2>
          <p className="text-lg text-brown/70 mb-8">
            Diş sağlığınız hakkında konuşmak için iletişime geçin
          </p>
          <Button size="lg" asChild>
            <Link href="/iletisim">İletişim</Link>
          </Button>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "@id": "https://www.emrecaneren.com/hakkinda#dr-eren",
            "name": "Dt. Emrecan Eren",
            "jobTitle": "Diş Hekimi",
            "medicalSpecialty": "Dentistry",
            "url": "https://www.emrecaneren.com/hakkinda",
            "memberOf": {
              "@type": "Organization",
              "name": "Türk Diş Hekimleri Birliği"
            }
          })
        }}
      />
    </main>
  )
}
