import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthorBox } from "@/components/treatment/author-box"
import { FAQSection } from "@/components/treatment/faq-section"
import { JsonLd, schemas } from "@/components/seo/json-ld"
import { ArrowRight, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Periodontoloji - Diş Eti Tedavisi | Dt. Emrecan Eren",
  description: "Lüleburgaz'da diş eti tedavisi. Detartraj, küretaj, pembe estetik, diş eti grefti. Sağlıklı diş etleri. Randevu alın.",
  keywords: ["diş eti tedavisi Lüleburgaz", "diş taşı temizliği", "pembe estetik", "diş eti çekilmesi"],
}

const services = [
  {
    title: "Diş Temizliği (Detartraj)",
    description: "Diş taşı ve plakların profesyonel ekipmanlarla temizlenerek diş eti sağlığının korunması.",
    features: [
      "Ultrasonik cihazlarla temizlik",
      "Plak ve diş taşı temizliği",
      "Diş eti hastalıklarını önleme",
      "6 ayda bir önerilir"
    ]
  },
  {
    title: "İleri Seviye Diş Eti Tedavisi (Küretaj)",
    description: "Diş eti ceplerindeki iltihaplı dokuların ve derin diş taşlarının anestezi altında temizlenmesi.",
    features: [
      "Lokal anestezi altında",
      "Derin temizlik",
      "İltihap tedavisi",
      "Diş kaybını önleme"
    ]
  },
  {
    title: "Pembe Estetik (Diş Eti Simetrisi)",
    description: "Lazer veya mikro-cerrahi ile diş eti seviyelerini düzenleyerek ideal gülüş hattını oluşturma.",
    features: [
      "Lazer veya mikro-cerrahi",
      "Gülüş hattı düzenleme",
      "Minimal kanama",
      "Hızlı iyileşme"
    ]
  },
  {
    title: "Serbest Diş Eti ve Bağ Doku Grefti",
    description: "Diş eti çekilmelerini tedavi etmek ve estetiği geri kazandırmak için uygulanan mikro-cerrahi operasyonlar.",
    features: [
      "Mikro-cerrahi teknik",
      "Doğal doku kullanımı",
      "Kalıcı çözüm",
      "Estetik iyileşme"
    ]
  }
]

const faqs = [
  {
    question: "Diş taşı temizliği dişlere zarar verir mi?",
    answer: "Hayır, profesyonel diş taşı temizliği dişlere zarar vermez. Aksine, diş taşı ve plakların temizlenmesi diş eti hastalıklarını önler ve diş sağlığını korur. Ultrasonik cihazlar ve özel aletlerle yapılan temizlik güvenlidir."
  },
  {
    question: "Diş eti hastalığı belirtileri nelerdir?",
    answer: "Diş eti kanaması, şişlik, kızarıklık, ağız kokusu, diş etlerinde çekilme, dişlerde sallanma ve diş eti ceplerinde derinleşme diş eti hastalığının belirtileridir. Bu belirtilerden herhangi birini fark ederseniz mutlaka diş hekimine başvurmalısınız."
  },
  {
    question: "Pembe estetik tedavisi acıtır mı?",
    answer: "Pembe estetik tedavisi lokal anestezi altında yapılır, işlem sırasında ağrı hissetmezsiniz. Lazer kullanıldığında kanama minimal olur ve iyileşme çok hızlıdır. İşlem sonrası hafif rahatsızlık ağrı kesicilerle kontrol altına alınır."
  },
  {
    question: "Diş eti çekilmesi geri döner mi?",
    answer: "Çekilmiş diş eti kendiliğinden geri dönmez. Ancak diş eti grefti operasyonları ile çekilme tedavi edilebilir ve estetik görünüm geri kazandırılabilir. Erken teşhis ve tedavi çok önemlidir."
  },
  {
    question: "Ne sıklıkla diş taşı temizliği yaptırmalıyım?",
    answer: "Genel olarak 6 ayda bir diş taşı temizliği önerilir. Ancak diş eti hastalığı riski yüksek kişilerde bu süre 3-4 aya düşebilir. Diş hekiminiz size özel temizlik sıklığını belirleyecektir."
  }
]

export default function PeriodontologyPage() {
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
            <span className="text-brown">Periodontoloji (Diş Eti Tedavisi)</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl">
            Periodontoloji (Diş Eti Hastalıkları ve Tedavisi)
          </h1>
          <p className="mt-4 text-xl text-brown/70">
            Sağlıklı Diş Etleri, Güzel Gülüş ve Genel Sağlığınız İçin
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
                Periodontoloji, diş etleri ve dişleri destekleyen dokuların sağlığını koruyan ve tedavi eden 
                diş hekimliği dalıdır. <strong>Sağlıklı diş etleri</strong>, sadece güzel bir gülüş için değil, 
                aynı zamanda genel sağlığınız için de kritik öneme sahiptir. Diş eti hastalıkları, kalp hastalıkları 
                ve diyabet gibi sistemik hastalıklarla ilişkilidir.
              </p>
              <p className="text-brown/80 leading-relaxed">
                Kliniğimizde, koruyucu diş eti bakımından ileri seviye cerrahi operasyonlara kadar geniş 
                yelpazede periodontoloji hizmetleri sunuyoruz. Gülüş estetiği ve diş eti sağlığınızı birlikte 
                değerlendiriyoruz.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                Diş Eti Tedavi Hizmetlerimiz
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

            {/* Importance */}
            <div className="mb-12 p-6 bg-vizon/5 rounded-lg border-2 border-vizon/30">
              <h2 className="text-2xl font-bold text-brown mb-4">
                Diş Eti Sağlığı Neden Bu Kadar Önemli?
              </h2>
              <p className="text-brown/80 leading-relaxed mb-4">
                Diş eti hastalıkları, dünyada en yaygın kronik hastalıklardan biridir ve tedavi edilmezse 
                diş kaybına yol açar. Ancak etkileri sadece ağızla sınırlı değildir:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span><strong>Kalp Sağlığı:</strong> Diş eti iltihabı kalp hastalığı riskini artırır</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span><strong>Diyabet:</strong> Diş eti hastalığı kan şekeri kontrolünü zorlaştırır</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span><strong>Hamilelik:</strong> Diş eti hastalığı erken doğum riskini artırabilir</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span><strong>Estetik:</strong> Sağlıklı diş etleri güzel gülüşün temelidir</span>
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
                Diş Eti Sağlığınızı Kontrol Ettirin
              </h3>
              <p className="text-brown/70 mb-6">
                Sağlıklı diş etleri için muayene ve tedavi planı oluşturun
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
        "Periodontoloji - Diş Eti Tedavisi",
        "Diş taşı temizliği, küretaj, pembe estetik ve diş eti grefti tedavileri."
      )} />
      <JsonLd data={schemas.faqPage(faqs)} />
    </main>
  )
}
