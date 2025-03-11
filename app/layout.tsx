import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pip Booth",
  description: "My personal website showcasing my work and thoughts",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white`}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="border-t py-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Personal Website</p>
        </footer>
      </body>
    </html>
  )
}
