import type React from "react"
import { Metadata } from 'next'
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Udeesha Rukshan',
  description: 'Personal portfolio showcasing my projects and skills',
  icons: {
    icon: [
      { url: '/udeesha.png' },
      { url: '/udeesha.png', type: 'image/png', sizes: '192x192' }
    ],
    apple: [
      { url: '/udeesha.png', sizes: '180x180', type: 'image/png' }
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

