import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthorBox } from "@/components/treatment/author-box"
import { FAQSection } from "@/components/treatment/faq-section"
import { JsonLd, schemas } from "@/components/seo/json-ld"
import { ArrowRight, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Pedodonti - Çocuk Diş Hekimliği | Dt. Emrecan Eren",
  description: "Lüleburgaz'da çocuk diş hekimliği. Süt dişi tedavisi, flor uygulaması, fissür örtücü. Koruyucu diş hekimliği. Randevu alın.",
  keywords: ["çocuk diş hekimi Lüleburgaz", "süt dişi tedavisi", "flor uygulaması", "pedodonti"],
}

const services = [
  {
    title: "Çocuk Diş Hekimliği",
    description: "Süt ve daimi dişlerin tedavileri, travma müdahaleleri ve takibi için çocuk psikolojisine uygun yaklaşım.",
    features: [
      "Çocuk psikolojisine uygun yaklaşım",
      "Oyunlaştırılmış tedavi ortamı",
      "Süt ve daimi diş tedavileri",
      "Travma müdahaleleri",
      "Düzenli takip programı",
      "Ebeveyn eğitimi"
    ]
  },
  {
    title: "Koruyucu Diş Hekimliği (Flor, Fissür)",
    description: "Diş çürüklerini önlemek amacıyla dişlere topikal flor ve azı dişlerine fissür örtücü (cila) uygulamaları.",
    features: [
      "Topikal flor uygulaması",
      "Fissür örtücü (cila) uygulaması",
      "Çürük önleme",
      "Ağrısız işlem",
      "Hızlı uygulama",
      "Uzun süreli koruma"
    ]
  }
]

const faqs = [
  {
    question: "Çocuğumu ilk kez ne zaman diş hekimine götürmeliyim?",
    answer: "İlk diş çıktığında veya en geç 1 yaşında çocuğunuzu diş hekimine götürmelisiniz. Erken başlayan kontroller, çocuğun diş hekimine alışmasını sağlar ve olası problemlerin erken teşhisini mümkün kılar."
  },
  {
    question: "Süt dişleri nasılsa dökülecek, tedavi etmek gerekli mi?",
    answer: "Evet, süt dişlerinin tedavisi çok önemlidir. Süt dişleri çiğneme, konuşma ve alt çene gelişimi için kritiktir. Ayrıca alttan gelecek daimi dişlere yer tutucu görevi görür. Erken kaybedilen süt dişleri, daimi dişlerde çapraşıklığa neden olabilir."
  },
  {
    question: "Flor uygulaması zararlı mıdır?",
    answer: "Profesyonel flor uygulaması güvenlidir ve zararlı değildir. Topikal (dış) flor uygulaması, diş minesini güçlendirir ve çürüklere karşı direnci artırır. Uygun dozda ve profesyonel kontrol altında yapılan flor uygulamaları tamamen güvenlidir."
  },
  {
    question: "Fissür örtücü nedir ve ne zaman yapılmalıdır?",
    answer: "Fissür örtücü, azı dişlerinin çiğneme yüzeyindeki derin olukları kapatan koruyucu bir uygulamadır. Daimi azı dişleri sürdükten hemen sonra (6-7 yaş ve 11-13 yaş) uygulanmalıdır. Çürük oluşumunu %80'e varan oranda önler."
  },
  {
    question: "Çocuğum diş hekiminden korkuyor, ne yapmalıyım?",
    answer: "Çocuğunuzu pozitif bir dille hazırlayın, asla korkutmayın. 'Ağrı olmayacak' yerine 'Dişlerini sayacağız' gibi ifadeler kullanın. Kliniğimizde çocuk psikolojisine uygun yaklaşım ve oyunlaştırılmış tedavi ortamı ile çocukların korkusunu minimuma indiriyoruz."
  }
]

export default function PedodonticsPage() {
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
            <span className="text-brown">Pedodonti (Çocuk Diş Hekimliği)</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl">
            Pedodonti (Çocuk Diş Hekimliği)
          </h1>
          <p className="mt-4 text-xl text-brown/70">
            Çocuklarınız İçin Nazik Yaklaşım ve Koruyucu Hekimlik Felsefesi
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
                Pedodonti, çocukların ağız ve diş sağlığını koruyan ve tedavi eden diş hekimliği dalıdır. 
                Kliniğimizde, çocuklarınıza <strong>nazik ve anlayışlı bir yaklaşım</strong> ile yaklaşıyor, 
                diş hekimi korkusunu minimuma indirmeyi hedefliyoruz. <strong>Koruyucu Hekimlik</strong> 
                felsefemiz ile çürük oluşmadan önlemeye odaklanıyoruz.
              </p>
              <p className="text-brown/80 leading-relaxed">
                Çocukluk döneminde kazanılan olumlu diş hekimi deneyimleri, ömür boyu sürecek sağlıklı 
                ağız bakımı alışkanlıklarının temelini oluşturur. Oyunlaştırılmış tedavi ortamımız ve 
                çocuk psikolojisine uygun yaklaşımımız ile çocuklarınızın diş hekimine gelmekten keyif 
                almasını sağlıyoruz.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                Çocuklar İçin Koruyucu ve Tedavi Edici Hizmetler
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

            {/* Preventive Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                Koruyucu Diş Hekimliği Neden Önemli?
              </h2>
              <p className="text-brown/80 leading-relaxed mb-4">
                Koruyucu diş hekimliği, çürük ve diş eti hastalıklarını tedavi etmek yerine önlemeye 
                odaklanır. Bu yaklaşım hem çocuğunuzun konforunu artırır hem de uzun vadede tedavi 
                maliyetlerini azaltır.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-grey/30">
                  <h3 className="font-semibold text-brown mb-2">Flor Uygulaması</h3>
                  <p className="text-sm text-brown/70">
                    Diş minesini güçlendirir, çürüklere karşı direnci artırır. 6 ayda bir uygulanması önerilir.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-grey/30">
                  <h3 className="font-semibold text-brown mb-2">Fissür Örtücü</h3>
                  <p className="text-sm text-brown/70">
                    Azı dişlerinin derin oluklarını kapatarak çürük oluşumunu %80 oranında önler.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-grey/30">
                  <h3 className="font-semibold text-brown mb-2">Düzenli Kontroller</h3>
                  <p className="text-sm text-brown/70">
                    6 ayda bir yapılan kontroller ile erken teşhis ve minimal müdahale sağlanır.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-grey/30">
                  <h3 className="font-semibold text-brown mb-2">Eğitim</h3>
                  <p className="text-sm text-brown/70">
                    Doğru diş fırçalama ve beslenme alışkanlıkları konusunda çocuk ve ebeveyn eğitimi.
                  </p>
                </div>
              </div>
            </div>

            {/* Tips for Parents */}
            <div className="mb-12 p-6 bg-vizon/5 rounded-lg border-2 border-vizon/30">
              <h2 className="text-2xl font-bold text-brown mb-4">
                Ebeveynler İçin Öneriler
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span>İlk diş çıktığında diş fırçalamaya başlayın</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span>Şekerli ve asitli içecekleri sınırlayın</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span>Biberon çürüğünden korunmak için yatarken biberon vermeyin</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span>Diş hekimi ziyaretini pozitif bir deneyim olarak sunun</span>
                </li>
                <li className="flex items-start gap-2 text-brown/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-vizon mt-2 flex-shrink-0" />
                  <span>6 ayda bir düzenli kontrollere getirin</span>
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
                Çocuğunuz İçin Randevu Alın
              </h3>
              <p className="text-brown/70 mb-6">
                Nazik yaklaşım ve koruyucu diş hekimliği için randevu oluşturun
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
        "Pedodonti - Çocuk Diş Hekimliği",
        "Çocuklar için koruyucu ve tedavi edici diş hekimliği hizmetleri."
      )} />
      <JsonLd data={schemas.faqPage(faqs)} />
    </main>
  )
}
