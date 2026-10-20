import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { connection } from 'next/server'
import './globals.css'

// Self-hosted variable fonts (no runtime request to Google, works under a strict CSP).
const interTight = localFont({ src: './fonts/InterTight.woff2', variable: '--font-inter-tight', weight: '100 900', display: 'swap' })
const jetbrains = localFont({ src: './fonts/JetBrainsMono.woff2', variable: '--font-jetbrains', weight: '100 800', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://imeer.dev'),
  title: 'Zameer Abbas — QA, Security & Full Stack',
  description: 'Zameer Abbas, Computer Systems Engineer (MUET ’26). Software QA, web security and full stack development. Open to SQA roles.',
  openGraph: { title: 'Zameer Abbas — Test. Secure. Build.', description: 'Software QA, web security and full stack development.', url: 'https://imeer.dev', siteName: 'imeer.dev', type: 'website' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: '#0e0e0e', width: 'device-width', initialScale: 1 }

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  await connection() // render per request so every page (incl. 404) gets the CSP nonce from proxy.ts
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
