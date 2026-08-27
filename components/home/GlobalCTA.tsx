import React from "react";
import Link from "next/link";
import { Sparkles, PhoneCall, ArrowRight, ShieldCheck, Globe2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function GlobalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#07170F] text-white relative overflow-hidden border-t border-[#C89B3C]/20">
      {/* Radial Glow Orbs */}
      <div className="glow-orb-gold w-[600px] h-[600px] -top-32 -left-32 opacity-25"></div>
      <div className="glow-orb-emerald w-[700px] h-[700px] -bottom-32 -right-32 opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B2417] text-[#C89B3C] text-xs font-semibold border border-[#C89B3C]/40">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Indian Origin • Global B2B Supply Contracts</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Ready to Source Export-Grade Indian{" "}
          <span className="text-gold-gradient italic font-serif">
            Agricultural Commodities?
          </span>
        </h2>

        <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
          Connect directly with our international export desk in Coimbatore. We provide custom grading, certified laboratory test reports (CoA), flexible container volumes, and reliable multimodal shipping to your destination port.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="btn-gold-luxury px-8 py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 text-[#07170F] shadow-xl hover:scale-105 transition-all w-full sm:w-auto"
          >
            <span>Request Container Quotation (RFQ)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={COMPANY_INFO.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20ba59] transition-all w-full sm:w-auto shadow-lg"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Chat on WhatsApp (+91 78100 36407)</span>
          </a>
        </div>

        {/* Footer Proof Points */}
        <div className="pt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#C89B3C]" />
            APEDA & ISO 22000 Certified
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Globe2 className="w-4 h-4 text-[#2D8257]" />
            FOB / CIF Seaport Dispatch
          </span>
          <span>•</span>
          <span>FSSAI Export Compliant</span>
        </div>
      </div>
    </section>
  );
}
