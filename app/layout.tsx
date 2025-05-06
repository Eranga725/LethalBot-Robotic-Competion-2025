import { Metadata } from "next"
import './globals.css'

export const metadata: Metadata = {
  title: 'LETHALBOTS 2025 | SLTC Robot Battle Competition',
  description: 'LETHALBOTS 2025 is Sri Lanka\'s premier robotics competition hosted by SLTC, featuring intense robot battles, innovative engineering, and nationwide university participation. Register now for the ultimate robotics showdown!',
  keywords: 'LETHALBOTS, robot battle, SLTC, robotics competition, sri lanka robotics, engineering competition, university robotics',
  authors: [{ name: 'SLTC Engineering' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lethalbots.sltc.ac.lk',
    title: 'LETHALBOTS 2025 | SLTC Robot Battle Competition',
    description: 'Join Sri Lanka\'s biggest robotics competition. Register now for LETHALBOTS 2025!',
    siteName: 'LETHALBOTS 2025',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LETHALBOTS 2025',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LETHALBOTS 2025 | SLTC Robot Battle Competition',
    description: 'Join Sri Lanka\'s biggest robotics competition. Register now for LETHALBOTS 2025!',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-slate-950">
        {children}
      </body>
    </html>
  )
}
