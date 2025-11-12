import type { Metadata } from "next";
import { Inter, Aboreto } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const aboreto = Aboreto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aboreto",
});

export const metadata: Metadata = {
  title: "AnalyzeBiotech - Advanced Diagnostics Solutions",
  description: "Leading the future of in vitro diagnostics with cutting-edge technology, precision instruments, and comprehensive solutions for laboratories worldwide.",
  keywords: "biotech, diagnostics, laboratory, medical equipment, immunoassay, microbiology, clinical chemistry",
  authors: [{ name: "AnalyzeBiotech" }],
  openGraph: {
    title: "AnalyzeBiotech - Advanced Diagnostics Solutions",
    description: "Leading the future of in vitro diagnostics with cutting-edge technology, precision instruments, and comprehensive solutions for laboratories worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${aboreto.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
