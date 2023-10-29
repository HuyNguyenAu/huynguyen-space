import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import Navigation from './components/navigation/Navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#1B2432] ${inter.className}`}>
        <div className="min-h-screen min-w-screen py-16 px-64 flex flex-col gap-y-8">
          <Navigation />
          <div className="grow h-full w-full flex justify-between items-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
