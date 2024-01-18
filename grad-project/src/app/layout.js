// 'use client'
import '../styles/globals.css'

export const metadata = {
  title: 'BilgeAdam Students',
  icons: {
    icon: 'ba-favicon.png',
  },
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
