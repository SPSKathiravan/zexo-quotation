"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  ShieldCheck,
  Package,
  Calendar,
  Droplets,
  MapPin,
  Sparkles,
  Send,
  CheckCircle2,
  PhoneCall,
  Scale,
  Activity,
  Leaf,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Product } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

// Custom Slider Component for the Modal
const ModalImageSlider = ({ product }: { product: Product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Look for an 'images' array, otherwise repeat the main image 5 times for demonstration
  const images = (product as any).images || Array(5).fill(product.image);
  const displayImages = images.slice(0, 5);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg border border-white/15 mb-6 group/slider bg-zinc-900">
      {/* Slider Track */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {displayImages.map((img: string, index: number) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image
              src={img}
              alt={`${product.name} - View ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        ))}
      </div>

      {/* Image Number Indicator */}
      <div className="absolute top-3 right-3 bg-black/40 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm z-10">
        {currentIndex + 1} / {displayImages.length}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover/slider:opacity-100 transition-opacity z-10 backdrop-blur-sm"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover/slider:opacity-100 transition-opacity z-10 backdrop-blur-sm"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {displayImages.map((_: any, index: number) => (
          <div
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
              currentIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    volume: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep state for user feedback
    }, 1000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello AgriX Global Exports, I am interested in inquiring about export pricing and MOQ for ${product.name} (${product.category}).`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#DED7C8] overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-zinc-700 border border-[#DED7C8] flex items-center justify-center transition-all hover:scale-105"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Product Imagery & Badges */}
          <div className="md:col-span-5 bg-[#0B2417] p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="glow-orb-gold w-64 h-64 -top-20 -left-20 opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#C89B3C] text-[#07170F]">
                  {product.category}
                </span>
                {product.badge && (
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/10 text-white border border-white/20">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Added 5-Image Slider Here */}
              <ModalImageSlider product={product} />

              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-serif text-white tracking-tight">
                  {product.name}
                </h3>
                {product.details.tagline && (
                  <p className="text-xs text-[#C89B3C] leading-relaxed font-medium">
                    {product.details.tagline}
                  </p>
                )}
                <p className="text-xs text-white/70 leading-relaxed pt-1">
                  {product.shortDesc}
                </p>
              </div>
            </div>

            {/* Quality Standard Seals */}
            <div className="pt-6 mt-6 border-t border-white/15 relative z-10">
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#C89B3C] mb-2">
                Export Compliance
              </p>
              <div className="flex flex-wrap gap-1.5 text-[10px] text-white/80">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">APEDA Registered</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">ISO 22000</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">FSSAI Certified</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">CoA Included</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Specifications & Export RFQ Form */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center justify-between border-b border-[#DED7C8] pb-3 mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E5A3C] flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-[#C89B3C]" />
                  Technical Export Specifications
                </h4>
              </div>

              {/* Specs Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {product.details.grades && (
                  <div className="p-3 rounded-lg bg-white border border-[#DED7C8]">
                    <span className="text-zinc-500 font-medium block">Export Grade:</span>
                    <span className="font-semibold text-[#0B2417]">{product.details.grades}</span>
                  </div>
                )}

                {product.details.gradeQuality && (
                  <div className="p-3 rounded-lg bg-white border border-[#DED7C8]">
                    <span className="text-zinc-500 font-medium block">Quality Profile:</span>
                    <span className="font-semibold text-[#0B2417]">{product.details.gradeQuality}</span>
                  </div>
                )}

                {product.details.form && (
                  <div className="p-3 rounded-lg bg-white border border-[#DED7C8]">
                    <span className="text-zinc-500 font-medium block">Form Available:</span>
                    <span className="font-semibold text-[#0B2417]">{product.details.form}</span>
                  </div>
                )}

                {product.details.origin && (
                  <div className="p-3 rounded-lg bg-white border border-[#DED7C8]">
                    <span className="text-zinc-500 font-medium block flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C89B3C]" />
                      Sourcing Region:
                    </span>
                    <span className="font-semibold text-[#0B2417]">{product.details.origin}</span>
                  </div>
                )}

                {product.details.oilContent && (
                  <div className="p-3 rounded-lg bg-white border border-[#DED7C8]">
                    <span className="text-zinc-500 font-medium block flex items-center gap-1">
                      <Activity className="w-3 h-3 text-[#C89B3C]" />
                      Curcumin / Essential Oil:
                    </span>
                    <span className="font-semibold text-[#0B2417]">{product.details.oilContent}</span>
                  </div>
                )}

                {product.details.activeCompounds && (
                  <div className="p-3 rounded-lg bg-white border border-[#DED7C8]">
                    <span className="text-zinc-500 font-medium block">Active Compounds:</span>
                    <span className="font-semibold text-[#0B2417]">{product.details.activeCompounds}</span>
                  </div>
                )}

                {product.details.harvestSeason && (
                  <div className="p-3 rounded-lg bg-white border border-[#DED7C8]">
                    <span className="text-zinc-500 font-medium block flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C89B3C]" />
                      Harvest Window:
                    </span>
                    <span className="font-semibold text-[#0B2417]">{product.details.harvestSeason}</span>
                  </div>
                )}

                {product.details.moisture && (
                  <div className="p-3 rounded-lg bg-white border border-[#DED7C8]">
                    <span className="text-zinc-500 font-medium block flex items-center gap-1">
                      <Droplets className="w-3 h-3 text-[#C89B3C]" />
                      Moisture Limit:
                    </span>
                    <span className="font-semibold text-[#0B2417]">{product.details.moisture}</span>
                  </div>
                )}

                {product.details.moq && (
                  <div className="p-3 rounded-lg bg-white border border-[#DED7C8]">
                    <span className="text-zinc-500 font-medium block flex items-center gap-1">
                      <Scale className="w-3 h-3 text-[#C89B3C]" />
                      Minimum Order (MOQ):
                    </span>
                    <span className="font-semibold text-[#0B2417]">{product.details.moq}</span>
                  </div>
                )}

                {product.shelfLife && (
                  <div className="p-3 rounded-lg bg-white border border-[#DED7C8]">
                    <span className="text-zinc-500 font-medium block">Standard Shelf Life:</span>
                    <span className="font-semibold text-[#0B2417]">{product.shelfLife}</span>
                  </div>
                )}
              </div>

              {/* Packaging spec full-width */}
              {product.details.packing && (
                <div className="mt-3 p-3 rounded-lg bg-white border border-[#DED7C8] text-xs">
                  <span className="text-zinc-500 font-medium block flex items-center gap-1 mb-0.5">
                    <Package className="w-3.5 h-3.5 text-[#C89B3C]" />
                    Export Packaging Standards:
                  </span>
                  <span className="font-semibold text-[#0B2417] leading-relaxed block">
                    {product.details.packing}
                  </span>
                </div>
              )}
            </div>

            {/* Quick Inquiry / Quote Request */}
            <div className="bg-[#F4EFE6] rounded-xl p-5 border border-[#DED7C8]">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2417] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#C89B3C]" />
                  Request Container / Bulk Quotation
                </h4>
                <a
                  href={`https://wa.me/917810036407?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-[#25D366] hover:underline flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3" />
                  Instant WhatsApp RFQ
                </a>
              </div>

              {submitted ? (
                <div className="p-4 rounded-lg bg-white border border-[#2D8257] text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#2D8257] mx-auto" />
                  <p className="text-xs font-semibold text-[#0B2417]">
                    Inquiry Received for {product.name}
                  </p>
                  <p className="text-[11px] text-zinc-600">
                    Our international trade desk will reply with FOB/CIF quotation & CoA report within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#DED7C8] focus:outline-none focus:border-[#0B2417]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Corporate Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#DED7C8] focus:outline-none focus:border-[#0B2417]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#DED7C8] focus:outline-none focus:border-[#0B2417]"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Destination Country / Port *"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#DED7C8] focus:outline-none focus:border-[#0B2417]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      placeholder={`Estimated Volume (e.g. 5 MT, 1 x 40ft Reefer)`}
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#DED7C8] focus:outline-none focus:border-[#0B2417]"
                    />
                    <input
                      type="text"
                      placeholder="Required Grade or Packaging Spec"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#DED7C8] focus:outline-none focus:border-[#0B2417]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary-luxury py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C89B3C]" />
                    Send Export Inquiry for {product.name}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}