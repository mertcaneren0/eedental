import localFont from 'next/font/local'

// Nexa font family - Modern, clean sans-serif
// Optimized for performance with local fonts
export const nexa = localFont({
  src: [
    {
      path: '../public/fonts/light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/light-italic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/medium-italic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/bold-italic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/extra-bold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/extra-bold-italic.otf',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-nexa',
  display: 'swap', // FOUT (Flash of Unstyled Text) önleme
  preload: true, // İlk yüklemede font'u önceliklendir
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
  adjustFontFallback: 'Arial', // Layout shift önleme
})
