"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, ArrowUp, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/90 text-[#0B2417] border border-[#DED7C8] shadow-md flex items-center justify-center hover:bg-[#FAF8F5] hover:border-[#C89B3C] transition-all animate-in fade-in zoom-in duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* WhatsApp Floating Chat */}
      <a
        href={COMPANY_INFO.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="text-xs font-semibold tracking-wide pr-1 hidden sm:inline">
          Chat with Export Desk
        </span>
      </a>
    </div>
  );
}
