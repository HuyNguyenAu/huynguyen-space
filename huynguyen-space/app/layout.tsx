import type { Metadata } from 'next';
import Head from 'next/head';

import { Inter } from 'next/font/google'
import React from "react";

import Navigation from './components/navigation/Navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Huy Nguyen - Personal Portfolio',
  title: 'Huy Nguyen - Personal Portfolio',
  icons: 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
      </Head>
      <body className={`bg-[#1B2432] ${inter.className}`}>
        <div className="flex min-h-screen flex-col items-center justify-center gap-y-32 p-8 md:px-16 lg:px-32 xl:px-64">
          <Navigation />
          <div className="flex size-full grow items-start justify-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
