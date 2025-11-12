# Local Development Setup

## 1. Environment Variables

Proje kök dizininde `.env` dosyası oluşturun:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=local-dev-secret-min-32-characters-long-string

# Environment
NODE_ENV=development
```

## 2. Admin Kullanıcısı Oluştur

```bash
npm run create-admin
```

Varsayılan giriş bilgileri:
- Email: `admin@emrecaneren.com`
- Password: `admin123`

## 3. Development Server'ı Başlat

```bash
npm run dev
```

## 4. Admin Paneline Erişim

- Login: http://localhost:3000/admin/login
- Dashboard: http://localhost:3000/admin/dashboard

## 5. Test İçin

1. Ana sayfadaki iletişim formunu doldurun
2. Admin paneline giriş yapın
3. İletişim formlarını görüntüleyin ve yönetin

## Notlar

- SQLite kullanılıyor (dev.db dosyası)
- Production'da PostgreSQL kullanılacak
- Veritabanı dosyası: `prisma/dev.db`
