import type { Metadata } from "next"
import { BlogPostTemplate } from "@/components/blog/blog-post-template"
import { BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Kanıta Dayalı Diş Hekimliği (EBD) Nedir? Kliniğimizin Felsefesi | Dt. Eren",
  description: "Dt. Emrecan Eren kliniği, 'kanıta dayalı diş hekimliği' (EBD) felsefesini nasıl uygular? 'Moda' olanı değil, 'bilimsel' olanı seçmemizin nedenlerini (E-A-T) okuyun.",
  keywords: ["kanıta dayalı diş hekimliği", "evidence-based dentistry", "EBD", "bilimsel tedavi", "minimal invaziv", "Lüleburgaz diş hekimi"],
}

export default function BlogPost() {
  return (
    <BlogPostTemplate
      title="Neden 'Kanıta Dayalı' (Evidence-Based) Diş Hekimliği? Kliniğimizin Tedavi Felsefesi"
      description="Bilim, uzmanlık ve hasta tercihleri birleşimi."
      category="Klinik Felsefesi"
      categoryIcon={<BookOpen className="h-5 w-5 text-purple-600" />}
      pillarPage="/hakkimizda"
      content={
        <>
          <div className="bg-vizon/5 border-l-4 border-vizon p-6 rounded-r-lg mb-8">
            <p className="text-sm text-brown/80 mb-2">
              <strong>Tıbbi İçerik Onayı:</strong> Bu makale, Dt. Emrecan Eren tarafından tıbbi olarak incelenmiş ve onaylanmıştır.
            </p>
            <p className="text-xs text-brown/60">
              <strong>Yasal Uyarı:</strong> Bu sayfada yer alan tüm içerik, hastaları bilgilendirme amaçlıdır. Tanı ve tedavi için mutlaka diş hekiminize danışınız.
            </p>
          </div>

          <p className="text-lg leading-relaxed text-brown/90 mb-6">
            Bir hasta olarak, sağlığınızla ilgili bir karar verirken kendinizi bir bilgi bombardımanının ortasında bulmanız çok olasıdır. Bir yanda internette, sosyal medyada gördüğünüz "mucizevi" ve "hızlı" estetik trendler; diğer yanda ise bilimsel temeli olmayan, kulaktan dolma "korkular" ("Florür zehirlidir", "Diş taşı temizliği mineyi çizer").
          </p>

          <p className="text-lg leading-relaxed text-brown/90 mb-8">
            Peki, bu "bilgi kaosu" içinde bir diş hekimi olarak bizim "pusulamız" ne olmalı? Dt. Emrecan Eren Polikliniği'nde, bu pusulanın tek bir adı vardır: <strong>"Kanıta Dayalı Diş Hekimliği" (EBD - Evidence-Based Dentistry)</strong>.
          </p>

          <h2>"Kanıta Dayalı Diş Hekimliği" Nedir?</h2>
          <p>
            "Kanıta Dayalı Tıp", bir hekimin tedavi kararlarını "bana böyle öğretildi" veya "yeni çıkan bu cihaz çok popüler" gibi öznel varsayımlara göre değil, <strong>"bilimsel kanıtlara"</strong> göre vermesi gerektiği felsefesidir.
          </p>

          <h3>3 Temel Sacayak:</h3>
          <div className="grid md:grid-cols-3 gap-6 my-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">1. Bilimsel Kanıt</h4>
              <p className="text-sm">Binlerce hastayı içeren, uzun vadeli, sistematik derlemeler ve meta-analizler. "Zirkonyum mü, metal mi daha uzun ömürlü?" sorusunun cevabını bilim verir.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">2. Hekim Uzmanlığı</h4>
              <p className="text-sm">Bilimsel kanıt "genel" doğruyu söyler. Hekimin uzmanlığı, o genel doğruyu sizin "özel" vakanıza nasıl uygulayacağını bilmektir.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">3. Hasta Tercihleri</h4>
              <p className="text-sm">Bilimsel olarak "en iyi" olan, sizin yaşam tarzınız, bütçeniz veya estetik beklentileriniz için "en doğru" olmayabilir.</p>
            </div>
          </div>

          <h2>"Moda"nın Tuzağı vs "Mit"in Korkusu</h2>
          <p>
            "Kanıta dayalı" olmak, bizi ve hastalarımızı iki büyük tehlikeden korur:
          </p>

          <h3>1. "Moda" Olanın Tehlikesi (Aşırı Tedavi)</h3>
          <div className="space-y-4 my-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="font-semibold mb-2">❌ Moda: "Veneer için tüm dişleri zımparalama" (shark teeth)</p>
              <p className="text-sm"><strong>✅ Kanıta Dayalı Cevabımız:</strong> Hayır! Bilim, en iyi materyalin "dişin kendi minesi" olduğunu kanıtlamıştır. Biz önce diş beyazlatma, şeffaf plak veya kompozit bonding gibi koruyucu seçenekleri sunarız.</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="font-semibold mb-2">❌ Moda: "Aktif karbonlu (kömürlü) diş macunları"</p>
              <p className="text-sm"><strong>✅ Kanıta Dayalı Cevabımız:</strong> Hayır! Bilimsel çalışmalar, bu macunların "aşındırıcı" olduğunu ve mineyi çizerek uzun vadede daha çok lekelenmeye neden olduğunu gösterir.</p>
            </div>
          </div>

          <h3>2. "Mit"lerin Tehlikesi (Eksik Tedavi)</h3>
          <div className="space-y-4 my-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold mb-2">❌ Efsane: "Diş taşı temizliği dişlerimi çizdi"</p>
              <p className="text-sm"><strong>✅ Kanıta Dayalı Cevabımız:</strong> Hayır! Bilim, ultrasonik aletlerin mineyi çizmediğini; o "boşlukların" ise temizliğin değil, hastalığın yarattığı kemik kaybı olduğunu kanıtlamıştır.</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold mb-2">❌ Efsane: "Florür zehirlidir"</p>
              <p className="text-sm"><strong>✅ Kanıta Dayalı Cevabımız:</strong> Hayır! Bilim, profesyonel topikal florürün, çürüğü önleyen en güvenli ve en etkili yöntem olduğunu kanıtlamıştır. "Zehir" olan florür değil, "aşırı doz"dur.</p>
            </div>
          </div>

          <h2>Kliniğimizde "Kanıta Dayalı" Felsefenin Pratik Uygulamaları</h2>

          <h3>1. "Tahmin" Değil, "Dijital Kanıt": 3D Tomografi</h3>
          <ul>
            <li><strong>Geleneksel:</strong> 2D röntgene bakarak "sinire yakınsınız" demek (tahmin)</li>
            <li><strong>Kanıta Dayalı:</strong> 3D Tomografi çekeriz. "Sinir kanalınız implantın 1.8mm solunda, kemik kalınlığınız 6.2mm" deriz (kanıt)</li>
          </ul>

          <h3>2. "Görmeden" Değil, "Görerek" Tedavi: Mikroskop</h3>
          <ul>
            <li><strong>Geleneksel:</strong> Çıplak gözle "hissederek" kanal tedavisi</li>
            <li><strong>Kanıta Dayalı:</strong> Bilim, "gözle görülemeyen" ekstra kanalların başarısızlık nedeni olduğunu kanıtlamıştır. 25x büyütme altında o "atlanan" kanalı görür, temizler ve kapatırız</li>
          </ul>

          <h3>3. "Aşındırmak" Değil, "Korumak": Minimal İnvaziv</h3>
          <ul>
            <li><strong>Geleneksel:</strong> "Bu dişte büyük çürük var, kaplayalım"</li>
            <li><strong>Kanıta Dayalı:</strong> Bilim, "sağlam diş dokusunu" korumanın uzun vadeli başarıyı artırdığını kanıtlamıştır. Biz kompozit dolgu seçeriz, çünkü dişe yapışır ve sağlam dokuyu feda etmez</li>
          </ul>

          <h3>4. "Alerji" Değil, "Biyouyumluluk": Malzeme Seçimi</h3>
          <ul>
            <li><strong>Geleneksel:</strong> "Metal destekli porselen daha ucuz ve sağlam"</li>
            <li><strong>Kanıta Dayalı:</strong> Bilim, PFM'deki metalin "diş eti uyumunu" bozduğunu gösterir. Biz zirkonyum seçeriz, çünkü hem dayanıklı hem de %100 biyouyumludur</li>
          </ul>

          <h3>5. "Kader" Değil, "Tıbbi Çözüm": Bruksizm Tedavisi</h3>
          <ul>
            <li><strong>Geleneksel:</strong> "Diş sıkıyorsun, strestendir, gece plağı tak"</li>
            <li><strong>Kanıta Dayalı:</strong> Bilim, bruksizmin kasların "hiperaktivitesi" olduğunu ve kronik ağrı yarattığını kanıtlamıştır. Masseter Botoksu uygularız, çünkü bu o hiperaktif kası "kanıta dayalı" olarak rahatlatır</li>
          </ul>

          <h2>Hasta Olarak Sizin İçin Bu Ne Anlama Geliyor?</h2>
          <div className="grid md:grid-cols-3 gap-6 my-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Gereksiz Tedavi Olmazsınız</h4>
              <p className="text-sm">Size "moda" olan değil, bilimsel olarak "ihtiyacınız" olan tedavi önerilir.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Daha Yüksek Başarı Oranı</h4>
              <p className="text-sm">Tedavileriniz "tahminlere" göre değil, "Mikroskopik" ve "Dijital" kanıtlara göre planlandığı için başarı oranı maksimuma çıkar.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Tedavinin Ortağı Olursunuz</h4>
              <p className="text-sm">Nedenlerini, seçeneklerini ve felsefemizi size şeffafça sunarız. Kararı "bilinçli" ve "güvende" hissederek siz verirsiniz.</p>
            </div>
          </div>

          <h2>Sonuç: Mükemmellik, Bilimsel Kanıtların Detaylarında Gizlidir</h2>
          <p>
            Dt. Emrecan Eren Polikliniği'nde, en son teknolojiyi "reklam" olsun diye değil, "kanıta dayalı" teşhis ve tedaviyi mümkün kıldığı için kullanıyoruz.
          </p>

          <p>
            Felsefemiz, size geçici çözümler veya "moda" estetikler sunmak değil; bilimsel olarak kanıtlanmış, "Minimal İnvaziv" ve "Bütünsel Sağlık" odaklı, ömür boyu sürecek kalıcı sonuçlar sağlamaktır.
          </p>

          <div className="bg-grey/5 border-l-4 border-grey p-6 rounded-r-lg mt-8">
            <p className="text-sm text-brown/70 italic">
              <strong>Yazar Hakkında:</strong> Bu makale, <strong>Dt. Emrecan Eren</strong> tarafından yazılmış ve tıbbi olarak onaylanmıştır. 
              Kliniğimiz, kanıta dayalı (evidence-based) tedavi protokolleri ile hastalarına hizmet vermektedir.
            </p>
          </div>
        </>
      }
    />
  )
}
