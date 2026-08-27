import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  ShieldCheck,
  Award,
  ArrowRight,
  Leaf,
  CheckCircle2,
  Globe2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden border-b border-[#DED7C8]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Story Mosaic */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 space-y-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#DED7C8] bg-zinc-900">
                <Image
                  src="/Cargo-1.png"
                  alt="AgriX Global air cargo shipment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>

              {/* Secondary Overlapping Pill Card */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-[#DED7C8] shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0B2417] text-[#C89B3C] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h5 className="text-sm font-bold text-[#0B2417] font-serif">
                    Coimbatore Central Hub
                  </h5>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Centrally positioned with multi-lane corridors to Chennai, Cochin & Tuticorin ports.
                  </p>
                </div>

                <div className="bg-[#0B2417] text-white rounded-2xl p-5 border border-[#C89B3C]/30 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C89B3C]/20 text-[#C89B3C] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-[#C89B3C]" />
                  </div>
                  <h5 className="text-sm font-bold text-white font-serif">
                    100% Single-Batch Trace
                  </h5>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Full harvest documentation, CoA lab reports & phytosanitary certificates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8E2D5] text-[#0B2417] text-xs font-semibold">
              <Leaf className="w-3.5 h-3.5 text-[#1E5A3C]" />
              <span>Our Brand Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-[#0B2417] leading-tight">
              Origin Matters.{" "}
              <span className="text-gold-gradient italic font-serif">
                Integrity Travels.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              AgriX Global delivers premium Indian agri products to international markets with quality and reliability. Our mission is built on a simple idea: <strong>origin matters</strong>. Every batch we export carries the integrity of the farm it came from.
            </p>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Our products comply with global food safety standards, including certifications from the <strong>Agricultural & Processed Food Products Export Development Authority (APEDA)</strong>, the <strong>Food Safety and Standards Authority of India (FSSAI)</strong>, and the <strong>International Organization for Standardization (ISO 22000)</strong>.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1E5A3C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2417]">
                    Zero-Middlemen Farm Gate Contracting
                  </h4>
                  <p className="text-xs text-zinc-600">
                    Transparent relationships with regional growers assuring fair prices and unadulterated freshness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1E5A3C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2417]">
                    Strict Multi-Residue & Aflatoxin Screening
                  </h4>
                  <p className="text-xs text-zinc-600">
                    Every consignment tested in accredited NABL laboratories before container loading.
                  </p>
                </div>
              </div>
            </div>

            {/* About Page Link */}
            <div className="pt-4">
              <Link
                href="/about"
                className="btn-primary-luxury px-6 py-3.5 rounded-xl text-xs font-semibold inline-flex items-center gap-2"
              >
                <span>Read Full Brand & Infrastructure Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C89B3C]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
