export interface ExportRoute {
  id: string;
  name: string;
  region: string;
  transitTime: string;
  mode: "Sea Reefer / Dry" | "Air Express Freight" | "Multimodal";
  ports: string[];
  keyProducts: string[];
  x: number;
  y: number;
}

export interface Certification {
  id: string;
  code: string;
  name: string;
  description: string;
  badge: string;
}

export const COMPANY_INFO = {
  name: "AgriX Global",
  legalName: "AgriX Global Exports",
  tagline: "Origin Matters. Quality Travels.",
  shortBio: "Exporting India's finest agricultural products with integrity, end-to-end traceability, and strict international food safety standards.",
  longStory: "AgriX Global delivers premium Indian agri products to international markets with quality and reliability. Our mission is built on a simple idea: origin matters. Every batch we export carries the integrity of the farm it came from. From the spice hills of Tamil Nadu and Kerala to global seaports, we connect certified Indian growers with world markets through zero-middlemen supply chains, optical grading, rigorous multi-residue testing, and certified cold-chain logistics.",
  
  headquarters: {
    addressLine1: "6/45, Sri Arunachaleswara Complex",
    addressLine2: "Palghat Main Road, VK Puram, Kovaipudur Pirivu",
    city: "Coimbatore",
    postalCode: "641008",
    state: "Tamil Nadu",
    country: "India",
    fullAddress: "6/45, Sri Arunachaleswara Complex, Palghat Main Road, VK Puram, Kovaipudur Pirivu, Coimbatore – 641008, Tamil Nadu, India",
    coordinates: { lat: 10.9634, lng: 76.9423 },
    googleMapsUrl: "https://maps.google.com/?q=Kovaipudur+Pirivu+Coimbatore+641008",
  },

  contact: {
    phone: "+91 78100 36407",
    phoneClean: "+917810036407",
    email: "info@agrixglobal.com",
    inquiriesEmail: "info@agrixglobal.com",
    whatsapp: "https://wa.me/917810036407",
    businessHours: "Monday – Saturday: 08:30 AM – 06:30 PM IST (24/7 International Desk for Reefer Shipments)",
  },

  socials: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    whatsapp: "https://wa.me/917810036407",
  },

  stats: [
    { value: "40+", label: "Destination Ports", sublabel: "Across 28+ Countries" },
    { value: "100%", label: "Farm-Direct Traceability", sublabel: "Single-origin batch tracking" },
    { value: "99.2%", label: "Export Purity Standard", sublabel: "Laboratory certified" },
    { value: "24/7", label: "Cold-Chain Logistics", sublabel: "Farm gate to ocean vessel" },
  ],

  certifications: [
    {
      id: "apeda",
      code: "APEDA",
      name: "Agricultural & Processed Food Products Export Development Authority",
      description: "Registered Indian agricultural exporter maintaining export grade compliance.",
      badge: "Govt of India Certified",
    },
    {
      id: "fssai",
      code: "FSSAI",
      name: "Food Safety and Standards Authority of India",
      description: "Highest domestic and export food safety license assuring zero adulteration.",
      badge: "Food Safety Compliant",
    },
    {
      id: "iso",
      code: "ISO 22000",
      name: "International Food Safety Management System",
      description: "Global standard certifying farm-to-dispatch hygienic process controls.",
      badge: "Global ISO Standard",
    },
    {
      id: "haccp",
      code: "HACCP",
      name: "Hazard Analysis Critical Control Point",
      description: "Systematic preventive food safety controls throughout processing and packing.",
      badge: "Critical Control Verified",
    },
    {
      id: "spices-board",
      code: "Spices Board",
      name: "Spices Board of India",
      description: "Certified exporter of genuine Indian spices adhering to ASTA and ESA quality guidelines.",
      badge: "Origin Authenticated",
    },
  ],

  corePillars: [
    {
      number: "01",
      title: "Direct Farm Gate Partnerships",
      description: "Eliminating middlemen through direct contract farming and aggregation across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh, guaranteeing growers fair returns and buyers fresh, unadulterated harvests.",
      highlight: "Zero Middlemen",
    },
    {
      number: "02",
      title: "Optical Sorting & Lab Verification",
      description: "Every shipment undergoes multi-level optical cleaning, moisture stabilization, and accredited laboratory testing for pesticide residue, aflatoxins, microbial count, and active compounds.",
      highlight: "NABL Accredited Labs",
    },
    {
      number: "03",
      title: "Preservation & Barrier Packaging",
      description: "From oxygen-barrier HDPE bags for dehydrated powders to vacuum-sealed foil packs for green cardamom and ventilated telescopic cartons for fresh fruits and vegetables.",
      highlight: "Food-Grade HDPE / Foil",
    },
    {
      number: "04",
      title: "Multimodal Logistics to Global Seaports",
      description: "Seamless cold-chain road corridors connecting Coimbatore to major departure gateways: Nhava Sheva (JNPT Mumbai), Chennai Port, Cochin Port, and Tuticorin VOC Port.",
      highlight: "Global Transit Ready",
    },
  ],

  exportDestinations: [
    { name: "United Arab Emirates & GCC", region: "Middle East", code: "UAE", ports: ["Jebel Ali", "Hamad", "King Abdulaziz Port"] },
    { name: "United Kingdom", region: "Europe", code: "UK", ports: ["Felixstowe", "London Gateway", "Southampton"] },
    { name: "European Union", region: "Europe", code: "EU", ports: ["Rotterdam", "Hamburg", "Antwerp", "Valencia"] },
    { name: "United States of America", region: "Americas", code: "USA", ports: ["New York / New Jersey", "Savannah", "Long Beach", "Oakland"] },
    { name: "Canada", region: "Americas", code: "CAN", ports: ["Vancouver", "Montreal", "Halifax"] },
    { name: "Southeast Asia", region: "Asia Pacific", code: "SEA", ports: ["Singapore", "Port Klang", "Tanjung Priok", "Bangkok"] },
    { name: "Australia & New Zealand", region: "Oceania", code: "AUS", ports: ["Sydney", "Melbourne", "Brisbane", "Auckland"] },
  ],

  faqs: [
    {
      question: "What are your minimum order quantities (MOQ)?",
      answer: "Our MOQs vary by product category. For premium spices, MOQs start from 100 kg for high-value items like Green Cardamom and Cloves, up to 500 kg – 1 Metric Ton for Turmeric and Black Pepper. For Dehydrated Powders, MOQ is 200 kg. For Fresh Produce, MOQs start from 1 Metric Ton for air freight or 1 x 40ft Reefer Container (approx. 18–28 MT) for ocean shipments.",
    },
    {
      question: "What international shipping incoterms do you support?",
      answer: "We support FOB (Free on Board from Chennai, Cochin, Nhava Sheva, or Tuticorin), CFR (Cost and Freight), and CIF (Cost, Insurance, and Freight) to any designated global port. Air shipments are dispatched CIP / CPT via Coimbatore (CJB), Kochi (COK), Chennai (MAA), or Mumbai (BOM) international airports.",
    },
    {
      question: "Can you provide pre-shipment laboratory test reports and Certificates of Analysis (CoA)?",
      answer: "Yes, every export consignment is accompanied by an authentic Certificate of Analysis (CoA) from accredited NABL / ISO-certified laboratories covering moisture, pesticide residue screening, aflatoxin levels, heavy metals, microbial limits, and curcumin/piperine/essential oil percentages as per destination country import regulations.",
    },
    {
      question: "Do you offer private labeling and custom retail packaging?",
      answer: "Yes. In addition to standard bulk export packaging (25kg/50kg PP bags, HDPE poly-lined bags, jute bags, and corrugated master cartons), we provide customized retail packaging (50g to 1kg vacuum pouches, zip-lock stand-up pouches, PET jars, and branded cartons) with custom barcode and nutrition labeling.",
    },
    {
      question: "How do you ensure cold-chain integrity during transit?",
      answer: "Fresh fruits and vegetables are pre-cooled immediately after harvest at our packhouse facilities, packed with moisture-absorbing parchment and temperature monitors, and transported in temperature-controlled reefer trucks directly to port terminals for immediate transfer into ocean reefer containers or cargo aircraft.",
    },
  ],
};
