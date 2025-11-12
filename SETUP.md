# Admin Panel Kurulum Rehberi

Bu rehber, özel admin panelini VPS sunucunuzda kurmak için gerekli adımları içerir.

## 1. Gereksinimler

- Node.js 18+ 
- PostgreSQL 14+
- npm veya yarn

## 2. Veritabanı Kurulumu

### PostgreSQL Kurulumu (Ubuntu/Debian)

```bash
# PostgreSQL kurulumu
sudo apt update
sudo apt install postgresql postgresql-contrib

# PostgreSQL servisini başlat
sudo systemctl start postgresql
sudo systemctl enable postgresql

# PostgreSQL kullanıcısına geç
sudo -u postgres psql

# Veritabanı ve kullanıcı oluştur
CREATE DATABASE eedental;
CREATE USER eedental_user WITH PASSWORD 'güçlü_şifre_buraya';
GRANT ALL PRIVILEGES ON DATABASE eedental TO eedental_user;
\q
```

## 3. Proje Kurulumu

### 3.1. Paketleri Yükle

```bash
npm install
```

### 3.2. Environment Variables

`.env` dosyası oluşturun (`.env.example` dosyasını kopyalayın):

```bash
cp .env.example .env
```

`.env` dosyasını düzenleyin:

```env
# Database Configuration
DATABASE_URL="postgresql://eedental_user:güçlü_şifre_buraya@localhost:5432/eedental?schema=public"

# NextAuth Configuration
NEXTAUTH_URL=https://www.emrecaneren.com
NEXTAUTH_SECRET=buraya_32_karakterden_uzun_random_string_yazın

# Environment
NODE_ENV=production
```

**NEXTAUTH_SECRET oluşturmak için:**

```bash
openssl rand -base64 32
```

### 3.3. Veritabanı Migration

```bash
# Prisma client oluştur
npm run db:generate

# Veritabanı tablolarını oluştur
npm run db:push
```

### 3.4. Admin Kullanıcısı Oluştur

```bash
# Varsayılan admin kullanıcısı (admin@emrecaneren.com / admin123)
npm run create-admin

# Veya özel bilgilerle:
ADMIN_EMAIL=emrecan@emrecaneren.com ADMIN_PASSWORD=güçlü_şifre ADMIN_NAME="Emrecan Eren" npm run create-admin
```

## 4. Uygulamayı Çalıştırma

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
# Build
npm run build

# Start
npm run start
```

## 5. PM2 ile Production Deployment

PM2 ile uygulamayı arka planda çalıştırın:

```bash
# PM2 kurulumu
npm install -g pm2

# Uygulamayı başlat
pm2 start npm --name "eedental" -- start

# Otomatik başlatma
pm2 startup
pm2 save

# Logları görüntüle
pm2 logs eedental

# Restart
pm2 restart eedental
```

## 6. Nginx Konfigürasyonu

Nginx reverse proxy ayarları:

```nginx
server {
    listen 80;
    server_name www.emrecaneren.com emrecaneren.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

SSL sertifikası için Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d emrecaneren.com -d www.emrecaneren.com
```

## 7. Admin Paneline Erişim

- **Login URL:** https://www.emrecaneren.com/admin/login
- **Dashboard:** https://www.emrecaneren.com/admin/dashboard

### İlk Giriş Sonrası

1. Admin paneline giriş yapın
2. Şifrenizi değiştirin (şu an için manuel olarak veritabanından)
3. İletişim formları ve kariyer başvurularını görüntüleyin

## 8. Veritabanı Yönetimi

Prisma Studio ile veritabanını görsel olarak yönetin:

```bash
npm run db:studio
```

Tarayıcıda `http://localhost:5555` adresinden erişebilirsiniz.

## 9. Güvenlik Notları

- ✅ Güçlü şifreler kullanın
- ✅ NEXTAUTH_SECRET'i güvenli tutun
- ✅ Veritabanı şifresini güvenli tutun
- ✅ Firewall kurallarını ayarlayın (sadece 80, 443, 22 portları açık)
- ✅ PostgreSQL'i sadece localhost'tan erişilebilir yapın
- ✅ Düzenli yedekleme yapın

## 10. Yedekleme

PostgreSQL veritabanını yedekleyin:

```bash
# Yedek al
pg_dump -U eedental_user eedental > backup_$(date +%Y%m%d).sql

# Geri yükle
psql -U eedental_user eedental < backup_20250101.sql
```

## Sorun Giderme

### Veritabanı bağlantı hatası

```bash
# PostgreSQL çalışıyor mu kontrol et
sudo systemctl status postgresql

# Bağlantıyı test et
psql -U eedental_user -d eedental -h localhost
```

### Prisma hatası

```bash
# Prisma client'ı yeniden oluştur
npm run db:generate

# Cache temizle
rm -rf node_modules/.prisma
npm run db:generate
```

## Destek

Herhangi bir sorun için lütfen iletişime geçin.
