import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.scss";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Pusat Springbed Bogor - Layanan Service & Perbaikan Kasur Profesional Bogor",
  description:
    "Layanan service dan perbaikan kasur profesional di Bogor. Pusat Springbed Bogor menyediakan perbaikan pegas, penggantian busa, re-upholstery, dan kustomisasi kasur. Garansi 10 tahun. Gratis antar jemput area Jabodetabek.",
  keywords:
    "service kasur bogor, perbaikan springbed, ganti busa kasur, repair kasur, Pusat Springbed Bogor, service matras, cuci kasur, service divan, headboard repair, garansi spring bed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
