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
  title: "Sebastian Ibañez | Backend Engineer & Full-Stack Developer",
  description: "Portfolio of Sebastian Ibañez, a Software Engineer specializing in Java, Spring Boot, AWS, and Microservices. Building secure and scalable distributed systems.",
  keywords: ["Sebastian Ibañez", "Software Engineer", "Backend Developer", "Java", "Spring Boot", "AWS", "Microservices", "Full-Stack Developer", "Barranquilla"],
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
