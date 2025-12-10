import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Pi Network | Innov\'BOULON - Mining Gratuit & Formations Blockchain',
  description: 'Rejoignez 35M+ pionniers dans la révolution Pi Network. Mining gratuit, formations blockchain et communauté francophone. Code invitation : @arkocom',
  keywords: 'Pi Network, crypto-monnaie, blockchain, Innov BOULON, mining, @arkocom, formation blockchain, crypto gratuit',
  authors: [{ name: 'Innov\'BOULON' }],
  creator: 'Innov\'BOULON',
  publisher: 'Innov\'BOULON',
  applicationName: 'Pi Network - Innov\'BOULON',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://pi.innov-boulon.fr',
    siteName: 'Pi Network | Innov\'BOULON',
    title: 'Pi Network | Innov\'BOULON - Rejoignez 35M+ Pionniers',
    description: 'Mining gratuit depuis votre téléphone. Formations blockchain, communauté francophone, et bien plus. Utilisez le code @arkocom',
    images: [
      {
        url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhitLNBPHdysDVthbITKIBucFpF2-OeD9Ls5jjHqYqe0XEXYDJaFOtHO0Q75klhp_TcjV5DPT848XbgR6JPb3fA63mgQDyOuHYTH4CTUIFjRq1q7Y7m2RxpZtc8TNTnHIWOjOgjWVgjHhA24rfHDV7zD9tBUQuuOkO_s5CtfqJ-vRDAupvJVcnKDTFk2Jg=w640-h430-rw',
        width: 1200,
        height: 630,
        alt: 'Pi Network - Innov\'BOULON',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Pi Network | Innov\'BOULON',
    description: 'Rejoignez 35M+ pionniers - Mining gratuit & formations blockchain',
    images: ['https://pbs.twimg.com/profile_images/1126233398391894017/8mKz2RnV_400x400.jpg
    creator: '@innovboulon',
  },
  
  // Icons & Manifest
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  
  manifest: '/manifest.json',
  
  // Theme & Appearance
  themeColor: '#7B3FF2',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  
  // Additional
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Pi Network SDK */}
        <script src="https://sdk.minepi.com/pi-sdk.js"></script>
      </head>
      <body className="antialiased">
        {children}
        
        {/* Service Worker Registration */}
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('Service Worker enregistré avec succès:', registration.scope);
                  },
                  function(err) {
                    console.log('Échec enregistrement Service Worker:', err);
                  }
                );
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}
