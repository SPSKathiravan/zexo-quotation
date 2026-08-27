import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Globe2,
  Leaf,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sprout,
  Users,
  Building2,
  ScanEye,
  Microscope,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function AboutPage() {
  const values = [
    {
      title: "Origin Traceability",
      desc: "We document the exact provenance of every harvest batch down to the grower clusters in Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh.",
      icon: Sprout,
    },
    {
      title: "Laboratory Verified Purity",
      desc: "Every export container is tested for moisture limits, pesticide residue, aflatoxins, and essential compound potencies in NABL accredited labs.",
      icon: Microscope,
    },
    {
      title: "Zero-Middlemen Integrity",
      desc: "Direct aggregation ensures ethical compensation for farmers and unadulterated, uncompromised quality for international buyers.",
      icon: Users,
    },
    {
      title: "Multimodal Cold-Chain",
      desc: "State-of-the-art grading, pre-cooling, and temperature-controlled port transit from Coimbatore to Chennai, Cochin, and Nhava Sheva gateways.",
      icon: Globe2,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* 1. Hero Section */}
      <section className="bg-[#0B2417] text-white pt-14 pb-16 lg:pt-20 lg:pb-24 relative overflow-hidden border-b border-[#C89B3C]/20">
        <div className="glow-orb-gold w-[600px] h-[600px] -top-32 -right-32 opacity-25"></div>
        <div className="glow-orb-emerald w-[700px] h-[700px] -bottom-32 -left-32 opacity-25"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#C89B3C] text-xs font-semibold border border-[#C89B3C]/30">
            <Leaf className="w-3.5 h-3.5" />
            <span>About AgriX Global Exports</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-white max-w-4xl leading-tight">
            Maintaining Trust, Sustainability &{" "}
            <span className="text-gold-gradient italic font-serif">
              Long-Term Global Business.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
            Delivering premium Indian agricultural products to international markets with verified quality, scientific testing, and ethical provenance.
          </p>
        </div>
      </section>

      {/* 2. Core Brand Story Split */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Rich Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E2D5] text-[#0B2417] text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1E5A3C]" />
              <span>Our Foundational Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0B2417] tracking-tight">
              Origin Matters: From South Indian Soils to International Ports
            </h2>

            <p className="text-base text-zinc-700 leading-relaxed">
              AgriX Global delivers premium Indian agri products to international markets with quality and reliability. Our mission is built on a simple idea: <strong>origin matters</strong>. Every batch we export carries the integrity of the farm it came from.
            </p>

            <p className="text-base text-zinc-700 leading-relaxed">
              Our products comply with global food safety standards, including certifications from the <strong>Agricultural & Processed Food Products Export Development Authority (APEDA)</strong>, the <strong>Food Safety and Standards Authority of India (FSSAI)</strong>, and the <strong>International Organization for Standardization (ISO 22000)</strong>.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-[#DED7C8] shadow-sm space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E5A3C]">
                Why AgriX Global Was Founded
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                International buyers historically faced inconsistent grades, intermediary adulteration, and opaque supply chains. AgriX Global was established to solve this through direct contract aggregation, optical sorting, NABL accredited laboratory screening, and temperature-controlled logistics.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#DED7C8] bg-zinc-900">
              <Image
                src="/Turmeric.jpg"
                alt="AgriX Global Harvest Selection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C89B3C] mb-1">
                  High-Purity Sourcing
                </span>
                <h4 className="text-lg font-bold font-serif text-white">
                  Salem & Erode Turmeric Plantations
                </h4>
                <p className="text-xs text-white/80">Direct contract harvests in Tamil Nadu</p>
              </div>
            </div>

            <div className="bg-[#0B2417] text-white p-6 rounded-2xl border border-[#C89B3C]/30 space-y-2">
              <div className="flex items-center gap-2 text-[#C89B3C]">
                <Award className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Quality Guarantee</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                Compliant with APEDA, FSSAI & ISO 22000 — every shipment is documented, tested, and export-ready before it leaves India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-16 bg-[#FAF8F5] border-y border-[#DED7C8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B2417]">
              Our Guiding Operational Principles
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600">
              The four commitments that guide every container we pack and dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#DED7C8] shadow-sm hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0B2417] text-[#C89B3C] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold font-serif text-[#0B2417]">{v.title}</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Packhouse Infrastructure & Logistics Hub */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2417] rounded-3xl p-8 sm:p-12 text-white border border-[#C89B3C]/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
              Infrastructure & Strategic Location
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold font-serif text-white">
              Coimbatore Central Export Hub
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Situated in Western Tamil Nadu at the foothills of the Western Ghats, our Coimbatore central facility connects seamlessly to major agricultural belts (Idukki, Nilgiris, Theni, Pollachi, Erode, Guntur) with high-speed road corridors to Chennai, Cochin, and Nhava Sheva seaports.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#C89B3C] font-bold block">Cochin Port</span>
                <span className="text-white/60">160 km Corridor</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#C89B3C] font-bold block">Chennai Port</span>
                <span className="text-white/60">Direct Rail & Reefer</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#C89B3C] font-bold block">Tuticorin VOC Port</span>
                <span className="text-white/60">South India Seaway</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 rounded-2xl p-6 border border-white/10 text-center space-y-4">
            <Building2 className="w-10 h-10 text-[#C89B3C] mx-auto" />
            <h4 className="text-lg font-bold font-serif text-white">Corporate Headquarters</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              {COMPANY_INFO.headquarters.fullAddress}
            </p>
            <Link
              href="/contact"
              className="btn-gold-luxury px-6 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2 text-[#07170F]"
            >
              <span>Connect with Export Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
