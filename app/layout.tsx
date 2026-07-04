import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Tchoupe Pembe Karl Bryan - Portfolio',
  description: 'Technicien en Maintenance et Installation des Systèmes Électroniques | Étudiant en Génie Informatique',
  openGraph: {
    title: 'Tchoupe Pembe Karl Bryan - Portfolio',
    description: 'Technicien en Maintenance et Installation des Systèmes Électroniques | Étudiant en Génie Informatique',
    url: 'https://tchoupeportfolio.com',
    siteName: 'Tchoupe Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_CM',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
