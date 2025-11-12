import type { Metadata } from "next"
import { BlogPostTemplate } from "@/components/blog/blog-post-template"
import { Drill } from "lucide-react"

export const metadata: Metadata = {
  title: "İmplant Acıtır mı? Cerrahi ve İyileşme Süreci | Dt. Emrecan Eren",
  description: "İmplant tedavisi sırasında ve sonrasında ağrı yönetimi, anestezi ve iyileşme süreci hakkında bilmeniz gerekenler.",
  keywords: ["implant acıtır mı", "implant ağrısı", "implant tedavisi", "diş implantı", "ağrı yönetimi"],
}

export default function BlogPost() {
  return (
    <BlogPostTemplate
      title="İmplant Acıtır mı? Cerrahi ve İyileşme Sürecinde Sizi Neler Bekler?"
      description="Anestezi, ağrı yönetimi ve iyileşme süreci hakkında bilmeniz gerekenler."
      category="İmplant Tedavisi"
      categoryIcon={<Drill className="h-5 w-5 text-blue-600" />}
      pillarPage="/tedaviler/implant-tedavisi"
      relatedPosts={[
        {
          title: "Kemik Tozu (Greft) Nedir? Her İmplant İçin Gerekli midir?",
          href: "/dis-sagligi-rehberi/kemik-tozu-greft-nedir",
        },
        {
          title: "İmplant Tedavisi Sonrası Beslenme Rehberi",
          href: "/dis-sagligi-rehberi/implant-sonrasi-beslenme",
        },
      ]}
      content={
        <>
          <h2>İmplant Tedavisi Acıtır mı?</h2>
          <p>
            İmplant tedavisi hakkında en çok sorulan sorulardan biri "acıtır mı?" sorusudur. 
            Kısa cevap: <strong>Hayır, işlem sırasında ağrı hissetmezsiniz.</strong> Modern anestezi 
            teknikleri sayesinde cerrahi tamamen ağrısız gerçekleştirilir.
          </p>

          <h2>İşlem Sırasında: Lokal Anestezi</h2>
          <p>
            İmplant cerrahisi <strong>lokal anestezi</strong> altında yapılır. Bu, işlem yapılacak 
            bölgenin tamamen uyuşturulması anlamına gelir. Anestezi etkisi altındayken:
          </p>
          <ul>
            <li>Hiçbir ağrı hissetmezsiniz</li>
            <li>Basınç ve dokunma hissi olabilir (ağrı değil)</li>
            <li>Tamamen uyanık ve bilinçlisinizdir</li>
            <li>Doktorunuzla iletişim kurabilirsiniz</li>
          </ul>

          <h3>Anksiyete İçin Seçenekler</h3>
          <p>
            Dental anksiyetesi yüksek hastalarda, lokal anesteziye ek olarak:
          </p>
          <ul>
            <li><strong>Sedasyon:</strong> Hafif sakinleştirici ilaçlar</li>
            <li><strong>Bilinçli Sedasyon:</strong> Daha derin rahatlama</li>
            <li><strong>Genel Anestezi:</strong> Çok nadir durumlarda, kompleks vakalarda</li>
          </ul>

          <h2>İşlem Sonrası: İlk 24-48 Saat</h2>
          <p>
            Anestezi etkisi geçtikten sonra (2-4 saat), hafif-orta düzeyde rahatsızlık normaldir:
          </p>

          <h3>Beklenen Belirtiler:</h3>
          <ul>
            <li><strong>Hafif ağrı:</strong> Ağrı kesicilerle kolayca kontrol edilebilir</li>
            <li><strong>Şişlik:</strong> 2-3 gün içinde zirveye ulaşır, sonra azalır</li>
            <li><strong>Hassasiyet:</strong> İmplant bölgesinde dokunma hassasiyeti</li>
            <li><strong>Hafif kanama:</strong> İlk 24 saat içinde minimal kanama olabilir</li>
          </ul>

          <h3>Ağrı Yönetimi:</h3>
          <p>
            Doktorunuz size bir ağrı yönetim planı verecektir:
          </p>
          <ul>
            <li><strong>İbuprofen (Advil):</strong> İltihaplanma ve ağrı için</li>
            <li><strong>Parasetamol (Parol):</strong> Ek ağrı kontrolü</li>
            <li><strong>Reçeteli ağrı kesiciler:</strong> Gerekirse daha güçlü seçenekler</li>
            <li><strong>Buz kompresi:</strong> İlk 24 saat şişliği azaltmak için</li>
          </ul>

          <h2>İyileşme Süreci: 1. Hafta</h2>
          <p>
            Çoğu hasta, işlemden 3-5 gün sonra normal aktivitelerine dönebilir:
          </p>
          <ul>
            <li><strong>1-3. Gün:</strong> En fazla rahatsızlık, ağrı kesici kullanımı</li>
            <li><strong>4-7. Gün:</strong> Şişlik ve ağrı belirgin şekilde azalır</li>
            <li><strong>7-10. Gün:</strong> Dikişler alınır (eğer kullanıldıysa)</li>
          </ul>

          <h2>Uzun Vadeli İyileşme: Osseointegrasyon</h2>
          <p>
            İmplantın kemikle kaynaşması (osseointegrasyon) 3-6 ay sürer. Bu süreçte:
          </p>
          <ul>
            <li>Ağrı olmamalıdır</li>
            <li>Normal yaşam aktivitelerinize devam edebilirsiniz</li>
            <li>Düzenli kontroller önemlidir</li>
          </ul>

          <h2>Uyarı İşaretleri: Ne Zaman Doktora Başvurmalısınız?</h2>
          <p>
            Aşağıdaki belirtiler normalin dışındadır ve doktorunuza başvurmalısınız:
          </p>
          <ul>
            <li>Ağrı kesicilere rağmen şiddetli, artan ağrı</li>
            <li>Yüksek ateş (38°C üzeri)</li>
            <li>Aşırı şişlik veya kızarıklık</li>
            <li>İmplant bölgesinden pürülan akıntı</li>
            <li>İmplantın hareketli hissedilmesi</li>
          </ul>

          <h2>İmplant vs. Diş Çekimi: Ağrı Karşılaştırması</h2>
          <p>
            Birçok hasta, implant cerrahisinin bir diş çekiminden <strong>daha az rahatsız edici</strong> 
            olduğunu bildirir. Bunun nedenleri:
          </p>
          <ul>
            <li>Kontrollü, planlı bir prosedür</li>
            <li>Minimal travma</li>
            <li>Modern cerrahi teknikler</li>
            <li>Etkili ağrı yönetimi protokolleri</li>
          </ul>

          <h2>Sonuç</h2>
          <p>
            İmplant tedavisi, modern anestezi ve ağrı yönetimi teknikleri sayesinde <strong>konforlu 
            bir prosedürdür</strong>. İşlem sırasında ağrı hissetmezsiniz, işlem sonrası rahatsızlık 
            ise ağrı kesicilerle kolayca yönetilebilir.
          </p>
          <p>
            <strong>Dt. Emrecan Eren Kliniği</strong> olarak, hasta konforunu önceliğimiz olarak 
            görüyoruz. Detaylı bilgi ve kişiselleştirilmiş tedavi planı için randevu alabilirsiniz.
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
