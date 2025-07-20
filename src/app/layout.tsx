import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
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
