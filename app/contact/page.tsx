"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Clock,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCTS } from "@/data/products";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    productInterest: "Turmeric (High Curcumin)",
    volume: "1 x 40ft Container",
    incoterm: "CIF (Destination Port)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello AgriX Global Exports, I am contacting you regarding an export inquiry for ${formData.productInterest} (Volume: ${formData.volume}, Destination: ${formData.country || "International Port"}).`
  );

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* 1. Top Hero Banner */}
      <section className="bg-[#0B2417] text-white pt-14 pb-16 lg:pt-20 lg:pb-24 relative overflow-hidden border-b border-[#C89B3C]/20">
        <div className="glow-orb-gold w-[600px] h-[600px] -top-32 -right-32 opacity-25"></div>
        <div className="glow-orb-emerald w-[700px] h-[700px] -bottom-32 -left-32 opacity-25"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#C89B3C] text-xs font-semibold border border-[#C89B3C]/30">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>International Trade Desk • 24/7 Reefer Inquiries</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-white max-w-4xl leading-tight">
            Connect With Our Export Desk in{" "}
            <span className="text-gold-gradient italic font-serif">
              Coimbatore, India.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
            Request official container quotations, custom private-label packaging, and accredited Certificates of Analysis (CoA) directly from our international trade specialists.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Coordinates & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DED7C8] shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
                  Corporate Headquarters
                </span>
                <h3 className="text-xl font-bold font-serif text-[#0B2417] mt-1">
                  AgriX Global Exports
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#1E5A3C] border border-[#DED7C8] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#0B2417] block font-semibold mb-0.5">
                      Coimbatore Headquarters
                    </strong>
                    <p className="leading-relaxed text-zinc-600">
                      {COMPANY_INFO.headquarters.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#1E5A3C] border border-[#DED7C8] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#0B2417] block font-semibold mb-0.5">
                      Telephone & WhatsApp Desk
                    </strong>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phoneClean}`}
                      className="hover:text-[#1E5A3C] font-semibold text-[#0B2417] transition-colors"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#1E5A3C] border border-[#DED7C8] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#0B2417] block font-semibold mb-0.5">
                      Official Export Inquiries
                    </strong>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="hover:text-[#1E5A3C] font-semibold text-[#0B2417] transition-colors"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#1E5A3C] border border-[#DED7C8] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#0B2417] block font-semibold mb-0.5">
                      Operating Hours
                    </strong>
                    <p className="text-zinc-600 text-xs leading-relaxed">
                      {COMPANY_INFO.contact.businessHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/917810036407?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-all shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Start Instant WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Certifications Badge Card */}
            <div className="bg-[#0B2417] text-white rounded-3xl p-6 border border-[#C89B3C]/30 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C89B3C] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Export Credentials
              </span>
              <p className="text-xs text-white/80 leading-relaxed">
                Registered under the Government of India Agricultural & Processed Food Products Export Development Authority (APEDA) and Food Safety and Standards Authority of India (FSSAI).
              </p>
            </div>
          </div>

          {/* Right Column: Interactive B2B RFQ Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DED7C8] shadow-lg space-y-6">
              <div className="border-b border-[#DED7C8] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E5A3C] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
                  Official Request For Quotation (RFQ)
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#0B2417] mt-1">
                  Submit Container Specification
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#2D8257] text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#2D8257] mx-auto" />
                  <h4 className="text-xl font-bold font-serif text-[#0B2417]">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting AgriX Global Exports. Our international trade team will review your specifications and issue a customized FOB/CIF quote and CoA laboratory report within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary-luxury px-6 py-2.5 rounded-xl text-xs font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#0B2417] block">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] focus:outline-none focus:border-[#0B2417]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#0B2417] block">
                        Corporate Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] focus:outline-none focus:border-[#0B2417]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#0B2417] block">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] focus:outline-none focus:border-[#0B2417]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#0B2417] block">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] focus:outline-none focus:border-[#0B2417]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#0B2417] block">
                        Destination Country / Port <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] focus:outline-none focus:border-[#0B2417]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#0B2417] block">
                        Product of Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] focus:outline-none focus:border-[#0B2417] font-medium"
                      >
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={`${p.name} (${p.category})`}>
                            {p.name} — {p.category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#0B2417] block">
                        Estimated Volume
                      </label>
                      <input
                        type="text"
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] focus:outline-none focus:border-[#0B2417]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#0B2417] block">
                        Incoterm Basis
                      </label>
                      <select
                        value={formData.incoterm}
                        onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] focus:outline-none focus:border-[#0B2417]"
                      >
                        <option value="CIF (Destination Port)">CIF (Destination Port)</option>
                        <option value="FOB (Chennai/Cochin/JNPT)">FOB (Indian Port)</option>
                        <option value="CFR">CFR (Cost & Freight)</option>
                        <option value="Air CIP/CPT">Air Freight (Airport CIP/CPT)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold text-[#0B2417] block">
                      Specific Requirements & Custom Packaging Notes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify desired mesh size, moisture tolerance, retail/bulk packaging, or target delivery timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] focus:outline-none focus:border-[#0B2417]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary-luxury py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4 text-[#C89B3C]" />
                    <span>Submit Official Export RFQ</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions (FAQ) Accordion */}
      <section className="py-16 bg-[#FAF8F5] border-t border-[#DED7C8]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E5A3C]">
              B2B Importer Information
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B2417]">
              Frequently Asked Export Questions
            </h3>
          </div>

          <div className="space-y-3">
            {COMPANY_INFO.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#DED7C8] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm font-bold text-[#0B2417] font-serif">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C89B3C] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 border-t border-[#DED7C8]/50 text-xs sm:text-sm text-zinc-600 leading-relaxed animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
