"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  ReactNode,
} from "react";
import {
  ShieldCheck,
  Globe2,
  Truck,
  PackageCheck,
  Microscope,
  Sprout,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Link2,
  Sun,
  Moon,
  Apple,
  Carrot,
  Plane,
  LucideIcon,
} from "lucide-react";

/* ============================================================== */
/*  AgriX Global — Single File with Internal Products Page        */
/* ============================================================== */

/* ---------------------------- Data ----------------------------- */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "products" },
  { label: "Contact Us", href: "#contact" },
];

type Product = {
  title: string;
  desc: string;
  tone: "clay" | "green" | "saffron" | "citrus";
  icon: LucideIcon;
};

const PRODUCTS: Product[] = [
  {
    title: "Premium Spices",
    desc: "Hand-graded turmeric, chilli, cardamom and more, sourced direct from certified Indian farms.",
    tone: "clay",
    icon: Sprout,
  },
  {
    title: "Dehydrated Powders",
    desc: "Moisture-controlled vegetable and fruit powders, lab-tested for purity and nutrition.",
    tone: "saffron",
    icon: PackageCheck,
  },
  {
    title: "Fresh Fruits",
    desc: "Farm-fresh, export-grade fruits, carefully graded and cold-chain packed for global markets.",
    tone: "citrus",
    icon: Apple,
  },
  {
    title: "Fresh Vegetables",
    desc: "Pesticide-tested, farm-direct vegetables, sorted and packed to retain freshness in transit.",
    tone: "green",
    icon: Carrot,
  },
];

/* ---------- Sub-Products Data for Filter Views ---------- */

type ProductDetails = {
  form?: string;
  grades?: string;
  gradeQuality?: string;
  origin?: string;
  oilContent?: string;
  activeCompounds?: string;
  harvestSeason?: string;
  moisture?: string;
  moq?: string;
  packing?: string;
  tagline?: string;
};

type SubProduct = {
  id: string;
  name: string;
  filterGroup: string;
  price: number;
  brand: string;
  gradient: string;
  image?: string;
  details?: ProductDetails;
};

const SUB_PRODUCTS_MAP: Record<string, { products: SubProduct[] }> = {
  "Premium Spices": {
    products: [
      { 
        id: "ps1", name: "Turmeric", filterGroup: "", price: 180.00, brand: "", gradient: "linear-gradient(135deg, #e67e22, #d35400)", image: "/Turmeric.jpg",
        details: {
          form: "Whole Dried Fingers, Powders",
          grades: "High Curcumin Turmeric",
          origin: "Tamil Nadu, Kerala",
          oilContent: "Curcumin 2% - 5%",
          harvestSeason: "Jan - Mar",
          moisture: "10% max",
          moq: "500 kg - 1 Ton",
          packing: "20/50kg jute bags and Food grade limited bags",
          tagline: "Golden spice of India - Trusted Quality for global buyers"
        }
      },
      { 
        id: "ps2", name: "Black Pepper", filterGroup: "", price: 460.00, brand: "", gradient: "linear-gradient(135deg, #2c3e50, #34495e)", image: "/Black Pepper.jpg",
        details: {
          form: "Whole black Peppercorns",
          grades: "MG1, TGEB",
          origin: "Tamil Nadu, Kerala",
          oilContent: "Piperine 4% - 6%",
          harvestSeason: "Dec - Mar",
          moisture: "Max 12%",
          moq: "500 kg - 1 Ton",
          packing: "25kg PP bags, 50kg Jute bags, Vacuum packs, Retail packs: 100G, 250G, 500G, 1kg bags",
          tagline: "Bold flavor, Exceptional aroma."
        }
      },
      { 
        id: "ps3", name: "Cardamom", filterGroup: "", price: 380.00, brand: "", gradient: "linear-gradient(135deg, #1a5c2a, #27ae60)", image: "/Cardamom.jpg",
        details: {
          form: "Whole Green Pods",
          grades: "7mm To 8mm +",
          origin: "Tamil Nadu, Kerala",
          oilContent: "Essential oil 4%+",
          harvestSeason: "Aug - Feb",
          moisture: "Max 12%",
          moq: "100 kg - 500 kg",
          packing: "5kg, 10kg, 25kg PP bags, Vacuum sealed Packs, Retail packs: 50G, 100G, 250G, 500G",
          tagline: "Strong Aroma, Vibrant Color and High Oil content"
        }
      },
      { 
        id: "ps4", name: "Cloves", filterGroup: "", price: 340.00, brand: "", gradient: "linear-gradient(135deg, #5d3a1a, #8b4513)", image: "/Cloves.jpg",
        details: {
          form: "Whole Clove / Cloves Powder",
          grades: "HPS (Hand Picked selected)",
          origin: "Tamil Nadu, Kerala, Karnataka",
          oilContent: "15% - 20%",
          harvestSeason: "Dec - Feb",
          moisture: "10% - 12%",
          moq: "100 kg - 500 kg",
          packing: "25kg - 50kg PP bags, Kraft paper bags with inner lines, Jute bags",
          tagline: "High oil content for global spice markets"
        }
      },
      { 
        id: "ps5", name: "Dry Ginger", filterGroup: "", price: 250.00, brand: "", gradient: "linear-gradient(135deg, #daa520, #b8860b)", image: "/Dry Ginger.jpg",
        details: {
          form: "Fresh, Dry, Crushed Ginger",
          grades: "Ginger",
          origin: "Tamil Nadu, Kerala, Karnataka",
          oilContent: "1% - 3%",
          harvestSeason: "Dec - Mar",
          moisture: "Min 10%",
          moq: "500 kg - 1 Ton",
          packing: "25kg & 50kg PP bags, 25kg Kraft paper bags, carton bags & Vacuum bags",
          tagline: "Naturally aromatic, exported with quality assurance."
        }
      },
      { 
        id: "ps6", name: "Red Chilli", filterGroup: "", price: 220.00, brand: "", gradient: "linear-gradient(135deg, #c0392b, #e74c3c)", image: "/Red Chilli.jpg",
        details: {
          form: "Whole Dried Red chili / Chili Powder / Chili Flakes",
          grades: "Teja S17",
          origin: "Andhra Pradesh, Karnataka, Guntur",
          oilContent: "7% - 16%",
          harvestSeason: "Jan - Apr",
          moisture: "Min 10% - 12%",
          moq: "500 kg - 1 Ton",
          packing: "Whole Chili: 25kg Jute / PP bags, Powder: 25kg food grade bags, Flakes: 10kg - 20kg carton packing",
          tagline: "Vibrant color and fiery heat with strong flavor retention."
        }
      },
      { 
        id: "ps7", name: "Cumin Seeds", filterGroup: "", price: 160.00, brand: "", gradient: "linear-gradient(135deg, #b8860b, #daa520)", image: "/Cumin seeds.jpg",
        details: {
          form: "Whole cumin Seeds / Ground cumin Powder",
          grades: "European Quality (EQ) with 99% purity level",
          origin: "India",
          oilContent: "2.5% - 4.5%",
          harvestSeason: "Feb - Apr",
          moisture: "7% - 9%",
          moq: "500 kg - 1 Ton",
          packing: "25kg PP bags, 25kg multiwall paper bags, 10kg - 20kg food grade bags, Retail packs: 50G, 100G, 250G, 500G, Glass Jar",
          tagline: "Strong Aroma reliable export quality."
        }
      },
      { 
        id: "ps8", name: "Fennel Seeds", filterGroup: "", price: 150.00, brand: "", gradient: "linear-gradient(135deg, #27ae60, #2ecc71)", image: "/Fennel seeds.jpg",
        details: {
          form: "Whole Fennel Seeds / Fennel Seeds Powder",
          grades: "Bold Seeds",
          origin: "India",
          oilContent: "1.5% - 2.5%",
          harvestSeason: "Feb - Apr",
          moisture: "Max 10%",
          moq: "500 kg - 1 Ton",
          packing: "25kg PP bags, 25kg Jute bags, Vacuum packing",
          tagline: "Perfect for culinary, sweet aroma and superior quality"
        }
      },
    ],
  },
  "Dehydrated Powders": {
    products: [
      { 
        id: "dp1", name: "Tomato Powder", filterGroup: "", price: 270.00, brand: "", gradient: "linear-gradient(135deg, #e74c3c, #c0392b)", image: "/Tomato powder.jpg",
        details: {
          form: "Fine powder (80-100 mesh)",
          gradeQuality: "Rich color, natural texture — Export quality",
          moisture: "Max 5-6%",
          activeCompounds: "Natural lycopene",
          packing: "25kg / bag, PP poly line, HDPE bags",
          moq: "200 kg",
          tagline: "Rich color, natural texture. Fine powder (80-100 mesh), Moisture max 5-6%."
        }
      },
      { 
        id: "dp2", name: "Garlic Powder", filterGroup: "", price: 280.00, brand: "", gradient: "linear-gradient(135deg, #f5f5dc, #d4a574)", image: "/Garlic powder.jpg",
        details: {
          form: "Fine garlic powder (80-100 mesh)",
          gradeQuality: "Export grade quality — Intense flavor",
          moisture: "6-7%",
          activeCompounds: "Natural allicin",
          packing: "25kg / bag, PP poly line, HDPE bags",
          moq: "200 kg",
          tagline: "Intense flavor, Export grade quality. Fine garlic powder (80-100 mesh). Moisture 6-7%. Packed in 25kg HDPE bags."
        }
      },
      { 
        id: "dp3", name: "Ginger Powder", filterGroup: "", price: 300.00, brand: "", gradient: "linear-gradient(135deg, #daa520, #b8860b)", image: "/Ginger Powder.jpg",
        details: {
          form: "Fine ginger powder (80-100 mesh)",
          gradeQuality: "Strong aroma, high pungency",
          moisture: "Max 7-8%",
          activeCompounds: "Gingerol rich",
          packing: "25kg / bag, PP poly line, HDPE bags",
          moq: "200 kg",
          tagline: "Strong aroma, high pungency. Fine ginger powder (80-100 mesh). Moisture max 7-8%."
        }
      },
      { 
        id: "dp4", name: "Onion Powder", filterGroup: "", price: 250.00, brand: "", gradient: "linear-gradient(135deg, #d4a574, #c0392b)", image: "/Onion Powder.jpg",
        details: {
          form: "Fine onion powder (80-100 mesh)",
          gradeQuality: "Global quality — Pure flavor",
          moisture: "Max 5-6%",
          activeCompounds: "Pungent compounds",
          packing: "25kg / bag, PP poly line, HDPE bags",
          moq: "200 kg",
          tagline: "Pure flavor, Global quality. Fine onion powder (80-100 mesh), Moisture max 5-6%. Ideal for seasoning."
        }
      },
      { 
        id: "dp5", name: "Moringa Powder", filterGroup: "", price: 420.00, brand: "", gradient: "linear-gradient(135deg, #27ae60, #1abc9c)", image: "/moringa powder.jpg",
        details: {
          form: "Fine moringa powder (80-100 mesh)",
          gradeQuality: "Natural nutrition, pure green quality",
          moisture: "Max 7%",
          activeCompounds: "Rich antioxidants",
          packing: "25kg / bag, PP poly line, HDPE bags",
          moq: "200 kg",
          tagline: "Natural nutrition, pure green quality. Fine moringa powder (80-100 mesh), Moisture max 7%."
        }
      },
      { 
        id: "dp6", name: "Spinach Powder", filterGroup: "", price: 380.00, brand: "", gradient: "linear-gradient(135deg, #1a5c2a, #2ecc71)", image: "/spinach powder.jpg",
        details: {
          form: "Fine spinach powder (60-100 mesh)",
          gradeQuality: "Pure, natural, globally textured",
          moisture: "Max 6-7%",
          activeCompounds: "Rich in iron & chlorophyll",
          packing: "25kg / bag, PP poly line, HDPE bags",
          moq: "200 kg",
          tagline: "Pure, natural, globally textured. Fine spinach powder (60-100 mesh), Moisture max 6-7%."
        }
      },
      { 
        id: "dp7", name: "Curry Leaf Powder", filterGroup: "", price: 290.00, brand: "", gradient: "linear-gradient(135deg, #2ecc71, #27ae60)", image: "/curry leaf powder.jpg",
        details: {
          form: "Fine leaf powder (60-100 mesh)",
          gradeQuality: "Export grade quality — Authentic aroma",
          moisture: "≤ 6-8%",
          oilContent: "Volatile oil ≥ 0.5%",
          packing: "25kg / bag, PP poly line, HDPE bags",
          moq: "200 kg",
          tagline: "Export grade quality, authentic aroma. Fine leaf powder (60-100 mesh), Moisture ≤6-8%, Volatile oil ≥0.5%."
        }
      },
      { 
        id: "dp8", name: "Beetroot Powder", filterGroup: "", price: 350.00, brand: "", gradient: "linear-gradient(135deg, #8e44ad, #c0392b)", image: "/beetroot powder.jpg",
        details: {
          form: "Fine beetroot powder (50-100 mesh)",
          gradeQuality: "Vibrant red, export grade quality",
          moisture: "Max 6-7%",
          activeCompounds: "Natural color & nitrates",
          packing: "25kg / bag, PP poly line, HDPE bags",
          moq: "200 kg",
          tagline: "Vibrant red, export grade quality. Fine beetroot powder (50-100 mesh), Moisture max 6-7%."
        }
      },
      { id: "dp9", name: "Carrot Powder", filterGroup: "", price: 320.00, brand: "", gradient: "linear-gradient(135deg, #e67e22, #f39c12)", image: "/carrot powder.jpg" },
      { id: "dp10", name: "Lemon Powder", filterGroup: "", price: 310.00, brand: "", gradient: "linear-gradient(135deg, #f1c40f, #f39c12)", image: "/Lemon Powder.jpg" },
    ],
  },
  "Fresh Fruits": {
    products: [
      { id: "ff1", name: "Banana", filterGroup: "", price: 50.00, brand: "", gradient: "linear-gradient(135deg, #f1c40f, #f9e547)", image: "/Banana.jpg" },
      { id: "ff2", name: "Papaya", filterGroup: "", price: 80.00, brand: "", gradient: "linear-gradient(135deg, #e67e22, #f39c12)", image: "/Papaya.jpg" },
      { id: "ff3", name: "Guava", filterGroup: "", price: 100.00, brand: "", gradient: "linear-gradient(135deg, #8e44ad, #27ae60)", image: "/Guava.jpg" },
      { id: "ff4", name: "Mango", filterGroup: "", price: 450.00, brand: "", gradient: "linear-gradient(135deg, #f39c12, #e67e22)", image: "/Mango.jpg" },
      { id: "ff5", name: "Pineapple", filterGroup: "", price: 90.00, brand: "", gradient: "linear-gradient(135deg, #f1c40f, #e67e22)", image: "/Pineapple.jpg" },
    ],
  },
  "Fresh Vegetables": {
    products: [
      { id: "fv1", name: "Onion", filterGroup: "", price: 40.00, brand: "", gradient: "linear-gradient(135deg, #d4a574, #c0392b)", image: "/Onion.jpg" },
      { id: "fv2", name: "Lemon", filterGroup: "", price: 50.00, brand: "", gradient: "linear-gradient(135deg, #f1c40f, #f39c12)", image: "/Lemon.jpg" },
      { id: "fv3", name: "Drumstick", filterGroup: "", price: 75.00, brand: "", gradient: "linear-gradient(135deg, #27ae60, #2ecc71)", image: "/Drumstick.jpg" },
      { id: "fv4", name: "Okra", filterGroup: "", price: 65.00, brand: "", gradient: "linear-gradient(135deg, #16a085, #1abc9c)", image: "/Okra.jpg" },
      { id: "fv5", name: "Green Chilli", filterGroup: "", price: 80.00, brand: "", gradient: "linear-gradient(135deg, #27ae60, #1a5c2a)", image: "/Green Chilli.png" },
      { id: "fv6", name: "Carrot", filterGroup: "", price: 60.00, brand: "", gradient: "linear-gradient(135deg, #e67e22, #f39c12)", image: "/Carrot.jpg" },
      { id: "fv7", name: "Beetroot", filterGroup: "", price: 45.00, brand: "", gradient: "linear-gradient(135deg, #8e44ad, #c0392b)", image: "/Beetroot.jpg" },
      { id: "fv8", name: "Garlic", filterGroup: "", price: 100.00, brand: "", gradient: "linear-gradient(135deg, #f5f5dc, #d4a574)", image: "/Garlic.jpg" },
      { id: "fv9", name: "Ginger", filterGroup: "", price: 120.00, brand: "", gradient: "linear-gradient(135deg, #daa520, #b8860b)", image: "/Ginger.jpg" },
      { id: "fv10", name: "Fresh Herbs", filterGroup: "", price: 50.00, brand: "", gradient: "linear-gradient(135deg, #2ecc71, #27ae60)", image: "/Fresh Herbs.jpg" },
      { id: "fv11", name: "Curry Leaves", filterGroup: "", price: 30.00, brand: "", gradient: "linear-gradient(135deg, #1a5c2a, #27ae60)", image: "/Curry Leaves.jpg" },
    ],
  },
};

const WHY_US = [
  {
    title: "100% Traceability",
    desc: "Blockchain-enabled tracking from farm to shelf.",
    icon: MapPin,
  },
  {
    title: "Farm-Direct Sourcing",
    desc: "No middlemen, fair prices, consistent quality.",
    icon: Sprout,
  },
  {
    title: "Global Compliance",
    desc: "Strict food safety & international quality standards.",
    icon: ShieldCheck,
  },
];

const CERTIFICATIONS = ["HACCP", "FSSAI", "ISO 22000", "APEDA"];

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Farm Sourcing",
    desc: "Direct partnerships with certified growers.",
    icon: Sprout,
  },
  {
    n: "02",
    title: "Quality Check",
    desc: "Multi-level lab testing & sorting.",
    icon: Microscope,
  },
  {
    n: "03",
    title: "Packaging",
    desc: "Eco-friendly, moisture-proof packs.",
    icon: PackageCheck,
  },
  {
    n: "04",
    title: "Global Shipping",
    desc: "End-to-end logistics & customs clearance.",
    icon: Truck,
  },
];

const WE_ENSURE = [
  "Proper cleaning & grading — advanced sorting technology for premium export quality.",
  "Hygienic processing in state-of-the-art, zero-contamination facilities.",
  "Laboratory testing for pesticide residue, aflatoxin, and nutritional profile.",
  "Moisture control & advanced drying to preserve natural aroma and shelf life.",
  "Safe export packaging — food-grade, moisture-proof, and shock-resistant for transit.",
];

/* ------------------------- Scroll reveal ------------------------- */

function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      className={`ax-reveal ${visible ? "ax-reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* --------------------------- Header ----------------------------- */

function Header({
  isLight,
  toggleLight,
  onNavigate,
  currentPage,
}: {
  isLight: boolean;
  toggleLight: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href === "products") {
      onNavigate("products");
    } else if (href.startsWith("#")) {
      if (currentPage !== "home") {
        onNavigate("home");
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`ax-header-band ${scrolled ? "ax-header-band-scrolled" : ""}`}>
      <div className="ax-header-bar">
        <header className="ax-header">
          <div className="ax-header-inner">
            <a
              href="#home"
              className="ax-logo"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src="/Screenshot 2026-08-07 140201.png" alt="AgriX Logo" className="ax-logo-img" loading="lazy" />
              <span className="ax-logo-text">
                AgriX <em>Global</em>
              </span>
            </a>

            <nav className="ax-nav-desktop">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href === "products" ? undefined : l.href}
                  className={`ax-nav-link ${currentPage === "products" && l.href === "products" ? "ax-nav-link-active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(l.href);
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <button
              onClick={toggleLight}
              className="ax-cta ax-cta-desktop"
              aria-label="Toggle theme"
            >
              {isLight ? <Moon size={15} /> : <Sun size={15} />}
              {isLight ? "Dark Mode" : "Light Mode"}
            </button>

            <button
              className="ax-menu-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <div className={`ax-nav-mobile ${open ? "ax-nav-mobile-open" : ""}`}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href === "products" ? undefined : l.href}
                className={`ax-nav-mobile-link ${currentPage === "products" && l.href === "products" ? "ax-nav-link-active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(l.href);
                }}
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { toggleLight(); setOpen(false); }}
              className="ax-cta ax-cta-mobile"
            >
              {isLight ? <Moon size={15} /> : <Sun size={15} />}
              {isLight ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}

/* ------------------------ Signature: Route map ------------------- */

const CONTINENTS: string[] = [
  "M60,60 C140,28 244,38 292,90 C312,132 280,162 250,150 C262,192 200,224 150,202 C98,232 46,190 58,140 C26,110 38,80 60,60 Z",
  "M270,235 C322,224 352,252 356,302 C366,354 340,404 320,432 C298,448 274,420 270,380 C254,340 258,280 270,235 Z",
  "M430,70 C462,44 512,44 542,60 C562,80 556,112 536,120 C548,142 520,162 494,150 C468,160 438,140 430,110 C420,94 424,80 430,70 Z",
  "M432,156 C482,150 552,160 566,202 C582,242 570,292 550,332 C540,366 500,392 470,376 C450,362 446,320 436,290 C420,250 416,200 432,156 Z",
  "M520,90 C562,48 652,38 722,54 C782,64 822,90 816,140 C832,180 800,222 760,240 C772,270 730,300 690,286 C650,300 600,280 580,250 C550,260 520,230 516,190 C506,150 506,120 520,90 Z",
  "M745,320 C782,304 822,314 832,346 C842,376 810,402 774,406 C744,412 724,386 730,356 C724,336 734,326 745,320 Z",
];

const GRID_X = [90, 180, 270, 360, 450, 540, 630, 720, 810];
const GRID_Y = [46, 138, 230, 322, 414];
const SEA_PATH = "M655,208 C616,192 592,178 574,166 C540,150 508,120 490,96 C470,80 450,75 440,80";
const AIR_PATH = "M655,208 C520,-20 320,-10 245,135";
const AUS_PATH = "M655,208 C690,260 740,310 790,360";
const SPUR_PATH = "M655,208 C688,222 700,240 710,255";

const MAP_NODES = [
  { x: 655, y: 208, label: "INDIA", origin: true },
  { x: 574, y: 166, label: "UAE" },
  { x: 440, y: 80, label: "UK" },
  { x: 490, y: 96, label: "EUROPE" },
  { x: 245, y: 135, label: "USA" },
  { x: 220, y: 85, label: "CANADA" },
  { x: 790, y: 360, label: "AUSTRALIA" },
  { x: 710, y: 255, label: "SE ASIA" },
];

const TWINKLE_DOTS = [
  { x: 120, y: 90, d: 0 }, { x: 210, y: 170, d: 0.6 }, { x: 340, y: 70, d: 1.2 },
  { x: 470, y: 200, d: 1.8 }, { x: 600, y: 60, d: 0.3 }, { x: 700, y: 300, d: 2.1 },
  { x: 780, y: 150, d: 0.9 }, { x: 380, y: 330, d: 1.5 }, { x: 250, y: 380, d: 0.4 },
  { x: 830, y: 220, d: 2.4 }, { x: 90, y: 260, d: 1.1 }, { x: 520, y: 320, d: 1.9 },
];

function RouteMap() {
  return (
    <svg
      className="ax-routemap"
      viewBox="0 0 900 460"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Animated shipping map"
    >
      <defs>
        <filter id="axDropShadow" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="10" stdDeviation="6" floodColor="#000" floodOpacity="0.8" />
        </filter>
        <filter id="axGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <g className="ax-grid">
        {GRID_X.map((x) => <line key={`x${x}`} x1={x} y1={20} x2={x} y2={440} />)}
        {GRID_Y.map((y) => <path key={`y${y}`} d={`M20,${y} C300,${y - 14} 600,${y + 14} 880,${y}`} fill="none" />)}
      </g>

      <g className="ax-continents" filter="url(#axDropShadow)">
        {CONTINENTS.map((d, i) => <path key={i} d={d} />)}
      </g>

      <g className="ax-twinkles">
        {TWINKLE_DOTS.map((t, i) => (
          <circle key={i} cx={t.x} cy={t.y} r={1.6} style={{ animationDelay: `${t.d}s` }} />
        ))}
      </g>

      <path d={SEA_PATH} className="ax-route-glow ax-route-glow-sea" fill="none" strokeWidth={6} filter="url(#axGlow)" />
      <path d={SEA_PATH} className="ax-route-ghost" fill="none" strokeWidth={1} />
      <path d={SEA_PATH} className="ax-route-line ax-route-sea" fill="none" strokeWidth={2} strokeLinecap="round" />

      <path d={AUS_PATH} className="ax-route-glow ax-route-glow-sea" fill="none" strokeWidth={6} filter="url(#axGlow)" />
      <path d={AUS_PATH} className="ax-route-ghost" fill="none" strokeWidth={1} />
      <path d={AUS_PATH} className="ax-route-line ax-route-sea" fill="none" strokeWidth={2} strokeLinecap="round" />

      <path d={SPUR_PATH} className="ax-route-ghost" fill="none" strokeWidth={1} />
      <path d={SPUR_PATH} className="ax-route-line ax-route-sea" fill="none" strokeWidth={2} strokeLinecap="round" />

      <path d={AIR_PATH} className="ax-route-glow ax-route-glow-air" fill="none" strokeWidth={5} filter="url(#axGlow)" />
      <path d={AIR_PATH} className="ax-route-ghost" fill="none" strokeWidth={1} />
      <path d={AIR_PATH} className="ax-route-line ax-route-air" fill="none" strokeWidth={1.5} strokeLinecap="round" />

      <circle r={4} className="ax-comet ax-comet-sea" filter="url(#axGlow)">
        <animateMotion dur="6s" repeatCount="indefinite" path={SEA_PATH} />
      </circle>
      <circle r={4} className="ax-comet ax-comet-sea" filter="url(#axGlow)">
        <animateMotion dur="7s" repeatCount="indefinite" path={AUS_PATH} />
      </circle>
      <circle r={3} className="ax-comet ax-comet-air" filter="url(#axGlow)">
        <animateMotion dur="5s" repeatCount="indefinite" path={AIR_PATH} />
      </circle>

      <g className="ax-transport ax-transport-ship" filter="url(#axDropShadow)">
        <path d="M-8,3 L8,3 L5,7 L-5,7 Z" />
        <path d="M0,3 L0,-7 L5,-3 Z" />
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" path={SEA_PATH} />
      </g>
      <g className="ax-transport ax-transport-ship" filter="url(#axDropShadow)">
        <path d="M-8,3 L8,3 L5,7 L-5,7 Z" />
        <path d="M0,3 L0,-7 L5,-3 Z" />
        <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" path={AUS_PATH} />
      </g>
      <g className="ax-transport ax-transport-plane" filter="url(#axDropShadow)">
        <path d="M-7,4 L7,0 L-7,-4 L-2,0 Z" />
        <animateMotion dur="5s" repeatCount="indefinite" rotate="auto" path={AIR_PATH} />
      </g>
    </svg>
  );
}

function MapStage() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const rotRef = useRef({ x: 25, y: -15 });
  const dragRef = useRef({ active: false, startX: 0, startY: 0, startRx: 0, startRy: 0 });
  const [isVisible, setIsVisible] = useState(true);

  // Performance optimization: Pause heavy math when out of view
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { rootMargin: "200px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const startDrag = (clientX: number, clientY: number) => {
    dragRef.current = { active: true, startX: clientX, startY: clientY, startRx: rotRef.current.x, startRy: rotRef.current.y };
  };

  const moveDrag = (clientX: number, clientY: number) => {
    const el = stageRef.current;
    if (!el || !dragRef.current.active) return;
    const dx = clientX - dragRef.current.startX;
    const dy = clientY - dragRef.current.startY;
    rotRef.current.y = dragRef.current.startRy + dx * 0.35;
    rotRef.current.x = dragRef.current.startRx - dy * 0.35;
    el.style.setProperty("--rx", `${rotRef.current.x}deg`);
    el.style.setProperty("--ry", `${rotRef.current.y}deg`);
  };

  const endDrag = () => { dragRef.current.active = false; };

  useEffect(() => {
    if (!isVisible) return;
    let raf = 0;
    const tick = (t: number) => {
      const el = stageRef.current;
      if (el && !dragRef.current.active) {
        const driftY = Math.sin(t / 1900) * 3;
        const driftX = Math.cos(t / 2600) * 1.5;
        el.style.setProperty("--rx", `${rotRef.current.x + driftX}deg`);
        el.style.setProperty("--ry", `${rotRef.current.y + driftY}deg`);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isVisible]);

  return (
    <div className="ax-map-stage">
      <div className="ax-map-float">
        <div
          ref={stageRef}
          className="ax-map-surface ax-map-draggable"
          onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
          onMouseMove={(e) => moveDrag(e.clientX, e.clientY)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={(e) => { const t = e.touches[0]; startDrag(t.clientX, t.clientY); }}
          onTouchMove={(e) => { const t = e.touches[0]; moveDrag(t.clientX, t.clientY); }}
          onTouchEnd={endDrag}
        >
          <div className="ax-radar-sweep" aria-hidden="true" />
          <div className="ax-map-layer ax-map-layer-base">
            <RouteMap />
          </div>
          <div className="ax-pins-layer">
            {MAP_NODES.map((n, i) => (
              <div
                key={n.label}
                className={`ax-pin ${n.origin ? "ax-pin-origin" : ""}`}
                style={{
                  left: `${(n.x / 900) * 100}%`,
                  top: `${(n.y / 460) * 100}%`,
                  animationDelay: `${0.4 + i * 0.15}s`,
                }}
              >
                <span className="ax-pin-label">{n.label}</span>
                <span className="ax-pin-glow" />
                <span className="ax-pin-head" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Hero ------------------------------ */

function Hero({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section id="home" className="ax-hero">
      <div className="ax-ambient-glow ax-glow-1" />
      <div className="ax-ambient-glow ax-glow-2" />

      <div className="ax-hero-inner">
        <div className="ax-hero-content">
          <p className="ax-eyebrow ax-fade-1">
            Export Excellence
          </p>
          <h1 className="ax-h1 ax-fade-2">
            Premium Indian Spices
            <br />
            <span className="ax-h1-accent">&amp; Farm Products</span>
          </h1>
          <p className="ax-hero-sub ax-fade-3">
            AgriX Global saves the integrity of every harvest in a fully
            traceable export process, sorted by grade, batch, and
            certification, so buyers can search, verify, and reorder in
            seconds.
          </p>

          <div className="ax-hero-actions ax-fade-4">
            <button
              onClick={() => onNavigate("products")}
              className="ax-cta ax-cta-primary"
            >
              Explore Our Products
            </button>
          </div>
        </div>

        <div className="ax-hero-visual ax-fade-5">
          <MapStage />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ About ------------------------------ */

function About() {
  return (
    <section id="about" className="ax-section">
      <div className="ax-section-inner ax-about-grid">
        <Reveal className="ax-about-text">
          <p className="ax-eyebrow ax-eyebrow-accent">About Us</p>
          <h2 className="ax-h2">
            Maintaining trust, sustainability, and long-term business.
          </h2>
          <p className="ax-p">
            AgriX Global delivers premium Indian agri products to
            international markets with quality and reliability. Our mission
            is built on a simple idea: origin matters. Every batch we export
            carries the integrity of the farm it came from.
          </p>
          <p className="ax-p">
            Our products comply with global food safety standards, including
            certifications from the Agricultural &amp; Processed Food
            Products Export Development Authority, the Food Safety and
            Standards Authority of India, and the International
            Organization for Standardization.
          </p>
        </Reveal>

        <Reveal delay={200} className="ax-about-card ax-glass-card">
          <ShieldCheck size={32} className="ax-icon-accent ax-mb-4" />
          <h3 className="ax-card-title">Trusted &amp; certified exports</h3>
          <p className="ax-card-desc">
            Compliant with APEDA, FSSAI &amp; ISO 22000 — every shipment is
            documented, tested, and export-ready before it leaves India.
          </p>
          <div className="ax-card-glow-hover" />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Why Us ------------------------------ */

function WhyUs() {
  return (
    <section id="why" className="ax-section">
      <div className="ax-section-inner">
        <Reveal className="ax-section-head">
          <p className="ax-eyebrow ax-eyebrow-accent">Why Choose AgriX Global</p>
          <h2 className="ax-h2">
            Quality that holds up from farm gate to final port.
          </h2>
        </Reveal>

        <div className="ax-why-grid">
          {WHY_US.map((w, i) => {
            const Icon = w.icon;
            return (
              <Reveal key={w.title} delay={i * 150} className="ax-why-card ax-glass-card">
                <span className="ax-why-index">0{i + 1}</span>
                <Icon size={28} className="ax-icon-accent ax-mb-4" />
                <h3 className="ax-card-title">{w.title}</h3>
                <p className="ax-card-desc">{w.desc}</p>
                <div className="ax-card-glow-hover" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Certifications -------------------------- */

function Certifications() {
  const stripA = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];
  const stripB = [...CERTIFICATIONS.slice().reverse(), ...CERTIFICATIONS.slice().reverse(), ...CERTIFICATIONS.slice().reverse()];
  return (
    <section id="certified" className="ax-section ax-section-tight">
      <div className="ax-section-inner">
        <Reveal className="ax-section-head ax-text-center">
          <p className="ax-eyebrow ax-eyebrow-accent">Certified for Global Trade</p>
          <h2 className="ax-h2">
            Internationally recognized certifications that guarantee trust.
          </h2>
        </Reveal>
      </div>

      <div className="ax-marquee-stack">
        <div className="ax-marquee-mask">
          <div className="ax-marquee-track ax-marquee-left">
            {stripA.map((c, i) => (
              <span className="ax-cert-pill" key={`a-${c}-${i}`}>
                <CheckCircle2 size={16} className="ax-icon-accent" />
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="ax-marquee-mask">
          <div className="ax-marquee-track ax-marquee-right">
            {stripB.map((c, i) => (
              <span className="ax-cert-pill" key={`b-${c}-${i}`}>
                <CheckCircle2 size={16} className="ax-icon-accent" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Process ------------------------------ */

function Process() {
  return (
    <section id="process" className="ax-section">
      <div className="ax-section-inner">
        <Reveal className="ax-section-head">
          <p className="ax-eyebrow ax-eyebrow-accent">Transparent Export Process</p>
          <h2 className="ax-h2">
            From Indian farms to global destinations — seamless and ethical.
          </h2>
        </Reveal>

        <div className="ax-process-rail">
          <div className="ax-process-line" aria-hidden="true">
            <div className="ax-process-line-glow" />
          </div>
          {PROCESS_STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.n} delay={i * 150} className="ax-process-step">
                <div className="ax-process-icon ax-glass-card">
                  <Icon size={24} strokeWidth={1.8} className="ax-icon-accent" />
                </div>
                <span className="ax-process-n">{s.n}</span>
                <h3 className="ax-card-title">{s.title}</h3>
                <p className="ax-card-desc">{s.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- We Ensure ------------------------------ */

function WeEnsure() {
  return (
    <section className="ax-section ax-section-tight">
      <div className="ax-section-inner ax-ensure-grid">
        <Reveal className="ax-ensure-list">
          <p className="ax-eyebrow ax-eyebrow-accent">We Ensure</p>
          <ul className="ax-checklist">
            {WE_ENSURE.map((item, i) => (
              <Reveal as="li" key={i} delay={i * 100} className="ax-checklist-item">
                <div className="ax-check-wrap">
                  <CheckCircle2 size={18} className="ax-icon-accent" />
                </div>
                <span>{item}</span>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200} className="ax-ensure-banner ax-glass-card">
          <Globe2 size={40} className="ax-icon-accent ax-mb-4" />
          <p className="ax-ensure-banner-text">
            Quality assurance is our highest priority — every batch is
            <span className="ax-text-accent"> 100% export-ready.</span>
          </p>
          <div className="ax-card-glow-hover" />
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- Products Page View -------------------------- */
/* Single-page layout: category checklist on the left drives which products
   show on the right. No page navigation — everything reveals in place. */

function ProductsPageView() {
  const [selectedCats, setSelectedCats] = useState<Set<string>>(new Set());
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [animKey, setAnimKey] = useState(0);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // All products belonging to whichever categories are checked
  const combinedProducts = useMemo(() => {
    let list: SubProduct[] = [];
    selectedCats.forEach((cat) => {
      const data = SUB_PRODUCTS_MAP[cat];
      if (data) list = list.concat(data.products);
    });
    return list;
  }, [selectedCats]);

  const filteredProducts = useMemo(() => {
    return combinedProducts.filter((p) => {
      if (activeFilters.size > 0 && !activeFilters.has(p.filterGroup)) return false;
      if (priceMin && p.price < parseFloat(priceMin)) return false;
      if (priceMax && p.price > parseFloat(priceMax)) return false;
      return true;
    });
  }, [combinedProducts, activeFilters, priceMin, priceMax]);

  const handleCategoryToggle = (cat: string) => {
    setSelectedCats((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
    // reset the "Type" sub-filters whenever the category selection changes,
    // since the available types depend on which categories are checked
    setActiveFilters(new Set());
    setAnimKey((k) => k + 1);
  };

  const handleReset = () => {
    setSelectedCats(new Set());
    setActiveFilters(new Set());
    setPriceMin("");
    setPriceMax("");
    setAnimKey((k) => k + 1);
  };

  const hasAnySelection =
    selectedCats.size > 0 || activeFilters.size > 0 || !!priceMin || !!priceMax;

  return (
    <section className="ax-section" style={{ paddingTop: "160px" }}>
      <div className="ax-section-inner">
        <Reveal className="ax-section-head">
          <p className="ax-eyebrow ax-eyebrow-accent">Premium Product Gallery</p>
          <h2 className="ax-h2">
            India's finest spices, powders, fruits &amp; vegetables — export excellence.
          </h2>
        </Reveal>

        <div className="ax-filter-layout">
          {/* Filter Sidebar */}
          <aside className={`ax-filter-panel ${mobileFilterOpen ? "ax-filter-panel-open" : ""}`}>
            <div className="ax-filter-header">
              <h3 className="ax-filter-title">Category</h3>
            </div>

            <div className="ax-filter-list">
              {PRODUCTS.map((p) => {
                const count = SUB_PRODUCTS_MAP[p.title]?.products.length ?? 0;
                return (
                  <label
                    key={p.title}
                    className={`ax-filter-item ${selectedCats.has(p.title) ? "ax-filter-item-active" : ""}`}
                    onClick={() => handleCategoryToggle(p.title)}
                  >
                    <span className="ax-filter-checkbox">
                      {selectedCats.has(p.title) && <CheckCircle2 size={16} />}
                    </span>
                    <span className="ax-filter-name">{p.title}</span>
                    <span className="ax-filter-count">({count})</span>
                  </label>
                );
              })}
            </div>

            <div className="ax-filter-status">
              <span className="ax-filter-selected-count">
                {selectedCats.size + activeFilters.size} selected
              </span>
              {hasAnySelection && (
                <button className="ax-filter-reset" onClick={handleReset}>Reset</button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="ax-mobile-filter-container">
            <button
              className="ax-mobile-filter-btn"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/></svg>
              Category {selectedCats.size > 0 && `(${selectedCats.size})`}
            </button>
          </div>

          {/* Product Grid */}
          <div className="ax-filter-products">
            {selectedCats.size === 0 ? (
              <div className="ax-prod-empty">
                <PackageCheck size={44} strokeWidth={1.5} className="ax-icon-accent" />
                <p>Select a category on the left to view products.</p>
              </div>
            ) : (
              <>
                <p className="ax-filter-results-count">
                  Showing <strong>{filteredProducts.length}</strong> products
                </p>
                <div className="ax-prod-grid" key={`grid-${animKey}`}>
                  {filteredProducts.map((p, i) => (
                    <div
                      key={p.id}
                      className="ax-prod-card ax-prod-card-enter"
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <div className="ax-prod-img" style={{ background: p.gradient }}>
                        {p.image && <img src={p.image} alt={p.name} className="ax-prod-img-media" loading="lazy" />}
                        {p.filterGroup ? <span className="ax-prod-badge">{p.filterGroup}</span> : null}
                      </div>
                      <div className="ax-prod-info">
                        {p.brand ? <p className="ax-prod-brand">{p.brand}</p> : null}
                        <p className="ax-prod-name">{p.name}</p>
                        
                        {p.details && (
                          <div className="ax-prod-details">
                            {p.details.tagline && <p className="ax-prod-tagline">🌿 {p.details.tagline}</p>}
                            <ul className="ax-prod-specs">
                              {p.details.form && <li><strong>Form:</strong> {p.details.form}</li>}
                              {p.details.grades && <li><strong>Grades:</strong> {p.details.grades}</li>}
                              {p.details.gradeQuality && <li><strong>Grade / Quality:</strong> {p.details.gradeQuality}</li>}
                              {p.details.origin && <li><strong>Origin:</strong> {p.details.origin}</li>}
                              {p.details.oilContent && <li><strong>Oil Content:</strong> {p.details.oilContent}</li>}
                              {p.details.activeCompounds && <li><strong>Active Compounds:</strong> {p.details.activeCompounds}</li>}
                              {p.details.harvestSeason && <li><strong>Harvest:</strong> {p.details.harvestSeason}</li>}
                              {p.details.moisture && <li><strong>Moisture:</strong> {p.details.moisture}</li>}
                              {p.details.moq && <li><strong>MOQ:</strong> {p.details.moq}</li>}
                              {p.details.packing && <li><strong>Packing:</strong> {p.details.packing}</li>}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {filteredProducts.length === 0 && (
                  <div className="ax-prod-empty">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                    <p>No products match your filters.</p>
                    <button className="ax-filter-reset" onClick={handleReset}>Reset Filters</button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Footer -------------------------------- */

function Footer({ onNavigate }: { onNavigate: (page: string) => void }) {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="ax-footer">
      <div className="ax-section-inner ax-footer-grid">
        <Reveal delay={0} className="ax-footer-col ax-footer-brand">
          <a
            href="#home"
            className="ax-logo ax-logo-footer"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src="/Screenshot 2026-08-07 140201.png" alt="AgriX Logo" className="ax-logo-img" loading="lazy" />
            <span className="ax-logo-text">
              AgriX <em>Global</em>
            </span>
          </a>
          <p className="ax-footer-desc">
            Exporting the finest Indian agricultural products with integrity
            and global quality standards.
          </p>
          <div className="ax-social-row">
            <a href="https://www.instagram.com/" aria-label="Instagram" className="ax-social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="ax-social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="ax-footer-col">
          <h4 className="ax-footer-heading">Quick Links</h4>
          <a
            href="#home"
            className="ax-footer-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className="ax-footer-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
              setTimeout(() => {
                const el = document.querySelector("#about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            About
          </a>
          <a
            href="#products"
            className="ax-footer-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("products");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Products
          </a>
          <a
            href="#contact"
            className="ax-footer-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
              setTimeout(() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            Contact Us
          </a>
        </Reveal>

        <Reveal delay={200} className="ax-footer-col">
          <h4 className="ax-footer-heading">Connect</h4>
          <p className="ax-footer-contact">
            <MapPin size={16} className="ax-icon-accent" />
            <span>6/45, Sri Arunachaleswara Complex, Palghat Main Road, VK Puram, Kovaipudur Pirivu, Coimbatore – 641008</span>
          </p>
          <a href="mailto:info@agrixglobal.com" className="ax-footer-contact">
            <Mail size={16} className="ax-icon-accent" />
            <span>info@agrixglobal.com</span>
          </a>
          <a href="tel:+917810036407" className="ax-footer-contact">
            <Phone size={16} className="ax-icon-accent" />
            <span>+91 78100 36407</span>
          </a>
        </Reveal>
      </div>

      <Reveal className="ax-footer-bottom">
        <p>© {year} AgriX Global — Origin Matters. Quality Travels. All rights reserved.</p>
      </Reveal>
    </footer>
  );
}

/* -------------------------------- Root ---------------------------------- */

export default function AgriXGlobal() {
  const [isLight, setIsLight] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "products">("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page as "home" | "products");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`ax-root ${isLight ? "light-mode" : ""}`}>
      <GlobalStyles />
      
      {/* Floating WhatsApp Action Button */}
      <a 
        href="https://wa.me/917810036407" 
        className="ax-whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <Header
        isLight={isLight}
        toggleLight={() => setIsLight(!isLight)}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      <main>
        {currentPage === "home" ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <About />
            <WhyUs />
            <Certifications />
            <Process />
            <WeEnsure />
          </>
        ) : (
          <ProductsPageView />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

/* ------------------------------- Styles ---------------------------------- */

function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,500;1,600&family=Manrope:wght@300;400;500;600;700;800&display=swap');

      /* ---------- Core Theme (Dark Mode Base) ---------- */
      .ax-root {
        --bg-main: #09090b;
        --bg-surface: #18181b;
        --text-primary: #ffffff;
        --text-muted: #a1a1aa;
        --accent-green: #10b981;
        --accent-glow: rgba(16, 185, 129, 0.4);
        --border-light: rgba(255, 255, 255, 0.08);
        --border-hover: rgba(16, 185, 129, 0.5);
        font-family: 'Manrope', system-ui, sans-serif;
        color: var(--text-primary);
        background: var(--bg-main);
        overflow-x: hidden;
        transition: background-color 0.4s ease, color 0.4s ease;
      }

      .ax-root.light-mode {
        --bg-main: #f8fafc;
        --bg-surface: #ffffff;
        --text-primary: #0f172a;
        --text-muted: #475569;
        --border-light: rgba(0, 0, 0, 0.1);
      }

      .ax-root * { box-sizing: border-box; }
      .ax-root h1, .ax-root h2, .ax-root h3 { font-family: 'Playfair Display', serif; margin: 0; }
      .ax-root a { text-decoration: none; color: inherit; }
      .ax-root ul { list-style: none; margin: 0; padding: 0; }
      .ax-root :focus-visible { outline: 2px solid var(--accent-green); outline-offset: 3px; }

      /* ---------- Layout Utilities & Performance ---------- */
      .ax-section-inner { max-width: 1240px; margin: 0 auto; padding: 0 32px; }
      .ax-section { 
        padding: 120px 0; 
        position: relative; 
        content-visibility: auto;
        contain-intrinsic-size: 500px;
      }
      .ax-section-tight { padding: 80px 0; }
      .ax-text-center { text-align: center; margin-left: auto; margin-right: auto; }
      .ax-text-center .ax-h2, .ax-text-center .ax-p { margin-left: auto; margin-right: auto; }
      .ax-mb-4 { margin-bottom: 16px; }

      /* ---------- Typography ---------- */
      .ax-eyebrow { font-size: 13px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 20px; display: inline-flex; align-items: center; gap: 8px; }
      .ax-eyebrow-accent { color: var(--accent-green); }
      .ax-h1 { font-size: clamp(40px, 7vw, 84px); line-height: 1.05; font-weight: 600; letter-spacing: -0.03em; }
      .ax-h1-accent { color: transparent; -webkit-text-fill-color: transparent; background: linear-gradient(110deg, #10b981, #34d399); -webkit-background-clip: text; font-style: italic; font-weight: 500; }
      .ax-h2 { font-size: clamp(28px, 4vw, 48px); line-height: 1.15; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 24px; max-width: 700px; }
      .ax-p { font-size: 16px; line-height: 1.7; color: var(--text-muted); max-width: 600px; margin: 0 0 20px; font-weight: 300; transition: color 0.4s ease; }
      .ax-text-accent { color: var(--accent-green); }
      .ax-icon-accent { color: var(--accent-green); }

      /* ---------- Animations & Reveals ---------- */
      .ax-reveal { opacity: 0; transform: translateY(40px) scale(0.98); transition: opacity 1s cubic-bezier(0.2, 1, 0.3, 1), transform 1s cubic-bezier(0.2, 1, 0.3, 1); will-change: opacity, transform; }
      .ax-reveal-in { opacity: 1; transform: translateY(0) scale(1); }

      .ax-fade-1, .ax-fade-2, .ax-fade-3, .ax-fade-4, .ax-fade-5 { opacity: 0; animation: axFadeUp 1.2s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
      .ax-fade-1 { animation-delay: 0.1s; }
      .ax-fade-2 { animation-delay: 0.25s; }
      .ax-fade-3 { animation-delay: 0.4s; }
      .ax-fade-4 { animation-delay: 0.55s; }
      .ax-fade-5 { animation-delay: 0.7s; }
      @keyframes axFadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

      /* ---------- Glassmorphism Cards ---------- */
      .ax-glass-card {
        background: rgba(24, 24, 27, 0.6);
        border: 1px solid var(--border-light);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-radius: 24px;
        position: relative;
        overflow: hidden;
        transition: transform 0.4s cubic-bezier(0.2, 1, 0.3, 1), border-color 0.4s ease, background 0.4s ease;
      }
      .ax-root.light-mode .ax-glass-card { background: rgba(255, 255, 255, 0.8); }

      .ax-glass-card:hover {
        transform: translateY(-8px);
        border-color: var(--border-hover);
      }
      .ax-card-glow-hover {
        position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        background: radial-gradient(circle at 50% -20%, var(--accent-glow), transparent 60%);
        opacity: 0; transition: opacity 0.4s ease; pointer-events: none; z-index: 0;
      }
      .ax-glass-card:hover .ax-card-glow-hover { opacity: 1; }
      .ax-card-title { font-size: 22px; font-weight: 600; margin-bottom: 12px; position: relative; z-index: 1; }
      .ax-card-desc { font-size: 15px; line-height: 1.6; color: var(--text-muted); position: relative; z-index: 1; transition: color 0.4s ease; }

      /* ---------- Header ---------- */
      .ax-header-band { position: fixed; top: 24px; left: 0; right: 0; z-index: 100; display: flex; justify-content: center; pointer-events: none; }
      .ax-header-bar {
        pointer-events: auto; width: auto;
        background: rgba(15, 15, 15, 0.75);
        backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 999px; padding: 6px 6px 6px 24px;
        transition: box-shadow 0.4s ease, transform 0.4s ease, background 0.4s ease, border-color 0.4s ease;
        box-shadow: 0 16px 40px -12px rgba(0,0,0,0.5);
      }
      .ax-header-band-scrolled .ax-header-bar { box-shadow: 0 20px 50px -10px rgba(0,0,0,0.8); border-color: rgba(255,255,255,0.15); }

      .ax-root.light-mode .ax-header-bar {
        background: rgba(255, 255, 255, 0.85);
        border-color: rgba(0,0,0,0.1);
        box-shadow: 0 16px 40px -12px rgba(0,0,0,0.1);
      }
      .ax-root.light-mode .ax-header-band-scrolled .ax-header-bar {
        box-shadow: 0 20px 50px -10px rgba(0,0,0,0.15);
      }

      .ax-header-inner { display: flex; align-items: center; justify-content: space-between; gap: 40px; }

      .ax-logo { display: flex; align-items: center; gap: 10px; font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 600; letter-spacing: -0.01em; }
      .ax-logo-img { width: 34px; height: 34px; object-fit: contain; }
      .ax-logo-text {
        background: linear-gradient(135deg, #ffe55c 0%, #d4af37 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
      }
      .ax-logo-text em { font-style: normal; }

      .ax-nav-desktop { display: none; gap: 28px; align-items: center; }
      .ax-nav-link { font-size: 13px; font-weight: 500; color: var(--text-muted); transition: color 0.3s ease; position: relative; cursor: pointer; }
      .ax-nav-link:hover { color: var(--text-primary); }
      .ax-nav-link-active { color: var(--accent-green) !important; }

      .ax-cta { display: inline-flex; align-items: center; gap: 8px; font-size: 13.5px; font-weight: 600; padding: 12px 20px; border-radius: 999px; transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1); white-space: nowrap; cursor: pointer; border: none; font-family: inherit; }

      .ax-header-inner .ax-cta, .ax-nav-mobile .ax-cta { background: #ffffff; color: #000; }
      .ax-header-inner .ax-cta:hover, .ax-nav-mobile .ax-cta:hover { transform: scale(1.04); box-shadow: 0 0 20px rgba(255,255,255,0.2); }

      .ax-root.light-mode .ax-header-inner .ax-cta, .ax-root.light-mode .ax-nav-mobile .ax-cta { background: #0f172a; color: #ffffff; }
      .ax-root.light-mode .ax-header-inner .ax-cta:hover, .ax-root.light-mode .ax-nav-mobile .ax-cta:hover { box-shadow: 0 0 20px rgba(0,0,0,0.15); }

      .ax-cta-primary {
        position: relative; z-index: 5;
        background: linear-gradient(135deg, #10b981, #059669);
        color: #ffffff; padding: 16px 30px; font-size: 14.5px;
        box-shadow: 0 8px 30px -6px rgba(16, 185, 129, 0.55), 0 0 0 1px rgba(255,255,255,0.08) inset;
      }
      .ax-cta-primary:hover { transform: scale(1.045); box-shadow: 0 12px 36px -6px rgba(16, 185, 129, 0.7), 0 0 0 1px rgba(255,255,255,0.12) inset; }
      .ax-root.light-mode .ax-cta-primary { background: linear-gradient(135deg, #10b981, #059669); color: #ffffff; box-shadow: 0 8px 30px -6px rgba(16, 185, 129, 0.4); }

      .ax-cta-desktop { display: none; }

      .ax-menu-btn { display: flex; background: none; border: 0; color: var(--text-primary); padding: 8px; cursor: pointer; margin-right: 8px; transition: color 0.3s ease; }
      .ax-nav-mobile { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.2, 1, 0.3, 1); display: flex; flex-direction: column; gap: 4px; padding: 0 16px; }
      .ax-nav-mobile-open { max-height: 400px; padding-top: 16px; padding-bottom: 16px; }
      .ax-nav-mobile-link { padding: 12px 8px; font-size: 15px; font-weight: 500; color: var(--text-muted); border-bottom: 1px solid var(--border-light); cursor: pointer; }
      .ax-nav-mobile .ax-cta { margin-top: 16px; justify-content: center; }

      @media(min-width: 900px) {
        .ax-nav-desktop { display: flex; }
        .ax-cta-desktop { display: inline-flex; }
        .ax-menu-btn { display: none; }
        .ax-nav-mobile { display: none; }
      }

      /* ---------- Hero ---------- */
      .ax-hero { position: relative; padding: 100px 28px 60px; min-height: 100vh; display: flex; align-items: center; box-sizing: border-box; }
      .ax-ambient-glow { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.3; z-index: 0; pointer-events: none; }
      .ax-glow-1 { width: 50vw; height: 50vw; background: var(--accent-green); top: -20%; left: -10%; animation: axPulseGlow 10s alternate infinite ease-in-out; }
      .ax-glow-2 { width: 40vw; height: 40vw; background: #0ea5e9; bottom: -10%; right: -10%; animation: axPulseGlow 12s alternate-reverse infinite ease-in-out; opacity: 0.15; }
      @keyframes axPulseGlow { 0% { transform: scale(1) translate(0,0); } 100% { transform: scale(1.2) translate(5%, 5%); } }

      .ax-hero-inner { max-width: 1240px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1fr; gap: 64px; align-items: center; position: relative; z-index: 1; }
      @media(min-width: 1024px) { .ax-hero-inner { grid-template-columns: 1.1fr 0.9fr; gap: 40px; } }
      .ax-hero-sub { font-size: 18px; margin-top: 22px; }
      .ax-hero-actions { display: flex; gap: 16px; margin-top: 32px; position: relative; z-index: 5; }
      .ax-hero-visual { width: 100%; position: relative; perspective: 1000px; }

      /* ---------- 3D Holographic Map ---------- */
      .ax-map-stage { width: 100%; transform-style: preserve-3d; }
      .ax-map-float { animation: axMapFloat 8s ease-in-out infinite; transform-style: preserve-3d; }
      @keyframes axMapFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }

      .ax-map-surface {
        --rx: 25deg; --ry: -15deg;
        position: relative; border-radius: 50%; width: 100%; aspect-ratio: 1/1;
        background: radial-gradient(circle at center, rgba(16,185,129,0.1) 0%, transparent 70%);
        border: 1px solid rgba(16,185,129,0.2);
        box-shadow: inset 0 0 40px rgba(16,185,129,0.1), 0 20px 60px -20px rgba(0,0,0,0.8);
        transform: rotateX(var(--rx)) rotateY(var(--ry));
        transform-style: preserve-3d; transition: transform 0.1s linear, background 0.4s ease, box-shadow 0.4s ease; cursor: grab;
        display: flex; align-items: center; justify-content: center;
        will-change: transform;
      }
      .ax-root.light-mode .ax-map-surface {
        background: radial-gradient(circle at center, rgba(16,185,129,0.05) 0%, #ffffff 70%);
        box-shadow: inset 0 0 40px rgba(16,185,129,0.05), 0 20px 60px -20px rgba(0,0,0,0.15);
      }

      .ax-map-surface:active { cursor: grabbing; }
      .ax-radar-sweep { position: absolute; inset: 0; border-radius: 50%; background: conic-gradient(from 0deg, transparent 70%, rgba(16,185,129,0.3) 100%); animation: axRadarSweep 4s linear infinite; pointer-events: none; }
      @keyframes axRadarSweep { to { transform: rotate(360deg); } }
      .ax-map-layer-base { transform: translateZ(20px); width: 110%; }
      .ax-routemap { width: 100%; display: block; overflow: visible; }

      .ax-grid line, .ax-grid path { stroke: rgba(255,255,255,0.05); stroke-width: 1; transition: stroke 0.4s ease; }
      .ax-root.light-mode .ax-grid line, .ax-root.light-mode .ax-grid path { stroke: rgba(0,0,0,0.05); }

      .ax-continents path { fill: #18181b; stroke: rgba(255,255,255,0.1); stroke-width: 1; transition: fill 0.4s ease, stroke 0.4s ease; }
      .ax-root.light-mode .ax-continents path { fill: #e2e8f0; stroke: rgba(0,0,0,0.1); }

      .ax-twinkles circle { fill: var(--accent-green); animation: axMapTwinkle 3s ease-in-out infinite; }
      @keyframes axMapTwinkle { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.8; } }

      .ax-route-ghost { stroke: rgba(255,255,255,0.05); transition: stroke 0.4s ease; }
      .ax-root.light-mode .ax-route-ghost { stroke: rgba(0,0,0,0.05); }

      .ax-route-line { stroke: var(--accent-green); opacity: 0.7; }
      .ax-route-sea { stroke-dasharray: 4 6; animation: axDashAnim 4s linear infinite; }
      .ax-route-air { stroke: #0ea5e9; stroke-dasharray: 2 6; animation: axDashAnim 2s linear infinite; }
      .ax-route-glow { opacity: 0.3; animation: axDashAnim 4s linear infinite; }
      .ax-route-glow-sea { stroke: var(--accent-green); }
      .ax-route-glow-air { stroke: #0ea5e9; animation-duration: 2s; }
      @keyframes axDashAnim { to { stroke-dashoffset: -100; } }
      .ax-comet { fill: #fff; }
      .ax-comet-air { fill: #0ea5e9; }
      .ax-root.light-mode .ax-comet { fill: var(--text-primary); }

      .ax-pins-layer { position: absolute; top: 25%; left: 10%; width: 80%; height: 50%; transform: translateZ(40px); pointer-events: none; }
      .ax-pin { position: absolute; transform: translate(-50%, -100%); display: flex; flex-direction: column; align-items: center; animation: axPinDrop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both; }

      .ax-pin-label { font-size: 10px; font-weight: 700; color: #fff; background: rgba(0,0,0,0.8); padding: 4px 8px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 6px; backdrop-filter: blur(4px); transition: background 0.4s ease, color 0.4s ease; }
      .ax-root.light-mode .ax-pin-label { color: var(--text-primary); background: rgba(255,255,255,0.9); }

      .ax-pin-glow { position: absolute; top: 20px; width: 30px; height: 30px; border-radius: 50%; background: radial-gradient(circle, var(--accent-green), transparent 70%); animation: axPinPulse 2s ease-out infinite; opacity: 0.5; }
      .ax-pin-head { width: 8px; height: 8px; border-radius: 50%; background: #fff; box-shadow: 0 0 10px var(--accent-green); }
      .ax-pin-origin .ax-pin-head { background: var(--accent-green); width: 12px; height: 12px; }
      @keyframes axPinDrop { from { opacity: 0; transform: translate(-50%, -200%) scale(0.5); } to { opacity: 1; transform: translate(-50%, -100%) scale(1); } }
      @keyframes axPinPulse { 0% { transform: scale(0.5); opacity: 0.8; } 100% { transform: scale(2); opacity: 0; } }

      /* ---------- About ---------- */
      .ax-about-grid { display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center; }
      @media(min-width: 900px) { .ax-about-grid { grid-template-columns: 1.2fr 0.8fr; } }
      .ax-about-card { padding: 40px; }

      /* ---------- Why Us ---------- */
      .ax-section-head { margin-bottom: 64px; }
      .ax-why-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
      @media(min-width: 760px) { .ax-why-grid { grid-template-columns: repeat(3, 1fr); } }
      .ax-why-card { padding: 40px 32px; }
      .ax-why-index { display: block; font-family: 'Playfair Display', serif; font-size: 16px; font-weight: 600; color: var(--border-light); margin-bottom: 24px; transition: color 0.4s ease; position: relative; z-index: 1; }
      .ax-why-card:hover .ax-why-index { color: var(--accent-green); }

      /* Product Tone Colors (used by icon backgrounds referenced elsewhere) */
      .ax-tone-clay { background: rgba(194, 120, 75, 0.15) !important; border-color: rgba(194, 120, 75, 0.3) !important; color: #c2784b !important; }
      .ax-tone-green { background: rgba(16, 185, 129, 0.15) !important; border-color: rgba(16, 185, 129, 0.3) !important; color: #10b981 !important; }
      .ax-tone-saffron { background: rgba(245, 158, 11, 0.15) !important; border-color: rgba(245, 158, 11, 0.3) !important; color: #f59e0b !important; }
      .ax-tone-citrus { background: rgba(234, 179, 8, 0.15) !important; border-color: rgba(234, 179, 8, 0.3) !important; color: #eab308 !important; }

      /* ---------- Certifications Marquee ---------- */
      .ax-marquee-stack { display: flex; flex-direction: column; gap: 20px; }
      .ax-marquee-mask { width: 100%; overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent); mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent); }
      .ax-marquee-track { display: flex; gap: 24px; width: max-content; padding: 10px 0; }
      .ax-marquee-left { animation: axMarquee 30s linear infinite; }
      .ax-marquee-right { animation: axMarqueeReverse 26s linear infinite; }
      @keyframes axMarquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
      @keyframes axMarqueeReverse { from { transform: translateX(-33.333%); } to { transform: translateX(0); } }
      .ax-cert-pill { display: inline-flex; align-items: center; gap: 12px; padding: 16px 32px; border-radius: 999px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-light); font-weight: 600; font-size: 16px; color: var(--text-primary); white-space: nowrap; backdrop-filter: blur(10px); transition: color 0.4s ease, border-color 0.4s ease; }

      /* ---------- Process ---------- */
      .ax-process-rail { position: relative; display: grid; grid-template-columns: 1fr; gap: 48px; margin-top: 20px; }
      @media(min-width: 820px) { .ax-process-rail { grid-template-columns: repeat(4, 1fr); gap: 32px; } }
      .ax-process-line { display: none; }
      @media(min-width: 820px) {
        .ax-process-line { display: block; position: absolute; top: 32px; left: 8%; right: 8%; height: 2px; background: rgba(255,255,255,0.05); }
        .ax-process-line-glow { height: 100%; width: 0; background: linear-gradient(90deg, transparent, var(--accent-green)); box-shadow: 0 0 10px var(--accent-green); animation: axLineGlow 2.5s 0.5s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
      }
      @keyframes axLineGlow { to { width: 100%; } }
      .ax-process-step { position: relative; padding-top: 10px; }
      .ax-process-icon { width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; position: relative; z-index: 2; }
      .ax-process-step:hover .ax-process-icon { transform: scale(1.1); border-color: var(--accent-green); }
      .ax-process-n { display: block; font-family: 'Playfair Display', serif; font-size: 14px; font-weight: 600; color: var(--text-muted); margin-bottom: 12px; letter-spacing: 0.05em; transition: color 0.4s ease; }

      /* ---------- We Ensure ---------- */
      .ax-ensure-grid { display: grid; grid-template-columns: 1fr; gap: 48px; }
      @media(min-width: 900px) { .ax-ensure-grid { grid-template-columns: 1.1fr 0.9fr; align-items: center; } }
      .ax-checklist { display: flex; flex-direction: column; gap: 20px; margin-top: 12px; }
      .ax-checklist-item { display: flex; gap: 16px; align-items: flex-start; font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 600; line-height: 1.5; letter-spacing: -0.01em; color: var(--text-primary); transition: color 0.4s ease; }
      .ax-check-wrap { flex-shrink: 0; margin-top: 2px; background: rgba(16,185,129,0.1); border-radius: 50%; padding: 4px; }
      .ax-ensure-banner { padding: 48px 40px; display: flex; flex-direction: column; justify-content: center; text-align: left; }
      .ax-ensure-banner-text { font-family: 'Playfair Display', serif; font-size: 28px; line-height: 1.3; font-weight: 500; color: var(--text-primary); transition: color 0.4s ease; }

      /* ---------- Footer ---------- */
      .ax-footer { background: var(--bg-surface); border-top: 1px solid var(--border-light); padding: 80px 0 40px; transition: background 0.4s ease, border-color 0.4s ease; }
      .ax-footer-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
      @media(min-width: 768px) { .ax-footer-grid { grid-template-columns: 1.5fr 1fr 1fr; } }
      .ax-footer-col { display: flex; flex-direction: column; gap: 12px; }
      .ax-footer-brand { gap: 16px; }
      .ax-footer-heading { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 600; margin-bottom: 8px; color: var(--accent-green); }
      .ax-footer-link { font-size: 14px; color: var(--text-muted); transition: color 0.3s ease; padding: 4px 0; cursor: pointer; }
      .ax-footer-link:hover { color: var(--accent-green); }
      .ax-footer-desc { font-size: 14px; line-height: 1.6; color: var(--text-muted); max-width: 300px; transition: color 0.4s ease; }
      .ax-footer-contact { display: flex; gap: 10px; align-items: flex-start; font-size: 14px; color: var(--text-muted); transition: color 0.3s ease; padding: 4px 0; }
      .ax-footer-contact svg { flex-shrink: 0; }
      .ax-footer-contact:hover { color: var(--text-primary); }
      .ax-footer-bottom { margin-top: 60px; padding-top: 24px; border-top: 1px solid var(--border-light); text-align: center; font-size: 13px; color: var(--text-muted); transition: color 0.4s ease, border-color 0.4s ease; }
      .ax-social-row { display: flex; gap: 12px; margin-top: 4px; }
      .ax-social-icon { width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--border-light); display: flex; align-items: center; justify-content: center; color: var(--text-muted); transition: all 0.3s ease; }
      .ax-social-icon:hover { border-color: var(--accent-green); color: var(--accent-green); transform: translateY(-2px); }
      
      .ax-logo-footer { margin-bottom: 12px; align-items: center; }
      .ax-logo-footer .ax-logo-img { width: 52px; height: 52px; }
      .ax-logo-footer .ax-logo-text { font-size: 24px; }

      /* ========== Products Filter Page Styles ========== */

      /* Category card clickable (kept for any other in-page use) */
      .ax-category-clickable {
        cursor: pointer;
        transition: transform 0.4s cubic-bezier(0.2, 1, 0.3, 1), border-color 0.4s ease, background 0.4s ease, box-shadow 0.4s ease;
      }
      .ax-category-clickable:hover {
        transform: translateY(-8px) scale(1.02);
        border-color: var(--accent-green);
        box-shadow: 0 12px 40px -8px rgba(16, 185, 129, 0.3);
      }

      /* Filter layout */
      .ax-filter-layout {
        display: flex; gap: 32px; align-items: flex-start;
      }

      /* Filter panel (sidebar) */
      .ax-filter-panel {
        width: 280px; min-width: 280px;
        background: rgba(24, 24, 27, 0.8);
        border: 1px solid var(--border-light);
        backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
        border-radius: 20px; padding: 24px;
        display: flex; flex-direction: column; gap: 20px;
        position: sticky; top: 120px;
        animation: axFilterSlideIn 0.5s cubic-bezier(0.2, 1, 0.3, 1) forwards;
        transition: background 0.4s ease, border-color 0.4s ease;
      }
      .ax-root.light-mode .ax-filter-panel { background: rgba(255, 255, 255, 0.9); }

      @keyframes axFilterSlideIn {
        from { opacity: 0; transform: translateX(-24px); }
        to { opacity: 1; transform: translateX(0); }
      }

      .ax-filter-header {
        display: flex; align-items: center; justify-content: space-between;
        padding-bottom: 16px; border-bottom: 1px solid var(--border-light);
      }
      .ax-filter-header-sub { padding-top: 4px; }
      .ax-filter-title {
        font-size: 18px; font-weight: 700; font-family: 'Playfair Display', serif;
        color: var(--text-primary); margin: 0;
      }
      .ax-filter-title-sub { font-size: 15px; }
      .ax-more-filters-btn {
        background: none; border: none; color: var(--accent-green);
        font-size: 12px; font-weight: 600; cursor: pointer;
        font-family: 'Manrope', system-ui, sans-serif;
        padding: 4px 0; transition: opacity 0.3s ease;
      }
      .ax-more-filters-btn:hover { opacity: 0.7; }

      /* Filter list */
      .ax-filter-list {
        display: flex; flex-direction: column; gap: 4px;
      }

      .ax-filter-item {
        display: flex; align-items: center; gap: 10px;
        padding: 10px 12px; border-radius: 12px; cursor: pointer;
        transition: background 0.25s ease, transform 0.2s ease;
        user-select: none;
      }
      .ax-filter-item:hover { background: rgba(255,255,255,0.05); }
      .ax-root.light-mode .ax-filter-item:hover { background: rgba(0,0,0,0.04); }
      .ax-filter-item:active { transform: scale(0.97); }

      .ax-filter-item-active {
        background: rgba(16, 185, 129, 0.1) !important;
      }

      .ax-filter-checkbox {
        width: 18px; height: 18px; min-width: 18px;
        border: 2px solid var(--border-light); border-radius: 5px;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.25s ease; color: var(--accent-green);
      }
      .ax-filter-item-active .ax-filter-checkbox {
        border-color: var(--accent-green);
        background: rgba(16, 185, 129, 0.15);
      }

      .ax-filter-cat-icon { color: var(--accent-green); flex-shrink: 0; }

      .ax-filter-name {
        flex: 1; font-size: 14px; font-weight: 500;
        color: var(--text-primary); transition: color 0.3s ease;
      }
      .ax-filter-count {
        font-size: 13px; color: var(--text-muted); font-weight: 400;
        transition: color 0.3s ease;
      }
      .ax-filter-item-active .ax-filter-count { color: var(--accent-green); }

      /* Filter status */
      .ax-filter-status {
        display: flex; align-items: center; justify-content: space-between;
        padding-top: 16px; border-top: 1px solid var(--border-light);
      }
      .ax-filter-selected-count {
        font-size: 13px; color: var(--text-muted); font-weight: 500;
      }
      .ax-filter-reset {
        background: none; border: none; color: var(--accent-green);
        font-size: 13px; font-weight: 600; cursor: pointer;
        font-family: 'Manrope', system-ui, sans-serif;
        padding: 4px 8px; border-radius: 6px;
        transition: background 0.2s ease;
      }
      .ax-filter-reset:hover { background: rgba(16, 185, 129, 0.1); }

      /* Mobile filter toggle */
      .ax-mobile-filter-container {
        display: none;
      }
      .ax-mobile-filter-btn {
        display: flex; align-items: center; justify-content: center; gap: 8px;
        background: rgba(255,255,255,0.05); border: 1px solid var(--border-light);
        color: var(--text-primary); font-size: 14px; font-weight: 600;
        padding: 12px 20px; border-radius: 12px; cursor: pointer;
        font-family: 'Manrope', system-ui, sans-serif;
        width: 100%;
        transition: all 0.3s ease;
      }
      .ax-mobile-filter-btn:hover { border-color: var(--accent-green); }

      /* Products area */
      .ax-filter-products { flex: 1; min-width: 0; }
      .ax-filter-results-count {
        font-size: 14px; color: var(--text-muted); margin-bottom: 24px;
        font-weight: 400; transition: color 0.4s ease;
      }
      .ax-filter-results-count strong { color: var(--text-primary); font-weight: 600; }

      /* Product grid */
      .ax-prod-grid {
        display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
      }
      @media(min-width: 768px) { .ax-prod-grid { grid-template-columns: repeat(3, 1fr); } }

      /* Product card */
      .ax-prod-card {
        background: rgba(24, 24, 27, 0.6);
        border: 1px solid var(--border-light);
        backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
        border-radius: 20px; overflow: hidden;
        transition: transform 0.4s cubic-bezier(0.2, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
      }
      .ax-root.light-mode .ax-prod-card { background: rgba(255, 255, 255, 0.8); }
      .ax-prod-card:hover {
        transform: translateY(-6px);
        border-color: var(--border-hover);
        box-shadow: 0 16px 40px -12px rgba(0, 0, 0, 0.4);
      }

      /* Product card enter animation */
      @keyframes axProdEnter {
        from { opacity: 0; transform: translateY(24px) scale(0.96); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .ax-prod-card-enter {
        opacity: 0;
        animation: axProdEnter 0.45s cubic-bezier(0.2, 1, 0.3, 1) forwards;
      }

      /* Product image area */
      .ax-prod-img {
        width: 100%; aspect-ratio: 4/3; position: relative;
        display: flex; align-items: flex-end; padding: 12px;
        overflow: hidden;
      }
      .ax-prod-img-media {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        object-fit: cover;
        z-index: 0;
      }
      .ax-prod-badge {
        font-size: 10px; font-weight: 700; text-transform: uppercase;
        letter-spacing: 0.08em; color: #fff; background: rgba(0,0,0,0.5);
        backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
        padding: 4px 10px; border-radius: 8px;
        border: 1px solid rgba(255,255,255,0.15);
        position: relative; z-index: 1;
      }

      /* Product info & Details */
      .ax-prod-info {
        padding: 16px 18px 20px; display: flex; flex-direction: column; gap: 4px;
      }
      .ax-prod-brand {
        font-size: 11px; font-weight: 600; text-transform: uppercase;
        letter-spacing: 0.1em; color: var(--accent-green); margin: 0;
      }
      .ax-prod-name {
        font-size: 16px; font-weight: 700; color: var(--text-primary);
        line-height: 1.3; margin: 0; transition: color 0.4s ease;
      }
      
      .ax-prod-details {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid var(--border-light);
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .ax-prod-tagline {
        font-size: 12px;
        font-style: italic;
        color: var(--accent-green);
        line-height: 1.4;
      }
      .ax-prod-specs {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .ax-prod-specs li {
        font-size: 12px;
        color: var(--text-muted);
        line-height: 1.4;
      }
      .ax-prod-specs strong {
        color: var(--text-primary);
        font-weight: 600;
        margin-right: 4px;
      }

      /* Empty state */
      .ax-prod-empty {
        display: flex; flex-direction: column; align-items: center;
        justify-content: center; gap: 16px; padding: 100px 20px;
        color: var(--text-muted); text-align: center;
        border: 1px dashed var(--border-light); border-radius: 20px;
      }
      .ax-prod-empty p { font-size: 16px; margin: 0; }

      /* ========== WhatsApp Floating Action Button ========== */
      .ax-whatsapp-float {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background-color: #25d366;
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4);
        z-index: 1000;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .ax-whatsapp-float:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
      }
      .ax-whatsapp-float svg {
        width: 34px;
        height: 34px;
      }

      /* Mobile Responsive Core Adjustments */
      @media(max-width: 768px) {
        .ax-section { padding: 60px 0; }
        .ax-section-tight { padding: 40px 0; }
        .ax-section-inner { padding: 0 20px; }
        
        .ax-hero { padding-top: 110px; padding-bottom: 40px; min-height: auto; flex-direction: column; }
        .ax-hero-inner { grid-template-columns: 1fr; gap: 32px; text-align: center; }
        .ax-hero-actions { justify-content: center; }
        .ax-h1 { font-size: clamp(36px, 10vw, 48px); }
        .ax-h2 { font-size: clamp(26px, 8vw, 32px); }
        
        .ax-about-grid, .ax-ensure-grid, .ax-footer-grid { grid-template-columns: 1fr; gap: 32px; text-align: center; }
        .ax-about-card { padding: 24px; }
        
        .ax-ensure-banner { padding: 32px 20px; align-items: center; text-align: center; }
        .ax-ensure-list .ax-checklist-item { align-items: center; text-align: left; font-size: 16px; }
        
        .ax-process-rail { gap: 24px; }
        .ax-process-step { display: flex; flex-direction: column; align-items: center; text-align: center; }
        
        .ax-footer-contact { justify-content: center; }
        .ax-social-row { justify-content: center; }
        .ax-logo { justify-content: center; }

        .ax-filter-layout { flex-direction: column; gap: 24px; }
        .ax-mobile-filter-container { display: block; width: 100%; margin-bottom: 16px; }
        .ax-filter-panel { display: none; width: 100%; min-width: 0; position: static; animation: none; }
        .ax-filter-panel-open { display: flex; animation: axFilterSlideIn 0.35s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
        .ax-prod-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .ax-prod-info { padding: 12px; }

        .ax-whatsapp-float { bottom: 20px; right: 20px; width: 50px; height: 50px; }
        .ax-whatsapp-float svg { width: 28px; height: 28px; }
      }

      @media(max-width: 480px) {
        .ax-prod-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  );
}