import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import StickyNavbar from "./components/Navbar"; // Import StickyNavbar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional House Painter Portfolio",
  description:
    "Reliable residential and commercial painting services with quality finishes and on-time delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F3F4F6] text-[#1E3A8A] min-h-screen`}
      >
        <StickyNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
