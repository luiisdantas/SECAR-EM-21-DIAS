import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { PurchaseNotifications } from "@/components/purchase-notifications"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Método Secar 20 Dias - Emagreça Rapidamente",
  description: "Descubra o método revolucionário para emagrecer 20kg em 20 dias de forma saudável e definitiva",
  generator: "v0.app",
  keywords: "emagrecer, perder peso, dieta, método secar, emagrecimento rápido",
  authors: [{ name: "Método Secar 20 Dias" }],
  robots: "index, follow",
  openGraph: {
    title: "Método Secar 20 Dias - Emagreça Rapidamente",
    description: "Descubra o método revolucionário para emagrecer 20kg em 20 dias",
    type: "website",
    locale: "pt_BR",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#dc2626",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_kQA9cPIlykQO8zMEbeRh2Cahmd9v/ZLVWQ-83W3mSIYZefG2-mE/public/vsl-video.mp4"
          as="video"
          type="video/mp4"
        />
        <link rel="preload" href="/video-thumbnail.jpg" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans ${inter.variable}`}>
        <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
          {children}
          <PurchaseNotifications />
        </Suspense>
      </body>
    </html>
  )
}
