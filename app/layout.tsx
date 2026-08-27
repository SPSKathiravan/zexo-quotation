import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agrixglobal.com"),
  title: "AgriX Global — Premium Indian Agricultural Export Brand",
  description:
    "Origin Matters. Quality Travels. Exporting India's finest spices, dehydrated powders, fresh fruits and vegetables to over 40+ international ports with 100% farm-direct traceability and APEDA, FSSAI, ISO 22000 certification.",
  keywords: [
    "AgriX Global",
    "Indian Agricultural Exporter",
    "Spices Export India",
    "Turmeric Curcumin Exporter",
    "Tellicherry Black Pepper",
    "Green Cardamom Export",
    "Dehydrated Vegetable Powders",
    "Moringa Powder Export",
    "Cavendish Banana Exporter",
    "APEDA Certified Exporter",
    "Coimbatore Agri Export",
  ],
  authors: [{ name: "AgriX Global Exports" }],
  openGraph: {
    title: "AgriX Global — Premium Indian Agricultural Export Brand",
    description: "Exporting India's finest spices, dehydrated powders, fresh fruits and vegetables with 100% farm-direct traceability.",
    url: "https://www.agrixglobal.com",
    siteName: "AgriX Global",
    images: [
      {
        url: "/Turmeric.jpg",
        width: 1200,
        height: 630,
        alt: "AgriX Global Premium Agricultural Exports",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/Nav-logo.png",
    shortcut: "/Nav-logo.png",
    apple: "/Nav-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#111A14] antialiased selection:bg-[#C89B3C]/30 selection:text-[#0B2417]">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
