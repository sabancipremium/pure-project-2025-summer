import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Import DM Sans for body text
const dmSans = DM_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans'
})

// For special fonts not in next/font/google, we'll use CSS imports
const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Strain Engineering Magnetism in Heusler Alloys',
  description: 'Research project exploring magnetostriction and strain-dependent anisotropy in Heusler alloys using computational methods.',
  keywords: ['Heusler alloys', 'magnetostriction', 'strain engineering', 'magnetic anisotropy', 'DFT', 'computational materials science'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Special+Elite&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${dmSans.variable} font-sans`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
