import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/hooks/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  title: {
    default: "Smart Hive Labs - Crafting Digital Excellence",
    template: "%s | Smart Hive Labs",
  },
  description:
    "Smart Hive Labs specializes in Mobile Development, Desktop Development, Web Development, Video Editing, Motion Graphics, 3D & 2D Animation, Graphics Design, AI-driven solutions, and more. Owned by Mensah Isaac Nana Sam (Dhope Graphics).",
  keywords: [
    "Smart Hive Labs", "Dhope Graphics", "Mensah Isaac Nana Sam",
    "Web Development Ghana", "Mobile App Development", "Desktop Development",
    "AI Solutions", "Graphic Design", "Motion Graphics", "3D Animation",
    "Video Editing", "React", "Next.js", "React Native", "Node.js", 
    "Python", "Tauri", "Rust", "Electron"
  ],
  authors: [{ name: "Mensah Isaac Nana Sam", url: "https://smarthivelabs.com" }],
  creator: "Mensah Isaac Nana Sam (Dhope Graphics)",
  publisher: "Smart Hive Labs",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  metadataBase: new URL('https://smarthivelabs.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Smart Hive Labs - Crafting Digital Excellence",
    description: "Smart Hive Labs specializes in Mobile Development, Desktop Development, Web Development, Video Editing, Motion Graphics, 3D & 2D Animation, Graphics Design, and AI-driven solutions.",
    url: 'https://smarthivelabs.dev',
    siteName: 'Smart Hive Labs',
    images: [
      {
        url: 'https://smarthivelabs.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart Hive Labs Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Hive Labs - Crafting Digital Excellence',
    description: 'Web, Mobile & Desktop Development, Graphics Design, and AI Solutions',
    images: ['https://smarthivelabs.dev/twitter-image.jpg'],
    creator: '@DhopeGraphics',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
