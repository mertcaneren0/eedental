import type { Metadata } from "next"
import { BlogPostTemplate } from "@/components/blog/blog-post-template"
import { Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Küretaj (Derin Diş Temizliği) Nedir, Neden Yapılır? (Periodontitis) | Dt. Eren - Lüleburgaz",
  description: "Diş hekiminiz 'küretaj' mı dedi? Lüleburgaz Dt. Eren kliniği, derin diş temizliğinin (küretaj) diş taşı temizliğinden (detartraj) farkını, acı S/S'sını ve kanıta dayalı önemini açıklıyor.",
  keywords: ["küretaj", "derin temizlik", "periodontitis", "diş eti hastalığı", "kök yüzeyi düzleştirme", "Lüleburgaz diş hekimi"],
}

export default function BlogPost() {
  return (
    <BlogPostTemplate
      title="Küretaj (Derin Diş Temizliği) Nedir? Diş Taşı Temizliğinden Farkı Nedir?"
      description="Periodontitis tedavisi, prosedür ve beklentiler."
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
            Diş hekiminizi ziyaret ettiniz, belki de sadece rutin bir kontrol veya diş eti kanaması şikayetiyle gittiniz. Ancak muayene sonunda, "normal diş taşı temizliği" yerine, <strong>"Küretaj" veya "Derin Temizlik"</strong> adı verilen bir tedaviye ihtiyacınız olduğunu öğrendiniz.
          </p>

          <p className="text-lg leading-relaxed text-brown/90 mb-8">
            <strong>Hızlı cevap:</strong> Küretaj, diş taşı temizliğinin "bir sonraki seviyesi" değildir. İkisi, tamamen farklı iki hastalığı tedavi eder. Ve evet, küretaj, dişlerinizin sallanarak kaybedilmesini önleyen en önemli adımdır.
          </p>

          <h2>Ayrımı Anlamak: Gingivitis vs. Periodontitis</h2>
          <p>
            Bu iki tedaviyi ayıran şey, hastalığın "nerede" olduğudur.
          </p>

          <h3>1. Basamak: Gingivitis (Diş Eti İltihabı)</h3>
          <ul>
            <li><strong>Problem Nerede:</strong> Enfeksiyon sadece diş etinin ÜSTÜNDEDİR</li>
            <li><strong>Hasar:</strong> Diş eti kanar, şişer, kızarır. Ancak çene kemiğinde henüz kayıp YOKTUR</li>
            <li><strong>Tedavisi:</strong> Diş Taşı Temizliği (Detartraj) yeterlidir</li>
            <li><strong>Sonuç:</strong> %100 iyileşir ve geri döner</li>
          </ul>

          <h3>2. Basamak (CİDDİ): Periodontitis (Diş Eti Hastalığı)</h3>
          <ul>
            <li><strong>Problem Nerede:</strong> Enfeksiyon diş etinin ALTINA, diş kökünün yüzeyine ve çene kemiğine ilerlemiştir</li>
            <li><strong>"Periodontal Cep":</strong> Bakteriler, diş ile diş eti arasında derin boşluklar (3-4 mm+) yaratır</li>
            <li><strong>Düşman:</strong> Diş eti altı diş taşı ve enfekte kök yüzeyi</li>
            <li><strong>Hasar:</strong> Kemik kaybı başlamıştır (geri dönüşümsüz)</li>
            <li><strong>Tedavisi:</strong> Normal temizlik artık İŞE YARAMAZ - Küretaj gerekir</li>
          </ul>

          <h2>Küretaj Tam Olarak Nedir? (Adım Adım Prosedür)</h2>
          <p>
            Küretaj (resmi adıyla "Kök Yüzeyi Düzleştirmesi ve Subgingival Küretaj"), Periodontitis hastalığını durdurmak için tasarlanmış bir tedavidir.
          </p>

          <h3>Adım 1: Teşhis (Ölçüm Şarttır)</h3>
          <p>
            <strong>Periodontal Cep Ölçümü:</strong> Özel bir "periodontal prob" ile her dişinizin etrafındaki cep derinliğini ölçeriz.
          </p>
          <ul>
            <li>Sağlıklı cep: 1-3 mm</li>
            <li>Periodontitis: 4mm, 5mm veya daha derin</li>
          </ul>

          <h3>Adım 2: Anestezi (Sıfır Acı Garantisi)</h3>
          <p>
            Küretaj işlemi, <strong>lokal anestezi (iğne) altında</strong> yapılır. İşlem sırasında kesinlikle acı veya ağrı hissetmezsiniz.
          </p>

          <h3>Adım 3: Kök Yüzeyi Düzleştirme</h3>
          <p>
            Anestezi sağlandıktan sonra, iki tip alet kullanılır:
          </p>
          <ol>
            <li><strong>Ultrasonik Aletler:</strong> Cep içindeki büyük diş taşlarını titreşimle kırar</li>
            <li><strong>El Aletleri (Küretler):</strong> Diş etinin altına girer ve kök yüzeyine yapışmış taşları, bakteri plaklarını ve enfekte dokuyu titizlikle kazır</li>
          </ol>
          <p>
            <strong>Amaç:</strong> Kök yüzeyini pürüzsüz, temiz ve "biyouyumlu" hale getirmek.
          </p>

          <h3>Adım 4: Dezenfeksiyon ve İyileşme</h3>
          <p>
            Tüm kök yüzeyleri temizlendikten sonra, cepler özel antiseptik solüsyonlarla yıkanır. Artık "temiz" bir kök yüzeyi ile karşılaşan diş eti, o yüzeye tekrar "yapışma" eğilimi gösterir.
          </p>

          <h2>"Minimal İnvaziv" Felsefede Küretajın Yeri</h2>
          <p>
            Küretaj, "tam cerrahi" (Flep Operasyonu) ile "yüzeyel temizlik" (Detartraj) arasındaki <strong>"Minimal İnvaziv" köprüdür</strong>. Bu, hastalığı ameliyatsız durdurmak için son şansımızdır.
          </p>

          <h2>Sıkça Sorulan Sorular: Dürüst Cevaplar</h2>

          <h3>1. "Küretaj Sonrası Dişlerim Daha Çok Sallanıyor"</h3>
          <p>
            <strong>Dürüst Cevap:</strong> Evet, işlemden hemen sonraki günlerde geçici olarak böyle bir hissiyat normaldir.
          </p>
          <p>
            <strong>Neden:</strong> Sallanan dişleri birbirine yapıştıran diş taşlarını (sahte destek) temizledik. Şişmiş diş eti iyileşip sıkılaştıkça, dişler daha sağlıklı bir şekilde desteklenecektir.
          </p>

          <h3>2. "Küretaj Sonrası Diş Eti Çekilmem Arttı"</h3>
          <p>
            <strong>Dürüst Cevap:</strong> Evet, bu görsel olarak doğrudur ve normaldir.
          </p>
          <p>
            <strong>Acı Gerçek:</strong> O gördüğünüz "boşluk", küretajın yaptığı bir şey değildir. O, hastalığın zaten yok ettiği çene kemiğinizin bıraktığı boşluktur. Şişmiş diş eti onu kamufle ediyordu.
          </p>

          <h3>3. "İşlem Sonrası Çok Ağrım Oldu"</h3>
          <p>
            <strong>Dürüst Cevap:</strong> İşlem sonrası 1-2 gün süren hassasiyet normaldir. Bu durum, hekiminizin reçete edeceği ağrı kesiciler ile %100 kontrol altına alınır.
          </p>

          <h2>Sonuç: Küretaj Bir "Kurtarma" Operasyonudur</h2>
          <p>
            Küretaj, "seçenek" değil, <strong>"zorunluluktur"</strong>. Periodontitis, kronik ve agresif bir hastalıktır. Eğer küretaj ile o derin ceplerin dibindeki enfeksiyon kaynağı temizlenmezse, süreç kaçınılmazdır:
          </p>
          <ul>
            <li>Daha fazla kemik kaybı</li>
            <li>Artan diş sallanması</li>
            <li>Tamamen çürüksüz dişlerin sallanarak kaybedilmesi</li>
          </ul>

          <p>
            Ayrıca, diş etlerinizdeki bu kronik enfeksiyon, kan dolaşımınıza karışarak <strong>kalp hastalığı, felç ve diyabet</strong> gibi sistemik hastalıkların riskini bilimsel olarak artırır.
          </p>

          <p>
            Küretaj, sadece dişlerinizi değil, genel sağlığınızı da kurtaran, "kanıta dayalı" bir tıbbi müdahaledir.
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
