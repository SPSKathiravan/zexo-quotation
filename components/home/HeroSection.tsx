"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection({ onOpenQuote }: { onOpenQuote?: () => void }) {
  return (
    <section className="relative overflow-hidden h-[68vh] min-h-[520px] flex items-center">
      {/* Full-Screen Background Video */}
      <video
        src="/hero-export.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute bottom-8 left-4 sm:left-6 lg:left-8 z-10">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Link
            href="/products"
            className="btn-primary-luxury px-7 py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 group"
          >
            <span>Explore Export Catalogue (27+ Items)</span>
            <ArrowRight className="w-4 h-4 text-[#C89B3C] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="btn-secondary-luxury px-7 py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
          >
            <span>Request B2B Export Quote</span>
          </Link>
        </div>
      </div>
    </section>
  );
}