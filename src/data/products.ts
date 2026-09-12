export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  variants?: string[];
  inStock: boolean;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "premium-a4-copier-paper-75gsm",
    name: "Premium A4 Copier Paper (75 GSM - 500 Sheets)",
    category: "Paper Products",
    categoryId: "paper-products",
    description: "High-brightness multi-purpose A4 copier paper ideal for double-sided laser and inkjet printing.",
    longDescription: "Mitra Papers stocks premium quality 75 GSM A4 copier paper engineered for jam-free performance across high-speed photocopiers, laser printers, and deskjet printers. Features high whiteness, smooth surface finish, and minimal ink bleed-through.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800",
    features: [
      "75 GSM high-grade cellulose paper",
      "Dust-free precision edge cutting to prevent jams",
      "High opacity suitable for double-sided printing",
      "Eco-friendly elemental chlorine-free process"
    ],
    variants: ["1 Ream (500 sheets)", "5 Reams Box", "Bulk Wholesale Box"],
    inStock: true,
    featured: true,
  },
  {
    id: "executive-bond-paper-85gsm",
    name: "Executive Cotton Bond Paper (85 GSM)",
    category: "Paper Products",
    categoryId: "paper-products",
    description: "Crisp textured executive bond paper with watermark for official letters, certificates, and resumes.",
    longDescription: "Crafted for formal correspondence, legal documents, and corporate presentations. This 85 GSM executive bond paper exhibits an elegant tactile texture and premium weight.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    features: [
      "85 GSM textured bond paper",
      "Subtle watermarked finish",
      "Ideal for fountain pens, laser printing, and embossing",
      "Available in White and Ivory shades"
    ],
    variants: ["100 Sheets Pack", "500 Sheets Ream"],
    inStock: true,
    featured: true,
  },
  {
    id: "hardcover-ruled-register-notebook-300-pages",
    name: "Classic Hardcover Ruled Register (300 Pages)",
    category: "School Stationery",
    categoryId: "school-stationery",
    description: "Durable bound office and school register notebook with heavy cloth spine and smooth white paper.",
    longDescription: "A mainstay of West Bengal offices and schools for decades. Features hardboard binding, reinforced spine, numbered pages, and thick 70 GSM ruled paper that prevents ink feathering.",
    image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&q=80&w=800",
    features: [
      "300 numbered ruled pages",
      "Heavy-duty hardboard cover with cloth corner backing",
      "Smyth-sewn binding for lay-flat writing convenience",
      "Acid-free paper preserving records for years"
    ],
    variants: ["160 Pages", "300 Pages", "500 Pages"],
    inStock: true,
    featured: true,
  },
  {
    id: "artist-grade-watercolor-paper-pad-300gsm",
    name: "Artist Grade Cold Pressed Watercolor Pad (300 GSM)",
    category: "Art & Craft Supplies",
    categoryId: "art-craft",
    description: "100% cotton cold-pressed watercolor paper pad for wet-on-wet watercolor painting and gouache.",
    longDescription: "Curated specially for student artists, fine art enthusiasts, and professional painters. Excellent water absorption, beautiful textured surface, and acid-free archival longevity.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    features: [
      "300 GSM Heavyweight cold-pressed paper",
      "100% Cotton rag formulation",
      "Glued block edge preventing paper buckling",
      "Suitable for watercolors, ink, gouache & acrylic washes"
    ],
    variants: ["A4 Size (12 sheets)", "A3 Size (12 sheets)", "A5 Travel Pad"],
    inStock: true,
    featured: true,
  },
  {
    id: "smooth-gel-writing-pens-pack",
    name: "Ergonomic Quick-Dry Gel Pen Set (0.5mm & 0.7mm)",
    category: "Writing Essentials",
    categoryId: "writing-essentials",
    description: "Ultra-smooth Japanese gel ink pens with comfortable cushioned grip for fatigue-free exam writing.",
    longDescription: "Favorite among board exam students and daily office users. Delivers consistent dark lines without smudging, skipping, or leaking.",
    image: "https://images.unsplash.com/photo-1585336261026-8f5786372969?auto=format&fit=crop&q=80&w=800",
    features: [
      "0.5mm precision tip & 0.7mm medium point available",
      "Water-resistant Japanese ink technology",
      "Soft rubber grip for long writing sessions",
      "Available in Blue, Black, Red & Green inks"
    ],
    variants: ["Pack of 5 (Blue)", "Pack of 10 Assorted", "Refill Pack (10 Refills)"],
    inStock: true,
    featured: true,
  },
  {
    id: "heavy-duty-lever-arch-file-folder",
    name: "Heavy-Duty Office Lever Arch File Folder",
    category: "Office Essentials",
    categoryId: "office-essentials",
    description: "Steel-reinforced polypropylene lever arch file with index spine label for office document archiving.",
    longDescription: "Keep your legal and office documents organized and protected. Built with heavy-duty metal rings, stainless steel edge protectors, and a clear spine label pouch.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
    features: [
      "Holds up to 500 A4 / Legal sheets",
      "Steel-backed mechanism with thumb ring for easy shelf pulling",
      "Waterproof poly-laminated cover",
      "Includes spine label card"
    ],
    variants: ["Single Unit", "Pack of 5 Files", "Box of 20"],
    inStock: true,
    featured: true,
  },
  {
    id: "artist-soft-pastel-set-36-colors",
    name: "Soft Chalk Pastel Set (36 Vibrant Shades)",
    category: "Art & Craft Supplies",
    categoryId: "art-craft",
    description: "Richly pigmented soft pastels with velvety blending texture for artwork, portraits, and sketches.",
    longDescription: "High-grade pigment density providing brilliant lightfast colors. Blends effortlessly using fingers, paper stumps, or brush.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800",
    features: [
      "36 Non-toxic vivid color sticks",
      "High pigment concentration & superior lightfastness",
      "Square stick shape for fine detail and wide strokes",
      "Sturdy protective foam padded box"
    ],
    variants: ["12 Color Starter Set", "24 Color Set", "36 Color Artist Set"],
    inStock: true,
    featured: false,
  },
  {
    id: "self-inking-custom-rubber-stamp",
    name: "Self-Inking Custom Office Rubber Stamp",
    category: "Office Essentials",
    categoryId: "office-essentials",
    description: "Crisp self-inking stamp mechanism for store logos, official seals, signature stamps, and invoices.",
    longDescription: "We provide high-precision laser-etched custom rubber stamps for businesses, schools, doctors, and offices in Dum Dum Cantonment. Quick turnaround and long-lasting re-inkable pads.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    features: [
      "Custom laser-engraved rubber die",
      "Built-in ink pad yields up to 5,000 clear impressions",
      "Available in Blue, Black, Red, and Violet ink",
      "Refill ink bottles available at Mitra Papers"
    ],
    variants: ["Rectangular (47x18mm)", "Round Seal (30mm)", "Heavy Duty Metal Frame Stamp"],
    inStock: true,
    featured: false,
  },
  {
    id: "glossy-photo-paper-260gsm",
    name: "High-Gloss Inkjet Photo Paper (260 GSM A4)",
    category: "Printing & Specialty Paper",
    categoryId: "printing-specialty",
    description: "Waterproof micro-porous glossy photo paper for studio-quality photo prints and vibrant graphics.",
    longDescription: "Achieve studio print quality at home or shop. Instant-dry resin coated formula guarantees vivid color reproduction and true-to-life tone depth.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800",
    features: [
      "260 GSM heavyweight photo stock",
      "Instant dry & smudge-proof resin-coated finish",
      "Compatible with Epson, Canon, and HP dye/pigment inks",
      "Pack of 20 high-gloss sheets"
    ],
    variants: ["4x6 Inch Pack (100 sheets)", "A4 Pack (20 sheets)"],
    inStock: true,
    featured: false,
  },
  {
    id: "mechanical-pencil-sketching-kit",
    name: "Drafting Mechanical Pencil Kit (0.5mm + Leads & Eraser)",
    category: "Writing Essentials",
    categoryId: "writing-essentials",
    description: "Precision metal drafting pencil with 2B graphite lead refills and dust-free eraser for technical drawing.",
    longDescription: "Preferred by architecture students, engineers, and sketch artists across Dum Dum. Features knurled metal grip and lead grade indicator.",
    image: "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?auto=format&fit=crop&q=80&w=800",
    features: [
      "All-metal brass clutch mechanism",
      "0.5mm HB & 2B hi-polymer lead refills included",
      "Built-in retractable lead guide pipe",
      "Non-abrasive dust-free block eraser"
    ],
    variants: ["Single Pen Set", "Architect Deluxe Pack"],
    inStock: true,
    featured: false,
  },
  {
    id: "student-geometry-box-metal-case",
    name: "Precision Student Geometry Box Set",
    category: "School Stationery",
    categoryId: "school-stationery",
    description: "Rust-resistant metal compass set with dividers, protractor, set squares, ruler, and mini pencil.",
    longDescription: "Complete math geometry toolkit in a sturdy tin case. Specially designed compass center-wheel mechanism prevents slipping during geometry exams.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    features: [
      "Self-centering die-cast zinc compass & divider",
      "Clear plastic protractor & set squares with bold millimeter markings",
      "Protective tin box casing",
      "Includes mini wood pencil & eraser"
    ],
    variants: ["Standard School Edition", "Pro Mechanical Compass Edition"],
    inStock: true,
    featured: false,
  },
  {
    id: "dark-carbon-paper-blue-black",
    name: "High-Transfer Duplicate Carbon Paper (100 Sheets)",
    category: "Paper Products",
    categoryId: "paper-products",
    description: "Smudge-resistant wax carbon paper for duplicate bill books, legal typing, and hand-written receipts.",
    longDescription: "Long-lasting duplicate carbon paper sheets that yield dark, clear transfer copies on registers and bill books without staining hands.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    features: [
      "100 sheets per box",
      "High pigment transfer coating suitable for up to 50 uses per sheet",
      "Available in Dark Blue and Jet Black",
      "Foolscap and A4 sizes available"
    ],
    variants: ["Blue Carbon (A4)", "Black Carbon (Foolscap)"],
    inStock: true,
    featured: false,
  }
];
