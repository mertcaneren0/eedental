import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.emrecaneren.com'
  
  // Ana sayfalar
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/hakkinda`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ekibimiz`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kariyer`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tedaviler`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dis-sagligi-rehberi`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Tedavi sayfaları
  const treatmentPages = [
    'implant-tedavisi',
    'ortodonti-seffaf-plak',
    'estetik-dis-hekimligi',
    'periodontoloji-dis-eti-tedavisi',
    'mikroskopik-dis-tedavisi',
    'protetik-dis-tedavisi',
    'pedodonti-cocuk-dis-hekimligi',
    'agiz-dis-cene-cerrahisi',
    'dis-sikma-bruksizm-tedavisi',
  ].map((slug) => ({
    url: `${baseUrl}/tedaviler/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Blog yazıları
  const blogPosts = [
    'implant-acitir-mi',
    'dis-beyazlatma-sonrasi-bakim',
    'zirkonyum-porselen-kopru-karsilastirma',
    'zirkonyum-kaplama-renk-secimi',
    'porselen-lamina-kompozit-lamina-karsilastirma',
    'gulus-tasarimi-temel-ilkeler',
    'pembe-estetik-gingivektomi',
    'seffaf-plak-dis-teli-karsilastirma',
    'mikroskop-destekli-kanal-tedavisi',
    'kanal-tedavisi-sonrasi-agri',
    'amalgam-kompozit-dolgu-karsilastirma',
    'dis-tasi-temizligi-zarar-verir-mi',
    'dis-eti-kanamasi-nedenleri',
    'kuretaj-derin-temizlik-nedir',
    'hareketli-protez-alisma-sureci',
    '3d-rehberli-implant-cerrahisi',
    'implant-sonrasi-beslenme',
    'kemik-tozu-greft-nedir',
    '20-yas-disi-cekilmeli-mi',
    '20-yas-disi-cekimi-sonrasi-bakim',
    'sut-disleri-neden-onemli',
    'fissur-ortucu-dis-asisi',
    'florur-uygulamasi-cocuklar',
    'bruksizm-dis-sikma-belirtileri',
    'masseter-cene-botoksu-dis-sikma',
    'agiz-kokusu-nedenleri-cozumleri',
    'acil-dis-agrisi-kirik-ilk-yardim',
    'kanita-dayali-dis-hekimligi',
    'cerrahi-dis-cekimi-farklari',
  ].map((slug) => ({
    url: `${baseUrl}/dis-sagligi-rehberi/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...treatmentPages, ...blogPosts]
}
