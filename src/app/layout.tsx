import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PROJECT_PORTFOLIO // SECTION_09",
  description: "High-density functional portfolio interface. Classified access only.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-cyber-bg text-cyber-text selection:bg-cyber-alert selection:text-white`}
      >
        <div className="crt-overlay" />
        <div className="noise-bg" />
        <div className="fixed inset-0 grid-dots pointer-events-none" />
        
        {/* Main Terminal Container */}
        <main className="relative z-10 min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
