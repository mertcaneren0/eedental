import type { Metadata } from "next"
import { BlogPostTemplate } from "@/components/blog/blog-post-template"
import { AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Sabah Çene Ağrısı Neden Olur? (Bruksizm Belirtileri) | Dt. Eren - Lüleburgaz",
  description: "Sabahları yorgun, baş ağrısı ve çene ağrısıyla mı uyanıyorsunuz? Lüleburgaz Dt. Eren kliniği, diş sıkma (bruksizm) belirtilerini ve 'kanıta dayalı' modern çözümlerini açıklıyor.",
  keywords: ["bruksizm", "diş sıkma", "çene ağrısı", "sabah baş ağrısı", "gece plağı", "masseter botoks", "Lüleburgaz diş hekimi"],
}

export default function BlogPost() {
  return (
    <BlogPostTemplate
      title="Sabahları Çene Ağrısıyla mı Uyanıyorsunuz? Bu Belirtiler Bruksizm Habercisi Olabilir"
      description="Belirtiler, nedenler ve modern tedavi çözümleri."
      category="Bruksizm Tedavisi"
      categoryIcon={<AlertCircle className="h-5 w-5 text-indigo-600" />}
      pillarPage="/tedaviler/dis-sikma-bruksizm-tedavisi"
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
            Alarm çalar, uyanırsınız ama "dinlenmiş" hissetmezsiniz. Yanaklarınızda, şakaklarınızda veya kulaklarınızın hemen önünde, <strong>"künt" ve "yorgun" bir ağrı</strong> vardır. Çenenizi açmak, esnemek bile rahatsız edicidir. Güne baş ağrısıyla başlarsınız.
          </p>

          <p className="text-lg leading-relaxed text-brown/90 mb-8">
            Eğer bu senaryo size tanıdık geliyorsa, yalnız değilsiniz. Yüksek ihtimalle, siz gece boyunca derin uykuda olmanız gerekirken, çene kaslarınız "mesai" yapıyordu. Bu duruma tıp dilinde <strong>"Bruksizm" (Diş Sıkma veya Gıcırdatma)</strong> diyoruz.
          </p>

          <h2>Bruksizm Nedir? (Sıkma vs. Gıcırdatma)</h2>
          <p>
            Bruksizm, dişlerin normal fonksiyonları dışında, istemsiz olarak birbirine teması, sıkılması veya gıcırdatılmasıdır. İki temel tipi vardır:
          </p>

          <h3>Sıkma (Clenching)</h3>
          <ul>
            <li>"Sessiz" ve daha "yaygın" olan tip</li>
            <li>Dişleri birbirine "kenetleme" ve muazzam dikey basınç uygulama</li>
            <li>Normal çiğneme kuvvetinin 3-4 katına (80-100 kg) çıkabilir</li>
            <li>Sabahki çene ağrısının ana sorumlusu</li>
          </ul>

          <h3>Gıcırdatma (Grinding)</h3>
          <ul>
            <li>"Sesli" olan tip</li>
            <li>Çeneyi sağa-sola veya öne-arkaya kaydırarak dişleri birbirine sürtme</li>
            <li>Genellikle partner tarafından fark edilir</li>
            <li>Diş minesini fiziksel olarak "törpüler", aşındırır ve çatlatır</li>
          </ul>

          <p>
            En tehlikelisi ve yıkıcı olanı <strong>Uyku Bruksizmidir</strong>, çünkü bilinç kontrolümüz tamamen kapalıyken, saatlerce ve çok daha yüksek kuvvetlerle uygulanır.
          </p>

          <h2>Neden Diş Sıkıyoruz? (3 Ana Neden)</h2>

          <h3>1. Stres, Anksiyete ve Yaşam Tarzı (En Yaygın)</h3>
          <p>
            Modern yaşamın getirdiği günlük stres, kaygı ve bastırılmış öfke, vücudumuzdan bir şekilde "deşarj" olmak zorundadır. Uyku sırasında, beynin "stres deşarjı" için en sık kullandığı motor hareket, çene kaslarını kasmaktır.
          </p>
          <p>
            <strong>Yani çeneniz, gün içinde yaşadığınız stresi gece boyunca "öğütür".</strong>
          </p>

          <h3>2. Uyku Bozuklukları (Sessiz Tehlike)</h3>
          <p>
            <strong>Uyku Apnesi:</strong> Gece uykuda nefesin durması, vücut için bir "boğulma" alarmıdır. Vücut, hava yolunu tekrar açmak için diş gıcırdatmaya başlar.
          </p>
          <p>
            Eğer horluyorsanız ve sabahları "yorgun" uyanıyorsanız, bruksizminizin nedeni Uyku Apnesi olabilir.
          </p>

          <h3>3. Oklüzal (Kapanış) Faktörler</h3>
          <ul>
            <li>Olması gerekenden "yüksek" yapılmış dolgu veya kaplama</li>
            <li>Dişler arasındaki "erken temas"</li>
            <li>Ciddi çapraşıklıklar</li>
          </ul>

          <h2>Semptom Kontrol Listesi</h2>

          <h3>Kas ve Eklem Ağrısı:</h3>
          <ul>
            <li>Sabah uyanınca yanak kaslarında ağrı ve yorgunluk</li>
            <li>Kulağın hemen önündeki çene ekleminde hassasiyet</li>
            <li>Şakaklara yayılan "gerilim tipi baş ağrısı"</li>
            <li>Boyun ve omuz kaslarında sertlik</li>
          </ul>

          <h3>Dişlerde Fiziksel Hasar:</h3>
          <ul>
            <li><strong>Aşınma:</strong> Dişlerin boylarının kısalması, düzleşmesi</li>
            <li><strong>Abfraksiyon:</strong> Diş etiyle birleştiği bölgede çentik şeklinde oyuklar</li>
            <li><strong>Çatlaklar ve Kırıklar:</strong> Dolgulu veya sağlam dişlerde anlamsız çatlaklar</li>
          </ul>

          <h3>Diğer Belirtiler:</h3>
          <ul>
            <li>Yanak içini ısırma (beyaz, pürüzlü çizgi)</li>
            <li>Dil kenarlarında tırtıklar</li>
            <li>Kulak çınlaması (tinnitus)</li>
            <li>Çeneden "klik" sesi gelmesi</li>
          </ul>

          <h2>Tedavi Edilmezse Ne Olur?</h2>
          <ul>
            <li><strong>Kalıcı Diş Hasarı:</strong> Aşınan dişler hassaslaşır, çatlar, kırılır</li>
            <li><strong>Estetik Çöküş:</strong> Ön dişlerin kısalması, yüzün "yaşlı" görünmesi</li>
            <li><strong>Kronik TME Bozukluğu:</strong> Çene kilitlenmesi</li>
            <li><strong>Kronik Migren:</strong> Sürekli baş ağrısı, kalitesiz uyku</li>
          </ul>

          <h2>Çözüm: 3 Aşamalı Yönetim</h2>

          <h3>1. Koruma (Oklüzal Splint - Gece Plağı)</h3>
          <p>
            "Altın standart" koruyucu tedavi. Kliniğimizde "Dijital Tasarım" ile üretilen, sert akrilikten yapılmış, çenenizi "ideal" pozisyona kilitleyen stabilizasyon splintidir.
          </p>
          <p>
            <strong>Görevi:</strong> Dişleri aşınmaktan koruyan bir "kalkan" ve çene kaslarını rahatlatır.
          </p>

          <h3>2. Rahatlatma (Masseter Botoks)</h3>
          <p>
            Kliniğimizin "Minimal İnvaziv" ve "modern" çözümü. Özellikle sabah ağrıları çok şiddetliyse kullanılır.
          </p>
          <p>
            <strong>Nasıl Çalışır:</strong> Botoks, aşırı çalışan "Masseter" kasına enjekte edilir. Kası "felç etmez", sadece o "istemsiz" ve "aşırı" sıkma gücünü "normal" seviyeye indirir.
          </p>
          <p>
            <strong>Etkisi:</strong> 1-2 hafta içinde sabahki ağrılar kesilir. Etkisi 4-6 ay sürer.
          </p>

          <h3>3. Kök Neden (Bütünsel Yaklaşım)</h3>
          <ul>
            <li><strong>Yaşam Tarzı:</strong> Stres yönetimi, kafeini azaltma, uyku hijyeni</li>
            <li><strong>Kapanış Analizi:</strong> Dijital tasarım ile oklüzyon analizi</li>
            <li><strong>Uzman Yönlendirmesi:</strong> Uyku Apnesi şüphesinde KBB veya Uyku Uzmanı</li>
          </ul>

          <h2>Sonuç: Sabahları Ağrısız Uyanmak Bir Gerekliliktir</h2>
          <p>
            Sabahları çene ağrısıyla uyanmak, "stresli bir hayatın normal bir parçası" değildir. Bu, vücudunuzun size verdiği net bir "uyarı sinyalidir".
          </p>

          <p>
            Bu sinyali dinlememek, uzun vadede dişlerinizi, çene ekleminizi ve yaşam kalitenizi feda etmek anlamına gelir.
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
