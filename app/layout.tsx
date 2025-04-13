import type { Metadata } from 'next'
import './globals.css'
import LenisProvider from '@/components/lenis-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'WraithFlash - Breathe new life into old devices',
  description: 'A lightweight, powerful operating system designed to breathe new life into old hardware.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
