import type { Metadata } from "next"
import { BlogPostTemplate } from "@/components/blog/blog-post-template"
import { Microscope } from "lucide-react"

export const metadata: Metadata = {
  title: "Amalgam Dolgu vs Kompozit Dolgu (Farkları, Cıva) | Dt. Eren - Lüleburgaz",
  description: "Amalgam (siyah) dolgu mu, kompozit (beyaz) dolgu mu? Lüleburgaz Dt. Eren kliniği, cıva endişesini, dayanıklılığı ve minimal invaziv avantajları bilimsel olarak karşılaştırıyor.",
  keywords: ["amalgam dolgu", "kompozit dolgu", "cıva", "beyaz dolgu", "minimal invaziv", "mikroskopik dolgu", "Lüleburgaz diş hekimi"],
}

export default function BlogPost() {
  return (
    <BlogPostTemplate
      title="Amalgam (Siyah) Dolgu mu, Kompozit (Beyaz) Dolgu mu? Bilimsel Bir Karşılaştırma"
      description="Güvenlik, dayanıklılık, estetik ve minimal invaziv yaklaşım açısından karşılaştırma."
      category="Mikroskopik Tedavi"
      categoryIcon={<Microscope className="h-5 w-5 text-purple-600" />}
      pillarPage="/tedaviler/mikroskopik-dis-tedavisi"
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
            Diş çürüğü tedavisi söz konusu olduğunda, hastalarımızın onlarca yıldır duyduğu klasik bir ikilem vardır: Dayanıklılığıyla bilinen "siyah" veya "gümüş" amalgam dolgular mı, yoksa estetiğiyle öne çıkan "beyaz" kompozit dolgular mı?
          </p>

          <p className="text-lg leading-relaxed text-brown/90 mb-8">
            Son yıllarda, amalgam dolguların içeriğindeki <strong>"cıva"</strong> nedeniyle artan bir endişe olduğunu da biliyoruz. "Acaba bu dolgularımı söktürmeli miyim?" sorusu, kliniğimizde en sık duyduğumuz sorulardan biri haline geldi.
          </p>

          <h2>Amalgam Dolgu Nedir? (150 Yıllık Geleneksel Çözüm)</h2>
          <p>
            Amalgam dolgu, 150 yılı aşkın süredir diş hekimliğinde kullanılan, son derece dayanıklı bir metal alaşımdır. Gümüş, kalay, bakır ve çinko gibi metallerin, cıva ile karıştırılmasıyla elde edilir. Cıva, bu metal tozlarını birbirine bağlayan "taşıyıcı" ve "birleştirici" rolü oynar.
          </p>

          <h3>Amalgam Dolgunun Avantajları:</h3>
          <ul>
            <li><strong>Üstün Dayanıklılık:</strong> Aşınmaya karşı son derece dirençlidir. İyi yapılmış bir amalgam dolgu, 15-20 yıl veya daha uzun süre ağızda kalabilir.</li>
            <li><strong>Maliyet Etkinliği:</strong> Uygulaması daha basit ve materyali daha ekonomiktir.</li>
            <li><strong>Teknik Tolerans:</strong> Kompozit dolguların aksine, tükürük gibi hafif bir nemden çok fazla etkilenmez.</li>
          </ul>

          <h3>Amalgam Dolgunun Dezavantajları:</h3>
          
          <h4>1. Estetik Sorunu:</h4>
          <p>
            Metalik gri/siyah rengi, özellikle gülüş hattında estetik bir kaygı yaratır ve zamanla dişi içeriden griye boyayabilir.
          </p>

          <h4>2. Cıva Endişesi ("Kanıta Dayalı" Bakış):</h4>
          <p>
            Evet, amalgam dolgular cıva içerir. Bu bilimsel bir gerçektir. Ancak, "Güvenilir" bilgi şu şekildedir: Cıva, bu alaşımın içinde "serbest" halde değildir; diğer metallerle kimyasal bir bağ oluşturur.
          </p>
          <p>
            <strong>Dünya Sağlık Örgütü (WHO), Amerikan Diş Hekimleri Birliği (ADA)</strong> gibi uluslararası otoriteler, sağlam amalgam dolguların çiğneme sırasında saldığı minimal cıva buharı miktarının, genel popülasyon için güvenli olduğunu belirtmektedir.
          </p>

          <h4>3. Asıl Teknik Sorun: "Minimal İnvaziv Değil"</h4>
          <p>
            Bu, bizim "Minimal İnvaziv Yaklaşım" felsefemize uymayan en önemli teknik dezavantajıdır. <strong>Amalgam dolgu, dişe kimyasal olarak yapışmaz</strong>. Dişte durabilmesi için, hekimin "undercut" adı verilen mekanik tutucu alanlar yaratması gerekir. Bunun anlamı: <strong>Amalgam yapmak için, çürük olmayan sağlam diş dokusunun da bir kısmını feda etmek zorundasınız.</strong>
          </p>

          <h2>Kompozit Dolgu Nedir? (Modern "Beyaz" Dolgu)</h2>
          <p>
            Kompozit dolgular (veya "ışınlı dolgu"), diş rengindeki estetik materyallerdir. Dişin doğal yapısını oluşturan "reçine" ve içine gömülü "seramik/cam" parçacıklarından oluşur.
          </p>

          <p>
            Amalgamın aksine, kompozit dolgu dişe mekanik olarak "sıkışmaz"; özel "bonding" ajanları kullanılarak dişe mikro-mekanik ve kimyasal olarak yapışır.
          </p>

          <h3>Kompozit Dolgunun Avantajları:</h3>
          
          <h4>1. Minimal İnvaziv Yaklaşım (Bizim Felsefemiz):</h4>
          <p>
            Kompozit dolgunun en büyük üstünlüğü budur. Dişe yapışabildiği için, hekimin "undercut" oluşturmasına gerek yoktur. Bu sayede, <strong>sadece çürük olan doku temizlenir ve sağlam diş dokunuza hiç dokunulmaz.</strong>
          </p>

          <h4>2. Üstün Estetik:</h4>
          <p>
            Dişin doğal rengiyle birebir eşleştirilebilir. Katmanlama tekniği ile dişin doğal "transparanlık" ve "opasite" dengesi taklit edilebilir.
          </p>

          <h4>3. Biyouyumluluk (Cıvasız Çözüm):</h4>
          <p>
            Tamamen metal içermez, cıva içermez. Alerji riski neredeyse sıfırdır ve dişe dost bir materyaldir.
          </p>

          <h4>4. Dişi Güçlendirme:</h4>
          <p>
            Dişe kimyasal olarak bağlandığı için, dişin kalan yapısını destekleyerek "kırılma direncini" artırabilir.
          </p>

          <h2>Kompozit Dolgunun "Zayıf Karnı" ve Kliniğimizin Çözümü</h2>
          <p>
            Kompozit dolguların daha dayanıksız olduğu yönünde bir algı vardır. Bu algı kısmen doğrudur, ancak sebebi malzemenin kendisi değil, <strong>"uygulama tekniğidir."</strong>
          </p>

          <h3>Dezavantajı: Teknik Hassasiyet</h3>
          <p>
            Kompozit dolgular, başarıya ulaşmak için kusursuz bir ortam ister. En büyük düşmanı <strong>NEM'dir</strong> (tükürük, kan, nefes buharı). Eğer bonding işlemi sırasında dişin yüzeyine mikron seviyesinde bir nem bulaşırsa, yapışma başarısız olur.
          </p>

          <h3>Çözüm: Neden "Mikroskopik" Kompozit Dolgu?</h3>
          <p>
            Kliniğimizin "Mükemmellik, Detaylarda Gizlidir" felsefesi, kompozit dolgunun bu zayıf karnını tamamen ortadan kaldırır.
          </p>

          <ul>
            <li><strong>Kusursuz İzolasyon:</strong> 25x büyütme altında, rubber dam ile dişi NEM'den %100 izole ederiz.</li>
            <li><strong>%100 Çürük Temizleme:</strong> Mikroskop, çürük doku ile sağlam doku arasındaki sınırı net gösterir.</li>
            <li><strong>Mükemmel Yapışma:</strong> Bonding ajanlarını mikron hassasiyetinde uygularız.</li>
            <li><strong>Hatasız Kenar Uyumu:</strong> Bakteri sızdıracak hiçbir boşluk kalmaz.</li>
          </ul>

          <p>
            <strong>Sonuç:</strong> Mikroskop altında yapılan bir kompozit dolgunun ömrü, bir amalgam dolgunun ömrüne yaklaşır veya onu geçer.
          </p>

          <h2>"Eski Amalgam Dolgularımı Söktürmeli miyim?" (Dürüst Cevap)</h2>
          <p>
            <strong>"Kanıta Dayalı" Cevabımız:</strong> Bilimsel otoriteler (FDI, ADA, WHO), sağlam, kırığı olmayan ve kenar sızıntısı yapmayan amalgam dolguların, sırf cıva endişesiyle sökülmesini önermemektedir.
          </p>

          <p>
            <strong>Neden?</strong> Çünkü amalgam dolguyu sökmek, söküm işlemi sırasında normal çiğnemeden çok daha fazla cıva buharına maruz kalmanıza neden olur.
          </p>

          <h3>Kliniğimizde Hangi Durumlarda Sökeriz?</h3>
          <ul>
            <li><strong>Tıbbi Gereklilik:</strong> Dolgunun altında yeni bir çürük tespit ettiysek</li>
            <li><strong>Kırık veya Sızıntı:</strong> Dolgunun kendisi veya kenarı kırılmışsa</li>
            <li><strong>Estetik Talep:</strong> Hasta bilinçli olarak değişim talep ediyorsa</li>
          </ul>

          <p>
            Amalgam sökme kararı alındığında, bu işlemi güvenli protokoller altında yaparız (rubber dam ile tam izolasyon, yüksek güçlü vakum, büyük parçalar halinde söküm).
          </p>

          <h2>Sonuç: Tercihimiz Modern, Koruyucu ve Estetik Diş Hekimliği</h2>
          <p>
            Amalgam dolgular, diş hekimliğine 150 yıl harika hizmet vermiş, dayanıklı bir "geleneği" temsil eder. Kompozit dolgular ise <strong>"modern, estetik ve koruyucu"</strong> bilimi temsil eder.
          </p>

          <p>
            Dt. Emrecan Eren Polikliniği olarak felsefemiz; "Minimal İnvaziv", "Estetik" ve "Biyouyumlu" yaklaşımları temel alır. Bu nedenle, hastalarımıza sağlam diş dokusunu feda etmeyen ve mikroskop altında kusursuz bir kenar uyumuyla uyguladığımız kompozit dolguları öncelikli olarak tavsiye etmekteyiz.
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
