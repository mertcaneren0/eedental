# Dt. Emrecan Eren Diş Kliniği Web Sitesi

Modern, SEO-optimized dental clinic website built with Next.js 14, Tailwind CSS, and GSAP animations.

## 🎯 Proje Özellikleri

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Shadcn/ui
- **Animations**: GSAP (TextPlugin, ScrollTrigger)
- **SEO**: Schema.org JSON-LD (E-E-A-T compliant)
- **Backend**: Strapi CMS (Headless)
- **Database**: PostgreSQL
- **Deployment**: Docker + CapRover

## 🎨 Tasarım Sistemi

### Renk Paleti
```css
--cream: #f0ece1      /* Arka plan */
--brown: #725649      /* Metin/Başlıklar */
--vizon: #886e57      /* Vurgu/Butonlar */
--grey: #b6b7b1       /* İkincil elementler */
```

## 📁 Proje Yapısı

```
ee_web/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Anasayfa
│   ├── hakkinda/page.tsx         # Hakkımızda
│   ├── iletisim/page.tsx         # İletişim
│   ├── kariyer/page.tsx          # Kariyer (TODO)
│   ├── tedaviler/                # Tedavi sayfaları
│   │   ├── page.tsx              # Tedaviler ana sayfa
│   │   └── implant-tedavisi/     # Örnek tedavi detay
│   └── dis-sagligi-rehberi/      # Blog (TODO)
├── components/
│   ├── ui/                       # Shadcn/ui components
│   ├── layout/                   # Header, Footer
│   ├── home/                     # Anasayfa sections
│   ├── treatment/                # Tedavi sayfası components
│   └── seo/                      # JSON-LD schemas
├── lib/
│   └── utils.ts                  # Utility functions
└── content.md                    # İçerik planı
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Development

```bash
# Dependencies yükle
npm install

# Development server başlat
npm run dev
```

Site `http://localhost:3000` adresinde çalışacaktır.

### Production Build

```bash
npm run build
npm start
```

## 📊 SEO ve Schema.org

### Implemented Schemas:
1. **Dentist/MedicalClinic** (Anasayfa)
2. **Physician** (Hakkında sayfası)
3. **MedicalProcedure** (Tedavi sayfaları)
4. **FAQPage** (SSS bölümleri)
5. **BlogPosting** (Blog yazıları - TODO)

### E-E-A-T Compliance:
- ✅ Physician schema ile uzman otoritesi
- ✅ TDB üyelik bilgisi
- ✅ Akademik geçmiş ve sertifikalar
- ✅ Author box her tedavi sayfasında
- ✅ Tıbbi sorumluluk reddi

### Yasal Uyumluluk:
- ❌ Hasta yorumları YOK (Türkiye tıbbi reklam yasası)
- ❌ Fiyat bilgisi YOK (Açıklama metni ile değişkenlik vurgusu)
- ✅ Bilgilendirme amaçlı içerik uyarısı

## 🎬 GSAP Animasyonlar

### Hero Section
- **TextPlugin**: H1 başlığı karakter karakter animasyon
- **Duration**: 2 saniye
- **Delay**: 0.5 saniye

### Services Section
- **ScrollTrigger**: Her kart scroll'da fade-in + slide-up
- **Stagger**: 0.1 saniye gecikme
- **Trigger**: "top bottom-=100"

## 📝 TODO: Strapi Backend

### Content Types:
1. **blog_posts**
   - title, slug, excerpt, content (Rich Text)
   - featured_image (Media)
   - category, published_at

2. **appointment_requests**
   - name, phone, message
   - created_at

3. **job_applications**
   - name, email, phone, position
   - cv (Media)
   - created_at

### API Endpoints:
- `POST /api/appointment-requests` - Randevu formu
- `POST /api/job-applications` - Kariyer başvurusu
- `GET /api/blog-posts` - Blog yazıları listesi
- `GET /api/blog-posts/:slug` - Blog detay

## 🐳 Docker Deployment

### Frontend (Next.js)

```dockerfile
# Dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
```

### Backend (Strapi + PostgreSQL)

```yaml
# docker-compose.yml
version: '3'
services:
  postgres:
    image: postgres:14
    environment:
      POSTGRES_DB: strapi
      POSTGRES_USER: strapi
      POSTGRES_PASSWORD: strapi
    volumes:
      - postgres_data:/var/lib/postgresql/data

  strapi:
    image: strapi/strapi
    environment:
      DATABASE_CLIENT: postgres
      DATABASE_HOST: postgres
      DATABASE_PORT: 5432
      DATABASE_NAME: strapi
      DATABASE_USERNAME: strapi
      DATABASE_PASSWORD: strapi
    volumes:
      - strapi_data:/srv/app
    ports:
      - "1337:1337"
    depends_on:
      - postgres

volumes:
  postgres_data:
  strapi_data:
```

## 🔧 Environment Variables

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://www.emrecaneren.com
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_api_token_here
```

## 📱 Responsive Design

- **Desktop**: 3 sütun grid
- **Tablet**: 2 sütun grid
- **Mobile**: 1 sütun, stack layout
- **Breakpoints**: Tailwind default (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

## 🎯 Hedef Anahtar Kelimeler

### Ana Kelimeler:
- Lüleburgaz diş hekimi
- Lüleburgaz diş kliniği
- Lüleburgaz implant
- Lüleburgaz ortodonti

### Uzun Kuyruk:
- Lüleburgaz mikroskopik diş tedavisi
- Lüleburgaz estetik diş hekimi
- Lüleburgaz kanal tedavisi
- Lüleburgaz çocuk diş hekimi

## 📈 Performance Optimizations

- ✅ Next.js Image optimization
- ✅ Font optimization (next/font)
- ✅ Code splitting (automatic)
- ✅ Static generation where possible
- ✅ Lazy loading for images
- ⏳ TODO: Implement ISR for blog posts

## 🤝 Katkıda Bulunma

Bu proje Dr. Emrecan Eren Diş Kliniği için özel olarak geliştirilmiştir.

## 📄 Lisans

Tüm hakları saklıdır © 2025 Dt. Emrecan Eren

---

**Geliştirici Notları:**
- Gerçek içerik (fotoğraflar, adres, telefon) eklenmeli
- Google Maps embed kodu eklenmeli
- Strapi backend kurulumu yapılmalı
- Form API entegrasyonları tamamlanmalı
- Blog sayfaları implementasyonu
- Kariyer sayfası implementasyonu
- Gizlilik Politikası ve Kullanım Koşulları sayfaları
- Google Analytics entegrasyonu
- Google Search Console kurulumu
