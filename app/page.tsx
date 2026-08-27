import React from "react";
import HeroSection from "@/components/home/HeroSection";
import CertificationsMarquee from "@/components/home/CertificationsMarquee";
import ProductEcosystem from "@/components/home/ProductEcosystem";
import GlobalRouteMap from "@/components/home/GlobalRouteMap";
import BrandStory from "@/components/home/BrandStory";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import QualityProcess from "@/components/home/QualityProcess";
import QuoteCalculator from "@/components/home/QuoteCalculator";
import GlobalCTA from "@/components/home/GlobalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Certifications Infinite Marquee */}
      <CertificationsMarquee />

      {/* 3. Product Ecosystem & Featured Showcase */}
      <ProductEcosystem />

      {/* 4. Global Shipping Corridors & Interactive Map */}
      <GlobalRouteMap />

      {/* 5. Brand Heritage & Sourcing Story */}
      <BrandStory />

      {/* 6. Why Importers Choose AgriX Global */}
      <WhyChooseUs />

      {/* 7. Farm-to-Port Quality Lifecycle & Standards */}
      <QualityProcess />

      {/* 8. Interactive B2B Quotation Builder */}
      <QuoteCalculator />

      {/* 9. Full-Width Global Call to Action */}
      <GlobalCTA />
    </div>
  );
}
