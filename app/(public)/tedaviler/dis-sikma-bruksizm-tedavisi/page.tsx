import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthorBox } from "@/components/treatment/author-box"
import { FAQSection } from "@/components/treatment/faq-section"
import { JsonLd, schemas } from "@/components/seo/json-ld"
import { ArrowRight, Sparkles, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Diş Sıkma (Bruksizm) Tedavisi | Dt. Emrecan Eren",
  description: "Lüleburgaz'da bruksizm tedavisi. Masseter botoksu, gece plağı. Diş sıkma ve gıcırdatma tedavisi. Randevu alın.",
  keywords: ["bruksizm tedavisi Lüleburgaz", "diş sıkma botoksu", "gece plağı", "masseter botoks"],
}

const services = [
  {
    title: "Masseter Botoks (Diş Sıkma Botoksu)",
    description: "Çene kasına (masseter) botoks uygulayarak istemsiz sıkma kuvvetini azaltma ve çene eklemini rahatlatma.",
    features: [
      "İstemsiz sıkma kuvvetini azaltır",
      "Çene ağrısını hafifletir",
      "Baş ağrısını azaltır",
      "Çene eklemini rahatlatır",
      "Yüz hatlarını inceltir",
      "4-6 ay etkili"
    ]
  },
  {
    title: "Gece Plağı (Oklüzal Splint)",
    description: "Sıkmanın dişlere verdiği zararı önlemek için kişiye özel hazırlanan koruyucu plaklar.",
    features: [
      "Dişleri aşınmadan korur",
      "Çene eklemini rahatlatır",
      "Kas gerginliğini azaltır",
      "Kişiye özel tasarım",
      "Rahat kullanım",
      "Uzun ömürlü"
    ]
  }
]

const symptoms = [
  "Sabah çene ağrısı ve gerginliği",
  "Baş ağrısı (özellikle şakak bölgesinde)",
  "Diş hassasiyeti ve aşınmaları",
  "Çene ekleminde ses (klik, çıtırtı)",
  "Kulak ağrısı",
  "Boyun ve omuz ağrısı",
  "Dişlerde kırılma veya çatlaklar",
  "Uyku kalitesinde azalma"
]

const faqs = [
  {
    question: "Bruksizm nedir ve neden olur?",
    answer: "Bruksizm, bilinçsiz olarak dişleri sıkma veya gıcırdatma durumudur. Genellikle uyku sırasında olur ancak gündüz de görülebilir. Stres, anksiyete, uyku bozuklukları, yanlış diş kapanışı ve bazı ilaçlar bruksizme neden olabilir."
  },
  {
    question: "Masseter botoksu nasıl çalışır?",
    answer: "Masseter botoksu, çene kasına enjekte edilerek kasın aşırı kasılmasını geçici olarak azaltır. Bu sayede istemsiz sıkma kuvveti azalır, çene ağrısı ve baş ağrısı hafifler. Etki 4-6 ay sürer ve tekrarlanabilir."
  },
  {
    question: "Gece plağı ne kadar süre kullanmalıyım?",
    answer: "Gece plağı, bruksizm devam ettiği sürece her gece kullanılmalıdır. Plak dişleri korur ancak bruksizmi tedavi etmez. Altta yatan nedenlerin (stres, uyku bozukluğu) tedavisi de önemlidir."
  },
  {
    question: "Botoks tedavisi güvenli midir?",
    answer: "Evet, masseter botoksu deneyimli bir hekim tarafından uygulandığında güvenlidir. Botoks, kozmetik ve tıbbi amaçlarla yıllardır kullanılmaktadır. Geçici yan etkiler minimal düzeydedir."
  },
  {
    question: "Bruksizm tedavi edilmezse ne olur?",
    answer: "Tedavi edilmeyen bruksizm, dişlerde ciddi aşınma, kırılma ve çatlaklar, çene ekleminde hasar, kronik baş ve boyun ağrısı, diş kaybı ve uyku kalitesinde azalmaya yol açabilir. Erken teşhis ve tedavi önemlidir."
  }
]

export default function BruxismPage() {
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
            <span className="text-brown">Diş Sıkma (Bruksizm) Tedavisi</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl">
            Diş Sıkma (Bruksizm) Tedavisi
          </h1>
          <p className="mt-4 text-xl text-brown/70">
            Çene Eklemine ve Dişlere Verilen Zararı Durdurun: Modern Tedavi Yöntemleri
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
                Bruksizm, bilinçsiz olarak dişleri sıkma veya gıcırdatma durumudur ve genellikle uyku sırasında 
                ortaya çıkar. <strong>Diş sıkma ve gıcırdatma</strong>, çene eklemine ve dişlere ciddi zararlar 
                verebilir. Kliniğimizde, modern tedavi yöntemleri ile bruksizmin etkilerini minimuma indiriyor 
                ve çene sağlığınızı koruyoruz.
              </p>
              <p className="text-brown/80 leading-relaxed">
                <strong>Masseter Botoksu</strong> ve <strong>Gece Plağı</strong> tedavileri ile hem semptomları 
                hafifletir hem de dişlerinizi ve çene eklemini koruruz. Stres yönetimi ve uyku kalitesi 
                iyileştirmesi ile birlikte kapsamlı bir tedavi yaklaşımı sunuyoruz.
              </p>
            </div>

            {/* Symptoms Warning */}
            <div className="mb-12 p-6 bg-amber-50 rounded-lg border-2 border-amber-200">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-brown mb-2">
                    Bruksizm Belirtileri
                  </h2>
                  <p className="text-brown/80 mb-4">
                    Aşağıdaki belirtilerden birini veya birkaçını yaşıyorsanız, bruksizm olabilir:
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                    <span className="text-brown/80">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                Bruksizm Tedavi Seçeneklerimiz
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

            {/* Treatment Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                Kapsamlı Tedavi Yaklaşımı
              </h2>
              <p className="text-brown/80 leading-relaxed mb-4">
                Bruksizm tedavisi sadece semptomları hafifletmekle kalmaz, altta yatan nedenleri de 
                ele almalıdır. Kliniğimizde çok yönlü bir yaklaşım uyguluyoruz:
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-grey/30">
                  <h3 className="font-semibold text-brown mb-2">1. Koruyucu Tedavi</h3>
                  <p className="text-sm text-brown/70">
                    Gece plağı ile dişleri aşınma ve kırılmadan koruma
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-grey/30">
                  <h3 className="font-semibold text-brown mb-2">2. Kas Gevşetme</h3>
                  <p className="text-sm text-brown/70">
                    Masseter botoksu ile çene kasını gevşetme ve sıkma kuvvetini azaltma
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-grey/30">
                  <h3 className="font-semibold text-brown mb-2">3. Yaşam Tarzı Değişiklikleri</h3>
                  <p className="text-sm text-brown/70">
                    Stres yönetimi, uyku hijyeni, kafein ve alkol tüketimini azaltma
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-grey/30">
                  <h3 className="font-semibold text-brown mb-2">4. Düzenli Takip</h3>
                  <p className="text-sm text-brown/70">
                    Tedavi etkinliğini değerlendirme ve gerekirse ayarlamalar yapma
                  </p>
                </div>
              </div>
            </div>

            {/* Botox vs Night Guard */}
            <div className="mb-12 p-6 bg-vizon/5 rounded-lg border-2 border-vizon/30">
              <h2 className="text-2xl font-bold text-brown mb-4">
                Botoks mu, Gece Plağı mı?
              </h2>
              <p className="text-brown/80 leading-relaxed mb-4">
                Her iki tedavi de bruksizm yönetiminde etkilidir ancak farklı şekillerde çalışır:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-brown mb-2">Masseter Botoksu</h3>
                  <ul className="space-y-1 text-sm text-brown/70">
                    <li>• Sıkma kuvvetini azaltır</li>
                    <li>• Ağrıyı hafifletir</li>
                    <li>• 4-6 ay etkili</li>
                    <li>• Yüz hatlarını inceltir</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-brown mb-2">Gece Plağı</h3>
                  <ul className="space-y-1 text-sm text-brown/70">
                    <li>• Dişleri korur</li>
                    <li>• Çene eklemini rahatlatır</li>
                    <li>• Sürekli kullanılır</li>
                    <li>• Fiziksel bariyer oluşturur</li>
                  </ul>
                </div>
              </div>
              <p className="text-brown/80 leading-relaxed mt-4">
                <strong>En iyi sonuç:</strong> Çoğu hastada her iki tedavinin birlikte kullanılması 
                önerilir. Botoks sıkma kuvvetini azaltırken, gece plağı dişleri korur.
              </p>
            </div>

            {/* FAQ */}
            <FAQSection faqs={faqs} />

            {/* Author Box */}
            <AuthorBox />

            {/* CTA */}
            <div className="mt-12 text-center p-8 bg-gradient-to-br from-vizon/10 to-vizon/5 rounded-lg">
              <h3 className="text-2xl font-bold text-brown mb-4">
                Bruksizm Tedavisi Hakkında Bilgi Alın
              </h3>
              <p className="text-brown/70 mb-6">
                Çene ağrınızı ve diş aşınmalarını durdurmak için randevu oluşturun
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
        "Bruksizm Tedavisi",
        "Diş sıkma ve gıcırdatma tedavisi için masseter botoksu ve gece plağı uygulamaları."
      )} />
      <JsonLd data={schemas.faqPage(faqs)} />
    </main>
  )
}
