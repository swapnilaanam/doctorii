import AuthProvider from '@/providers/AuthProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Karla } from 'next/font/google'

const karla = Karla({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700"], variable: "--font-karla" })

export const metadata: Metadata = {
  title: 'Doctorii',
  description: 'Doctorii - An Doctor Appointment Service App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${karla.variable} font-karla overflow-x-hidden`}>
        <AuthProvider>
          <div>{children}</div>
        </AuthProvider>
      </body>
    </html>
  )
}
