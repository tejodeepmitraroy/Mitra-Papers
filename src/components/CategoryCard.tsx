import React from "react";
import Link from "next/link";
import { Category } from "@/data/categories";
import { PenTool, BookOpen, FileText, Palette, Briefcase, Printer, ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

const iconMap: Record<string, React.ReactNode> = {
  PenTool: <PenTool className="w-6 h-6 text-olive-800" />,
  BookOpen: <BookOpen className="w-6 h-6 text-olive-800" />,
  FileText: <FileText className="w-6 h-6 text-olive-800" />,
  Palette: <Palette className="w-6 h-6 text-olive-800" />,
  Briefcase: <Briefcase className="w-6 h-6 text-olive-800" />,
  Printer: <Printer className="w-6 h-6 text-olive-800" />,
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${category.id}`}
      className="group bg-white rounded-2xl p-6 border border-sage-200 shadow-subtle hover:shadow-card transition-card flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-sage-100/80 flex items-center justify-center group-hover:scale-110 transition-transform">
            {iconMap[category.iconName] || <FileText className="w-6 h-6 text-olive-800" />}
          </div>
          <span className="text-[11px] font-bold text-gold-600 bg-sage-50 px-2.5 py-1 rounded-full border border-sage-200">
            {category.itemCount}
          </span>
        </div>

        <h3 className="text-lg font-bold text-olive-950 font-serif mt-5 group-hover:text-olive-700 transition-colors">
          {category.name}
        </h3>
        <p className="text-xs text-charcoal-800 mt-2 leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-sage-100 flex items-center justify-between text-xs font-semibold text-olive-800 group-hover:text-olive-900">
        <span>Explore Category</span>
        <ArrowRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
