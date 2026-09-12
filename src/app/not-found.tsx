import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FileQuestion, ArrowLeft, Home, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-20 md:py-32 bg-paper-texture min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        
        <div className="w-20 h-20 bg-sage-100 rounded-3xl border border-sage-200 flex items-center justify-center mx-auto text-olive-800 shadow-subtle">
          <FileQuestion className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">404 Error</span>
          <h1 className="text-3xl font-bold font-serif text-olive-950">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
            Looks like this page sheet has been misplaced! The link you clicked might be broken or the product URL has moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-olive-800 hover:bg-olive-900 rounded-full shadow-md transition-colors flex items-center justify-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-olive-800 bg-white border border-olive-800/30 rounded-full hover:bg-sage-50 transition-colors flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-gold-500" />
            <span>Explore Products</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
