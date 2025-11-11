import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthorBox } from "@/components/treatment/author-box"
import { FAQSection } from "@/components/treatment/faq-section"
import { JsonLd, schemas } from "@/components/seo/json-ld"
import { ArrowRight, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Mikroskop Destekli Diş Tedavisi | Dt. Emrecan Eren",
  description: "Lüleburgaz'da mikroskop destekli kanal tedavisi ve kompozit dolgu. 25x büyütme ile hassas tedavi. Randevu alın.",
  keywords: ["mikroskop kanal tedavisi", "mikroskopik dolgu", "Lüleburgaz kanal tedavisi"],
}

const services = [
  {
    title: "Mikroskop Destekli Kanal Tedavisi",
    description: "25x büyütme altında, gözle görülemeyen kök kanallarını bularak enfeksiyonu %100 temizleme ve dişi kurtarma.",
    features: [
      "25x büyütme ile hassas görüntüleme",
      "Gözle görülemeyen kanalları bulma",
      "%100 temizlik sağlama",
      "Yüksek başarı oranı"
    ]
  },
  {
    title: "Mikroskop Destekli Kompozit Dolgu",
    description: "Çürük dokuyu mikroskop altında temizleyerek sağlam dokuyu maksimumda koruyan estetik dolgu işlemi.",
    features: [
      "Minimal doku kaybı",
      "Hassas çürük temizliği",
      "Mükemmel kenar uyumu",
      "Uzun ömürlü dolgular"
    ]
  },
  {
    title: "Kompozit Dolgu Tedavisi",
    description: "Çürükleri temizleyerek dişin anatomik formunu ve fonksiyonunu, diş rengindeki kompozit malzeme ile restore etme.",
    features: [
      "Doğal diş rengi",
      "Tek seansta tamamlanır",
      "Estetik görünüm",
      "Dayanıklı yapı"
    ]
  }
]

const faqs = [
  {
    question: "Mikroskop destekli kanal tedavisi normal kanal tedavisinden nasıl farklıdır?",
    answer: "Mikroskop destekli kanal tedavisinde 25x büyütme ile çalışılır. Bu sayede gözle görülemeyen yan kanallar ve kırıklar tespit edilir, enfekte doku tamamen temizlenir. Normal kanal tedavisine göre başarı oranı çok daha yüksektir ve dişin kurtarılma şansı artar."
  },
  {
    question: "Mikroskop altında dolgu yapmak neden önemlidir?",
    answer: "Mikroskop altında yapılan dolgularda çürük doku tam olarak temizlenirken sağlam doku maksimum düzeyde korunur. Dolgu kenarları mükemmel uyum sağlar, bu da dolgunun ömrünü uzatır ve tekrar çürük oluşma riskini azaltır."
  },
  {
    question: "Kanal tedavisi acıtır mı?",
    answer: "Kanal tedavisi lokal anestezi altında yapılır, işlem sırasında ağrı hissetmezsiniz. Mikroskop kullanımı sayesinde işlem daha hassas ve kontrollü yapılır, bu da tedavi sonrası rahatsızlığı minimize eder."
  },
  {
    question: "Kanal tedavisi kaç seansta tamamlanır?",
    answer: "Mikroskop destekli kanal tedavisi genellikle 1-2 seansta tamamlanır. Enfeksiyonun şiddeti ve kanalın karmaşıklığına göre süre değişebilir. Basit vakalarda tek seansta tedavi tamamlanabilir."
  }
]

export default function MicroscopicTreatmentPage() {
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
            <span className="text-brown">Mikroskopik Diş Tedavisi</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl">
            Mikroskop Destekli Diş Tedavileri
          </h1>
          <p className="mt-4 text-xl text-brown/70">
            Mükemmellik, Detaylarda Gizlidir: Mikro Cerrahi Hassasiyeti ile Tedaviler
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
                Mikroskop destekli diş tedavileri, <strong>25x büyütme</strong> altında çalışarak gözle görülemeyen 
                detayları ortaya çıkarır ve tedavi başarısını maksimuma çıkarır. Kliniğimizde "Mükemmellik, Detaylarda 
                Gizlidir" sloganıyla hareket ediyor, <strong>Mikro Cerrahi Hassasiyeti</strong> ile her hastamıza en 
                yüksek kalitede tedavi sunuyoruz.
              </p>
              <p className="text-brown/80 leading-relaxed">
                Dental mikroskop kullanımı, özellikle kanal tedavisi ve kompozit dolgu uygulamalarında altın standarttır. 
                Sağlam dokuyu korurken enfekte veya çürük dokuyu tam olarak temizlememizi sağlar.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                Hassas Tedavi Uygulamalarımız
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

            {/* Why Microscope */}
            <div className="mb-12 p-6 bg-vizon/5 rounded-lg border-2 border-vizon/30">
              <h2 className="text-2xl font-bold text-brown mb-4">
                Neden Mikroskop Kullanımı Bu Kadar Önemli?
              </h2>
              <p className="text-brown/80 leading-relaxed mb-4">
                Dental mikroskop, diş hekimliğinde hassasiyeti ve başarı oranını artıran en önemli teknolojik 
                gelişmelerden biridir. 25x büyütme ile çalışmak, milimetrenin onda biri seviyesinde detay görmemizi 
                ve çalışmamızı sağlar.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span><strong>Kanal Tedavisinde:</strong> Gözle görülemeyen yan kanallar, kırıklar ve enfekte dokular tespit edilir</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span><strong>Dolgu Tedavisinde:</strong> Çürük-sağlam doku ayrımı net yapılır, minimal invaziv yaklaşım uygulanır</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span><strong>Estetik Uygulamalarda:</strong> Mükemmel kenar uyumu ve detay işçiliği sağlanır</span>
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
                Mikroskop Destekli Tedavi Hakkında Bilgi Alın
              </h3>
              <p className="text-brown/70 mb-6">
                Dişlerinizi en hassas şekilde tedavi etmek için randevu oluşturun
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
        "Mikroskop Destekli Diş Tedavisi",
        "25x büyütme altında kanal tedavisi ve kompozit dolgu uygulamaları."
      )} />
      <JsonLd data={schemas.faqPage(faqs)} />
    </main>
  )
}
