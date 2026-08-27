import React from "react";
import {
  ShieldCheck,
  Leaf,
  FlaskConical,
  PackageCheck,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function WhyChooseUs() {
  const pillars = [
    {
      number: "01",
      title: "Direct Farm Gate Partnerships",
      tag: "Zero Middlemen",
      icon: Leaf,
      description:
        "Direct contract farming and aggregation across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh, guaranteeing growers fair returns and buyers pure, unadulterated harvests.",
      metrics: "100% Traceable Harvest Batches",
    },
    {
      number: "02",
      title: "Optical Sorting & Lab Verification",
      tag: "NABL Accredited",
      icon: FlaskConical,
      description:
        "Every shipment undergoes multi-level optical cleaning, moisture stabilization, and accredited laboratory testing for pesticide residue, aflatoxins, and active compounds.",
      metrics: "Certificate of Analysis (CoA) Included",
    },
    {
      number: "03",
      title: "Preservation & Barrier Packaging",
      tag: "Food-Grade Standard",
      icon: PackageCheck,
      description:
        "Oxygen-barrier HDPE bags for powders, vacuum-sealed multi-layer foil for green cardamom, and ventilated telescopic cartons for fresh produce to lock in origin aroma.",
      metrics: "Shock & Moisture Proof Packaging",
    },
    {
      number: "04",
      title: "Multimodal Logistics to Global Seaports",
      tag: "Direct Gateway",
      icon: Truck,
      description:
        "Seamless cold-chain road corridors connecting Coimbatore to major departure gateways: Nhava Sheva (JNPT Mumbai), Chennai Port, Cochin Port, and Tuticorin VOC Port.",
      metrics: "Air & Sea Reefer Dispatch",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative border-b border-[#DED7C8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8E2D5] text-[#0B2417] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1E5A3C]" />
            <span>International B2B Credibility</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-[#0B2417]">
            Quality That Holds Up From{" "}
            <span className="text-gold-gradient italic font-serif">
              Farm Gate to Final Port.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Why leading importers, spice processors, and supermarket chains across the Middle East, Europe, and North America partner with AgriX Global.
          </p>
        </div>

        {/* Asymmetric 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative bg-white rounded-3xl p-8 border border-[#DED7C8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Number & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-serif text-[#C89B3C]">
                      {pillar.number}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#E8E2D5] text-[#0B2417]">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0B2417] text-[#C89B3C] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-[#0B2417] tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="pt-4 border-t border-[#DED7C8]/70 flex items-center justify-between text-xs">
                  <span className="text-[#1E5A3C] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2D8257]" />
                    {pillar.metrics}
                  </span>
                  <span className="text-[#C89B3C] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Export Ready →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
