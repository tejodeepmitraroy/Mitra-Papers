export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  itemCount: string;
  iconName: string;
  bgGradient: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "writing-essentials",
    name: "Writing Essentials",
    slug: "writing-essentials",
    description: "Ballpoint pens, gel pens, fountain pens, pencils, highlighters, markers & refills.",
    itemCount: "50+ Products",
    iconName: "PenTool",
    bgGradient: "from-olive-50 to-sage-100",
  },
  {
    id: "school-stationery",
    name: "School Stationery",
    slug: "school-stationery",
    description: "Notebooks, subject registers, erasers, sharpeners, pencil boxes, geometry boxes & exam kits.",
    itemCount: "80+ Products",
    iconName: "BookOpen",
    bgGradient: "from-sage-50 to-ivory-100",
  },
  {
    id: "paper-products",
    name: "Paper Products",
    slug: "paper-products",
    description: "A4 paper reams, executive bond paper, copier paper, photo paper, carbon paper & art sheets.",
    itemCount: "40+ Paper Types",
    iconName: "FileText",
    bgGradient: "from-ivory-100 to-sage-100",
  },
  {
    id: "art-craft",
    name: "Art & Craft Supplies",
    slug: "art-craft",
    description: "Watercolors, acrylic paints, sketchbooks, drawing papers, brushes, canvases & craft materials.",
    itemCount: "60+ Creative Items",
    iconName: "Palette",
    bgGradient: "from-sage-100 to-olive-50",
  },
  {
    id: "office-essentials",
    name: "Office Essentials",
    slug: "office-essentials",
    description: "Files, lever arch folders, document bags, rubber stamps, staplers, tape dispensers & desk organizers.",
    itemCount: "70+ Office Items",
    iconName: "Briefcase",
    bgGradient: "from-olive-50 to-ivory-100",
  },
  {
    id: "printing-specialty",
    name: "Printing & Specialty Paper",
    slug: "printing-specialty",
    description: "Glossy photo papers, heavy-gsm cardstock, tracing paper, graph paper & printing accessories.",
    itemCount: "30+ Specialty Items",
    iconName: "Printer",
    bgGradient: "from-ivory-50 to-sage-100",
  },
];
