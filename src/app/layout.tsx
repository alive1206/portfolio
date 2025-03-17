import { AppProvider } from '@/providers'
import '@/styles/global.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})
export const metadata: Metadata = {
  title: 'Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
