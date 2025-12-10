import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pi Network | Innov\'BOULON',
  description: 'Rejoignez le Pi Network avec Innov\'BOULON - La révolution de la crypto-monnaie mobile',
  keywords: 'Pi Network, crypto-monnaie, blockchain, Innov BOULON, mining, @arkocom',
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
      </body>
    </html>
  )
}
