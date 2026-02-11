import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from "./Google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'c13studio | Fotografía y Video Aéreo',
  description: 'Especialistas en fotografía y video aéreo con drones. +15 años de experiencia en arquitectura, desarrollo inmobiliario y producciones audiovisuales.',
  keywords: ['fotografía aérea', 'video aéreo', 'drones', 'arquitectura', 'inmobiliario'],
  openGraph: {
    title: 'c13studio | Fotografía y Video Aéreo',
    description: 'Llevamos tus proyectos al siguiente nivel con video y fotografía aérea profesional.',
    type: 'website',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'c13studio | Fotografía y Video Aéreo',
    description: 'Video y fotografía aérea profesional para tu proyecto.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        <GoogleAnalytics />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
