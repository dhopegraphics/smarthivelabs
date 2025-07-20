import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/hooks/theme-provider";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "Smart Hive Labs - Crafting Digital Excellence",
    template: "%s | Smart Hive Labs",
  },
  description:
    "Smart Hive Labs specializes in Mobile Development, Desktop Development, Web Development, Video Editing, Motion Graphics, 3D & 2D Animation, Graphics Design, AI-driven solutions, and more. Owned by Mensah Isaac Nana Sam (Dhope Graphics).",
  keywords: [
    "Smart Hive Labs",
    "Dhope Graphics",
    "Mensah Isaac Nana Sam",
    "Web Development Ghana",
    "Mobile App Development",
    "Desktop Development",
    "AI Solutions",
    "Graphic Design",
    "Motion Graphics",
    "3D Animation",
    "Video Editing",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Python",
    "Tauri",
    "Rust",
    "Electron",
  ],
  authors: [
    { name: "Mensah Isaac Nana Sam", url: "https://smarthivelabs.dev" },
  ],
  creator: "Mensah Isaac Nana Sam (Dhope Graphics)",
  publisher: "Smart Hive Labs",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  metadataBase: new URL("https://smarthivelabs.dev"),
  icons: {
    icon: [
      { url: "/smarthivelogo_fav.ico", sizes: "any", type: "image/x-icon" },
      { url: "/smarthivelogo_fav.svg", type: "image/svg+xml" },
      { url: "/smarthivelogo_fav.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/smarthivelogo_fav.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Smart Hive Labs - Crafting Digital Excellence",
    description:
      "Smart Hive Labs specializes in Mobile Development, Desktop Development, Web Development, Video Editing, Motion Graphics, 3D & 2D Animation, Graphics Design, and AI-driven solutions.",
    url: "https://smarthivelabs.dev",
    siteName: "Smart Hive Labs",
    images: [
      {
        url: "/shl_logo.webp",
        width: 1200,
        height: 630,
        alt: "Smart Hive Labs Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Hive Labs - Crafting Digital Excellence",
    description:
      "Web, Mobile & Desktop Development, Graphics Design, and AI Solutions",
    images: ["/shl_logo.webp"],
    creator: "@DhopeGraphics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
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
      <head>
        {/* ✅ Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-06FFDTHRW8"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-06FFDTHRW8');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <CartProvider>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
            <Analytics />
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
