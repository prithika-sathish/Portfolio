import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prithika Sathish - Portfolio',
  description: 'Software Developer & AI Enthusiast - Building products at the intersection of full-stack engineering, AI/ML, and data-driven solutions.',
  keywords: ['Prithika Sathish', 'Software Developer', 'AI Enthusiast', 'Full Stack', 'React', 'Next.js'],
  authors: [{ name: 'Prithika Sathish' }],
  openGraph: {
    title: 'Prithika Sathish - Portfolio',
    description: 'Software Developer & AI Enthusiast',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
