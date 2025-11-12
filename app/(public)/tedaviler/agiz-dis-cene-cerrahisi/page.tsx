import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthorBox } from "@/components/treatment/author-box"
import { FAQSection } from "@/components/treatment/faq-section"
import { JsonLd, schemas } from "@/components/seo/json-ld"
import { ArrowRight, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Ağız, Diş ve Çene Cerrahisi | Dt. Emrecan Eren",
  description: "Lüleburgaz'da ağız cerrahisi. Gömülü 20 yaş dişi, cerrahi diş çekimi. Minimal invaziv yaklaşım. Randevu alın.",
  keywords: ["20 yaş dişi çekimi Lüleburgaz", "gömülü diş cerrahisi", "cerrahi diş çekimi"],
}

const services = [
  {
    title: "Gömülü 20 Yaş Dişi Cerrahisi",
    description: "Çene kemiğinde gömülü kalmış veya zor pozisyondaki 20 yaş dişlerinin cerrahi operasyonla çekilmesi.",
    features: [
      "3D tomografi ile planlama",
      "Minimal invaziv cerrahi",
      "Hızlı iyileşme süreci",
      "Ağrı kontrolü protokolü"
    ]
  },
  {
    title: "Cerrahi Diş Çekimi",
    description: "Kökü kırık veya sürmemiş dişlerin, uzmanlık gerektiren cerrahi bir müdahale ile alınması.",
    features: [
      "Lokal anestezi altında",
      "Minimal travma tekniği",
      "Kemik ve doku koruması",
      "Hızlı iyileşme"
    ]
  },
  {
    title: "20 Yaş Dişi Çekimi",
    description: "Sürmüş ancak fonksiyonel olmayan veya çürüğe neden olan 20 yaş dişlerinin çekimi.",
    features: [
      "Ağrısız işlem",
      "Hızlı uygulama",
      "Düşük komplikasyon riski",
      "Aynı gün normal aktivite"
    ]
  },
  {
    title: "Diş Çekimi",
    description: "Kurtarılamayacak durumdaki dişlerin lokal anestezi altında, minimal travma ile çekilmesi.",
    features: [
      "Lokal anestezi",
      "Minimal travma",
      "Hızlı işlem",
      "İyileşme takibi"
    ]
  }
]

const faqs = [
  {
    question: "Gömülü 20 yaş dişi çekimi acıtır mı?",
    answer: "Gömülü 20 yaş dişi çekimi lokal anestezi altında yapılır, işlem sırasında ağrı hissetmezsiniz. İşlem sonrası 2-3 gün hafif rahatsızlık olabilir ancak verilen ağrı kesiciler ile kontrol altına alınır. Minimal invaziv cerrahi tekniklerimiz sayesinde ağrı ve şişlik minimuma indirilir."
  },
  {
    question: "20 yaş dişlerini mutlaka çektirmek gerekir mi?",
    answer: "Hayır, her 20 yaş dişinin çekilmesi gerekmez. Eğer diş düzgün sürmüşse, fonksiyonelsa ve çevresinde problem oluşturmuyorsa çekilmesine gerek yoktur. Ancak gömülü kalmış, yan dişe baskı yapan, enfeksiyon veya kist oluşturan dişlerin çekilmesi gerekir."
  },
  {
    question: "Cerrahi diş çekimi sonrası ne kadar sürede iyileşirim?",
    answer: "İlk 3-5 gün kritik iyileşme dönemidir. Bu sürede şişlik ve hafif rahatsızlık olabilir. 7-10 gün içinde dikişler alınır ve yumuşak doku iyileşmesi tamamlanır. Tam kemik iyileşmesi 3-6 ay sürer ancak normal aktivitelere 1 hafta içinde dönülebilir."
  },
  {
    question: "Diş çekimi sonrası nelere dikkat etmeliyim?",
    answer: "İlk 24 saat içinde çekim bölgesine dokunmayın, sıcak yiyecek tüketmeyin ve ağzınızı çalkalamayın. İlk 3 gün yumuşak ve ılık gıdalar tercih edin. Sigara içmeyin ve emme hareketi yapmayın. Verilen antibiyotik ve ağrı kesicileri düzenli kullanın."
  }
]

export default function OralSurgeryPage() {
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
            <span className="text-brown">Ağız, Diş ve Çene Cerrahisi</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl">
            Ağız, Diş ve Çene Cerrahisi
          </h1>
          <p className="mt-4 text-xl text-brown/70">
            Minimal İnvaziv Yaklaşım ile Konforlu ve Güvenli Cerrahi İşlemler
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
                Ağız, diş ve çene cerrahisi, diş çekimlerinden komplike cerrahi operasyonlara kadar geniş bir 
                yelpazede hizmet veren uzmanlık alanıdır. Kliniğimizde <strong>Minimal İnvaziv Yaklaşım</strong> 
                prensibiyle hareket ediyor, cerrahi işlemleri en az travma ile, en konforlu şekilde gerçekleştiriyoruz.
              </p>
              <p className="text-brown/80 leading-relaxed">
                3D tomografi ile detaylı planlama, mikroskop destekli cerrahi ve modern anestezi teknikleri 
                sayesinde işlemler güvenli ve başarılı şekilde tamamlanır.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                Cerrahi Tedavi Alanlarımız
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

            {/* Minimal Invasive Approach */}
            <div className="mb-12 p-6 bg-vizon/5 rounded-lg border-2 border-vizon/30">
              <h2 className="text-2xl font-bold text-brown mb-4">
                Minimal İnvaziv Cerrahi Nedir?
              </h2>
              <p className="text-brown/80 leading-relaxed mb-4">
                Minimal invaziv cerrahi, en az doku hasarı ile maksimum tedavi başarısını hedefleyen modern 
                cerrahi yaklaşımdır. Bu yaklaşım sayesinde:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span>İşlem sonrası ağrı ve şişlik minimuma iner</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span>İyileşme süresi kısalır</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span>Komplikasyon riski azalır</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span>Hastanın konfor düzeyi artar</span>
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
                Cerrahi Tedavi Hakkında Bilgi Alın
              </h3>
              <p className="text-brown/70 mb-6">
                Minimal invaziv cerrahi yaklaşım ve kişiye özel tedavi planı için randevu oluşturun
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
        "Ağız, Diş ve Çene Cerrahisi",
        "Gömülü 20 yaş dişi, cerrahi diş çekimi ve diş çekimi işlemleri."
      )} />
      <JsonLd data={schemas.faqPage(faqs)} />
    </main>
  )
}
