import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Globe2,
  Leaf,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCT_CATEGORIES } from "@/data/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07170F] text-[#FAF8F5] relative overflow-hidden border-t border-[#C89B3C]/20">
      {/* Background Decorative Glow Orbs */}
      <div className="glow-orb-gold w-[600px] h-[600px] -top-40 -right-40 opacity-20"></div>
      <div className="glow-orb-emerald w-[700px] h-[700px] -bottom-40 -left-40 opacity-25"></div>

      {/* Top Banner: Export Credentials */}
      <div className="border-b border-white/10 bg-[#0B2417]/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C89B3C]/10 border border-[#C89B3C]/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#C89B3C]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">APEDA & ISO Certified</p>
                <p className="text-xs text-white/60">Strict international food safety</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2D8257]/10 border border-[#2D8257]/30 flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-[#2D8257]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">100% Farm-Direct</p>
                <p className="text-xs text-white/60">Zero middlemen sourcing</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C89B3C]/10 border border-[#C89B3C]/30 flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5 text-[#C89B3C]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">40+ Global Ports</p>
                <p className="text-xs text-white/60">UAE, Europe, USA & APAC</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2D8257]/10 border border-[#2D8257]/30 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#2D8257]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Lab Batch Tested</p>
                <p className="text-xs text-white/60">CoA with every export container</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-[#C89B3C]/40 bg-white p-0.5 flex items-center justify-center">
                <Image
                  src="/Nav-logo.png"
                  alt="AgriX Global Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold tracking-tight text-white font-serif">
                    AgriX
                  </span>
                  <span className="text-2xl font-light tracking-wide text-[#C89B3C] font-serif">
                    Global
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-[#2D8257]">
                  Origin Matters • Quality Travels
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Delivering premium Indian agricultural products to international markets with verified quality and absolute reliability. Sourced directly from certified South Indian growers.
            </p>

            {/* Certifications Pills */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C89B3C]">
                Registered & Certified By
              </p>
              <div className="flex flex-wrap gap-2">
                {COMPANY_INFO.certifications.map((cert) => (
                  <span
                    key={cert.id}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80 font-medium"
                  >
                    {cert.code}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Product Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
              Export Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${encodeURIComponent(cat.title)}`}
                    className="text-white/75 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]/60"></span>
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/products"
                  className="text-xs font-semibold text-[#C89B3C] hover:text-[#E6B858] inline-flex items-center gap-1"
                >
                  View Complete Catalogue (27+ Products)
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-white/75 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/75 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/75 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/75 hover:text-white transition-colors">
                  Contact & RFQ
                </Link>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-[#25D366] transition-colors inline-flex items-center gap-1"
                >
                  WhatsApp Support
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Headquarters */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
              Coimbatore Headquarters
            </h4>
            <div className="space-y-3 text-sm text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-white/80">
                  {COMPANY_INFO.headquarters.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.contact.phoneClean}`}
                  className="text-xs hover:text-white transition-colors"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="text-xs hover:text-white transition-colors"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-gold-luxury text-xs px-4 py-2 rounded-lg inline-flex items-center gap-2"
              >
                Inquire For Export Container
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {currentYear} AgriX Global Exports. Origin Matters. Quality Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Coimbatore, Tamil Nadu, India</span>
            <span>•</span>
            <span>FSSAI • APEDA • ISO 22000</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
