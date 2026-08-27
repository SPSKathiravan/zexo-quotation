"use client";

import React from "react";
import { Globe2 } from "lucide-react";

export default function GlobalRouteMap() {
  return (
    <section className="py-20 lg:py-28 bg-[#07170F] text-[#FAF8F5] relative overflow-hidden border-b border-[#C89B3C]/20">
      {/* Ambient background glows */}
      <div className="glow-orb-gold w-[600px] h-[600px] top-0 left-1/4 opacity-20 pointer-events-none"></div>
      <div className="glow-orb-emerald w-[600px] h-[600px] bottom-0 right-1/4 opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2417] text-[#C89B3C] text-xs font-semibold border border-[#C89B3C]/30">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Multimodal International Trade Corridors</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-white">
            Connecting South Indian Harvests to{" "}
            <span className="text-gold-gradient italic font-serif inline-block animate-float-slow">
              40+ Global Ports.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            From our central grading packhouse in Coimbatore, consignments move under temperature-controlled monitoring to Chennai Port, Cochin Port, and Nhava Sheva (JNPT) for direct ocean sailings and air cargo dispatches.
          </p>
        </div>

        <div className="relative w-full aspect-[3/1] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#05100B]">
          <video
            src="/Cargo-vid.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
