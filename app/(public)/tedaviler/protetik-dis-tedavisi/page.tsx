import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthorBox } from "@/components/treatment/author-box"
import { FAQSection } from "@/components/treatment/faq-section"
import { JsonLd, schemas } from "@/components/seo/json-ld"
import { ArrowRight, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Protetik Diş Tedavisi - Kron, Köprü, Protez | Dt. Emrecan Eren",
  description: "Lüleburgaz'da protetik diş tedavisi. Zirkonyum kaplama, köprü, akrilik protez. Çiğneme fonksiyonunu geri kazanın. Randevu alın.",
  keywords: ["zirkonyum kaplama Lüleburgaz", "diş protezi", "diş köprüsü", "protetik tedavi"],
}

const services = [
  {
    title: "Zirkonyum Kron (Kaplama) ve Köprü",
    description: "Yüksek dayanıklılık ve estetiği birleştiren, biyouyumlu zirkonyum altyapılı kaplama ve köprü restorasyonları.",
    features: [
      "Metal içermez (alerjik reaksiyon riski yok)",
      "Yüksek ışık geçirgenliği",
      "Doğal diş görünümü",
      "Üstün dayanıklılık",
      "Biyouyumlu malzeme",
      "Uzun ömürlü"
    ]
  },
  {
    title: "Akrilik Diş Protezi (Damak)",
    description: "Tam veya kısmi diş eksikliklerinde kullanılan, takıp çıkarılabilen hareketli protez çözümleri.",
    features: [
      "Ekonomik çözüm",
      "Takıp çıkarılabilir",
      "Hızlı üretim",
      "Kolay temizlik",
      "Tam veya kısmi seçenekler",
      "Estetik görünüm"
    ]
  }
]

const faqs = [
  {
    question: "Zirkonyum kaplama ile porselen kaplama arasındaki fark nedir?",
    answer: "Zirkonyum kaplamalar metal altyapı içermez, tamamen seramik malzemeden üretilir. Bu sayede daha doğal görünüm, daha iyi ışık geçirgenliği ve alerjik reaksiyon riski yoktur. Porselen kaplamalar genellikle metal altyapı üzerine yapılır ve diş eti çizgisinde gri gölge oluşturabilir."
  },
  {
    question: "Zirkonyum kaplama ne kadar dayanıklıdır?",
    answer: "Zirkonyum kaplamalar doğru bakım ile 10-15 yıl veya daha uzun süre kullanılabilir. Yüksek dayanıklılığı sayesinde hem ön hem de arka dişlerde güvenle kullanılır. Düzenli diş bakımı ve kontrollerle ömrü uzatılabilir."
  },
  {
    question: "Protez kullanımı konuşmayı etkiler mi?",
    answer: "İlk günlerde hafif bir alışma süreci olabilir ancak kısa sürede alışırsınız. Modern protezler ince ve ergonomik tasarıma sahiptir. Düzenli kullanım ve pratik ile konuşma normalleşir."
  },
  {
    question: "Protezi ne sıklıkla temizlemeliyim?",
    answer: "Protez her gün, her yemek sonrası çıkarılıp temizlenmelidir. Gece yatarken protez çıkarılmalı ve özel protez temizleme solüsyonunda bekletilmelidir. Bu hem hijyen hem de ağız dokularının dinlenmesi için önemlidir."
  },
  {
    question: "Köprü tedavisi için komşu dişlere zarar verilir mi?",
    answer: "Köprü yapımı için komşu dişler küçültülür (prepare edilir). Bu nedenle implant tedavisi mümkünse tercih edilir. Ancak implant uygun değilse, köprü tedavisi eksik dişin yerine geçen etkili bir çözümdür."
  }
]

export default function ProstheticDentistryPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-cream to-vizon/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-brown/60 mb-6">
            <Link href="/" className="hover:text-vizon">Anasayfa</Link>
            <span>/</span>
            <Link href="/tedaviler" className="hover:text-vizon">Tedaviler</Link>
            <span>/</span>
            <span className="text-brown">Protetik Diş Tedavisi</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl">
            Protetik Diş Tedavisi (Kron, Köprü ve Protezler)
          </h1>
          <p className="mt-4 text-xl text-brown/70">
            Çiğneme Fonksiyonunu ve Estetiği Geri Kazandıran Protez Çözümleri
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-brown/80 leading-relaxed mb-4">
                Protetik diş tedavisi, eksik veya hasar görmüş dişlerin yerine <strong>sabit veya hareketli 
                protezler</strong> ile çiğneme fonksiyonunu ve estetiği geri kazandırma işlemidir. Kliniğimizde, 
                modern malzemeler ve dijital teknolojiler kullanarak doğal dişlerinize en yakın görünüm ve 
                fonksiyonu sağlayan protez çözümleri sunuyoruz.
              </p>
              <p className="text-brown/80 leading-relaxed">
                Zirkonyum kaplamalardan akrilik protezlere kadar geniş yelpazede seçeneklerimiz ile her hastanın 
                ihtiyacına ve bütçesine uygun çözümler üretiyoruz.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                Sabit ve Hareketli Protez Çözümlerimiz
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-vizon" />
                        {service.title}
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-brown/70">
                            <div className="h-1.5 w-1.5 rounded-full bg-vizon" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Fixed vs Removable */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                Sabit ve Hareketli Protezler Arasındaki Farklar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg border border-grey/30">
                  <h3 className="text-xl font-semibold text-brown mb-4">Sabit Protezler</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-brown/70">
                      <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                      <span>Kron (kaplama) ve köprüler</span>
                    </li>
                    <li className="flex items-start gap-2 text-brown/70">
                      <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                      <span>Dişlere veya implantlara sabitlenir</span>
                    </li>
                    <li className="flex items-start gap-2 text-brown/70">
                      <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                      <span>Çıkarılıp takılamaz</span>
                    </li>
                    <li className="flex items-start gap-2 text-brown/70">
                      <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                      <span>Doğal diş hissi verir</span>
                    </li>
                    <li className="flex items-start gap-2 text-brown/70">
                      <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                      <span>Daha estetik görünüm</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-white rounded-lg border border-grey/30">
                  <h3 className="text-xl font-semibold text-brown mb-4">Hareketli Protezler</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-brown/70">
                      <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                      <span>Tam veya kısmi protezler</span>
                    </li>
                    <li className="flex items-start gap-2 text-brown/70">
                      <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                      <span>Takıp çıkarılabilir</span>
                    </li>
                    <li className="flex items-start gap-2 text-brown/70">
                      <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                      <span>Kolay temizlik</span>
                    </li>
                    <li className="flex items-start gap-2 text-brown/70">
                      <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                      <span>Ekonomik çözüm</span>
                    </li>
                    <li className="flex items-start gap-2 text-brown/70">
                      <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                      <span>Çoklu diş eksikliklerinde uygun</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Digital Dentistry */}
            <div className="mb-12 p-6 bg-vizon/5 rounded-lg border-2 border-vizon/30">
              <h2 className="text-2xl font-bold text-brown mb-4">
                Dijital Protetik Diş Hekimliği
              </h2>
              <p className="text-brown/80 leading-relaxed mb-4">
                Kliniğimizde dijital ölçü sistemleri ve CAD/CAM teknolojisi kullanarak protez yapımında 
                hassasiyet ve konfor sağlıyoruz:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span><strong>Dijital Ölçü:</strong> Geleneksel ölçü alımına göre daha konforlu ve hassas</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span><strong>Hızlı Üretim:</strong> Dijital tasarım ile daha kısa sürede protez hazırlanır</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span><strong>Mükemmel Uyum:</strong> Milimetrik hassasiyetle protez üretimi</span>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <FAQSection faqs={faqs} />

            {/* Author Box */}
            <AuthorBox />

            {/* CTA */}
            <div className="mt-12 text-center p-8 bg-gradient-to-br from-vizon/10 to-vizon/5 rounded-lg">
              <h3 className="text-2xl font-bold text-brown mb-4">
                Protetik Tedavi Hakkında Bilgi Alın
              </h3>
              <p className="text-brown/70 mb-6">
                Size uygun protez çözümü ve tedavi planı için randevu oluşturun
              </p>
              <Button size="lg" asChild>
                <Link href="/iletisim">
                  Randevu Al
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <JsonLd data={schemas.medicalProcedure(
        "Protetik Diş Tedavisi",
        "Zirkonyum kaplama, köprü ve akrilik protez çözümleri."
      )} />
      <JsonLd data={schemas.faqPage(faqs)} />
    </main>
  )
}
