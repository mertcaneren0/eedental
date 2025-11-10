import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthorBox } from "@/components/treatment/author-box"
import { FAQSection } from "@/components/treatment/faq-section"
import { JsonLd, schemas } from "@/components/seo/json-ld"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Ortodonti - Şeffaf Plak Tedavisi | Dt. Emrecan Eren",
  description: "Lüleburgaz'da şeffaf plak tedavisi. Diş teli olmadan görünmez plaklar ile diş düzeltme. Dijital planlama. Randevu alın.",
  keywords: ["şeffaf plak Lüleburgaz", "invisalign", "diş telsiz tedavi", "ortodonti"],
}

const benefits = [
  "Tamamen görünmez ve estetik",
  "Çıkarılabilir (yemek ve diş fırçalama sırasında)",
  "Konforlu kullanım (tel ve braket rahatsızlığı yok)",
  "Dijital planlama ile öngörülebilir sonuç",
  "Daha kısa tedavi süresi",
  "Ağız hijyenini koruma kolaylığı",
  "Metal alerjisi riski yok",
  "Sosyal yaşamı etkilemez"
]

const faqs = [
  {
    question: "Şeffaf plak tedavisi her yaşta uygulanabilir mi?",
    answer: "Şeffaf plak tedavisi genellikle ergenlik sonrası ve yetişkinlerde uygulanır. Çene gelişiminin tamamlanmış olması önemlidir. Yaş üst sınırı yoktur, uygun vakalarda her yaşta uygulanabilir."
  },
  {
    question: "Şeffaf plakları günde kaç saat takmalıyım?",
    answer: "Şeffaf plaklar günde en az 20-22 saat takılmalıdır. Sadece yemek yerken ve diş fırçalarken çıkarılır. Düzenli kullanım tedavi başarısı için kritik öneme sahiptir."
  },
  {
    question: "Şeffaf plak tedavisi ne kadar sürer?",
    answer: "Tedavi süresi vakanın karmaşıklığına göre değişir. Hafif çapraşıklıklarda 6-12 ay, orta ve ileri vakalarda 12-24 ay sürebilir. Dijital planlama sırasında tahmini süre size bildirilir."
  },
  {
    question: "Şeffaf plak tedavisi sırasında konuşma etkilenir mi?",
    answer: "İlk birkaç gün hafif bir alışma süreci olabilir ancak çok kısa sürede alışırsınız. Şeffaf plaklar çok ince olduğu için konuşmayı minimal düzeyde etkiler, tel tedavisine göre çok daha konforludur."
  },
  {
    question: "Her tür diş çapraşıklığında şeffaf plak kullanılabilir mi?",
    answer: "Şeffaf plak tedavisi hafif ve orta dereceli çapraşıklıklarda çok başarılıdır. Çok ileri vakalarda veya ciddi çene uyumsuzluklarında geleneksel ortodonti daha uygun olabilir. Detaylı muayene sonrası size en uygun tedavi önerilir."
  }
]

export default function OrthodonticsPage() {
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
            <span className="text-brown">Ortodonti (Şeffaf Plak)</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl">
            Ortodonti (Şeffaf Plak Tedavisi)
          </h1>
          <p className="mt-4 text-xl text-brown/70">
            Diş Teli Olmadan, Dijital Planlama ile Estetik Diş Düzeltme
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
                Şeffaf plak tedavisi, geleneksel diş teline alternatif olarak geliştirilen modern ortodonti 
                yöntemidir. <strong>Tamamen görünmez ve çıkarılabilir</strong> plaklar serisi ile dişlerinizi 
                ideal pozisyonuna getiriyoruz. <strong>Dijital planlama</strong> sayesinde tedavi öncesi 
                sonucunuzu görebilir, tedavi sürecini adım adım takip edebilirsiniz.
              </p>
              <p className="text-brown/80 leading-relaxed">
                Kliniğimizde, 3D dijital tarama ve simülasyon teknolojisi ile kişiye özel şeffaf plaklar 
                hazırlanır. Her plak dişlerinizi kademeli olarak hareket ettirir ve hedeflenen gülüşe ulaşmanızı sağlar.
              </p>
            </div>

            {/* Service Card */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                Modern Ortodonti Çözümümüz
              </h2>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Sparkles className="h-6 w-6 text-vizon" />
                    Şeffaf Plak Tedavisi
                  </CardTitle>
                  <CardDescription className="text-base">
                    Diş teli kullanmadan, tamamen görünmez ve çıkarılabilir plaklar serisi ile diş 
                    çapraşıklıklarını dijital olarak düzeltme.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-brown mb-3">Tedavi Süreci:</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-vizon text-cream text-sm font-bold flex-shrink-0">
                        1
                      </div>
                      <p className="text-sm text-brown/70">
                        <strong>Dijital Tarama:</strong> Ağzınızın 3D dijital modeli oluşturulur
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-vizon text-cream text-sm font-bold flex-shrink-0">
                        2
                      </div>
                      <p className="text-sm text-brown/70">
                        <strong>Tedavi Planlaması:</strong> Dişlerinizin hareket simülasyonu yapılır, sonuç önceden gösterilir
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-vizon text-cream text-sm font-bold flex-shrink-0">
                        3
                      </div>
                      <p className="text-sm text-brown/70">
                        <strong>Plak Üretimi:</strong> Size özel şeffaf plaklar seti hazırlanır
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-vizon text-cream text-sm font-bold flex-shrink-0">
                        4
                      </div>
                      <p className="text-sm text-brown/70">
                        <strong>Tedavi Başlangıcı:</strong> Her 1-2 haftada bir yeni plağa geçiş yapılır
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-vizon text-cream text-sm font-bold flex-shrink-0">
                        5
                      </div>
                      <p className="text-sm text-brown/70">
                        <strong>Düzenli Kontroller:</strong> 6-8 haftada bir ilerleme kontrol edilir
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                Şeffaf Plak Tedavisinin Avantajları
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-vizon flex-shrink-0 mt-1" />
                    <span className="text-brown/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Digital Planning */}
            <div className="mb-12 p-6 bg-vizon/5 rounded-lg border-2 border-vizon/30">
              <h2 className="text-2xl font-bold text-brown mb-4">
                Dijital Ortodonti Planlaması
              </h2>
              <p className="text-brown/80 leading-relaxed mb-4">
                Şeffaf plak tedavisinin en büyük avantajlarından biri, tedavi öncesi sonucunuzu görebilmenizdir. 
                3D dijital simülasyon ile:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span>Dişlerinizin her aşamadaki konumunu görebilirsiniz</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span>Tedavi sonrası gülüşünüzü önceden görürsünüz</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span>Tedavi süresini net olarak öğrenirsiniz</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span>Beklentilerinizi netleştirirsiniz</span>
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
                Şeffaf Plak Tedavisi Hakkında Bilgi Alın
              </h3>
              <p className="text-brown/70 mb-6">
                Dijital simülasyon ve kişiye özel tedavi planı için randevu oluşturun
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
        "Şeffaf Plak Tedavisi",
        "Diş teli olmadan görünmez plaklar ile diş düzeltme tedavisi."
      )} />
      <JsonLd data={schemas.faqPage(faqs)} />
    </main>
  )
}
