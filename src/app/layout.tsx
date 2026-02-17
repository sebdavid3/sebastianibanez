import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Image from "next/image";
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
  title: "Sebastian Ibañez | Backend Engineer & Full-Stack Developer",
  description: "Portfolio of Sebastian Ibañez, a Software Engineer specializing in Java, Spring Boot, AWS, and Microservices. Building secure and scalable distributed systems.",
  keywords: ["Sebastian Ibañez", "Software Engineer", "Backend Developer", "Java", "Spring Boot", "AWS", "Microservices", "Full-Stack Developer", "Barranquilla"],
  icons: {
    icon: "/images/icon.jpg?v=1",
    shortcut: "/images/icon.jpg?v=1",
    apple: "/images/icon.jpg?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-cyber-text selection:bg-cyber-alert selection:text-white`}
      >
        {/* Optimized Background Image Layer - High Performance */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.25]">
          <Image
            src="/images/evangelion-unit-01-3840x2160-15699.png"
            alt="Background"
            fill
            priority
            quality={75}
            className="object-cover object-center"
          />
        </div>
        
        {/* Simplified Overlays for better performance */}
        <div className="crt-overlay opacity-50" />
        <div className="fixed inset-0 grid-dots pointer-events-none opacity-5" />
        
        {/* Main Terminal Container */}
        <main className="relative z-10 min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
