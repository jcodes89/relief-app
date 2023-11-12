import './globals.css'
import { Inter } from 'next/font/google'
import {SessionProvider} from 'next-auth/react'
import AuthProvider from './auth/provider'

export default function RootLayout({children}: any) {
  return (
    <html data-theme="winter" lang="en">
      <body className='pl-0'>
        <AuthProvider>
          <main className='p-5'>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
