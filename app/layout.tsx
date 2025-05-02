import { Metadata } from "next"
import './globals.css'

export const metadata: Metadata = {
  title: 'LETHALBOTS 2025',
  description: 'Lethal bot 2025, the robot battle organized by Sri Lanka Technological Campus (SLTC), bringing together the brightest innovators from universities across Sri Lanka. As the premier SLTC robot battle event, Lethal bots challenges teams to design, build, and battle their robots in an epic competition of skill, creativity, and teamwork. With thrilling head-to-head battles and groundbreaking robot designs, Lethal bots SLTC is a celebration of technology, engineering excellence, and the future of robotics. Join us at SLTC and experience the excitement of the Lethal bot robot battle.',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/icon-192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/icon-512.png',
      },
    ],
  },
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
