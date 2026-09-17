import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalSeoSchema from "@/components/LocalSeoSchema";
import FloatingCallButtons from "@/components/FloatingCallButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mitra Papers | 30+ Years of Stationery With Trust in Gora Bazar, Dum Dum",
    template: "%s | Mitra Papers - Stationery With Trust",
  },
  description: "Mitra Papers is a trusted local stationery store in Gora Bazar, Dum Dum Cantonment area, West Bengal. Quality notebooks, copier paper, pens, watercolors & office supplies since 30+ years.",
  keywords: [
    "stationery store in Gora Bazar",
    "stationery shop in Dum Dum Cantonment",
    "stationery store near Dum Dum",
    "stationery shop near me",
    "school stationery near me",
    "office stationery near me",
    "art supplies near me",
    "paper products near me",
    "Mitra Papers",
    "A4 paper Dum Dum",
  ],
  authors: [{ name: "Mitra Papers" }],
  creator: "Mitra Papers",
  metadataBase: new URL("https://mitrapapers.com"),
  openGraph: {
    title: "Mitra Papers - Stationery With Trust",
    description: "Quality stationery for students, artists, professionals and everyday creators — backed by 30+ years of trust in Gora Bazar, Dum Dum Cantonment.",
    url: "https://mitrapapers.com",
    siteName: "Mitra Papers",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mitra Papers Logo - Stationery With Trust",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <GoogleTagManager gtmId="GTM-KFLSD3Q6" />
      <head>
        <LocalSeoSchema />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory-50 text-charcoal-900 selection:bg-sage-200 selection:text-olive-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCallButtons />
      </body>
    </html>
  );
}
