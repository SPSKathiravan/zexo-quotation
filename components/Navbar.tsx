"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoryDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#DED7C8]/80 py-3"
            : "bg-[#FAF8F5] border-b border-[#DED7C8]/40 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/Nav-logo.png"
                  alt="AgriX Global Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0B2417] font-serif">
                    AgriX
                  </span>
                  <span className="text-xl sm:text-2xl font-light tracking-wide text-[#C89B3C] font-serif">
                    Global
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative group"
                      onMouseEnter={() => setCategoryDropdownOpen(true)}
                      onMouseLeave={() => setCategoryDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                          isActive
                            ? "text-[#0B2417] bg-[#E8E2D5]/50 font-semibold"
                            : "text-[#111A14]/80 hover:text-[#0B2417] hover:bg-[#F4EFE6]"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            categoryDropdownOpen ? "rotate-180 text-[#C89B3C]" : "text-zinc-500"
                          }`}
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute left-0 top-full pt-2 w-[480px] transition-all duration-200 origin-top-left ${
                          categoryDropdownOpen
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-95 pointer-events-none"
                        }`}
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-[#DED7C8] p-4 grid grid-cols-2 gap-3">
                          {PRODUCT_CATEGORIES.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/products?category=${encodeURIComponent(cat.title)}`}
                              className="p-3 rounded-lg hover:bg-[#FAF8F5] border border-transparent hover:border-[#DED7C8] transition-all group/cat"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-semibold text-[#0B2417] group-hover/cat:text-[#1E5A3C]">
                                  {cat.title}
                                </span>
                              </div>
                              <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                                {cat.tagline}
                              </p>
                            </Link>
                          ))}
                          <div className="col-span-2 pt-2 border-t border-zinc-100 flex items-center justify-between">
                            <span className="text-xs text-zinc-500">
                              Explore all 27+ export-grade products
                            </span>
                            <Link
                              href="/products"
                              className="text-xs font-semibold text-[#0B2417] hover:text-[#C89B3C] flex items-center gap-1"
                            >
                              View Full Catalogue
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      isActive
                        ? "text-[#0B2417] bg-[#E8E2D5]/50 font-semibold"
                        : "text-[#111A14]/80 hover:text-[#0B2417] hover:bg-[#F4EFE6]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-primary-luxury px-5 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2"
              >
                Request Export Quote
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#0B2417] hover:bg-[#E8E2D5]/50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#DED7C8] bg-[#FAF8F5] px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <div key={link.label} className="space-y-1">
                    <Link
                      href={link.href}
                      className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? "text-[#0B2417] bg-[#E8E2D5] font-semibold"
                          : "text-zinc-700 hover:bg-[#F4EFE6]"
                      }`}
                    >
                      {link.label}
                    </Link>

                    {/* Mobile Category Sublinks */}
                    {link.hasDropdown && (
                      <div className="pl-4 pr-2 py-1 space-y-1">
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/products?category=${encodeURIComponent(cat.title)}`}
                            className="block px-3 py-1.5 text-xs text-zinc-600 hover:text-[#0B2417] font-medium"
                          >
                            • {cat.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[#DED7C8] space-y-2">
              <Link
                href="/contact"
                className="w-full btn-primary-luxury py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#C89B3C]" />
                Request Export Quote
              </Link>
              <a
                href={COMPANY_INFO.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg text-xs font-semibold text-center block text-[#1E5A3C] bg-white border border-[#DED7C8]"
              >
                WhatsApp 
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
