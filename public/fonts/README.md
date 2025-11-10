# Font Dosyaları

Bu klasöre özel font dosyalarınızı ekleyin.

## 📁 Desteklenen Formatlar

- **WOFF2** (önerilen - en iyi sıkıştırma)
- **WOFF** (iyi tarayıcı desteği)
- **TTF** (True Type Font)
- **OTF** (Open Type Font)

## 📝 Dosya İsimlendirme Örnekleri

```
YourFont-Regular.woff2
YourFont-Medium.woff2
YourFont-SemiBold.woff2
YourFont-Bold.woff2
```

veya

```
CustomFont-Light.woff2
CustomFont-Regular.woff2
CustomFont-Bold.woff2
```

## 🚀 Kullanım

1. Font dosyalarını bu klasöre kopyala
2. `app/fonts.ts` dosyasındaki path'leri güncelle
3. `app/layout.tsx` dosyasında import et ve kullan

## 💡 Font Dönüştürme

Eğer TTF/OTF dosyan varsa, WOFF2'ye dönüştürmek için:
- https://cloudconvert.com/ttf-to-woff2
- https://transfonter.org/

WOFF2 formatı daha küçük dosya boyutu sağlar ve performansı artırır.
