import { MarkdownProvider } from '@/context/MarkdownContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Markdown Playground',
  description: 'Markdown Playground built using next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MarkdownProvider>
          {children}
        </MarkdownProvider>
      </body>
    </html>
  )
}
