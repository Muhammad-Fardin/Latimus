import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ClerkProvider} from "@clerk/nextjs";
import { ModalProvider } from '@/components/ModalProvider';
import { ToasterProvider } from '@/components/ToastProvider';
import { CrispProvider } from '@/components/CrispProvider';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Latimus AI',
  description: 'Latimus AI Tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3791857270508387" crossOrigin="anonymous"></script>
      </head>
    <CrispProvider />
      <body className={inter.className}>
        <ToasterProvider />
        <ModalProvider />
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
