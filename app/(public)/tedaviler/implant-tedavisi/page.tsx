import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AuthorBox } from "@/components/treatment/author-box"
import { FAQSection } from "@/components/treatment/faq-section"
import { JsonLd, schemas } from "@/components/seo/json-ld"
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Lüleburgaz İmplant Tedavisi | Dt. Emrecan Eren",
  description: "Lüleburgaz'da implant tedavisi. Eksik dişleriniz için kalıcı çözüm. 3D planlama, mikroskop destekli cerrahi. Dt. Emrecan Eren ile randevu alın.",
  keywords: ["Lüleburgaz implant", "Lüleburgaz diş implantı", "implant fiyatları Lüleburgaz"],
}

const faqs = [
  {
    question: "İmplant tedavisi acıtır mı?",
    answer: "İmplant tedavisi lokal anestezi altında yapılır, işlem sırasında ağrı hissetmezsiniz. İşlem sonrası hafif rahatsızlık normal ağrı kesicilerle kontrol altına alınabilir. Mikroskop destekli cerrahi tekniklerimiz sayesinde minimal travma ile işlem gerçekleştirilir."
  },
  {
    question: "İmplant tedavisi ne kadar sürer?",
    answer: "İmplant tedavisi genellikle 2-6 ay arasında tamamlanır. İlk aşamada implant yerleştirilir ve kemikle kaynaşması (osseointegrasyon) beklenir. Bu süre alt çenede 2-3 ay, üst çenede 3-6 ay sürebilir. Kemik kalitesi ve hastanın genel sağlık durumu bu süreyi etkileyebilir."
  },
  {
    question: "İmplant tedavisi için yaş sınırı var mı?",
    answer: "İmplant tedavisi için üst yaş sınırı yoktur. Alt yaş sınırı ise çene kemiklerinin gelişiminin tamamlanması gerektiğinden, genellikle 18 yaş civarındadır. Genel sağlık durumunuz uygunsa, ileri yaşlarda da implant tedavisi güvenle uygulanabilir."
  },
  {
    question: "İmplant tedavisinden sonra ne zaman çiğneme yapabilirim?",
    answer: "İmplant yerleştirildikten sonra ilk 24-48 saat yumuşak gıdalar tüketilmelidir. İyileşme sürecinde (2-6 ay) implant bölgesine aşırı yük binmemelidir. Üst yapı (kron) takıldıktan sonra normal çiğneme fonksiyonunuza kavuşursunuz. Detaylı talimatlar tedavi sonrası size verilecektir."
  },
  {
    question: "İmplantların ömrü ne kadardır?",
    answer: "Doğru bakım ve düzenli kontroller ile implantlar ömür boyu kullanılabilir. Araştırmalar, 10 yıllık başarı oranının %95'in üzerinde olduğunu göstermektedir. Ağız hijyeni, sigara kullanımı ve genel sağlık durumu implant ömrünü etkileyen faktörlerdir."
  }
]

export default function ImplantTreatmentPage() {
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
            <span className="text-brown">İmplant Tedavisi</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl">
            İmplant Tedavisi
          </h1>
          <p className="mt-4 text-xl text-brown/70">
            Eksik dişlerin kalıcı ve sağlıklı çözümü: 3D planlama ile hassas implant uygulamaları
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
                İmplant tedavisi, eksik dişlerin yerine çene kemiğine yerleştirilen titanyum yapay köklerle 
                doğal ve kalıcı fonksiyon kazandırma işlemidir. Kliniğimizde <strong>3D tomografi ve dijital planlama</strong> 
                ile implantın en ideal açı ve konuma yerleştirilmesini sağlıyoruz.
              </p>
              <p className="text-brown/80 leading-relaxed">
                Modern implantoloji teknikleri ve mikroskop destekli cerrahi yaklaşımımız ile minimal invaziv, 
                güvenli ve başarılı implant tedavileri sunuyoruz.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                İmplant Tedavisi Çözümlerimiz
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-vizon" />
                      İmplant Tedavisi
                    </CardTitle>
                    <CardDescription>
                      Kaybedilen dişlerin yerine, çene kemiğine yerleştirilen titanyum kökler ile doğal ve kalıcı fonksiyon kazandırma.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-brown/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-vizon" />
                        Tek veya çoklu diş eksikliklerinde uygulanır
                      </li>
                      <li className="flex items-center gap-2 text-sm text-brown/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-vizon" />
                        Ömür boyu kullanılabilir
                      </li>
                      <li className="flex items-center gap-2 text-sm text-brown/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-vizon" />
                        Doğal diş fonksiyonu sağlar
                      </li>
                      <li className="flex items-center gap-2 text-sm text-brown/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-vizon" />
                        Komşu dişlere zarar vermez
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-vizon" />
                      Rehberli İmplant Cerrahisi (3D)
                    </CardTitle>
                    <CardDescription>
                      3D tomografi ve dijital planlama ile implantın en ideal açı ve konuma, cerrahi bir rehber eşliğinde yerleştirilmesi.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-brown/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-vizon" />
                        Milimetrik hassasiyet
                      </li>
                      <li className="flex items-center gap-2 text-sm text-brown/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-vizon" />
                        Minimal cerrahi travma
                      </li>
                      <li className="flex items-center gap-2 text-sm text-brown/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-vizon" />
                        Daha hızlı iyileşme
                      </li>
                      <li className="flex items-center gap-2 text-sm text-brown/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-vizon" />
                        Yüksek başarı oranı
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* What is Implant */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                Diş İmplantı Nedir?
              </h2>
              <p className="text-brown/80 leading-relaxed mb-4">
                Diş implantı, eksik dişlerin yerine yerleştirilen titanyum yapay diş köküdür. 
                İmplant, çene kemiğine cerrahi olarak yerleştirilir ve kemikle kaynaşarak 
                (osseointegrasyon) sağlam bir temel oluşturur. Bu temel üzerine kron, köprü 
                veya protez gibi üst yapılar monte edilir.
              </p>
              <p className="text-brown/80 leading-relaxed">
                Modern implantoloji, eksik diş problemine en kalıcı ve estetik çözümü sunar. 
                Doğru bakım ile implantlar ömür boyu kullanılabilir ve doğal dişlerinizle 
                aynı fonksiyonu görür.
              </p>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                İmplant Tedavisi Nasıl Uygulanır?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-grey/30">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-vizon text-cream font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown mb-2">Detaylı Muayene ve Planlama</h3>
                    <p className="text-brown/70">
                      3D CBCT tomografi ile çene kemiği yapısı, sinir ve damar konumları analiz edilir. 
                      Dijital planlama yazılımı ile implant pozisyonu milimetrik hassasiyetle belirlenir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-grey/30">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-vizon text-cream font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown mb-2">İmplant Yerleştirme Cerrahisi</h3>
                    <p className="text-brown/70">
                      Lokal anestezi altında, çene kemiğine titanyum implant yerleştirilir. 
                      Mikroskop destekli cerrahi ile minimal invaziv yaklaşım uygulanır. 
                      İşlem genellikle 30-60 dakika sürer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-grey/30">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-vizon text-cream font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown mb-2">İyileşme ve Osseointegrasyon</h3>
                    <p className="text-brown/70">
                      İmplantın kemikle kaynaşması için 2-6 ay beklenir. Bu süreçte düzenli kontroller yapılır. 
                      Gerekirse geçici protez kullanılabilir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-grey/30">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-vizon text-cream font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown mb-2">Üst Yapı (Kron) Takılması</h3>
                    <p className="text-brown/70">
                      İmplant üzerine özel olarak tasarlanan porselen veya zirkonyum kron yerleştirilir. 
                      Estetik ve fonksiyon açısından doğal dişlerden ayırt edilemez sonuç elde edilir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Indications */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brown mb-6">
                İmplant Tedavisi Kimler İçin Uygundur?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-vizon flex-shrink-0 mt-1" />
                  <span className="text-brown/80">Tek diş eksikliği olan hastalar</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-vizon flex-shrink-0 mt-1" />
                  <span className="text-brown/80">Çoklu diş eksikliği olan hastalar</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-vizon flex-shrink-0 mt-1" />
                  <span className="text-brown/80">Tam dişsiz (ağızda hiç diş yok) hastalar</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-vizon flex-shrink-0 mt-1" />
                  <span className="text-brown/80">Hareketli protez kullanmak istemeyen hastalar</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-vizon flex-shrink-0 mt-1" />
                  <span className="text-brown/80">Yeterli kemik yapısına sahip hastalar</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-vizon flex-shrink-0 mt-1" />
                  <span className="text-brown/80">Genel sağlık durumu uygun olan hastalar</span>
                </div>
              </div>
            </div>

            {/* Pricing Explanation */}
            <div className="mb-12 p-6 bg-vizon/5 rounded-lg border-2 border-vizon/30">
              <h2 className="text-2xl font-bold text-brown mb-4">
                İmplant Fiyatları Hakkında
              </h2>
              <p className="text-brown/80 leading-relaxed mb-4">
                İmplant tedavisi fiyatları, kullanılan implant markası, kemik yapısı, ek işlemler 
                (kemik grefti, sinüs lifting vb.) ve üst yapı materyaline göre değişiklik gösterir. 
                Her hastanın durumu farklı olduğundan, net fiyat bilgisi ancak detaylı muayene 
                sonrası verilebilir.
              </p>
              <p className="text-brown/80 leading-relaxed">
                Kliniğimizde dünya standartlarında implant sistemleri kullanılmaktadır. 
                Detaylı bilgi ve kişiye özel fiyat teklifi için randevu alabilirsiniz.
              </p>
            </div>

            {/* FAQ */}
            <FAQSection faqs={faqs} />

            {/* Author Box */}
            <AuthorBox />

            {/* CTA */}
            <div className="mt-12 text-center p-8 bg-gradient-to-br from-vizon/10 to-vizon/5 rounded-lg">
              <h3 className="text-2xl font-bold text-brown mb-4">
                İmplant Tedavisi Hakkında Detaylı Bilgi Alın
              </h3>
              <p className="text-brown/70 mb-6">
                Kişiye özel tedavi planı ve fiyat bilgisi için randevu oluşturun
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
        "İmplant Tedavisi",
        "Eksik dişlerin yerine titanyum vida ile yapay diş kökü yerleştirilmesi işlemidir."
      )} />
      <JsonLd data={schemas.faqPage(faqs)} />
    </main>
  )
}
