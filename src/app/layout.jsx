import './globals.css'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/Navbar'

const roboto = Roboto({ subsets: ['latin'],
weight: ['500', '700']})

export const metadata = {
  title: 'Opiniones Filosoficas',
  description: 'Deja tu comentario acerca de tu cuestionabilidad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
