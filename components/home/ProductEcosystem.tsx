"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Package,
  Scale,
  Droplets,
  ExternalLink,
  Leaf,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, Product } from "@/data/products";
import ProductDetailModal from "@/components/ProductDetailModal";

const ImageSlider = ({ product, onClick }: { product: Product; onClick: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Look for an 'images' array in the product data, otherwise repeat the main image 5 times
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
    <div 
      className="relative aspect-[4/3] w-full bg-zinc-900 overflow-hidden cursor-pointer group/slider" 
      onClick={onClick}
    >
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              currentIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function ProductEcosystem() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS.slice(0, 12) // Show top 12 featured across all
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative border-b border-[#DED7C8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8E2D5] text-[#0B2417] text-xs font-semibold">
              <Leaf className="w-3.5 h-3.5 text-[#1E5A3C]" />
              <span>Export-Grade Product Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-[#0B2417]">
              Engineered for Global Purity,{" "}
              <span className="text-gold-gradient italic font-serif">
                Packed for Long Transit.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Explore our core export categories sourced directly from certified plantations across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh.
            </p>
          </div>

          <Link
            href="/products"
            className="btn-primary-luxury px-6 py-3.5 rounded-xl text-xs font-semibold inline-flex items-center gap-2 shrink-0 self-start md:self-auto"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 text-[#C89B3C]" />
          </Link>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              selectedCategory === "All"
                ? "bg-[#0B2417] text-[#FAF8F5] shadow-sm border border-[#0B2417]"
                : "bg-white text-zinc-700 hover:bg-[#F4EFE6] border border-[#DED7C8]"
            }`}
          >
            All Categories
          </button>
          {PRODUCT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.title;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#0B2417] text-[#FAF8F5] shadow-sm border border-[#0B2417]"
                    : "bg-white text-zinc-700 hover:bg-[#F4EFE6] border border-[#DED7C8]"
                }`}
              >
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#DED7C8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Product Visual Top - Image Slider */}
              <ImageSlider 
                product={product} 
                onClick={() => setActiveModalProduct(product)} 
              />

              {/* Product Details Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      onClick={() => setActiveModalProduct(product)}
                      className="text-lg font-bold font-serif text-[#0B2417] tracking-tight group-hover:text-[#1E5A3C] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Key Spec Snippets */}
                <div className="pt-3 border-t border-[#DED7C8]/70 space-y-1.5 text-[11px] text-zinc-600">
                  {product.details.grades && (
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Grade:</span>
                      <span className="font-semibold text-[#0B2417] truncate max-w-[170px]">
                        {product.details.grades}
                      </span>
                    </div>
                  )}

                  {product.details.origin && (
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#C89B3C]" /> Origin:
                      </span>
                      <span className="font-medium text-[#0B2417] truncate max-w-[170px]">
                        {product.details.origin}
                      </span>
                    </div>
                  )}

                  {product.details.moq && (
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400 flex items-center gap-1">
                        <Scale className="w-3 h-3 text-[#1E5A3C]" /> MOQ:
                      </span>
                      <span className="font-semibold text-[#1E5A3C]">
                        {product.details.moq}
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Trigger */}
                <button
                  onClick={() => setActiveModalProduct(product)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FAF8F5] group-hover:bg-[#0B2417] text-[#0B2417] group-hover:text-[#FAF8F5] border border-[#DED7C8] group-hover:border-[#0B2417] text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <span>View Specifications & Quote</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C89B3C]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Prompt */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0B2417] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#C89B3C]/30 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold font-serif text-white">
              Looking for custom specifications or bulk container volumes?
            </h3>
            <p className="text-xs text-white/70">
              We provide tailored mesh sizes, moisture control parameters, and custom private-label packaging.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-gold-luxury px-6 py-3 rounded-xl text-xs font-semibold whitespace-nowrap inline-flex items-center gap-2 shrink-0"
          >
            <span>Request Custom Packaging & RFQ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Global Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        isOpen={!!activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
}