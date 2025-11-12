import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { notFound } from "next/navigation"

// Blog yazıları metadata
const blogArticles: Record<string, {
  title: string
  description: string
  category: string
  author: string
  date: string
  readTime: string
  content: {
    intro: string
    sections: Array<{
      heading: string
      content: string
      list?: string[]
    }>
    conclusion: string
  }
  pillarPage: string
  relatedArticles: string[]
}> = {
  "implant-acitir-mi": {
    title: "İmplant Acıtır mı? Cerrahi ve İyileşme Sürecinde Sizi Neler Bekler?",
    description: "İmplant tedavisi sırasında ve sonrasında yaşanacak süreç hakkında merak ettikleriniz.",
    category: "İmplant Tedavisi",
    author: "Dt. Emrecan Eren",
    date: "10 Kasım 2025",
    readTime: "5 dk",
    content: {
      intro: "İmplant tedavisi düşünen birçok hastamızın en çok merak ettiği soru: 'İmplant acıtır mı?' Bu yazıda, implant cerrahisi sırasında ve sonrasında sizi bekleyen süreci, ağrı yönetimini ve iyileşme aşamalarını detaylı olarak açıklayacağız.",
      sections: [
        {
          heading: "İmplant Cerrahisi Sırasında Ağrı Hisseder miyim?",
          content: "İmplant cerrahisi lokal anestezi (uyuşturma) altında gerçekleştirilir. Modern anestezi teknikleri sayesinde işlem sırasında hiçbir ağrı hissetmezsiniz. Sadece hafif bir basınç hissi yaşayabilirsiniz, ancak bu rahatsız edici olmaz.",
          list: [
            "İşlem öncesi bölge tamamen uyuşturulur",
            "Anestezi etkisi 2-4 saat sürer",
            "Gerekirse ek uyuşturma yapılabilir",
            "İşlem boyunca konforunuz kontrol edilir"
          ]
        },
        {
          heading: "İşlem Sonrası İlk 24-48 Saat",
          content: "Anestezi etkisi geçtikten sonra hafif bir ağrı ve hassasiyet yaşanması normaldir. Bu ağrı genellikle diş çekiminden daha azdır ve ağrı kesicilerle kolayca kontrol edilebilir.",
          list: [
            "İlk 24 saat: Hafif-orta şiddette ağrı (ağrı kesici ile kontrol edilebilir)",
            "Şişlik: 2-3. günde pik yapar, 5-7 günde azalır",
            "Morarma: Bazı hastalarda görülebilir, 7-10 günde kaybolur",
            "Dikişler: 7-10 gün sonra alınır"
          ]
        },
        {
          heading: "İyileşme Süreci ve Beklentiler",
          content: "İmplant cerrahisi sonrası iyileşme süreci kişiden kişiye değişiklik gösterebilir, ancak genel olarak öngörülebilir bir süreçtir.",
          list: [
            "1. Hafta: Yumuşak doku iyileşmesi başlar",
            "2-4. Hafta: Şişlik ve hassasiyet tamamen geçer",
            "3-6. Ay: İmplant kemikle kaynaşır (osseointegrasyon)",
            "6. Ay sonrası: Üst yapı (diş) yerleştirilir"
          ]
        },
        {
          heading: "Ağrıyı Azaltmak İçin Öneriler",
          content: "İyileşme sürecini hızlandırmak ve ağrıyı minimize etmek için bazı basit önlemler alabilirsiniz:",
          list: [
            "Hekiminizin önerdiği ağrı kesicileri düzenli kullanın",
            "İlk 24 saat buz kompres uygulayın (20 dk açık, 20 dk kapalı)",
            "Başınızı yüksekte tutun (2-3 yastıkla uyuyun)",
            "Sıcak yiyecek ve içeceklerden kaçının",
            "Sigara ve alkol tüketmeyin",
            "Ağır egzersiz yapmayın"
          ]
        },
        {
          heading: "Ne Zaman Hekime Başvurmalısınız?",
          content: "Aşağıdaki durumlardan herhangi birini yaşarsanız, mutlaka kliniğimizle iletişime geçin:",
          list: [
            "Ağrı kesicilere rağmen şiddetli ağrı",
            "3 günden fazla süren kanama",
            "Yüksek ateş (38°C üzeri)",
            "İmplant bölgesinde aşırı şişlik veya akıntı",
            "Uyuşukluk hissinin 24 saatten fazla sürmesi"
          ]
        }
      ],
      conclusion: "İmplant tedavisi, modern diş hekimliğinin en başarılı tedavilerinden biridir. Doğru planlama, deneyimli eller ve hasta uyumu ile ağrı minimal düzeyde tutulabilir. Kliniğimizde 3D rehberli cerrahi tekniği kullanarak, daha az travmatik ve daha konforlu bir işlem süreci sağlıyoruz. İmplant tedavisi hakkında daha fazla bilgi almak veya randevu oluşturmak için bizimle iletişime geçebilirsiniz."
    },
    pillarPage: "/tedaviler/implant-tedavisi",
    relatedArticles: [
      "kemik-tozu-greft-nedir",
      "3d-rehberli-implant-cerrahisi",
      "implant-sonrasi-beslenme"
    ]
  },
  "dis-eti-kanamasi-nedenleri": {
    title: "Diş Eti Kanaması Neden Olur? Ciddi Bir Sorunun İlk Belirtisi mi?",
    description: "Diş eti kanamasının nedenleri, gingivitis ve periodontitis arasındaki farklar.",
    category: "Periodontoloji",
    author: "Dt. Barkın Ergin",
    date: "9 Kasım 2025",
    readTime: "4 dk",
    content: {
      intro: "Diş fırçalarken veya diş ipi kullanırken diş etlerinizin kanaması, göz ardı edilmemesi gereken önemli bir uyarı işaretidir. Bu yazıda, diş eti kanamasının nedenlerini, ne zaman ciddi bir sorun haline geldiğini ve nasıl önlenebileceğini açıklayacağız.",
      sections: [
        {
          heading: "Diş Eti Kanamasının Ana Nedenleri",
          content: "Diş eti kanaması genellikle diş eti iltihabının (gingivitis) bir belirtisidir. Ancak başka nedenleri de olabilir:",
          list: [
            "Yetersiz ağız hijyeni ve plak birikimi",
            "Sert veya yanlış diş fırçalama tekniği",
            "Diş taşı (tartar) oluşumu",
            "Hormonal değişiklikler (hamilelik, menopoz)",
            "Bazı ilaçlar (kan sulandırıcılar)",
            "Vitamin eksiklikleri (özellikle C vitamini)",
            "Sistemik hastalıklar (diyabet, lösemi)"
          ]
        },
        {
          heading: "Gingivitis (Basit Diş Eti İltihabı) Nedir?",
          content: "Gingivitis, diş etlerinin iltihaplanmasının erken aşamasıdır ve tamamen tedavi edilebilir bir durumdur.",
          list: [
            "Belirtiler: Kırmızılık, şişlik, kanama",
            "Neden: Plak ve bakterilerin birikmesi",
            "Tedavi: Profesyonel diş temizliği + iyi ağız hijyeni",
            "Geri dönüşümlü: Erken müdahale ile tamamen iyileşir"
          ]
        },
        {
          heading: "Periodontitis (İleri Diş Eti Hastalığı)",
          content: "Tedavi edilmeyen gingivitis, periodontitis'e ilerleyebilir. Bu aşamada kemik kaybı başlar ve kalıcı hasar oluşabilir.",
          list: [
            "Belirtiler: Diş eti çekilmesi, diş sallanması, ağız kokusu",
            "Neden: Kronik iltihap ve bakteriyel enfeksiyon",
            "Tedavi: Küretaj (derin temizlik), cerrahi müdahale gerekebilir",
            "Geri dönüşümsüz: Kaybedilen kemik geri gelmez"
          ]
        },
        {
          heading: "Ne Zaman Endişelenmelisiniz?",
          content: "Aşağıdaki durumlardan herhangi birini yaşıyorsanız, mutlaka bir diş hekimine başvurmalısınız:",
          list: [
            "Düzenli diş fırçalamaya rağmen sürekli kanama",
            "Diş etlerinde çekilme veya dişlerde uzama hissi",
            "Dişler arasında boşlukların açılması",
            "Kalıcı ağız kokusu",
            "Dişlerde sallanma veya pozisyon değişikliği",
            "Çiğneme sırasında ağrı"
          ]
        },
        {
          heading: "Diş Eti Kanamasını Önleme Yöntemleri",
          content: "Diş eti sağlığınızı korumak için alabileceğiniz önlemler:",
          list: [
            "Günde 2 kez, 2 dakika boyunca yumuşak fırça ile fırçalayın",
            "Günlük diş ipi kullanımını alışkanlık haline getirin",
            "Antiseptik ağız gargarası kullanın",
            "6 ayda bir profesyonel diş temizliği yaptırın",
            "Dengeli beslenin, C vitamini alımına dikkat edin",
            "Sigara kullanmayın",
            "Diyabet gibi sistemik hastalıklarınızı kontrol altında tutun"
          ]
        }
      ],
      conclusion: "Diş eti kanaması, vücudunuzun size gönderdiği önemli bir uyarıdır. Erken teşhis ve tedavi ile ciddi sorunlar önlenebilir. Kliniğimizde, diş eti sağlığınızı korumak için detaylı muayene, profesyonel temizlik ve kişiselleştirilmiş tedavi planları sunuyoruz. Diş etlerinizde kanama fark ederseniz, vakit kaybetmeden randevu alın."
    },
    pillarPage: "/tedaviler/periodontoloji-dis-eti-tedavisi",
    relatedArticles: [
      "dis-tasi-temizligi-zarar-verir-mi",
      "kuretaj-derin-temizlik-nedir",
      "pembe-estetik-gingivektomi"
    ]
  },
  // Diğer blog yazıları için placeholder
  "porselen-lamina-kompozit-lamina-karsilastirma": {
    title: "Porselen Lamina mı, Kompozit Lamina (Bonding) mi? Karar Verme Rehberi",
    description: "İki tedavinin estetik, dayanıklılık, seans süresi ve maliyet açısından karşılaştırması.",
    category: "Estetik Diş Hekimliği",
    author: "Dt. Emrecan Eren",
    date: "8 Kasım 2025",
    readTime: "6 dk",
    content: {
      intro: "Gülüşünüzü yeniden tasarlamak istediğinizde, porselen lamina (veneer) ve kompozit bonding arasında seçim yapmak zor olabilir. Bu rehberde, her iki tedavinin avantajlarını, dezavantajlarını ve hangi durumlarda tercih edilmesi gerektiğini detaylı olarak inceleyeceğiz.",
      sections: [
        {
          heading: "Porselen Lamina (Veneer) Nedir?",
          content: "Porselen lamina, dişlerinizin ön yüzeyine yapıştırılan, özel olarak üretilmiş ince porselen kaplamalardır.",
          list: [
            "Laboratuvarda özel olarak üretilir",
            "0.3-0.5 mm kalınlığında ince seramik",
            "Doğal diş görünümü ve ışık geçirgenliği",
            "Yüksek dayanıklılık (10-15 yıl+)",
            "Renk değişimine karşı dirençli"
          ]
        },
        {
          heading: "Kompozit Bonding Nedir?",
          content: "Kompozit bonding, diş renginde kompozit rezin materyalinin doğrudan dişe uygulanması ve şekillendirilmesidir.",
          list: [
            "Tek seansta tamamlanır",
            "Minimal diş aşındırması",
            "Daha ekonomik seçenek",
            "Gerektiğinde kolayca tamir edilebilir",
            "Zamanla renk değişimi olabilir"
          ]
        },
        {
          heading: "Estetik Karşılaştırma",
          content: "Her iki tedavi de mükemmel estetik sonuçlar verebilir, ancak bazı farklar vardır:",
          list: [
            "Porselen: Daha doğal ışık geçirgenliği, cam gibi parlaklık",
            "Kompozit: Doğru uygulamada çok iyi sonuçlar, ancak porselene göre mat kalabilir",
            "Porselen: Renk stabilitesi mükemmel",
            "Kompozit: Kahve, çay, şarap ile zamanla renk değişimi olabilir"
          ]
        },
        {
          heading: "Dayanıklılık ve Ömür",
          content: "Tedavilerin uzun vadeli performansı:",
          list: [
            "Porselen Lamina: 10-15 yıl veya daha fazla",
            "Kompozit Bonding: 5-7 yıl (iyi bakımla)",
            "Porselen: Çok dayanıklı, kırılma riski düşük",
            "Kompozit: Daha yumuşak, çiğneme kuvvetlerine karşı daha hassas"
          ]
        },
        {
          heading: "Tedavi Süreci",
          content: "Her iki tedavinin uygulama aşamaları:",
          list: [
            "Porselen: 2-3 seans, laboratuvar süreci gerektirir",
            "Kompozit: Tek seans, anında sonuç",
            "Porselen: Geçici lamina kullanımı gerekebilir",
            "Kompozit: Aynı gün tamamlanır"
          ]
        },
        {
          heading: "Hangi Durumda Hangisi Tercih Edilmeli?",
          content: "Tedavi seçiminizi etkileyen faktörler:",
          list: [
            "Porselen tercih edin: Maksimum estetik, uzun ömür, renk stabilitesi istiyorsanız",
            "Kompozit tercih edin: Hızlı sonuç, minimal müdahale, ekonomik çözüm istiyorsanız",
            "Porselen: Ön dişlerde, geniş restorasyonlarda ideal",
            "Kompozit: Küçük düzeltmelerde, genç hastalarda uygun"
          ]
        }
      ],
      conclusion: "Porselen lamina ve kompozit bonding arasındaki seçim, beklentilerinize, bütçenize ve diş yapınıza bağlıdır. Kliniğimizde, dijital gülüş tasarımı ile her iki seçeneği de önizleyebilir ve size en uygun tedaviyi birlikte belirleyebiliriz. Detaylı muayene için randevu alın."
    },
    pillarPage: "/tedaviler/estetik-dis-hekimligi",
    relatedArticles: [
      "dis-beyazlatma-sonrasi-bakim",
      "zirkonyum-kaplama-renk-secimi",
      "gulus-tasarimi-temel-ilkeler"
    ]
  }
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = blogArticles[params.slug]
  
  if (!article) {
    return {
      title: "Sayfa Bulunamadı",
    }
  }

  return {
    title: `${article.title} | Dt. Emrecan Eren`,
    description: article.description,
    keywords: [article.category, "diş sağlığı", "Lüleburgaz diş kliniği"],
  }
}

export default function BlogArticlePage({ params }: Props) {
  const article = blogArticles[params.slug]

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Back Button */}
      <div className="bg-white border-b border-brown/10">
        <div className="mx-auto max-w-4xl px-6 py-4 lg:px-8">
          <Link href="/dis-sagligi-rehberi">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Tüm Yazılara Dön
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-vizon bg-vizon/10 rounded-full uppercase tracking-wider">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl mb-6">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-brown/60 mb-8 pb-8 border-b border-brown/10">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} okuma</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-brown/80 leading-relaxed">
              {article.content.intro}
            </p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none space-y-12">
            {article.content.sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-2xl font-bold text-brown mb-4">
                  {section.heading}
                </h2>
                <p className="text-brown/80 leading-relaxed mb-4">
                  {section.content}
                </p>
                {section.list && (
                  <ul className="space-y-2 ml-6">
                    {section.list.map((item, i) => (
                      <li key={i} className="text-brown/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 p-6 bg-vizon/5 border border-vizon/20 rounded-lg">
            <h3 className="text-xl font-bold text-brown mb-4">Sonuç</h3>
            <p className="text-brown/80 leading-relaxed">
              {article.content.conclusion}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center p-8 bg-gradient-to-br from-vizon/10 to-cream rounded-lg">
            <h3 className="text-2xl font-bold text-brown mb-4">
              Daha Fazla Bilgi İçin Randevu Alın
            </h3>
            <p className="text-brown/70 mb-6">
              Uzman ekibimiz size özel tedavi planı oluşturmak için hazır
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/iletisim">Randevu Al</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={article.pillarPage}>Tedavi Hakkında Detaylı Bilgi</Link>
              </Button>
            </div>
          </div>

          {/* Related Articles */}
          {article.relatedArticles.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-brown mb-6">İlgili Yazılar</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {article.relatedArticles.map((slug) => {
                  const related = blogArticles[slug]
                  if (!related) return null
                  return (
                    <Link
                      key={slug}
                      href={`/dis-sagligi-rehberi/${slug}`}
                      className="p-4 bg-white border border-brown/10 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                      <span className="text-xs font-semibold text-vizon uppercase tracking-wider block mb-2">
                        {related.category}
                      </span>
                      <h4 className="text-sm font-semibold text-brown line-clamp-2">
                        {related.title}
                      </h4>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": article.title,
            "description": article.description,
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "datePublished": article.date,
            "publisher": {
              "@type": "Organization",
              "name": "Dt. Emrecan Eren Polikliniği",
              "url": "https://www.emrecaneren.com"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.emrecaneren.com/dis-sagligi-rehberi/${params.slug}`
            }
          })
        }}
      />
    </main>
  )
}
