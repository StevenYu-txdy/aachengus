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
      <head>
        {/* Mobile viewport height fix for WeChat and other mobile browsers */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Fix viewport height issues on mobile browsers, especially WeChat
              function setVH() {
                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', vh + 'px');
              }
              
              // Set initial value
              setVH();
              
              // Update on resize and orientation change
              window.addEventListener('resize', setVH);
              window.addEventListener('orientationchange', function() {
                setTimeout(setVH, 100);
              });
              
              // WeChat browser specific fixes
              if (navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1) {
                // Prevent WeChat from adjusting font size
                document.addEventListener('WeixinJSBridgeReady', function() {
                  setVH();
                });
                
                // Additional WeChat-specific optimizations
                document.addEventListener('DOMContentLoaded', function() {
                  // Prevent zoom on input focus
                  const inputs = document.querySelectorAll('input, textarea');
                  inputs.forEach(function(input) {
                    input.addEventListener('focus', function() {
                      input.style.fontSize = '16px';
                    });
                  });
                });
              }
            `,
          }}
        />
      </head>
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
