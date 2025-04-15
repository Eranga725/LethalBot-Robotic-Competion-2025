import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Robotic Battle Website',
  description: 'A website for robotic battle events',
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