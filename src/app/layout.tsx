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
    "Smart Hive Labs specializes in Mobile Development , Desktop Development , Web Development, Video Editing , Motion Graphics , 3D & 2D Animation , Graphics Design, AI-driven solutions, and more. Owned by Mensah Isaac Nana Sam (Dhope Graphics).",
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
