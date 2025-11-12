import type { Metadata } from "next"
import { BlogPostTemplate } from "@/components/blog/blog-post-template"
import { Scissors } from "lucide-react"

export const metadata: Metadata = {
  title: "20lik Diş Çekimi Sonrası Beslenme ve Bakım (İlk 72 Saat) | Dt. Eren - Lüleburgaz",
  description: "Gömülü 20 yaş dişi çekimi sonrası ne yenir? Şişlik nasıl iner? Lüleburgaz Dt. Eren kliniği, 'Dry Socket' riskini önleyen, ilk 72 saatlik kritik bakım ve beslenme rehberini paylaşıyor.",
  keywords: ["20 yaş dişi çekimi", "gömülü diş çekimi", "dry socket", "şişlik yönetimi", "cerrahi sonrası beslenme", "Lüleburgaz diş hekimi"],
}

export default function BlogPost() {
  return (
    <BlogPostTemplate
      title="Gömülü 20 Yaş Dişi Çekimi Sonrası Beslenme ve Bakım: İlk 72 Saat"
      description="Şişlik yönetimi, kanama kontrolü ve dry socket önleme."
      category="Ağız ve Çene Cerrahisi"
      categoryIcon={<Scissors className="h-5 w-5 text-red-600" />}
      pillarPage="/tedaviler/agiz-dis-cene-cerrahisi"
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
            Öncelikle, tebrikler. Gömülü 20 yaş dişi operasyonunuzu başarıyla tamamladınız. Bu, ağız sağlığınız için attığınız önemli ve cesur bir adımdı. Şu an muhtemelen anestezi etkisindesiniz ve aklınızda pek çok soru var: <strong>"Yüzüm şişecek mi?", "Ne yiyebilirim?", "Nasıl hızlı iyileşirim?"</strong>
          </p>

          <p className="text-lg leading-relaxed text-brown/90 mb-8">
            Bu rehber, önünüzdeki en kritik <strong>72 saat (3 gün)</strong> boyunca atmanız gereken adımları, bir hekim netliğiyle size anlatmak için hazırlanmıştır.
          </p>

          <h2>İyileşmenin Altın Kuralı: Kan Pıhtısını Korumak</h2>
          <p>
            Ameliyattan sonra, çekim boşluğunda oluşan <strong>"kan pıhtısı" (blood clot)</strong>, sizin en değerli varlığınızdır. Bu pıhtı, basit bir kan birikintisi değil; vücudunuzun o bölgeye gönderdiği, içi iyileştirici hücreler, proteinler ve büyüme faktörleri dolu doğal bir yara bandıdır.
          </p>

          <p>
            Pıhtı, alttaki hassas kemiği ve sinir uçlarını dış dünyadan (yiyecekler, bakteriler, hava) koruyan biyolojik bir kalkandır. İlk 72 saatteki TÜM kurallar tek bir amaç içindir: <strong>Bu pıhtıyı yerinden oynatmamak.</strong>
          </p>

          <h2>En Büyük Düşman: "Dry Socket" (Alveolit) Nedir?</h2>
          <p>
            Hastalarımızın en çok endişe ettiği komplikasyon "Dry Socket" (Alveolit veya Kuru Soket) adı verilen durumdur.
          </p>

          <h3>Dry Socket Nedir?</h3>
          <p>
            Yukarıda bahsettiğimiz o değerli kan pıhtısının, olması gerekenden erken yerinden kopması veya çözünmesidir.
          </p>

          <h3>Sonucu Nedir?</h3>
          <p>
            Pıhtı koptuğunda, alttaki çene kemiği ve sinir uçları doğrudan ağız ortamına maruz kalır. Sonuç, genellikle operasyondan 2-3 gün sonra başlayan, kulak ve şakağa vuran, zonklayıcı, <strong>şiddetli bir ağrıdır</strong> ve ağrı kesicilere iyi yanıt vermez.
          </p>

          <h3>Dry Socket'i Önlemenin 3 Kuralı (Mutlaka Uyun):</h3>
          
          <h4>1. ASLA SİGARA İÇMEYİN (En Önemli Kural):</h4>
          <ul>
            <li><strong>Fiziksel Risk:</strong> Sigara içme eylemi, ağızda pıhtıyı yerinden "emecek" güçlü bir negatif basınç (vakum) oluşturur.</li>
            <li><strong>Kimyasal Risk:</strong> Sigara dumanındaki binlerce toksin ve nikotin, iyileşmeyi sağlayan kan damarlarını daraltır. Yara bölgesine giden oksijen ve besin miktarını kritik düzeyde azaltır.</li>
          </ul>
          <p>
            <strong>İlk 72 saat (mümkünse 1 hafta) sigara içmek, dry socket'e davetiye çıkarmaktır.</strong>
          </p>

          <h4>2. ASLA TÜKÜRMEYİN, ÇALKALLAMAYIN veya PİPET KULLANMAYIN:</h4>
          <ul>
            <li>Pipetle bir şey içmek, şiddetle tükürmek veya ağzı çalkalamak, o pıhtıyı yerinden koparır.</li>
            <li>Ağzınızda kan mı birikti? Yutkunun. Tükürmeyin.</li>
            <li>Su mu içtiniz? Yutkunun. Çalkalamayın.</li>
          </ul>

          <h4>3. ASLA SICAK TEMAS ETMEYİN (İlk 24 Saat):</h4>
          <p>
            Sıcak duş, sıcak çay, sıcak çorba... Sıcak, damarları genişletir (vazodilatasyon), kanamayı artırır ve pıhtının sağlıklı yapısını bozar. <strong>İlk 24 saat sadece soğuk ve ılık.</strong>
          </p>

          <h2>İlk 72 Saatlik Cerrahi Sonrası Bakım Planınız</h2>
          
          <h3>1. Tampon ve Kanama Kontrolü (İlk 1-2 Saat)</h3>
          <p>
            Kliniğimizden ayrılırken size ısırmanızı söylediğimiz steril gazlı tamponu, <strong>en az 30-45 dakika boyunca sıkıca ısırmaya devam edin</strong>. Sadece orada durması yetmez, "basınç" uygulaması gerekir.
          </p>
          <p>
            Tamponu attıktan sonra hafif bir "sızıntı" veya tükürükte pembelik olması normaldir. Eğer ağzınıza taze, kırmızı kan geliyorsa, yeni bir steril tamponu katlayıp yara yerine koyun ve 45 dakika daha basınçla ısırın.
          </p>

          <h3>2. Şişlik (Ödem) Yönetimi: Soğuk Kompres (İlk 48 Saat)</h3>
          <p>
            Gömülü diş operasyonları cerrahidir ve vücut bu travmaya "şişlik" (ödem) ile tepki verir. Bu, iyileşmenin normal bir parçasıdır.
          </p>
          <p>
            <strong>Şişlik, operasyondan hemen sonra değil, genellikle 24-48 saat sonra zirveye ulaşır ve 72. saatten sonra inmeye başlar.</strong> (Yani 2. gün, 1. günden daha şiş uyanmanız normaldir, paniklemeyin).
          </p>
          <p>
            <strong>En Önemli Göreviniz:</strong> Şişliği minimumda tutmak için, eve gider gitmez operasyon bölgesine dışarıdan (yanaktan) SOĞUK KOMPRES (buz torbası) uygulamaya başlayın.
          </p>
          <p>
            <strong>Doğru Uygulama:</strong> Buzu bir beze sarın. 15 dakika tutun, 15 dakika dinlendirin. Bu döngüyü ilk 24-48 saat boyunca, uyanık olduğunuz sürece yapabildiğiniz kadar yapın.
          </p>

          <h3>3. İlaç Yönetimi (Ağrıyla Savaşmak)</h3>
          <p>
            Dt. Eren'in size verdiği reçetedeki ilaçlar (ağrı kesici, antibiyotik, gerekliyse gargara) sizin iyileşme protokolünüzdür.
          </p>
          <p>
            <strong>"Kanıta Dayalı" İpucu:</strong> Ağrı kesicinizi, ağrınızın başlamasını beklemeden, klinikten çıkar çıkmaz (veya anestezi etkisi hafiflerken) alın. Ağrıyı başlamadan bastırmak, başladıktan sonra durdurmaktan çok daha kolaydır.
          </p>
          <p>
            Antibiyotiğiniz reçete edildiyse, "ağrım yok" diyerek bırakmayın. Enfeksiyonu önlemek için, verilen tüm kutuyu (örn: 5-7 gün) bitirmeniz şarttır.
          </p>

          <h3>4. Ağız Hijyeni (Bölgeyi Temiz Tutmak)</h3>
          <ul>
            <li><strong>İLK 24 SAAT: DOKUNMA!</strong> Bölgeyi fırçalamayın, gargara yapmayın, su bile çarpmayın. Pıhtının oluşmasına izin verin.</li>
            <li><strong>24 SAAT SONRA:</strong> Diğer tüm dişlerinizi normal şekilde fırçalayabilirsiniz. Temiz bir ağız, daha hızlı iyileşir.</li>
            <li>Hekiminiz gargara verdiyse, 24 saat sonra başlayın. Unutmayın: Çalkalamak, tükürmek yok! Sıvıyı ağzınıza alın, başınızı sağa sola yatırın ve yavaşça lavaboya akıtın.</li>
          </ul>

          <h2>İlk 72 Saatlik Beslenme Planı</h2>
          
          <h3>1. Gün (İlk 24 Saat): SOĞUK ve SIVI Dönemi</h3>
          <p>
            <strong>Amaç:</strong> Pıhtıyı korumak ve kanamayı durdurmak.
          </p>
          <p>
            <strong>Ne Yenir:</strong>
          </p>
          <ul>
            <li>Soğuk ve Tanesiz Çorbalar (Soğuk ayran aşı, blenderize edilmiş soğuk domates çorbası)</li>
            <li>Yoğurt, Kefir, Ayran (Tanesiz olmalı)</li>
            <li>Dondurma (Sade): Evet, bu sizin ödülünüz. Soğuk etkisi harikadır</li>
            <li>Muhallebi, Puding, Sütlaç (Soğuk olmalı)</li>
            <li>Smoothie (KAŞIKLA!): ASLA PİPET KULLANMAYIN</li>
          </ul>

          <h3>2. ve 3. Gün (48-72 Saat): ILIK ve PÜRE Dönemi</h3>
          <p>
            Pıhtı artık daha stabil. Vücudun iyileşmek için yakıta (protein, vitamin) ihtiyacı var. Sıcak hala yasak, ama "ılık" güvenlidir.
          </p>
          <p>
            <strong>Ne Yenir:</strong>
          </p>
          <ul>
            <li>Ilık ve Blenderize Çorbalar (Mercimek, brokoli, kabak... Tanesiz olmalı)</li>
            <li>Patates Püresi (Ilık, tereyağı veya süt ile zenginleştirilebilir)</li>
            <li>Yumurta (Çırpılmış veya rafadan. İyileşme için mükemmel protein)</li>
            <li>Peynir (Yumuşak, ezilmiş beyaz peynir veya krem peynir)</li>
            <li>Meyve Püreleri (Muz, avokado ezmesi, elma püresi)</li>
          </ul>

          <h3>İlk Hafta Boyunca ASLA Dokunulmaması Gerekenler (KARA LİSTE)</h3>
          <ul>
            <li><strong>Tanecikli Gıdalar:</strong> Pilav, bulgur, susam (simit), kinoa, çilek, ahududu çekirdekleri... Bu tanecikler çekim boşluğuna kaçar ve ciddi enfeksiyonlara yol açar.</li>
            <li><strong>Sert, Kıtır Gıdalar:</strong> Ekmek kenarı, cips, kuruyemiş, bisküvi. Yara yerine mekanik travma yapar.</li>
            <li><strong>Yapışkan Gıdalar:</strong> Sakız, lokum, karamel. Dikişlere yapışır.</li>
            <li><strong>Asitli & Baharatlı:</strong> Portakal suyu, limon, acı biber. Açık yaranıza asit veya biber dökmekle aynı etkidir.</li>
          </ul>

          <h2>Sonuç: Siz İyileşmeye Odaklanın</h2>
          <p>
            İlk 72 saat, tüm iyileşme sürecinizin temelidir. "Minimal İnvaziv" bir cerrahi ile zaten 1-0 önde başladınız. Şimdi bu beslenme ve bakım kurallarına harfiyen uyarak, "kanıta dayalı" bir iyileşme süreci geçireceksiniz.
          </p>

          <p>
            Şişliğinizin 3. gün zirve yapıp sonra ineceğini, hafif sızıntıların normal olduğunu ama şiddetli ağrının (Dry Socket) bir "uyarı sinyali" olduğunu artık biliyorsunuz. Vücudunuzu dinleyin ve herhangi bir şüphede derhal kliniğimizi arayın.
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
