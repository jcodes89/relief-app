import './globals.css'
import { Inter } from 'next/font/google'

export default function RootLayout({children}: any) {
  return (
    <html data-theme="winter" lang="en">
      <body className='pl-0'>{children}</body>
    </html>
  )
}
