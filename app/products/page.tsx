"use client";

import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Filter,
  Grid,
  List,
  ArrowRight,
  Sparkles,
  MapPin,
  Package,
  Scale,
  Calendar,
  Droplets,
  ExternalLink,
  Leaf,
  ShieldCheck,
  X,
  SlidersHorizontal,
} from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, Product } from "@/data/products";
import ProductDetailModal from "@/components/ProductDetailModal";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("All");
  const [selectedForm, setSelectedForm] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Available origins from data
  const origins = ["All", "Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh", "Gujarat"];
  const forms = ["All", "Whole", "Powder", "Fresh", "Dried"];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== "All" && product.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.shortDesc.toLowerCase().includes(q);
        const matchesGrades = product.details.grades?.toLowerCase().includes(q);
        const matchesOrigin = product.details.origin?.toLowerCase().includes(q);
        const matchesCategory = product.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesGrades && !matchesOrigin && !matchesCategory) {
          return false;
        }
      }

      // Origin filter
      if (selectedOrigin !== "All") {
        if (!product.details.origin?.toLowerCase().includes(selectedOrigin.toLowerCase())) {
          return false;
        }
      }

      // Form filter
      if (selectedForm !== "All") {
        const formStr = (product.details.form || product.filterGroup || "").toLowerCase();
        if (!formStr.includes(selectedForm.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery, selectedOrigin, selectedForm]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setSelectedOrigin("All");
    setSelectedForm("All");
  };

  const hasActiveFilters =
    selectedCategory !== "All" ||
    searchQuery !== "" ||
    selectedOrigin !== "All" ||
    selectedForm !== "All";

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Top Hero Banner */}
      <section className="bg-[#0B2417] text-white pt-14 pb-16 lg:pt-20 lg:pb-24 relative overflow-hidden border-b border-[#C89B3C]/20">
        <div className="glow-orb-gold w-[600px] h-[600px] -top-32 -right-32 opacity-25"></div>
        <div className="glow-orb-emerald w-[700px] h-[700px] -bottom-32 -left-32 opacity-25"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#C89B3C] text-xs font-semibold border border-[#C89B3C]/30">
            <Leaf className="w-3.5 h-3.5" />
            <span>Complete B2B Export Catalogue • 27+ Products</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-white max-w-3xl leading-tight">
            India&apos;s Finest Spices, Dehydrated Powders &{" "}
            <span className="text-gold-gradient italic font-serif">
              Fresh Produce.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
            Every product is hand-graded, laboratory tested, and certified for international export compliance. Select a category below or search for specific grades and specifications.
          </p>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#DED7C8] shadow-sm mb-8 space-y-4">
          {/* Top Row: Search Input & View Toggles */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, grade (e.g. MG1, Teja S17, High Curcumin), or origin..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DED7C8] text-xs sm:text-sm text-[#0B2417] placeholder:text-zinc-400 focus:outline-none focus:border-[#0B2417]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Grid vs List View Toggle */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 rounded-xl border transition-all ${
                  viewMode === "grid"
                    ? "bg-[#0B2417] text-white border-[#0B2417]"
                    : "bg-[#FAF8F5] text-zinc-600 border-[#DED7C8] hover:bg-[#F4EFE6]"
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 rounded-xl border transition-all ${
                  viewMode === "list"
                    ? "bg-[#0B2417] text-white border-[#0B2417]"
                    : "bg-[#FAF8F5] text-zinc-600 border-[#DED7C8] hover:bg-[#F4EFE6]"
                }`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Row: Category Tabs & Secondary Selectors */}
          <div className="pt-2 border-t border-[#DED7C8]/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Switcher */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === "All"
                    ? "bg-[#0B2417] text-white shadow-sm"
                    : "bg-[#FAF8F5] text-zinc-700 hover:bg-[#F4EFE6] border border-[#DED7C8]"
                }`}
              >
                All Categories ({PRODUCTS.length})
              </button>
              {PRODUCT_CATEGORIES.map((cat) => {
                const count = PRODUCTS.filter((p) => p.category === cat.title).length;
                const isSelected = selectedCategory === cat.title;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.title)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-[#0B2417] text-white shadow-sm"
                        : "bg-[#FAF8F5] text-zinc-700 hover:bg-[#F4EFE6] border border-[#DED7C8]"
                    }`}
                  >
                    <span>{cat.title}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isSelected ? "bg-[#C89B3C] text-[#07170F]" : "bg-[#E8E2D5] text-zinc-700"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sub-Filters: Origin & Form */}
            <div className="flex items-center gap-3 self-start lg:self-auto">
              <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                <span>Origin:</span>
                <select
                  value={selectedOrigin}
                  onChange={(e) => setSelectedOrigin(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#DED7C8] text-xs font-medium text-[#0B2417] focus:outline-none"
                >
                  {origins.map((orig) => (
                    <option key={orig} value={orig}>
                      {orig}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                <span>Form:</span>
                <select
                  value={selectedForm}
                  onChange={(e) => setSelectedForm(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#DED7C8] text-xs font-medium text-[#0B2417] focus:outline-none"
                >
                  {forms.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs font-semibold text-[#C89B3C] hover:underline"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-zinc-500">
          <span>
            Showing <strong className="text-[#0B2417]">{filteredProducts.length}</strong> export-grade products
          </span>
          <span className="flex items-center gap-1 text-[#1E5A3C] font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% Farm-Direct Provenance
          </span>
        </div>

        {/* Product Cards Container (Grid vs List) */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 border border-[#DED7C8] text-center space-y-4 max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-zinc-400 border border-[#DED7C8] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-[#0B2417]">
              No products found matching your criteria
            </h3>
            <p className="text-xs text-zinc-500">
              Try adjusting your search terms or clearing active filters to view our full export portfolio.
            </p>
            <button
              onClick={resetFilters}
              className="btn-primary-luxury px-5 py-2.5 rounded-xl text-xs font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#DED7C8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Visual Image */}
                <div
                  className="relative aspect-[4/3] w-full bg-zinc-900 overflow-hidden cursor-pointer"
                  onClick={() => setActiveModalProduct(product)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0B2417]/90 text-[#FAF8F5] backdrop-blur-sm border border-white/10">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#C89B3C] text-[#07170F]">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3
                      onClick={() => setActiveModalProduct(product)}
                      className="text-lg font-bold font-serif text-[#0B2417] tracking-tight group-hover:text-[#1E5A3C] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Specifications */}
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

                  {/* Action */}
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
        ) : (
          /* List View Mode */
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl p-5 border border-[#DED7C8] shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row items-center gap-6"
              >
                {/* Visual */}
                <div
                  className="relative w-full md:w-48 aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 shrink-0 cursor-pointer"
                  onClick={() => setActiveModalProduct(product)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-[#0B2417]/90 text-white">
                    {product.category}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 space-y-2 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <h3
                      onClick={() => setActiveModalProduct(product)}
                      className="text-xl font-bold font-serif text-[#0B2417] hover:text-[#1E5A3C] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    {product.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#E8E2D5] text-[#0B2417] self-center md:self-auto">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-600 max-w-2xl leading-relaxed">
                    {product.shortDesc}
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-zinc-600">
                    {product.details.grades && (
                      <span><strong>Grade:</strong> {product.details.grades}</span>
                    )}
                    {product.details.origin && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#C89B3C]" />
                        {product.details.origin}
                      </span>
                    )}
                    {product.details.moq && (
                      <span className="text-[#1E5A3C] font-semibold">
                        MOQ: {product.details.moq}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="shrink-0 w-full md:w-auto">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="w-full btn-primary-luxury px-5 py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Inspect Specs & RFQ</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C89B3C]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Global Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        isOpen={!!activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5] py-20 text-center">Loading catalogue...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
