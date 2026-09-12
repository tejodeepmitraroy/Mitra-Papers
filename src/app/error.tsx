"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error boundary caught:", error);
  }, [error]);

  return (
    <div className="py-20 md:py-32 bg-paper-texture min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 bg-red-50 rounded-3xl border border-red-200 flex items-center justify-center mx-auto text-red-600 shadow-subtle">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Unexpected Error
          </span>
          <h1 className="text-3xl font-bold font-serif text-olive-950">
            Something Went Wrong
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
            We encountered an unexpected issue while rendering this page.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-olive-800 hover:bg-olive-900 rounded-full shadow-md transition-colors flex items-center justify-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-olive-800 bg-white border border-olive-800/30 rounded-full hover:bg-sage-50 transition-colors flex items-center justify-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5 text-gold-500" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
