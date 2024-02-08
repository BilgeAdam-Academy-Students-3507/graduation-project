// 'use client'
import React, { ReactNode } from 'react'
import '../styles/globals.css'

interface Metadata {
  title: string;
  icons: {
    icon: string,
  };
}

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'BilgeAdam Students',
  icons: {
    icon: 'ba-favicon.png',
  },
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
