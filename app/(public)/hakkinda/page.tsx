import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hakkımızda | Dt. Emrecan Eren Polikliniği - Lüleburgaz",
  description: "Dt. Emrecan Eren Polikliniği: Butik klinik anlayışı, dijital diş hekimliği ve hasta odaklı yaklaşım. Kırklareli Diş Hekimleri Birliği yönetim kurulu üyesi.",
  keywords: ["Dt. Emrecan Eren", "Lüleburgaz poliklinik", "dijital diş hekimliği", "3D tarama", "klinik içi üretim"],
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl mb-6">
            Hakkımızda
          </h1>
          <p className="text-xl text-brown/70">
            Size adanmış bir deneyim, mükemmelliği standart haline getiren bir yaklaşım
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-2 bg-gradient-to-b from-white to-cream/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown mb-6">
            Polikliniğimizin Felsefesi: Size Adanmış Bir Deneyim
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-brown/80 leading-relaxed mb-4">
              Dt. Emrecan Eren Polikliniği, standart özel sektör kurallarının ötesine geçme hayaliyle kuruldu. 
              İlk <strong>"butik klinik"</strong> yapımızdaki temel amacımız, hastalarımıza daha fazla ilgi 
              gösterebildiğimiz, en iyi şartları sunduğumuz ve her zaman 'daha iyi' olanı hedeflediğimiz bir 
              yapı oluşturmaktı.
            </p>
            <p className="text-brown/80 leading-relaxed mb-4">
              Hastalarımızın yoğun ilgisi ve onlara daha da iyi imkanlar sunma arzumuz, bizi yeni yerimizde 
              poliklinik olarak büyümeye teşvik etti.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Polikliniğimizin mimarisi de bu felsefenin fiziksel bir yansımasıdır. Standart klinik algısının 
              ötesinde, titizlikle planlanmış hijyen standartlarını, profesyonel bir sükunet ve hasta odaklı 
              bir tasarımla birleştirdik. Amacımız, modern diş hekimliğinin tüm imkanlarını sunarken, kendinizi 
              anlaşıldığınız ve güvende hissettiğiniz bir tedavi alanı yaratmaktır.
            </p>
          </div>
        </div>
      </section>

      {/* Excellence Philosophy */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown mb-6">
            Felsefemiz: Mükemmellik Standarttır
          </h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-brown/80 leading-relaxed mb-4">
              Bizim için teknoloji, <strong>"Mükemmellik, Detaylarda Gizlidir"</strong> sloganımızın bir gereğidir.
            </p>
            <p className="text-brown/80 leading-relaxed mb-4">
              Diş hekimliğinde mükemmelliğin bir lüks değil, standart olduğuna inanıyoruz. Sunduğumuz her 
              tedavideki hassasiyet, bizim için bir çalışma prensibidir. Mikroskop, 3D tarayıcılar veya klinik 
              içi üretim cihazları (printer) birer 'ekstra' değil, bu hassasiyete ulaşmak için kullandığımız 
              standart ekipmanlarımızdır.
            </p>
          </div>

          {/* Digital Workflow */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-brown mb-6">Dijital Akış</h3>
            <p className="text-brown/80 leading-relaxed mb-6">
              Bu dijital akış, kliniğimizde süreci baştan sona dijital olarak yönetmemizi sağlar:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-vizon/5 border border-vizon/10 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-vizon text-cream font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brown mb-2">3D Tarama</h4>
                  <p className="text-brown/70">
                    Ağız içi 3D tarayıcılar ile dakikalar içinde dijital ölçünüzü alıyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-vizon/5 border border-vizon/10 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-vizon text-cream font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brown mb-2">Dijital Tasarım</h4>
                  <p className="text-brown/70">
                    Gülüşünüzü, kliniğimizde, sizinle birlikte milimetrik olarak tasarlıyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-vizon/5 border border-vizon/10 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-vizon text-cream font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brown mb-2">Klinik İçi Üretim</h4>
                  <p className="text-brown/70">
                    Tasarımı onaylanan biyouyumlu restorasyonlarınızı (dişlerinizi) kliniğimizde üreterek 
                    tedavi sürecinizi günler değil, saatler içinde tamamlıyoruz.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-brown/80 leading-relaxed mt-6">
              Bu yaklaşım size sadece hız değil; aynı zamanda hatasız, estetik ve vücudunuzla tam uyumlu 
              kalıcı çözümler sunar.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-brown mb-8">
            Kurucu Hekimimiz: Dt. Emrecan Eren
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/dt-emrecan-eren.png"
                  alt="Dt. Emrecan Eren - Kurucu Diş Hekimi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-brown/80 leading-relaxed mb-4">
                  Yakın Doğu Üniversitesi Diş Hekimliği Fakültesi'nden <strong>6 Temmuz 2015</strong>'te mezun oldu. 
                  2015-2016 yılları arasında <strong>Hakkari Dağ Komanda Tugayı'nda Diş Hekimi</strong> olarak görev 
                  yaptı ve bu vatan görevi sırasında binlerce askerimizin sağlığına kavuşmasına yardımcı olma şansı buldu.
                </p>
                <p className="text-brown/80 leading-relaxed mb-4">
                  1.5 yıllık özel sektör tecrübesinin ardından, 8 yıl boyunca "daha iyi ve daha ilgili" bir diş 
                  hekimliği felsefesiyle yöneteceği <strong>"Emrecan Eren Butik Diş Kliniği"</strong>ni kurdu. Bu 
                  butik klinikte edindiği tecrübe ve hastalarının talepleri doğrultusunda, daha fazla hastaya aynı 
                  yüksek standartlarda hizmet verebilmek için yeni polikliniğini hayata geçirdi.
                </p>
                <p className="text-brown/80 leading-relaxed font-semibold">
                  Dt. Emrecan Eren, diş hekimliğini <strong>"bilim, sanat ve empati"</strong>nin birleşimi olarak görmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown mb-8">
            Ekibimiz ve Mesleki Yaklaşımımız
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-brown/80 leading-relaxed mb-6">
              Dt. Emrecan Eren Polikliniği'nde, size en iyi hizmeti sunma taahhüdümüzün arkasında güçlü bir ekip ve net profesyonel ilkeler bulunmaktadır.
            </p>
            
            <p className="text-brown/80 leading-relaxed mb-6">
              Dt. Emrecan Eren liderliğinde, <strong>Dt. Barkın Ergin</strong> ve <strong>Dt. Mehmet Varyemez</strong>'in de dahil olduğu 3 diş hekimi ve 6 kişilik uzman destek kadromuzla (toplam 9 kişi) hizmet veriyoruz. Bizim için her hastamıza aynı yüksek kalitede, kişisel ve detaylı hizmeti sunabilmek esastır.
            </p>
            
            <p className="text-brown/80 leading-relaxed mb-6">
              Bu sorumluluk anlayışıyla, Dt. Emrecan Eren, <strong>Kırklareli Diş Hekimleri Birliği Yönetim Kurulu</strong>'nda aktif görev almaktadır. Bu rol, kliniğimizin daima en güncel mesleki standartlara ve etik ilkelere tam bağlılıkla çalışmasının bir güvencesidir.
            </p>
            
            <p className="text-brown/80 leading-relaxed mb-6">
              Klinik felsefemiz, geçici trendlere değil, <strong>"kanıta dayalı" (evidence-based)</strong> tıp ilkelerine dayanır. Dt. Eren, özellikle <strong>3D dijital diş hekimliği protokolleri</strong> üzerine yoğunlaşmakta, bu konudaki güncel araştırmaları ve eğitimleri ekibimize hızla entegre etmektedir.
            </p>
            
            <p className="text-brown/80 leading-relaxed">
              Amacımız, uluslararası gelişmeleri sürekli takip ederek hastalarımıza sadece bilimsel olarak etkinliği kanıtlanmış, en güncel ve en doğru tedavi seçeneklerini sunmaktır.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brown mb-6">
            Polikliniğimizi Ziyaret Edin
          </h2>
          <p className="text-lg text-brown/70 mb-8">
            Size adanmış deneyimimizi yaşamak ve detaylı bilgi almak için iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/iletisim">Randevu Al</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/ekibimiz">Ekibimizi Tanıyın</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "@id": "https://www.emrecaneren.com/hakkinda#clinic",
            "name": "Dt. Emrecan Eren Polikliniği",
            "founder": {
              "@type": "Physician",
              "name": "Dt. Emrecan Eren",
              "jobTitle": "Diş Hekimi",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Yakın Doğu Üniversitesi Diş Hekimliği Fakültesi"
              },
              "memberOf": {
                "@type": "Organization",
                "name": "Kırklareli Diş Hekimleri Birliği"
              }
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lüleburgaz",
              "addressRegion": "Kırklareli",
              "addressCountry": "TR"
            },
            "numberOfEmployees": 9,
            "url": "https://www.emrecaneren.com/hakkinda"
          })
        }}
      />
    </main>
  )
}
