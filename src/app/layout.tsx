import type React from "react"
import { Metadata } from 'next'
import Script from "next/script"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { GA_MEASUREMENT_ID } from "@/lib/gtag"

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
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

