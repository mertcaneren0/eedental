import type { Metadata } from "next"
import { BlogPostTemplate } from "@/components/blog/blog-post-template"
import { AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Acil Diş Ağrısı & Kırık: İlk Yardım Rehberi (Hekim Kontrollü) | Dt. Eren - Lüleburgaz",
  description: "Şiddetli diş ağrısı, kırık veya apse mi var? Lüleburgaz Dt. Eren kliniği, hekime gelene kadar acil ağrıyı yönetecek 'kanıta dayalı' (E-A-T) ilk yardım adımlarını açıklıyor.",
  keywords: ["acil diş ağrısı", "diş kırılması", "diş travması", "apse", "avülsiyon", "ilk yardım", "Lüleburgaz acil diş hekimi"],
}

export default function BlogPost() {
  return (
    <BlogPostTemplate
      title="Acil Diş Ağrısı veya Kırık Durumunda Ne Yapılmalı? (Hekim Kontrollü İlk Yardım Rehberi)"
      description="Hayat kurtarıcı ilk yardım adımları ve yasaklar."
      category="Acil Diş Hekimliği"
      categoryIcon={<AlertTriangle className="h-5 w-5 text-red-600" />}
      pillarPage="/iletisim"
      content={
        <>
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8">
            <p className="text-sm text-red-900 mb-2 font-bold">
              <strong>ACİL UYARI:</strong> Bu bir ilk yardım rehberidir. Profesyonel tıbbi muayenenin yerine GEÇMEZ.
            </p>
            <p className="text-xs text-red-800">
              Hayatı tehdit eden acil durumda (nefes almada zorluk, durdurulamayan kanama, yüksek ateş) derhal 112'yi arayın. Diğer tüm diş acil durumları için vakit kaybetmeden diş hekiminize başvurun.
            </p>
          </div>

          <div className="bg-vizon/5 border-l-4 border-vizon p-6 rounded-r-lg mb-8">
            <p className="text-sm text-brown/80 mb-2">
              <strong>Tıbbi İçerik Onayı:</strong> Bu makale, Dt. Emrecan Eren tarafından tıbbi olarak incelenmiş ve onaylanmıştır.
            </p>
          </div>

          <p className="text-lg leading-relaxed text-brown/90 mb-6">
            Gece yarısı başlayan, uyutmayan, zonklayıcı bir diş ağrısı. Talihsiz bir düşme sonucu kırılan veya yerinden fırlayan bir ön diş. Diş acil durumları, her zaman en beklenmedik, en endişe verici ve en acı verici anlarda gelir.
          </p>

          <p className="text-lg leading-relaxed text-brown/90 mb-8">
            Bu panik anında, ne yapacağınızı bilmek, <strong>"kalıcı bir hasar" ile "basit bir tedavi" arasındaki farkı yaratabilir</strong>. En önemli kuralımız: Sakin kalın ve vakit kaybetmeden diş hekiminizi arayın.
          </p>

          <h2>Acil Durum 1: Şiddetli, Zonklayıcı Diş Ağrısı (Apse/Enfeksiyon)</h2>
          <p>
            Bu, sizi uyutmayan, başınıza vuran ve ağrı kesicilere zor yanıt veren "basınçlı" bir ağrıdır. Genellikle tedavi edilmemiş bir çürüğün sinire ulaştığının habercisidir.
          </p>

          <h3>✅ NE YAPMALISINIZ?</h3>
          <ol className="space-y-4">
            <li>
              <strong>1. Hekiminizi Arayın:</strong> Derhal kliniğimizi veya en yakın acil diş hekimini arayın. Bu durum "kendi kendine" geçmez.
            </li>
            <li>
              <strong>2. Ilık Tuzlu Su ile Gargara:</strong> Bir su bardağı ılık suya bir çay kaşığı tuz ekleyin. Bu solüsyonla ağzınızı nazikçe çalkalayın. Tuzlu su, doğal bir antiseptiktir ve basıncı hafifletebilir.
            </li>
            <li>
              <strong>3. SOĞUK Kompres (Dışarıdan):</strong> Bir buz torbasını ince bir havluya sarın. Yanağınızın dışından temas ettirin. 15 dakika tutun, 15 dakika dinlendirin. Soğuk, şişliği ve basıncı azaltır.
            </li>
            <li>
              <strong>4. Ağrı Kesici:</strong> Bilinen alerjiniz yoksa, "Ibuprofen" içeren ağrı kesiciler bu tip ağrılarda genellikle daha etkilidir. Asla önerilen dozu aşmayın.
            </li>
            <li>
              <strong>5. Başınızı Yüksekte Tutun:</strong> Başınızın altına çift yastık koyarak başınızı kalbinizden daha yüksekte tutun.
            </li>
          </ol>

          <h3>❌ ASLA YAPMAYIN!</h3>
          <div className="bg-red-50 border-2 border-red-500 p-6 rounded-lg my-6">
            <ul className="space-y-3">
              <li><strong>❌ ASLA DİŞİN ÜZERİNE ASPİRİN, KOLONYA, ALKOL, RAKI veya KARANFİL YAĞI BASMAYIN!</strong> Bu maddeler kimyasal yakıcılardır ve diş etinizi yakar.</li>
              <li><strong>❌ ASLA SICAK KOMPRES UYGULAMAYIN!</strong> Sıcak, enfeksiyonun daha hızlı yayılmasına neden olur.</li>
              <li><strong>❌ ASLA HEKİMİNİZE DANIŞMADAN ANTİBİYOTİK KULLANMAYIN!</strong> Yanlış antibiyotik, enfeksiyonu daha dirençli hale getirebilir.</li>
            </ul>
          </div>

          <h2>Acil Durum 2: Diş Kırılması veya Çatlaması (Travma)</h2>

          <h3>✅ NE YAPMALISINIZ?</h3>
          <ol className="space-y-4">
            <li>
              <strong>1. Sakin Kalın ve PARÇAYI BULUN:</strong> O kırılan küçük diş parçası, sizin "altın biletiniz" olabilir.
            </li>
            <li>
              <strong>2. Parçayı Nasıl Saklamalı?</strong>
              <ul className="ml-6 mt-2 space-y-2">
                <li>• <strong>EN İYİ:</strong> SOĞUK SÜT (pH'ı ve ozmotik basıncı ideal)</li>
                <li>• <strong>İYİ:</strong> KENDİ TÜKÜRÜĞÜNÜZ (dilin altında veya yanak içinde)</li>
                <li>• <strong>KÖTÜ:</strong> Kuru peçete, normal su (parçayı öldürür)</li>
              </ul>
            </li>
            <li>
              <strong>3. Ağzınızı Çalkalayın:</strong> Bölgedeki kanı temizlemek için ılık su ile çalkalayın.
            </li>
            <li>
              <strong>4. Kanamayı Durdurun:</strong> Steril gazlı bez ile 10-15 dakika hafifçe basınç uygulayın.
            </li>
            <li>
              <strong>5. Soğuk Kompres:</strong> Şişlik varsa dışarıdan soğuk kompres uygulayın.
            </li>
            <li>
              <strong>6. Hekiminizi Arayın:</strong> Derhal kliniğimizi arayın.
            </li>
          </ol>

          <p className="bg-green-50 border-l-4 border-green-500 p-4 my-4">
            <strong>Kliniğimizin Farkı:</strong> Eğer parça uygun şekilde saklanmışsa ve hızlıca (ilk birkaç saat) bize ulaştırılırsa, o parçayı "Bonding" tekniğiyle dişinize yeniden yapıştırabiliriz.
          </p>

          <h2>Acil Durum 3: Dişin Tamamen Yerinden Çıkması (Avülsiyon) - EN ACİL!</h2>
          <p className="text-red-600 font-bold text-lg">
            ⏰ "ALTIN SAAT": İlk 30-60 dakika içinde doğru şekilde saklanır ve yerine konursa, kurtulma şansı %90'ın üzerindedir!
          </p>

          <h3>✅ HAYATİ ADIMLAR:</h3>
          <ol className="space-y-4">
            <li>
              <strong>1. Sakin Kalın ve Dişi BULUN</strong>
            </li>
            <li>
              <strong>2. DİŞİ NERESİNDEN TUTMALI?</strong>
              <div className="bg-yellow-50 border-2 border-yellow-500 p-4 rounded-lg my-3">
                <p className="font-bold text-yellow-900">⚠️ ASLA KÖKÜNDEN (Sarı, Pürüzlü Kısım) TUTMAYIN!</p>
                <p className="mt-2">Dişi SADECE "KURON" (Görünen Beyaz, Parlak Mine) kısmından tutun. Kök yüzeyine dokunmak, canlı hücreleri öldürür ve kurtulma şansını sıfıra indirir.</p>
              </div>
            </li>
            <li>
              <strong>3. NASIL TEMİZLEMELİ?</strong>
              <p>Eğer diş kirlendiyse: SADECE akan soğuk suyun altında, köke dokunmadan, 10 saniyeyi geçmeyecek şekilde nazikçe durulayın. ASLA sabunla yıkamayın, fırçalamayın, ovalamayın!</p>
            </li>
            <li>
              <strong>4. NASIL SAKLAMALI?</strong>
              <ul className="ml-6 mt-2 space-y-2">
                <li>• <strong>AŞAMA 1 (En İyisi):</strong> YERİNE TAKMAYI DENEYİN (Panik halinde değilseniz)</li>
                <li>• <strong>AŞAMA 2:</strong> SOĞUK SÜTE KOYUN</li>
                <li>• <strong>AŞAMA 3:</strong> DİLİN ALTINDA SAKLAYIN (yutma riski yoksa)</li>
              </ul>
            </li>
            <li>
              <strong>5. DERHAL (DAKİKALAR İÇİNDE) DİŞ HEKİMİNE GİDİN!</strong>
              <p className="text-red-600 font-bold mt-2">"Altın Saat"i kaçırmayın!</p>
            </li>
          </ol>

          <h2>Sonuç: Acil Durum, Bir Sonuçtur</h2>
          <p>
            O zonklayan apse, tedavi edilmemiş bir çürüğün sonucudur. O kırılan diş, genellikle altta yatan bir diş sıkma probleminin sonucudur.
          </p>

          <p>
            "Kanıta dayalı" ilk yardım, o anı kurtarır. Ancak kliniğimizdeki "Minimal İnvaziv" ve "Dijital" teşhis yöntemleri, bu acil duruma neden olan kök sorunu bulup, kalıcı olarak çözerek, bu kabusu bir daha yaşamamanızı sağlar.
          </p>

          <p className="text-lg font-bold text-brown mt-6">
            Lüleburgaz'da acil bir diş sorunu yaşıyorsanız, panik yapmayın. Sakin kalın, bu rehberdeki adımları uygulayın ve derhal kliniğimizi arayın.
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
