import React from "react";
import {
  Sprout,
  ScanEye,
  Microscope,
  PackageCheck,
  Ship,
  CheckCircle2,
  ShieldCheck,
  Award,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function QualityProcess() {
  const steps = [
    {
      step: "01",
      title: "Farm Gate Sourcing",
      subtitle: "Zero Middlemen Aggregation",
      desc: "Direct harvesting partnerships with certified growers in Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh ensuring peak seasonal maturity.",
      icon: Sprout,
    },
    {
      step: "02",
      title: "Optical & Laser Sorting",
      desc: "Advanced destoning, gravity separation, and color sorting to eliminate extraneous matter and isolate uniform export grades.",
      icon: ScanEye,
    },
    {
      step: "03",
      title: "Accredited Lab Testing",
      desc: "Comprehensive testing for pesticide residue, aflatoxins, heavy metals, microbial count, and curcumin/piperine/essential oil levels.",
      icon: Microscope,
    },
    {
      step: "04",
      title: "Preservation Packaging",
      desc: "Food-grade HDPE bags with inner liners, multi-layer vacuum foil packs, and ventilated corrugated cartons preserving fresh aroma.",
      icon: PackageCheck,
    },
    {
      step: "05",
      title: "Multimodal Shipping",
      desc: "Temperature-controlled reefer trucks directly from Coimbatore to Chennai, Cochin, and Nhava Sheva ports with real-time tracking.",
      icon: Ship,
    },
  ];

  const ensureChecklist = [
    "Proper cleaning & grading — advanced sorting technology for premium export uniformity.",
    "Hygienic processing in state-of-the-art, zero-contamination packhouse facilities.",
    "Laboratory testing for pesticide residue, aflatoxins, and nutritional/active compound profiles.",
    "Moisture control & advanced drying to preserve natural aroma and long transit shelf life.",
    "Safe export packaging — food-grade, moisture-proof, and shock-resistant for maritime & air cargo.",
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative border-b border-[#DED7C8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8E2D5] text-[#0B2417] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1E5A3C]" />
            <span>Farm-to-Port Quality Lifecycle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-[#0B2417]">
            Transparent Export Process,{" "}
            <span className="text-gold-gradient italic font-serif">
              Zero Compromise.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Every container leaves India with verified provenance, accredited lab test reports, and airtight export documentation.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-[#DED7C8] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold font-serif text-[#C89B3C]">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#0B2417] text-[#C89B3C] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#0B2417] font-serif mb-2 group-hover:text-[#1E5A3C] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#DED7C8]/50 text-[10px] uppercase font-bold text-[#1E5A3C]">
                  Step {idx + 1} of 5
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Assurance Checklist Split Banner */}
        <div className="bg-[#0B2417] rounded-3xl p-8 sm:p-12 text-white border border-[#C89B3C]/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
              We Ensure Every Single Shipment
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Standardized Food Safety & Complete Batch Compliance
            </h3>

            <div className="space-y-3 pt-2">
              {ensureChecklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 rounded-2xl p-6 border border-white/10 text-center space-y-4 backdrop-blur-sm">
            <div className="w-14 h-14 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#C89B3C] flex items-center justify-center mx-auto">
              <Award className="w-7 h-7" />
            </div>

            <h4 className="text-lg font-bold font-serif text-white">
              100% Export-Ready Guarantee
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Every shipment is accompanied by commercial invoice, packing list, Certificate of Origin, Phytosanitary Certificate, and accredited Laboratory Certificate of Analysis (CoA).
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-2 text-[11px] font-semibold text-[#C89B3C]">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">APEDA Registered</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">ISO 22000:2018</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">FSSAI Export</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
