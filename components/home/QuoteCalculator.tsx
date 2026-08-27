"use client";

import React, { useState } from "react";
import {
  Calculator,
  Ship,
  Plane,
  Sparkles,
  Send,
  CheckCircle2,
  PhoneCall,
  Package,
  MapPin,
  Scale,
} from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";

export default function QuoteCalculator() {
  const [selectedCategory, setSelectedCategory] = useState<string>(PRODUCT_CATEGORIES[0].title);
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS[0].id);
  const [volume, setVolume] = useState<number>(5);
  const [unit, setUnit] = useState<"Metric Tons" | "Kg" | "40ft Container">("Metric Tons");
  const [destinationCountry, setDestinationCountry] = useState<string>("United Arab Emirates");
  const [incoterm, setIncoterm] = useState<"FOB (Indian Port)" | "CIF (Destination Port)" | "CFR">("CIF (Destination Port)");
  const [packagingType, setPackagingType] = useState<string>("Standard Bulk Export Bags (25kg/50kg)");
  
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerCompany, setBuyerCompany] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categoryProducts = PRODUCTS.filter((p) => p.category === selectedCategory);
  const currentProduct = PRODUCTS.find((p) => p.id === selectedProductId) || categoryProducts[0];

  const handleCategoryChange = (catTitle: string) => {
    setSelectedCategory(catTitle);
    const prods = PRODUCTS.filter((p) => p.category === catTitle);
    if (prods.length > 0) {
      setSelectedProductId(prods[0].id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappMsg = encodeURIComponent(
    `Hello AgriX Global, I need a quotation for ${volume} ${unit} of ${currentProduct?.name} (${currentProduct?.category}) shipped to ${destinationCountry} under ${incoterm} terms.`
  );

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative border-b border-[#DED7C8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8E2D5] text-[#0B2417] text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5 text-[#1E5A3C]" />
            <span>Interactive B2B Quotation Builder</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-[#0B2417]">
            Estimate Container Logistics &{" "}
            <span className="text-gold-gradient italic font-serif">
              Request Export Pricing.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Select your desired Indian agricultural commodity, volume, and destination port to receive a fast, customized export quotation with complete laboratory CoA specifications.
          </p>
        </div>

        {/* Main Quotation Builder Panel */}
        <div className="bg-white rounded-3xl border border-[#DED7C8] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 border-b lg:border-b-0 lg:border-r border-[#DED7C8]">
            {/* Step 1: Select Category */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0B2417] block">
                1. Select Product Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.title)}
                    className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      selectedCategory === cat.title
                        ? "bg-[#0B2417] text-[#FAF8F5] border-[#0B2417] shadow-sm"
                        : "bg-[#FAF8F5] text-zinc-700 border-[#DED7C8] hover:bg-[#F4EFE6]"
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Specific Product */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0B2417] block">
                2. Select Product
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] text-sm font-semibold text-[#0B2417] focus:outline-none focus:border-[#0B2417]"
              >
                {categoryProducts.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} {p.details.grades ? `(${p.details.grades})` : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Estimated Volume & Unit */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0B2417] block">
                  3. Order Volume
                </label>
                <input
                  type="number"
                  min="1"
                  value={volume}
                  onChange={(e) => setVolume(Math.max(1, Number(e.target.value)))}
                  className="w-full p-3.5 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] text-sm font-semibold text-[#0B2417] focus:outline-none focus:border-[#0B2417]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0B2417] block">
                  Unit
                </label>
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value as any)}
                  className="w-full p-3.5 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] text-sm font-semibold text-[#0B2417] focus:outline-none focus:border-[#0B2417]"
                >
                  <option value="Metric Tons">Metric Tons (MT)</option>
                  <option value="40ft Container">40ft Reefer / Dry Container</option>
                  <option value="Kg">Kilograms (kg)</option>
                </select>
              </div>
            </div>

            {/* Step 4: Destination & Incoterms */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0B2417] block">
                  4. Destination Country / Port
                </label>
                <input
                  type="text"
                  value={destinationCountry}
                  onChange={(e) => setDestinationCountry(e.target.value)}
                  placeholder="e.g. Dubai, Jebel Ali or Rotterdam"
                  className="w-full p-3.5 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] text-sm font-medium text-[#0B2417] focus:outline-none focus:border-[#0B2417]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0B2417] block">
                  Incoterm
                </label>
                <select
                  value={incoterm}
                  onChange={(e) => setIncoterm(e.target.value as any)}
                  className="w-full p-3.5 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] text-sm font-semibold text-[#0B2417] focus:outline-none focus:border-[#0B2417]"
                >
                  <option value="CIF (Destination Port)">CIF (Cost, Insurance & Freight)</option>
                  <option value="FOB (Indian Port)">FOB (Free on Board - Chennai/Cochin/JNPT)</option>
                  <option value="CFR">CFR (Cost and Freight)</option>
                </select>
              </div>
            </div>

            {/* Step 5: Packaging Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0B2417] block">
                5. Packaging Preference
              </label>
              <select
                value={packagingType}
                onChange={(e) => setPackagingType(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] text-sm font-medium text-[#0B2417] focus:outline-none focus:border-[#0B2417]"
              >
                <option value="Standard Bulk Export Bags (25kg/50kg)">Standard Bulk Export Bags (25kg/50kg PP or Jute)</option>
                <option value="Oxygen-Barrier HDPE Poly Bags">Oxygen-Barrier HDPE Poly Bags (Powders)</option>
                <option value="Multi-Layer Vacuum Foil Sealed Packs">Multi-Layer Vacuum Foil Sealed Packs (Spices)</option>
                <option value="Ventilated Telescopic Corrugated Master Cartons">Ventilated Telescopic Corrugated Cartons (Fresh Produce)</option>
                <option value="Custom Private Labeling (Retail Packs 50g-1kg)">Custom Private Labeling (Retail Packs 50g - 1kg)</option>
              </select>
            </div>
          </div>

          {/* Right Summary & Dispatch Quote Column */}
          <div className="lg:col-span-5 bg-[#0B2417] text-white p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C89B3C]">
                    Export Summary
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-white">
                    {currentProduct?.name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#C89B3C]/10 border border-[#C89B3C]/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#C89B3C]" />
                </div>
              </div>

              {/* Specs Breakdown */}
              <div className="space-y-2.5 text-xs text-white/80">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/50">Export Commodity:</span>
                  <span className="font-semibold text-white">{currentProduct?.name} ({currentProduct?.category})</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/50">Estimated Volume:</span>
                  <span className="font-semibold text-[#C89B3C]">{volume} {unit}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/50">Destination:</span>
                  <span className="font-semibold text-white">{destinationCountry}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/50">Price Basis:</span>
                  <span className="font-semibold text-white">{incoterm}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/50">Packaging:</span>
                  <span className="font-semibold text-white truncate max-w-[200px]">{packagingType}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-white/50">Origin & Compliance:</span>
                  <span className="font-semibold text-[#2D8257]">South India • APEDA / ISO 22000</span>
                </div>
              </div>

              {/* Direct Submit Form */}
              {isSubmitted ? (
                <div className="p-4 rounded-xl bg-white/10 border border-[#2D8257] text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#2D8257] mx-auto" />
                  <h4 className="text-sm font-bold font-serif text-white">
                    Quotation Request Dispatched!
                  </h4>
                  <p className="text-xs text-white/70">
                    Our international trade manager will contact you with pro-forma pricing, freight schedules, and CoA specifications within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-xs focus:outline-none focus:border-[#C89B3C]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Corporate Email Address *"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-xs focus:outline-none focus:border-[#C89B3C]"
                  />
                  <input
                    type="text"
                    placeholder="Company / Import Business Name"
                    value={buyerCompany}
                    onChange={(e) => setBuyerCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-xs focus:outline-none focus:border-[#C89B3C]"
                  />
                  <button
                    type="submit"
                    className="w-full btn-gold-luxury py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 text-[#07170F]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Dispatch Official Export RFQ
                  </button>
                </form>
              )}
            </div>

            {/* WhatsApp Quick Dispatch Button */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/917810036407?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
