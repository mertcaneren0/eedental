import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthorBox } from "@/components/treatment/author-box"
import { FAQSection } from "@/components/treatment/faq-section"
import { JsonLd, schemas } from "@/components/seo/json-ld"
import { ArrowRight, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Estetik Diş Hekimliği ve Gülüş Tasarımı | Dt. Emrecan Eren",
  description: "Lüleburgaz'da estetik diş hekimliği. Porselen lamina, kompozit bonding, zirkonyum kaplama ve diş beyazlatma ile gülüş tasarımı. Randevu alın.",
  keywords: ["Lüleburgaz estetik diş", "gülüş tasarımı Lüleburgaz", "porselen lamina", "diş beyazlatma"],
}

const services = [
  {
    title: "Porselen Lamina Tedavisi",
    description: "Diş yüzeyindeki minimum aşındırmayla uygulanan, lekelenmeye dirençli estetik porselen yapraklar.",
    features: [
      "Minimal invaziv yaklaşım",
      "Doğal diş görünümü",
      "Lekelenmeye karşı yüksek direnç",
      "Uzun ömürlü çözüm"
    ]
  },
  {
    title: "Kompozit Lamina (Bonding) Tedavisi",
    description: "Dişten doku kaldırmadan, tek seansta kompozit malzemelerle estetik düzeltmeler ve boşluk kapama.",
    features: [
      "Tek seansta tamamlanır",
      "Dişten doku kaldırılmaz",
      "Ekonomik çözüm",
      "Geri dönüşümlü işlem"
    ]
  },
  {
    title: "Zirkonyum Kron (Kaplama)",
    description: "Yüksek ışık geçirgenliği ve biyouyumluluğu ile doğal dişe en yakın estetik kaplama çözümü.",
    features: [
      "Metal içermez",
      "Yüksek biyouyumluluk",
      "Doğal ışık geçirgenliği",
      "Üstün dayanıklılık"
    ]
  },
  {
    title: "Diş Beyazlatma (Bleaching)",
    description: "Ofis tipi profesyonel beyazlatma ajanları ile dişlerinizin rengini güvenle 8-10 ton açma işlemi.",
    features: [
      "Profesyonel uygulama",
      "Hızlı sonuç (tek seansta)",
      "Güvenli ve etkili",
      "Uzun süreli beyazlık"
    ]
  }
]

const faqs = [
  {
    question: "Porselen lamina ile kompozit lamina arasındaki fark nedir?",
    answer: "Porselen lamina, laboratuvar ortamında hazırlanan ve dişe yapıştırılan ince porselen yapraklardır. Kompozit lamina ise direkt olarak dişe uygulanan kompozit malzemedir. Porselen lamina daha dayanıklı ve lekelenmeye karşı daha dirençlidir, ancak daha maliyetlidir. Kompozit lamina tek seansta tamamlanır ve daha ekonomiktir."
  },
  {
    question: "Diş beyazlatma kalıcı mıdır?",
    answer: "Diş beyazlatma işlemi kalıcı değildir ancak doğru bakım ile 1-3 yıl etkisi devam eder. Sigara, kahve, çay gibi renklenmeye neden olan maddelerin tüketimi beyazlığın süresini kısaltır. Düzenli diş bakımı ve periyodik beyazlatma seansları ile etki uzatılabilir."
  },
  {
    question: "Zirkonyum kaplama ne kadar dayanıklıdır?",
    answer: "Zirkonyum kaplamalar doğru bakım ile 10-15 yıl veya daha uzun süre kullanılabilir. Metal içermediği için alerjik reaksiyon riski yoktur. Yüksek dayanıklılığı sayesinde ön ve arka dişlerde güvenle kullanılabilir."
  },
  {
    question: "Gülüş tasarımı ne kadar sürer?",
    answer: "Gülüş tasarımı süresi uygulanan tedaviye göre değişir. Kompozit bonding tek seansta tamamlanabilirken, porselen lamina 2-3 seans gerektirir. Zirkonyum kaplama ise 2-3 haftalık bir süreçte tamamlanır. Detaylı muayene sonrası size özel tedavi planı oluşturulur."
  }
]

export default function EsteticDentistryPage() {
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
            <span className="text-brown">Estetik Diş Hekimliği</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl">
            Estetik Diş Hekimliği ve Gülüş Tasarımı
          </h1>
          <p className="mt-4 text-xl text-brown/70">
            Dijital gülüş tasarımı ve minimal invaziv yaklaşımla hayalinizdeki gülüşe kavuşun
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
                Estetik diş hekimliği, dişlerinizin görünümünü iyileştirerek özgüveninizi artıran modern tedavi 
                yaklaşımıdır. Kliniğimizde, <strong>Dijital Gülüş Tasarımı</strong> teknolojisi ile tedavi öncesi 
                sonucunuzu görebilir, <strong>Minimal İnvaziv Yaklaşım</strong> felsefemiz ile sağlıklı diş dokusunu 
                maksimum düzeyde koruyarak estetik hedeflerinize ulaşabilirsiniz.
              </p>
              <p className="text-brown/80 leading-relaxed">
                E-E-A-T (Uzmanlık, Deneyim, Otorite, Güvenilirlik) prensiplerine bağlı kalarak, her hastamıza 
                özel tedavi planları oluşturuyor ve en son teknolojilerle desteklenen uygulamalar sunuyoruz.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                Estetik Gülüş Tasarımı Uygulamalarımız
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

            {/* Digital Smile Design */}
            <div className="mb-12 p-6 bg-vizon/5 rounded-lg border-2 border-vizon/30">
              <h2 className="text-2xl font-bold text-brown mb-4">
                Dijital Gülüş Tasarımı Nedir?
              </h2>
              <p className="text-brown/80 leading-relaxed mb-4">
                Dijital gülüş tasarımı, tedavi öncesi fotoğraflarınız üzerinde dijital simülasyon yaparak 
                tedavi sonrası gülüşünüzün nasıl görüneceğini gösterme teknolojisidir. Bu sayede tedavi 
                öncesi beklentilerinizi netleştirir, size en uygun tedavi planını birlikte belirleriz.
              </p>
              <p className="text-brown/80 leading-relaxed">
                Yüz şekliniz, dudak yapınız ve diş etleriniz analiz edilerek size özel, doğal ve estetik 
                bir gülüş tasarımı oluşturulur.
              </p>
            </div>

            {/* FAQ */}
            <FAQSection faqs={faqs} />

            {/* Author Box */}
            <AuthorBox />

            {/* CTA */}
            <div className="mt-12 text-center p-8 bg-gradient-to-br from-vizon/10 to-vizon/5 rounded-lg">
              <h3 className="text-2xl font-bold text-brown mb-4">
                Hayalinizdeki Gülüşe Kavuşun
              </h3>
              <p className="text-brown/70 mb-6">
                Dijital gülüş tasarımı ve kişiye özel tedavi planı için randevu oluşturun
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
        "Estetik Diş Hekimliği",
        "Porselen lamina, kompozit bonding, zirkonyum kaplama ve diş beyazlatma ile gülüş tasarımı hizmetleri."
      )} />
      <JsonLd data={schemas.faqPage(faqs)} />
    </main>
  )
}
