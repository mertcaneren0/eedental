import localFont from 'next/font/local'

// Nexa font family - Modern, clean sans-serif
export const nexa = localFont({
  src: [
    {
      path: '../public/fonts/Nexa-Trial-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Nexa-Trial-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Nexa-Trial-Book.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Nexa-Trial-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Nexa-Trial-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/Nexa-Trial-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-nexa',
  display: 'swap',
})

// Nexa Text - For body text (better readability)
export const nexaText = localFont({
  src: [
    {
      path: '../public/fonts/NexaText-Trial-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/NexaText-Trial-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NexaText-Trial-Book.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/NexaText-Trial-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-nexa-text',
  display: 'swap',
})
