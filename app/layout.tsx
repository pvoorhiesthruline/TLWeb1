import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thruline Design — Evaluation, AI Agents & Change',
  description:
    'An R&D firm pairing AI agents and workshop practice with deep evaluation and change-management expertise. The throughline between research, practice, and outcome.',
  metadataBase: new URL('https://thrulinedesign.co'),
  openGraph: {
    title: 'Thruline Design',
    description: 'The throughline between research, practice, and outcome.',
    siteName: 'Thruline Design',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
