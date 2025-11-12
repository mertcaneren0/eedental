import type { Metadata } from "next"
import { BlogPostTemplate } from "@/components/blog/blog-post-template"
import { Drill } from "lucide-react"

export const metadata: Metadata = {
  title: "İmplant Sonrası Beslenme Rehberi: İlk Hafta Neler Yenir? | Dt. Eren - Lüleburgaz",
  description: "İmplant sonrası ne yenir, ne zaman normal yemek yenir? Lüleburgaz Dt. Eren kliniği, ilk 7 gün için (sıvı, püre, yumuşak) beslenme listesini ve iyileşme tüyolarını paylaşıyor.",
  keywords: ["implant sonrası beslenme", "implant sonrası ne yenir", "osseointegrasyon", "iyileşme dönemi", "Lüleburgaz diş hekimi"],
}

export default function BlogPost() {
  return (
    <BlogPostTemplate
      title="İmplant Tedavisi Sonrası Beslenme Rehberi: İlk Hafta Neler Yenmeli?"
      description="İyileşme sürecinde beslenme önerileri ve kaçınılması gerekenler."
      category="İmplant Tedavisi"
      categoryIcon={<Drill className="h-5 w-5 text-blue-600" />}
      pillarPage="/tedaviler/implant-tedavisi"
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
            İmplant operasyonunuzu başarıyla tamamladınız. Eksik dişinizin yerine, ömür boyu sizinle kalacak olan "kanıta dayalı" ve modern bir çözüm yerleştirildi. Artık top sizde: <strong>İyileşme süreci</strong>.
          </p>

          <p className="text-lg leading-relaxed text-brown/90 mb-8">
            Ameliyattan sonra, özellikle ilk bir hafta boyunca, beslenme düzeniniz bu tedavinin başarısını ve konforunuzu doğrudan etkileyecek en önemli faktördür.
          </p>

          <h2>İyileşmenin Altın Kuralı: Osseointegrasyon (Kemikleşme) Nedir?</h2>
          <p>
            İmplant sonrası beslenmenin neden bu kadar kritik olduğunu anlamak için, implantın nasıl çalıştığını bilmek gerekir. İmplant, çene kemiğine yerleştirildikten sonra, kemik hücreleri (osteoblastlar) implantın titanyum yüzeyine doğru ilerler ve onunla biyolojik olarak birleşir. Bu mucizevi sürece <strong>"Osseointegrasyon" (kemikleşme)</strong> denir.
          </p>

          <p>
            İmplantınızın ömür boyu "diş kökünüz" gibi davranmasının sırrı budur. Bu süreç 3 ila 6 ay sürer. Ancak <strong>ilk hafta</strong>, bu biyolojik birleşmenin en hassas olduğu, yaranın kapandığı ve enfeksiyon riskinin en yüksek olduğu dönemdir.
          </p>

          <h2>İlk 24-48 Saat: "SOĞUK, SIVI ve PASİF" Dönemi</h2>
          <p>
            Bu, tüm sürecin en kısıtlayıcı ama en önemli fırtına öncesi sessizlik dönemidir. Vücudunuz o bölgede bir kan pıhtısı oluşturarak "ilk yardımı" yapmaya çalışır. Bizim görevimiz bu pıhtıyı korumaktır.
          </p>

          <h3>Altın Kural 1: ASLA SICAK İÇMEYİN!</h3>
          <p>
            Operasyondan sonraki ilk 24 saat, sıcak kahve, sıcak çay veya sıcak çorba kesinlikle yasaktır.
          </p>
          <p>
            <strong>Bilimsel Nedeni:</strong> Sıcak, "vazodilatasyon" yani damarların genişlemesine neden olur. Bu durum, cerrahi bölgedeki kanamayı tetikler, şişliği (ödemi) artırır ve iyileşmenin temel taşı olan kan pıhtısını bozabilir.
          </p>
          <p>
            <strong>Ne Yapmalı:</strong> Tüm sıvılar soğuk veya oda sıcaklığında olmalıdır. Soğuk, damarları büzerek (vazokonstrüksiyon) kanamayı azaltır ve bölgeyi doğal olarak uyuşturur.
          </p>

          <h3>Altın Kural 2: ASLA EMME VE TÜKÜRME! (En Kritik Kural)</h3>
          <p>
            Bu kural, iyileşmenizi mahvedebilecek "Dry Socket" (Alveolit - yara yerinin iltihaplanması) riskini önlemek içindir.
          </p>
          <ul>
            <li><strong>Asla Pipet Kullanmayın:</strong> Pipetle bir şey içmek, ağız içinde negatif basınç yaratarak kan pıhtısını yerinden "emip" koparabilir.</li>
            <li><strong>Sigara İçmeyin:</strong> Sigara içme eylemi de bir emme hareketidir ve pıhtıyı bozar. Ayrıca duman, iyileşmeyi sağlayan kan damarlarını daraltarak implantın başarısız olma riskini katbekat artırır.</li>
            <li><strong>Tükürmeyin veya Çalkalamayın:</strong> Ağzınızdaki sıvıyı pasifçe yutun. Şiddetli tükürmek veya çalkalamak da pıhtıyı yerinden oynatır.</li>
          </ul>

          <h3>İlk 48 Saat Beslenme Listesi (Sıvı/Soğuk)</h3>
          <ul>
            <li><strong>İçecekler:</strong> Soğuk su, oda sıcaklığında süt, soğuk ayran, tanesiz komposto suları (asitli olmayan, örn: elma).</li>
            <li><strong>Çorbalar (Soğuk/Ilık):</strong> Blenderize edilmiş, tanesiz ve soğuk çorbalar (Örn: Soğuk yoğurt çorbası, süzülmüş sebze çorbası).</li>
            <li><strong>Süt Ürünleri:</strong> Sade yoğurt, kefir (tanesiz), sütlaç (pirinçleri ezerek), muhallebi.</li>
            <li><strong>Bonus:</strong> Şekersiz dondurma. Soğuk etkisiyle bölgeyi uyuşturur ve şişliği azaltır.</li>
          </ul>

          <h2>3. Günden 7. Güne: "YUMUŞAK PÜRE" Dönemi</h2>
          <p>
            Tebrikler, en zor 48 saati atlattınız. Yara kapanmaya başladı, pıhtı stabilize oldu. Artık vücudunuza "iyileşme yakıtı" (protein ve vitamin) vermeye başlayabiliriz, ancak hala <strong>ÇİĞNEMEK YASAK</strong>.
          </p>

          <h3>İzin Verilen Yumuşak Gıdalar (Protein ve Vitamin Odaklı)</h3>
          <ul>
            <li><strong>Çorbalar (Ilık):</strong> Artık ılık içebilirsiniz. Blenderize edilmiş mercimek, brokoli, kabak çorbaları.</li>
            <li><strong>Yumurta:</strong> Çırpılmış yumurta (scrambled) veya rafadan yumurta, iyileşme için en iyi protein kaynaklarındandır.</li>
            <li><strong>Patates:</strong> Haşlanmış veya fırınlanmış patates püresi (çok sıcak olmamalı).</li>
            <li><strong>Sebzeler:</strong> Haşlanmış ve püre haline getirilmiş sebzeler (kabak, havuç, bezelye).</li>
            <li><strong>Balık:</strong> Çok iyi pişmiş, kılçıksız, yumuşak beyaz etli balıklar (somon, mezgit).</li>
            <li><strong>Diğer:</strong> Avokado püresi, humus, olgun peynirler, iyi pişmiş makarna.</li>
          </ul>

          <h2>İlk Hafta Boyunca ASLA Tüketilmemesi Gerekenler (Yasaklı Liste)</h2>
          
          <h3>1. SERT GIDALAR (Mekanik Risk)</h3>
          <p>
            <strong>Yasak:</strong> Kuruyemişler (fındık, ceviz), cips, patlamış mısır, kıtır ekmek, simit, kurabiye.
          </p>
          <p>
            <strong>Neden:</strong> Bu gıdalar, implantın üzerine veya dikişlere baskı yaparak hem acı verir hem de implantın kemikleşmesini (Osseointegrasyon) bozar.
          </p>

          <h3>2. KÜÇÜK ve TANECİKLİ GIDALAR (Enfeksiyon Riski)</h3>
          <p>
            <strong>Yasak:</strong> Susam (simitteki), bulgur (pilavdaki), kinoa, çilek/kivi çekirdekleri, karabiber taneleri.
          </p>
          <p>
            <strong>Neden:</strong> Bu küçük tanecikler, yara bölgesine veya dikişlerin arasına kaçarak fark edilmesi zor enfeksiyonlara yol açabilir.
          </p>

          <h3>3. YAPIŞKAN GIDALAR (Mekanik Risk)</h3>
          <p>
            <strong>Yasak:</strong> Sakız, lokum, karamelli şekerler.
          </p>
          <p>
            <strong>Neden:</strong> Dikişlere veya implantın üzerindeki geçici iyileşme başlığına yapışarak onları yerinden oynatabilir.
          </p>

          <h3>4. ASİTLİ ve BAHARATLI GIDALAR (Kimyasal İritasyon)</h3>
          <p>
            <strong>Yasak:</strong> Acı biber, çok baharatlı yiyecekler, limon, portakal suyu, sirke, turşu.
          </p>
          <p>
            <strong>Neden:</strong> Bu gıdalar, açık bir yara olan cerrahi bölgesini kimyasal olarak "yakarak" (irrite ederek) iyileşmeyi geciktirir.
          </p>

          <h3>5. ALKOL ve SİGARA (Biyolojik Risk)</h3>
          <p>
            <strong>Sigara:</strong> İyileşmeyi sağlayan kılcal damarları daraltır, bölgeyi oksijensiz bırakır ve implantın kemikleşmesini engeller.
          </p>
          <p>
            <strong>Alkol:</strong> İyileşme sürecini yavaşlatır, dehidrasyona neden olur ve reçeteli ağrı kesicilerinizle tehlikeli etkileşime girebilir. İlk hafta kesinlikle uzak durulmalıdır.
          </p>

          <h2>Ne Zaman Normal Yemeğe Döneceğim? (İyileşme Takvimi)</h2>
          <ul>
            <li><strong>1. Hafta (Dikişler Alınana Kadar):</strong> Yukarıdaki "Sıvı & Püre" diyetine sadık kalınır. Cerrahi bölgede asla çiğneme yapılmaz.</li>
            <li><strong>2. - 4. Hafta Arası:</strong> Dikişler alındıktan ve yara kapandıktan sonra, "yumuşak" gıdalardan "normal" gıdalara yavaşça geçiş yapılır.</li>
            <li><strong>3. Ay ve Sonrası:</strong> İmplantınızın kemikle kaynaşması (Osseointegrasyon) hala devam ediyor. Sert gıdalardan kaçınmaya devam edin.</li>
            <li><strong>Final Aşaması (Kalıcı Protez Takıldıktan Sonra):</strong> 3-6 ay sonra, implantınız kemikle tam olarak birleştiğinde ve Dt. Eren kalıcı porselen dişinizi üzerine taktığında, artık o implant sizin kendi dişiniz gibidir.</li>
          </ul>

          <h2>Sonuç: Başarılı Bir İyileşme İçin Sabır ve Özen</h2>
          <p>
            İmplant tedavisi, yüksek teknoloji ve cerrahi hassasiyet gerektiren bir yatırımdır. Kliniğimizde, 3D dijital planlama ve minimal invaziv cerrahi ile bu sürecin size en az yükü getirmesini sağlıyoruz. Ancak <strong>"Mükemmellik, Detaylarda Gizlidir"</strong> ve bu detayların en önemlisi, sizin ilk hafta göstereceğiniz özendir.
          </p>

          <p>
            Bu beslenme rehberine uymak, implantınızın ömür boyu sağlıklı kalması için atacağınız ilk adımdır.
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
