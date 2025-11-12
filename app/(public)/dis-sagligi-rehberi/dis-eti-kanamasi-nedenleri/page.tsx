import type { Metadata } from "next"
import { BlogPostTemplate } from "@/components/blog/blog-post-template"
import { Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Diş Eti Kanaması Neden Olur? Ciddi Bir Sorunun Belirtisi mi? | Dt. Eren - Lüleburgaz",
  description: "Diş eti kanaması normal mi? Diş fırçalarken kanama neden olur? Lüleburgaz Dt. Eren kliniği, gingivitis ve periodontitis (ciddi sorun) arasındaki farkı ve kanıta dayalı çözümleri açıklıyor.",
  keywords: ["diş eti kanaması", "gingivitis", "periodontitis", "diş eti hastalığı", "diş taşı", "Lüleburgaz diş hekimi"],
}

export default function BlogPost() {
  return (
    <BlogPostTemplate
      title="Diş Eti Kanaması Neden Olur? Ciddi Bir Sorunun İlk Belirtisi mi?"
      description="Gingivitis ve periodontitis arasındaki fark ve kanıta dayalı çözümler."
      category="Diş Eti Tedavisi"
      categoryIcon={<Heart className="h-5 w-5 text-rose-600" />}
      pillarPage="/tedaviler/periodontoloji-dis-eti-tedavisi"
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
            Sabah dişlerinizi fırçalarken lavaboda pembe veya kırmızı bir leke görmek, endişe verici olabilir. Çoğu insanın ilk tepkisi: "Galiba dişimi çok sert fırçaladım."
          </p>

          <p className="text-lg leading-relaxed text-brown/90 mb-8">
            <strong>Sağlıklı diş eti KANAMAZ.</strong> Diş eti kanaması, sert fırçalamanın bir sonucu değil, o bölgede zaten var olan bir sorunun, yani bir enflamasyonun (iltihap) ilk ve en önemli "uyarı sinyali"dir.
          </p>

          <h2>Kanamanın Bilimsel Nedeni: Vücudunuzun "İmdat Çığlığı"</h2>
          <p>
            Diş eti kanamasını anlamak için, vücudunuzun nasıl çalıştığını bilmek gerekir. Parmağınıza bir kıymık battığında ne olur? Vücudunuz, o "yabancı" istilacıyı atmak için bölgeye acil olarak kan hücum ettirir.
          </p>

          <p>
            Diş etleriniz için de "kıymık", <strong>"bakteriyel plak"</strong> adı verilen yapışkan bakteri tabakasıdır.
          </p>

          <h3>Süreç Şöyle İşler:</h3>
          <ol>
            <li><strong>Plak Birikimi:</strong> Yiyecek artıkları diş yüzeyinde kaldığında, bakteriler çoğalır ve "plak" adı verilen yapışkan bir film oluşturur.</li>
            <li><strong>Toksin Salgılama:</strong> Bu plak içindeki bakteriler, diş etinizi tahriş eden "toksinler" salgılar.</li>
            <li><strong>Vücudun Tepkisi:</strong> Vücudunuz, bu bakteri istilasına karşı savaşmak için bölgeye "savaşçı" kan hücrelerini gönderir.</li>
            <li><strong>Sonuç: KANAMA.</strong> Kanla dolup şişen, kızaran diş etleri, diş fırçasının en ufak temasıyla bile kolayca kanamaya başlar.</li>
          </ol>

          <p>
            Yani, diş eti kanaması bir "hastalık" değil, bir <strong>"hastalık belirtisidir."</strong> Vücudunuz size, "Burada bir istila var ve savaşıyorum, bana yardım et!" demektedir.
          </p>

          <h2>Ciddi Sorun mu? (Aşama 1: Gingivitis - Geri Dönüşümlü Uyarı)</h2>
          <p>
            <strong>Gingivitis (Diş Eti İltihabı)</strong>, bu sorunun ilk ve "geri dönüşümlü" aşamasıdır.
          </p>

          <h3>Nedir?</h3>
          <p>
            Enfeksiyon ve iltihap, sadece diş etindedir. Henüz dişi destekleyen çene kemiğine sıçramamıştır.
          </p>

          <h3>Belirtileri:</h3>
          <ul>
            <li>Diş etleri kırmızı, parlak ve şiştir</li>
            <li>Fırçalarken veya diş ipi kullanırken kolayca kanarlar</li>
            <li>Genellikle ağrı yoktur</li>
          </ul>

          <h3>İyi Haber:</h3>
          <p>
            Gingivitis, <strong>%100 tedavi edilebilir ve geri döndürülebilir</strong>. Kemiğinizde kalıcı bir hasar oluşmamıştır.
          </p>

          <p>
            <strong>Tedavisi:</strong> Profesyonel bir diş taşı temizliği ile o bölgedeki tüm bakteri plağı ve diş taşı temizlenir. İyi bir ev bakımı ile birleştiğinde, diş eti birkaç gün içinde eski sağlıklı haline döner.
          </p>

          <h2>"Ciddi Sorun" Başlıyor (Aşama 2: Periodontitis - Yıkım Aşaması)</h2>
          <p>
            Gingivitis aşamasındaki o "uyarı sinyalini" görmezden gelirseniz ne olur? Enfeksiyon daha derine iner.
          </p>

          <p>
            <strong>Periodontitis (Diş Eti Hastalığı)</strong>, bu sorunun ikinci, "ciddi" ve "geri dönüşümsüz" aşamasıdır.
          </p>

          <h3>Nedir?</h3>
          <p>
            Enfeksiyon, artık sadece diş etinde değildir. Dişi destekleyen "periodontal ligamentlere" ve en önemlisi <strong>"çene kemiğine"</strong> sıçramıştır.
          </p>

          <h3>Belirtileri:</h3>
          <ul>
            <li>Yoğun ve bazen kendiliğinden gelen diş eti kanaması</li>
            <li>Kötü ağız kokusu ve ağızda metalik tat</li>
            <li>Diş eti çekilmesi (dişlerin "uzun" görünmesi)</li>
            <li>Dişler ve diş etleri arasından iltihap gelmesi</li>
            <li>Dişlerin sallanması veya yer değiştirmesi</li>
          </ul>

          <h3>Kötü Haber:</h3>
          <p>
            Periodontitis ile oluşan <strong>kemik kaybı geri döndürülemez</strong>. Kaybedilen kemik, kendi kendine geri gelmez.
          </p>

          <p>
            <strong>Tedavisi:</strong> Bu aşamada artık basit bir diş taşı temizliği yetmez. İleri seviye diş eti tedavisi (küretaj) veya cerrahi müdahaleler gerekir.
          </p>

          <h2>Diğer Nedenler: Sistemik Faktörler</h2>
          <p>
            Hastalarımızın %90'ında kanamanın nedeni plak ve diş taşıdır. Ancak diğer faktörler de rol oynayabilir:
          </p>

          <h3>Hormonal Değişiklikler:</h3>
          <p>
            Özellikle hamilelik veya ergenlik döneminde, hormon dalgalanmaları diş etlerinin plağa karşı verdiği tepkiyi abartılı hale getirebilir.
          </p>

          <h3>Sistemik Hastalıklar:</h3>
          <ul>
            <li><strong>Diyabet:</strong> Diyabet hastalarının enfeksiyonla savaşma yeteneği daha zayıftır ve diş eti hastalığına yakalanma riskleri çok daha yüksektir.</li>
            <li><strong>Kan Hastalıkları:</strong> Lösemi veya kan pıhtılaşma bozuklukları diş etlerinde sebepsiz kanamalara yol açabilir.</li>
          </ul>

          <h3>İlaç Kullanımı:</h3>
          <p>
            Bazı tansiyon ilaçları veya epilepsi ilaçları, diş etlerinde büyümeye ve dolayısıyla kanamaya neden olabilir.
          </p>

          <h2>Ne Yapmalısınız? (4 Adımlık Eylem Planı)</h2>
          
          <h3>1. ASLA FIRÇALAMAYI BIRAKMAYIN!</h3>
          <p>
            "Kanıyor, o yüzden oraya dokunmayayım" düşüncesi en büyük hatadır. Kanayan bölgeyi daha yumuşak, daha nazik ama daha etkili fırçalamalısınız.
          </p>

          <h3>2. Doğru Ekipmanı Kullanın:</h3>
          <p>
            Mutlaka <strong>yumuşak (soft)</strong> veya ekstra yumuşak kıllı bir diş fırçası kullanın.
          </p>

          <h3>3. Diş İpi Kullanmaya Başlayın:</h3>
          <p>
            Kanamaların çoğu, fırçanın ulaşamadığı "ara yüzlerde" başlar. Diş ipi kullandığınızda kan geliyorsa, bu tam da o bölgenin diş ipine ihtiyacı olduğunun kanıtıdır.
          </p>

          <h3>4. PROFESYONEL MUAYENE Alın (En Önemli Adım):</h3>
          <p>
            Evde yaptıklarınız sadece "ilk yardım"dır. Sorunun Gingivitis mi yoksa Periodontitis mi olduğunu sadece bir diş hekimi anlayabilir.
          </p>

          <h2>Sonuç: Kanama, Vücudunuzun "Çek Motoru" Işığıdır</h2>
          <p>
            Arabanızın panelinde "yağ lambası" yandığında, onu bir bantla kapatıp yola devam etmezsiniz. Diş eti kanaması, ağzınızın <strong>"çek motoru" ışığıdır</strong>.
          </p>

          <p>
            Onu "sert fırçaladım" diyerek görmezden gelmek, ileride Periodontitis, kemik kaybı, diş sallanması ve hatta diş çekimi ile sonuçlanacak pahalı ve karmaşık bir süreci başlatır.
          </p>

          <p>
            En iyi tedavi; sorunu "Gingivitis" aşamasındayken, yani sadece bir diş taşı temizliği ile çözmektir.
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
