"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Sparkles, Microscope, Drill, Smile, Stethoscope, Scissors, Zap, Heart, Shield } from "lucide-react"

// Silo kategorileri
const categories = [
  { id: "estetik", name: "Estetik Diş Hekimliği", icon: Sparkles, color: "bg-pink-500/10 text-pink-600" },
  { id: "implant", name: "İmplant Tedavisi", icon: Drill, color: "bg-blue-500/10 text-blue-600" },
  { id: "mikroskopik", name: "Mikroskopik Tedavi", icon: Microscope, color: "bg-purple-500/10 text-purple-600" },
  { id: "cerrahi", name: "Ağız ve Çene Cerrahisi", icon: Scissors, color: "bg-red-500/10 text-red-600" },
  { id: "ortodonti", name: "Ortodonti (Şeffaf Plak)", icon: Smile, color: "bg-green-500/10 text-green-600" },
  { id: "periodontoloji", name: "Diş Eti Tedavisi", icon: Heart, color: "bg-rose-500/10 text-rose-600" },
  { id: "protetik", name: "Protetik Tedavi", icon: Zap, color: "bg-amber-500/10 text-amber-600" },
  { id: "pedodonti", name: "Çocuk Diş Hekimliği", icon: Heart, color: "bg-cyan-500/10 text-cyan-600" },
  { id: "bruksizm", name: "Bruksizm (Diş Sıkma)", icon: Shield, color: "bg-indigo-500/10 text-indigo-600" },
]

// 30 blog yazısı - Silo yapısına göre gruplandırılmış
const blogPosts = [
  // Silo 1: Estetik Diş Hekimliği
  {
    category: "estetik",
    title: "Porselen Lamina mı, Kompozit Lamina (Bonding) mi? Karar Verme Rehberi",
    description: "İki tedavinin estetik, dayanıklılık, seans süresi ve maliyet açısından karşılaştırması.",
    href: "/dis-sagligi-rehberi/porselen-lamina-kompozit-lamina-karsilastirma",
    pillarPage: "/tedaviler/estetik-dis-hekimligi",
  },
  {
    category: "estetik",
    title: "Diş Beyazlatma Sonrası İlk 48 Saat: Beyaz Diyet ve Bakım Önerileri",
    description: "Beyazlatmanın kalıcılığını artırmak için beslenme ve bakım önerileri.",
    href: "/dis-sagligi-rehberi/dis-beyazlatma-sonrasi-bakim",
    pillarPage: "/tedaviler/estetik-dis-hekimligi",
  },
  {
    category: "estetik",
    title: "Zirkonyum Kaplama Rengi Nasıl Seçilir? Doğal Görünüm İçin 5 İpucu",
    description: "Renk skalası, doğal diş uyumu ve dijital tasarımın rolü.",
    href: "/dis-sagligi-rehberi/zirkonyum-kaplama-renk-secimi",
    pillarPage: "/tedaviler/estetik-dis-hekimligi",
  },
  {
    category: "estetik",
    title: "Gülüş Tasarımı Sadece Estetik midir? Sağlıklı Gülüşün Temel İlkeleri",
    description: "Diş eti sağlığı, çene fonksiyonu ve bütünsel yaklaşımın önemi.",
    href: "/dis-sagligi-rehberi/gulus-tasarimi-temel-ilkeler",
    pillarPage: "/tedaviler/estetik-dis-hekimligi",
  },

  // Silo 2: İmplant Tedavisi
  {
    category: "implant",
    title: "İmplant Acıtır mı? Cerrahi ve İyileşme Sürecinde Sizi Neler Bekler?",
    description: "Anestezi, ağrı yönetimi ve iyileşme süreci hakkında bilmeniz gerekenler.",
    href: "/dis-sagligi-rehberi/implant-acitir-mi",
    pillarPage: "/tedaviler/implant-tedavisi",
  },
  {
    category: "implant",
    title: "Kemik Tozu (Greft) Nedir? Her İmplant İçin Gerekli midir?",
    description: "Kemik yetersizliği, sinüs lifting ve greft uygulamasının rolü.",
    href: "/dis-sagligi-rehberi/kemik-tozu-greft-nedir",
    pillarPage: "/tedaviler/implant-tedavisi",
  },
  {
    category: "implant",
    title: "Rehberli (3D) İmplant Cerrahisi Nedir? Geleneksel Yöntemden Farkları",
    description: "3D planlama, cerrahi rehber ve hasta avantajları.",
    href: "/dis-sagligi-rehberi/3d-rehberli-implant-cerrahisi",
    pillarPage: "/tedaviler/implant-tedavisi",
  },
  {
    category: "implant",
    title: "İmplant Tedavisi Sonrası Beslenme Rehberi: İlk Hafta Neler Yenmeli?",
    description: "İyileşme sürecinde beslenme önerileri ve kaçınılması gerekenler.",
    href: "/dis-sagligi-rehberi/implant-sonrasi-beslenme",
    pillarPage: "/tedaviler/implant-tedavisi",
  },

  // Silo 3: Mikroskopik Diş Tedavisi
  {
    category: "mikroskopik",
    title: "Kanal Tedavisi Sonrası Ağrı Normal mi? İyileşme ve Uyarı Sinyalleri",
    description: "Normal hassasiyet ile enfeksiyon belirtileri arasındaki farklar.",
    href: "/dis-sagligi-rehberi/kanal-tedavisi-sonrasi-agri",
    pillarPage: "/tedaviler/mikroskopik-dis-tedavisi",
  },
  {
    category: "mikroskopik",
    title: "Mikroskop Destekli Kanal Tedavisinin Başarı Oranı Neden Daha Yüksektir?",
    description: "25x büyütme, ekstra kanal tespiti ve yeniden tedavideki rolü.",
    href: "/dis-sagligi-rehberi/mikroskop-destekli-kanal-tedavisi",
    pillarPage: "/tedaviler/mikroskopik-dis-tedavisi",
  },
  {
    category: "mikroskopik",
    title: "Amalgam (Siyah) Dolgu mu, Kompozit (Beyaz) Dolgu mu? Bilimsel Karşılaştırma",
    description: "Estetik, dayanıklılık ve biyouyumluluk açısından tarafsız analiz.",
    href: "/dis-sagligi-rehberi/amalgam-kompozit-dolgu-karsilastirma",
    pillarPage: "/tedaviler/mikroskopik-dis-tedavisi",
  },

  // Silo 4: Ağız, Diş ve Çene Cerrahisi
  {
    category: "cerrahi",
    title: "Gömülü 20 Yaş Dişi Çekimi Sonrası Beslenme ve Bakım: İlk 72 Saat",
    description: "Şişlik yönetimi, kanama kontrolü ve dry socket önleme.",
    href: "/dis-sagligi-rehberi/20-yas-disi-cekimi-sonrasi-bakim",
    pillarPage: "/tedaviler/agiz-dis-cene-cerrahisi",
  },
  {
    category: "cerrahi",
    title: "Her 20 Yaş Dişi Çekilmeli mi? Hangi Durumlarda Cerrahi Gerekir?",
    description: "Asemptomatik dişlerin takibi ve çekim kararının verilmesi.",
    href: "/dis-sagligi-rehberi/20-yas-disi-cekilmeli-mi",
    pillarPage: "/tedaviler/agiz-dis-cene-cerrahisi",
  },
  {
    category: "cerrahi",
    title: "Cerrahi Diş Çekimi ve Normal Diş Çekimi Arasındaki Farklar",
    description: "Prosedür ve iyileşme sürelerindeki farklar.",
    href: "/dis-sagligi-rehberi/cerrahi-dis-cekimi-farklari",
    pillarPage: "/tedaviler/agiz-dis-cene-cerrahisi",
  },

  // Silo 5: Ortodonti (Şeffaf Plak)
  {
    category: "ortodonti",
    title: "Şeffaf Plak Tedavisi mi, Geleneksel Diş Teli mi? Hangisi Uygun?",
    description: "Estetik, konfor, hijyen ve maliyet açısından objektif karşılaştırma.",
    href: "/dis-sagligi-rehberi/seffaf-plak-dis-teli-karsilastirma",
    pillarPage: "/tedaviler/ortodonti-seffaf-plak",
  },
  {
    category: "ortodonti",
    title: "Şeffaf Plak Tedavisinde Ataşman Nedir, Ne İşe Yarar?",
    description: "Diş hareketini optimize eden kompozit eklentilerin rolü.",
    href: "/dis-sagligi-rehberi/seffaf-plak-atasman-nedir",
    pillarPage: "/tedaviler/ortodonti-seffaf-plak",
  },

  // Silo 6: Periodontoloji (Diş Eti Tedavisi)
  {
    category: "periodontoloji",
    title: "Diş Eti Kanaması Neden Olur? Ciddi Bir Sorunun İlk Belirtisi mi?",
    description: "Gingivitis ve periodontitis arasındaki fark.",
    href: "/dis-sagligi-rehberi/dis-eti-kanamasi-nedenleri",
    pillarPage: "/tedaviler/periodontoloji-dis-eti-tedavisi",
  },
  {
    category: "periodontoloji",
    title: "Diş Taşı Temizliği (Detartraj) Dişe Zarar Verir mi? Yanlış Bilinen Gerçekler",
    description: "Mine çizme miti ve işlem sonrası hassasiyetin nedenleri.",
    href: "/dis-sagligi-rehberi/dis-tasi-temizligi-zarar-verir-mi",
    pillarPage: "/tedaviler/periodontoloji-dis-eti-tedavisi",
  },
  {
    category: "periodontoloji",
    title: "Küretaj (Derin Temizlik) Nedir? Diş Taşı Temizliğinden Farkı",
    description: "Periodontitis tedavisinde küretajın rolü ve işlem detayları.",
    href: "/dis-sagligi-rehberi/kuretaj-derin-temizlik-nedir",
    pillarPage: "/tedaviler/periodontoloji-dis-eti-tedavisi",
  },
  {
    category: "periodontoloji",
    title: "Pembe Estetik (Gingivektomi) Nedir? Gummy Smile Tedavisi",
    description: "Diş eti seviyelendirmesi ve gülüş estetiğindeki rolü.",
    href: "/dis-sagligi-rehberi/pembe-estetik-gingivektomi",
    pillarPage: "/tedaviler/periodontoloji-dis-eti-tedavisi",
  },

  // Silo 7: Protetik Diş Tedavisi
  {
    category: "protetik",
    title: "Zirkonyum Köprü mü, Porselen Köprü mü? Avantaj ve Dezavantajları",
    description: "Estetik, dayanıklılık ve biyouyumluluk karşılaştırması.",
    href: "/dis-sagligi-rehberi/zirkonyum-porselen-kopru-karsilastirma",
    pillarPage: "/tedaviler/protetik-dis-tedavisi",
  },
  {
    category: "protetik",
    title: "Hareketli Protez Kullanımına Alışma Süreci: İpuçları ve Öneriler",
    description: "İlk hafta zorlukları, vuruklar ve protez bakımı.",
    href: "/dis-sagligi-rehberi/hareketli-protez-alisma-sureci",
    pillarPage: "/tedaviler/protetik-dis-tedavisi",
  },

  // Silo 8: Pedodonti (Çocuk Diş Hekimliği)
  {
    category: "pedodonti",
    title: "Süt Dişleri Neden Önemlidir? Nasıl Olsa Düşecek Demeyin!",
    description: "Yer tutucu rolü, konuşma gelişimi ve enfeksiyon riski.",
    href: "/dis-sagligi-rehberi/sut-disleri-neden-onemli",
    pillarPage: "/tedaviler/pedodonti-cocuk-dis-hekimligi",
  },
  {
    category: "pedodonti",
    title: "Fissür Örtücü (Diş Aşısı) Nedir? Çocuğunuzu Çürükten Korur mu?",
    description: "6 yaş dişlerinin korunması ve bilimsel başarı oranı.",
    href: "/dis-sagligi-rehberi/fissur-ortucu-dis-asisi",
    pillarPage: "/tedaviler/pedodonti-cocuk-dis-hekimligi",
  },
  {
    category: "pedodonti",
    title: "Florür Uygulaması: Çocuklar İçin Güvenli mi, Gerekli mi?",
    description: "Profesyonel flor uygulamasının bilimsel faydaları ve güvenli dozajı.",
    href: "/dis-sagligi-rehberi/florur-uygulamasi-cocuklar",
    pillarPage: "/tedaviler/pedodonti-cocuk-dis-hekimligi",
  },

  // Silo 9: Bruksizm (Diş Sıkma)
  {
    category: "bruksizm",
    title: "Sabahları Çene Ağrısıyla mı Uyanıyorsunuz? Bruksizm Belirtileri",
    description: "Baş ağrısı, diş aşınması ve çene kilitlenmesi belirtileri.",
    href: "/dis-sagligi-rehberi/bruksizm-dis-sikma-belirtileri",
    pillarPage: "/tedaviler/dis-sikma-bruksizm-tedavisi",
  },
  {
    category: "bruksizm",
    title: "Masseter (Çene) Botoksu Sadece Estetik midir? Diş Sıkma Tedavisindeki Rolü",
    description: "Botoksun tedavi edici rolü ve gece plakları ile kombine kullanımı.",
    href: "/dis-sagligi-rehberi/masseter-cene-botoksu-dis-sikma",
    pillarPage: "/tedaviler/dis-sikma-bruksizm-tedavisi",
  },

  // Genel / Acil Durum İçerikleri
  {
    category: "genel",
    title: "Ağız Kokusu (Halitozis) Neden Olur ve Nasıl Kalıcı Olarak Giderilir?",
    description: "Hijyen, diş eti hastalıkları ve sistemik nedenlerin analizi.",
    href: "/dis-sagligi-rehberi/agiz-kokusu-nedenleri-cozumleri",
    pillarPage: "/tedaviler",
  },
  {
    category: "genel",
    title: "Acil Diş Ağrısı veya Kırık Durumunda Ne Yapılmalı?",
    description: "Lüleburgaz acil dişçi rehberi - İlk yardım ve öneriler.",
    href: "/dis-sagligi-rehberi/acil-dis-agrisi-kirik-ilk-yardim",
    pillarPage: "/iletisim",
  },
  {
    category: "genel",
    title: "Neden Kanıta Dayalı (Evidence-Based) Diş Hekimliği?",
    description: "Bilimsel protokollerin uzun vadeli hasta sağlığı için önemi.",
    href: "/dis-sagligi-rehberi/kanita-dayali-dis-hekimligi",
    pillarPage: "/hakkinda",
  },
]

export function BlogContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  
  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-cream to-vizon/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-vizon/10 rounded-full mb-6">
            <BookOpen className="h-6 w-6 text-vizon" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl mb-6">
            Diş Sağlığı Rehberi
          </h1>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto">
            Kanıta dayalı, uzman onaylı bilgilerle diş sağlığınız hakkında doğru kararlar alın. 
            Dt. Emrecan Eren ve ekibinden profesyonel rehberler.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b border-brown/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brown mb-6">Kategoriler</h2>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === "all" 
                  ? "bg-brown text-cream" 
                  : "bg-cream border border-brown/20 text-brown hover:bg-brown/5"
              }`}
            >
              Tümü ({blogPosts.length})
            </button>
            {categories.map((category) => {
              const count = blogPosts.filter(p => p.category === category.id).length
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-brown text-cream"
                      : "bg-cream border border-brown/20 text-brown hover:bg-brown/5"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => {
              const category = categories.find(cat => cat.id === post.category)
              const CategoryIcon = category?.icon || BookOpen
              
              return (
                <Card key={post.href} className="hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col">
                  <CardHeader>
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${category?.color || 'bg-vizon/10'}`}>
                      <CategoryIcon className="h-6 w-6" />
                    </div>
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-vizon uppercase tracking-wider">
                        {category?.name || 'Genel'}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="text-brown/70 mb-4 flex-1">
                      {post.description}
                    </CardDescription>
                    <div className="flex items-center justify-between pt-4 border-t border-brown/10">
                      <Link href={post.href}>
                        <Button variant="link" className="p-0 h-auto text-vizon">
                          Devamını Oku <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                      <span className="text-xs text-brown/50">5 dk okuma</span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-vizon/5 to-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brown mb-6">
            Daha Fazla Bilgi İçin Uzmanlarımızla Görüşün
          </h2>
          <p className="text-lg text-brown/70 mb-8">
            Diş sağlığınız hakkında sorularınız mı var? Randevu alın, uzman ekibimiz size yardımcı olsun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/iletisim">Randevu Al</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/tedaviler">Tedavilerimiz</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": "https://www.emrecaneren.com/dis-sagligi-rehberi",
            "name": "Diş Sağlığı Rehberi - Dt. Emrecan Eren",
            "description": "Kanıta dayalı diş sağlığı bilgileri ve uzman tavsiyeleri",
            "publisher": {
              "@type": "Organization",
              "name": "Dt. Emrecan Eren Polikliniği",
              "url": "https://www.emrecaneren.com"
            },
            "blogPost": blogPosts.slice(0, 10).map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.description,
              "url": `https://www.emrecaneren.com${post.href}`,
              "author": {
                "@type": "Person",
                "name": "Dt. Emrecan Eren"
              }
            }))
          })
        }}
      />
    </>
  )
}
