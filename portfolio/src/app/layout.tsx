import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nandana P | Portfolio",
  description: "Minimalist portfolio of Nandana P, Associate Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden`}>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ParticleBackground />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
