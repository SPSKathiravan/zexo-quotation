import React from "react";
import { ShieldCheck, Award, CheckCircle2, Globe2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function CertificationsMarquee() {
  const certList = [
    ...COMPANY_INFO.certifications,
    ...COMPANY_INFO.certifications,
    ...COMPANY_INFO.certifications,
  ];

  return (
    <section className="py-14 bg-[#0B2417] text-white border-y border-[#C89B3C]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#C89B3C] font-semibold mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Accredited Global Food Safety Compliance</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
          Certified for High-Standard International Trade
        </h3>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden mask-gradient-x">
        <div className="animate-marquee flex items-center gap-6 py-2">
          {certList.map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="flex items-center gap-3.5 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white shrink-0 hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-[#C89B3C]/20 border border-[#C89B3C]/40 flex items-center justify-center text-[#C89B3C]">
                <Award className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-white font-serif">
                  {cert.code}
                </span>
                <span className="text-[11px] text-white/60 max-w-[200px] truncate">
                  {cert.name}
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C89B3C]/20 text-[#C89B3C] font-semibold ml-2">
                {cert.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
