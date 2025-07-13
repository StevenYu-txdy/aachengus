import { Metadata } from "next";
import "./globals.css"; // ← 仅在这里引入一次全局 Tailwind CSS
import AOSInitializer from "@/components/AOSInitializer";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { createMetadata } from "@/lib/metadata";
import Header from "@/components/Header";

import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Aacheng Limited - Your Gateway to Japan",
  description: "Live, Work, and Discover Japan - Professional immigration and business services",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    // lang attribute will be set by app/[locale]/layout.tsx if it renders <html>
    // However, the guide suggests app/[locale]/layout.tsx *should not* render <html>
    // So, the root layout should set a default lang, or we can let middleware handle it if it modifies headers.
    // For now, setting a default "en" here, assuming middleware handles the actual per-request locale correctly for SEO etc.
    <html lang="en" suppressHydrationWarning>
      <head />
      {/* 这里给整个页面设定统一的背景色／文字色，Tailwind Utility 会生效 */}
      <body
        className="min-h-screen bg-white text-gray-800 antialiased font-sans"
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AOSInitializer />
          <Header />
          {children}
          {/* This will be app/[locale]/layout.tsx and its content */}
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
