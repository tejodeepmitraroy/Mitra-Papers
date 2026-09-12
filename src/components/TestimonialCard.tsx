import React from "react";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  role: string;
  name?: string;
  rating?: number;
  isPlaceholder?: boolean;
}

export default function TestimonialCard({
  quote,
  role,
  name,
  rating = 5,
  isPlaceholder = false,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-sage-200 shadow-subtle flex flex-col justify-between relative">
      <div className="absolute top-4 right-4 text-sage-200">
        <Quote className="w-8 h-8" />
      </div>

      <div>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
          ))}
        </div>

        <p className="text-xs sm:text-sm text-charcoal-800 italic leading-relaxed">
          "{quote}"
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-sage-100 flex items-center justify-between">
        <div>
          <span className="block text-xs font-bold text-olive-900">
            {name || (isPlaceholder ? "[Verified Customer Review Placeholder]" : "Store Customer")}
          </span>
          <span className="text-[11px] text-sage-600">{role}</span>
        </div>
        {isPlaceholder && (
          <span className="text-[10px] uppercase tracking-wider font-semibold text-gold-600 bg-ivory-100 px-2 py-0.5 rounded border border-sage-200">
            Placeholder
          </span>
        )}
      </div>
    </div>
  );
}
