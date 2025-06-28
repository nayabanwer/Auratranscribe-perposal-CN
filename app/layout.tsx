import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AuraTranscribe - Student Innovation in Accessibility AI",
  description:
    "Revolutionary AI-powered platform developed by students at Emerson University, making communication accessible for 466 million people with hearing disabilities worldwide. Investment opportunity available.",
  keywords:
    "accessibility, AI, transcription, student innovation, investment, hearing impaired, university, technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
