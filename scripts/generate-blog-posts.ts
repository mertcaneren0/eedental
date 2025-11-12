// Bu script kalan blog yazılarını otomatik oluşturur
// Manuel olarak çalıştırılacak: npm run generate-blog-posts

import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"

const blogPosts = [
  {
    slug: "dis-beyazlatma-sonrasi-bakim",
    title: "Diş Beyazlatma Sonrası İlk 48 Saat: Beyaz Diyet ve Bakım Önerileri",
    description: "Beyazlatmanın kalıcılığını artırmak için beslenme ve bakım önerileri.",
    category: "Estetik Diş Hekimliği",
    icon: "Sparkles",
    iconColor: "pink-600",
    pillarPage: "/tedaviler/estetik-dis-hekimligi",
  },
  {
    slug: "zirkonyum-kaplama-renk-secimi",
    title: "Zirkonyum Kaplama Rengi Nasıl Seçilir? Doğal Görünüm İçin 5 İpucu",
    description: "Renk skalası, doğal diş uyumu ve dijital tasarımın rolü.",
    category: "Estetik Diş Hekimliği",
    icon: "Sparkles",
    iconColor: "pink-600",
    pillarPage: "/tedaviler/estetik-dis-hekimligi",
  },
  {
    slug: "kemik-tozu-greft-nedir",
    title: "Kemik Tozu (Greft) Nedir? Her İmplant İçin Gerekli midir?",
    description: "Kemik yetersizliği, sinüs lifting ve greft uygulamasının rolü.",
    category: "İmplant Tedavisi",
    icon: "Drill",
    iconColor: "blue-600",
    pillarPage: "/tedaviler/implant-tedavisi",
  },
  {
    slug: "3d-rehberli-implant-cerrahisi",
    title: "Rehberli (3D) İmplant Cerrahisi Nedir? Geleneksel Yöntemden Farkları",
    description: "3D planlama, cerrahi rehber ve hasta avantajları.",
    category: "İmplant Tedavisi",
    icon: "Drill",
    iconColor: "blue-600",
    pillarPage: "/tedaviler/implant-tedavisi",
  },
  {
    slug: "implant-sonrasi-beslenme",
    title: "İmplant Tedavisi Sonrası Beslenme Rehberi: İlk Hafta Neler Yenmeli?",
    description: "İyileşme sürecinde beslenme önerileri ve kaçınılması gerekenler.",
    category: "İmplant Tedavisi",
    icon: "Drill",
    iconColor: "blue-600",
    pillarPage: "/tedaviler/implant-tedavisi",
  },
  {
    slug: "kanal-tedavisi-sonrasi-agri",
    title: "Kanal Tedavisi Sonrası Ağrı Normal mi? İyileşme ve Uyarı Sinyalleri",
    description: "Normal hassasiyet ile enfeksiyon belirtileri arasındaki farklar.",
    category: "Mikroskopik Tedavi",
    icon: "Microscope",
    iconColor: "purple-600",
    pillarPage: "/tedaviler/mikroskopik-dis-tedavisi",
  },
  {
    slug: "20-yas-disi-cekimi-sonrasi-bakim",
    title: "Gömülü 20 Yaş Dişi Çekimi Sonrası Beslenme ve Bakım: İlk 72 Saat",
    description: "Şişlik yönetimi, kanama kontrolü ve dry socket önleme.",
    category: "Ağız ve Çene Cerrahisi",
    icon: "Scissors",
    iconColor: "red-600",
    pillarPage: "/tedaviler/agiz-dis-cene-cerrahisi",
  },
  {
    slug: "seffaf-plak-dis-teli-karsilastirma",
    title: "Şeffaf Plak Tedavisi mi, Geleneksel Diş Teli mi? Hangisi Uygun?",
    description: "Estetik, konfor, hijyen ve maliyet açısından objektif karşılaştırma.",
    category: "Ortodonti",
    icon: "Smile",
    iconColor: "green-600",
    pillarPage: "/tedaviler/ortodonti-seffaf-plak",
  },
  {
    slug: "dis-eti-kanamasi-nedenleri",
    title: "Diş Eti Kanaması Neden Olur? Ciddi Bir Sorunun İlk Belirtisi mi?",
    description: "Gingivitis ve periodontitis arasındaki fark.",
    category: "Diş Eti Tedavisi",
    icon: "Heart",
    iconColor: "rose-600",
    pillarPage: "/tedaviler/periodontoloji-dis-eti-tedavisi",
  },
  {
    slug: "dis-tasi-temizligi-zarar-verir-mi",
    title: "Diş Taşı Temizliği (Detartraj) Dişe Zarar Verir mi? Yanlış Bilinen Gerçekler",
    description: "Mine çizme miti ve işlem sonrası hassasiyetin nedenleri.",
    category: "Diş Eti Tedavisi",
    icon: "Heart",
    iconColor: "rose-600",
    pillarPage: "/tedaviler/periodontoloji-dis-eti-tedavisi",
  },
  {
    slug: "bruksizm-dis-sikma-belirtileri",
    title: "Sabahları Çene Ağrısıyla mı Uyanıyorsunuz? Bruksizm Belirtileri",
    description: "Baş ağrısı, diş aşınması ve çene kilitlenmesi belirtileri.",
    category: "Bruksizm",
    icon: "Shield",
    iconColor: "indigo-600",
    pillarPage: "/tedaviler/dis-sikma-bruksizm-tedavisi",
  },
]

const template = (post: typeof blogPosts[0]) => `import type { Metadata } from "next"
import { BlogPostTemplate } from "@/components/blog/blog-post-template"
import { ${post.icon} } from "lucide-react"

export const metadata: Metadata = {
  title: "${post.title} | Dt. Emrecan Eren",
  description: "${post.description}",
}

export default function BlogPost() {
  return (
    <BlogPostTemplate
      title="${post.title}"
      description="${post.description}"
      category="${post.category}"
      categoryIcon={<${post.icon} className="h-5 w-5 text-${post.iconColor}" />}
      pillarPage="${post.pillarPage}"
      content={
        <>
          <h2>Giriş</h2>
          <p>
            ${post.description}
          </p>

          <h2>Detaylı Bilgi</h2>
          <p>
            Bu konuda daha fazla bilgi için kliniğimizi ziyaret edebilir veya randevu alabilirsiniz.
          </p>

          <h2>Sonuç</h2>
          <p>
            <strong>Dt. Emrecan Eren Kliniği</strong> olarak, hastalarımıza en iyi hizmeti sunmak için çalışıyoruz.
          </p>
        </>
      }
    />
  )
}
`

async function main() {
  console.log("Blog yazıları oluşturuluyor...")
  
  for (const post of blogPosts) {
    const dir = join(process.cwd(), "app", "(public)", "dis-sagligi-rehberi", post.slug)
    const filePath = join(dir, "page.tsx")
    
    // Create directory if it doesn't exist
    if (!existsSync(dir)) {
      await mkdir(dir, { recursive: true })
    }
    
    // Write file
    await writeFile(filePath, template(post))
    console.log(`✓ ${post.slug}/page.tsx oluşturuldu`)
  }
  
  console.log(`\n✅ ${blogPosts.length} blog yazısı oluşturuldu!`)
}

main().catch(console.error)
