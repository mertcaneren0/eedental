import type { Metadata } from "next"
import { BlogPostTemplate } from "@/components/blog/blog-post-template"
import { Crown } from "lucide-react"

export const metadata: Metadata = {
  title: "Zirkonyum Köprü mü, Porselen Köprü mü? (Uzman Karşılaştırması) | Dt. Eren - Lüleburgaz",
  description: "Eksik diş için zirkonyum köprü mü, metal destekli porselen köprü mü? Lüleburgaz Dt. Eren kliniği, iki materyali estetik, dayanıklılık, diş eti uyumu (gri çizgi) ve biyouyumluluk açısından karşılaştırıyor.",
  keywords: ["zirkonyum köprü", "porselen köprü", "PFM", "gri diş eti çizgisi", "dijital tasarım", "CAD/CAM", "Lüleburgaz diş hekimi"],
}

export default function BlogPost() {
  return (
    <BlogPostTemplate
      title="Zirkonyum Köprü mü, Porselen Köprü mü? Hangi Materyal Sizin İçin Doğru?"
      description="Estetik, dayanıklılık ve biyouyumluluk karşılaştırması."
      category="Protetik Tedavi"
      categoryIcon={<Crown className="h-5 w-5 text-amber-600" />}
      pillarPage="/tedaviler/protetik-dis-tedavisi"
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
            Eksik bir dişin yerini doldurmak (köprü tedavisi), sadece estetik bir kaygı değil, aynı zamanda çiğneme fonksiyonunuzu ve ağız sağlığınızı geri kazanmak için de hayati bir adımdır. Tedaviye karar verdiğinizde ise, karşınıza en kritik soru çıkar: <strong>"Köprüm hangi malzemeden yapılmalı?"</strong>
          </p>

          <p className="text-lg leading-relaxed text-brown/90 mb-8">
            Yıllardır duyduğunuz "porselen köprü" mü, yoksa modern diş hekimliğinin gözdesi olan "zirkonyum köprü" mü?
          </p>

          <h2>"Porselen Köprü" Efsanesi: Metal Destekli Porselen (PFM)</h2>
          <p>
            Hastalarımız "porselen köprü" dediğinde, genellikle teknik adı <strong>"Metal Destekli Porselen" (PFM - Porcelain-Fused-to-Metal)</strong> olan, onlarca yıldır kullanılan geleneksel köprü tipini kastederler.
          </p>

          <h3>Nasıl Çalışır?</h3>
          <p>
            PFM köprüler, iki katmandan oluşur:
          </p>
          <ul>
            <li><strong>İç Yapı (Altyapı):</strong> Gri renkte bir metal alaşım iskelet</li>
            <li><strong>Dış Yapı (Üstyapı):</strong> Metal iskeletin üzerine diş renginde porselen fırınlanır</li>
          </ul>

          <h3>PFM'in Avantajları:</h3>
          <ul>
            <li><strong>Dayanıklılık:</strong> Metal altyapısı sayesinde çiğneme kuvvetlerine karşı son derece dayanıklı</li>
            <li><strong>Kanıtlanmış Başarı:</strong> Onlarca yıldır kullanılan, klinik başarısı kanıtlanmış</li>
            <li><strong>Maliyet:</strong> Zirkonyuma göre genellikle daha ekonomik</li>
          </ul>

          <h3>PFM'in Dezavantajları:</h3>

          <h4>1. "Cansız" ve "Opak" Estetik</h4>
          <p>
            Alttaki gri metal altyapı, ışığın geçişini tamamen bloke eder. Sonuç: "Tebeşirimsi," "mat," "donuk" ve "yapma diş" olduğu belli olan, "cansız" bir görünüm.
          </p>

          <h4>2. "Siyah / Gri Diş Eti Çizgisi" Problemi</h4>
          <p>
            Eski PFM köprülü hastaların en yaygın şikayeti: "Diş etimin kenarında mor-gri bir çizgi oluştu." Üç nedeni vardır:
          </p>
          <ul>
            <li><strong>Metal Yansıması:</strong> Alttaki metalin gri gölgesi, ince diş etinden dışarı yansır</li>
            <li><strong>Diş Eti Çekilmesi:</strong> Zamanla diş eti çekilse, alttaki köprünün "metal bitim sınırı" ortaya çıkar</li>
            <li><strong>Metal Oksidasyonu:</strong> Metal alaşımlar, tükürükle korozyona uğrayarak diş etinde "tatuaj" benzeri renklenmeye neden olabilir</li>
          </ul>

          <h4>3. Biyouyumluluk Endişeleri</h4>
          <p>
            Metal alaşımlar, nadiren de olsa, bazı hastalarda alerjik reaksiyonlara, diş etinde tahrişe veya ağızda metalik tat hissine neden olabilir.
          </p>

          <h2>Zirkonyum Köprü Nedir? (Modern, Dijital Çözüm)</h2>
          <p>
            Zirkonyum (Zirkonyum Dioksit), diş hekimliğinin <strong>"beyaz çeliği"</strong> veya "seramik çeliği" olarak bilinen, son derece yüksek teknoloji ürünü bir seramiktir. Tıp alanında (kalça ve diz protezi) yıllardır güvenle kullanılmaktadır.
          </p>

          <h3>Kliniğimizde Hangi Zirkonyumu Kullanıyoruz?</h3>
          <ul>
            <li><strong>Monolitik Zirkonyum (Maksimum Güç):</strong> Tek bir katı zirkonyum bloktan üretilir. Neredeyse kırılması imkansızdır. Arka azı dişlerindeki köprüler için ideal.</li>
            <li><strong>Çok Katmanlı Zirkonyum (Maksimum Estetik):</strong> Tıpkı doğal bir diş gibi katmanlı üretilir. Kesici uçlara doğru ışık geçirgenliği artar.</li>
          </ul>

          <h2>Zirkonyum Köprünün Avantajları</h2>

          <h3>1. Mükemmel Biyouyumluluk</h3>
          <ul>
            <li><strong>Alerji Yoktur:</strong> Metal içermez. Metal alerjisi olan hastalar için tek güvenli seçenek</li>
            <li><strong>"Gri Diş Eti Çizgisi" RİSKİ SIFIR:</strong> Altta metal olmadığı için, diş eti çekilse bile gri çizgi oluşmaz</li>
          </ul>

          <h3>2. Üstün Estetik ve Doğallık</h3>
          <ul>
            <li><strong>Işık Geçirgenliği:</strong> Zirkonyumun yarı saydam yapısı, ışığın içinden geçip doğal diş gibi yansımasını sağlar</li>
            <li><strong>Gölge Yoktur:</strong> Diş etine gri gölge vermez</li>
          </ul>

          <h3>3. Muazzam Dayanıklılık</h3>
          <p>
            Zirkonyum, porselenden çok daha dayanıklıdır. Çiğneme kuvvetlerine karşı direnci, metal altyapılı PFM'lere eşit veya daha yüksektir.
          </p>

          <h3>4. Dijital ve Mikrometrik Hassasiyet</h3>
          <p>
            Zirkonyum, elle üretilmez. <strong>Dijital (CAD/CAM)</strong> olarak üretilir:
          </p>
          <ol>
            <li><strong>3D Tarama (CAD):</strong> Ağzınızın dijital ölçüsünü alırız</li>
            <li><strong>Dijital Tasarım:</strong> Köprünüz bilgisayarda "0" hata payıyla tasarlanır</li>
            <li><strong>Robotik Üretim (CAM):</strong> Köprünüz el değmeden, robotik olarak kazınır</li>
          </ol>
          <p>
            <strong>Sonuç:</strong> Köprünün dişinizle birleştiği "kenar uyumu" mikron seviyesinde mükemmeldir. Bakteri sızıntısı olmaz, destek dişler çürümez.
          </p>

          <h2>Hızlı Karşılaştırma Tablosu</h2>
          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-brown/20">
              <thead>
                <tr className="bg-vizon/10">
                  <th className="border border-brown/20 px-4 py-3 text-left font-semibold text-brown">Özellik</th>
                  <th className="border border-brown/20 px-4 py-3 text-left font-semibold text-brown">Zirkonyum Köprü</th>
                  <th className="border border-brown/20 px-4 py-3 text-left font-semibold text-brown">PFM Köprü</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-brown/20 px-4 py-3 font-medium">Estetik</td>
                  <td className="border border-brown/20 px-4 py-3 bg-green-50">Mükemmel (Canlı)</td>
                  <td className="border border-brown/20 px-4 py-3">Orta (Mat, cansız)</td>
                </tr>
                <tr>
                  <td className="border border-brown/20 px-4 py-3 font-medium">Gri Çizgi</td>
                  <td className="border border-brown/20 px-4 py-3 bg-green-50">Asla Oluşmaz</td>
                  <td className="border border-brown/20 px-4 py-3">Yüksek Risk</td>
                </tr>
                <tr>
                  <td className="border border-brown/20 px-4 py-3 font-medium">Biyouyumluluk</td>
                  <td className="border border-brown/20 px-4 py-3 bg-green-50">Mükemmel</td>
                  <td className="border border-brown/20 px-4 py-3">Orta (Alerji riski)</td>
                </tr>
                <tr>
                  <td className="border border-brown/20 px-4 py-3 font-medium">Dayanıklılık</td>
                  <td className="border border-brown/20 px-4 py-3 bg-green-50">Çok Yüksek</td>
                  <td className="border border-brown/20 px-4 py-3 bg-green-50">Yüksek</td>
                </tr>
                <tr>
                  <td className="border border-brown/20 px-4 py-3 font-medium">Üretim</td>
                  <td className="border border-brown/20 px-4 py-3 bg-green-50">Dijital (CAD/CAM)</td>
                  <td className="border border-brown/20 px-4 py-3">Geleneksel (Elle)</td>
                </tr>
                <tr>
                  <td className="border border-brown/20 px-4 py-3 font-medium">Maliyet</td>
                  <td className="border border-brown/20 px-4 py-3">Yüksek</td>
                  <td className="border border-brown/20 px-4 py-3 bg-green-50">Ekonomik</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Sonuç: Estetik, Sağlık ve Dayanıklılığın Dijital Birleşimi</h2>
          <p>
            "Porselen köprü" (PFM), onlarca yıl görevini yapmış, "sağlam" bir çözümdür. Ancak modern diş hekimliği, artık sadece "sağlam" olanı değil; aynı zamanda <strong>"biyouyumlu," "estetik" ve "hassas"</strong> olanı talep ediyor.
          </p>

          <p>
            Dt. Emrecan Eren Polikliniği olarak, hastalarımızın %95'inden fazlasında, bu üç talebi mükemmel bir şekilde birleştiren <strong>Zirkonyum Köprüleri</strong> öncelikli olarak tercih ediyor ve öneriyoruz.
          </p>

          <p>
            Zirkonyum; metalin neden olduğu estetik ve biyolojik riskleri ortadan kaldıran ve "Dijital Tasarım" sayesinde "Mükemmellik, Detaylarda Gizlidir" ilkemize tam uyan modern, bilimsel ve uzun ömürlü çözümdür.
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
