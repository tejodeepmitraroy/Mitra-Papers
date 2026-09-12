"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, X } from "lucide-react";
import { STORE_INFO } from "@/data/storeInfo";

export default function FloatingCallButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Show buttons after a tiny delay for smooth animation
    const timer = setTimeout(() => setIsVisible(true), 500);
    // Auto-hide tooltip after 6 seconds
    const tooltipTimer = setTimeout(() => setShowTooltip(false), 6500);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const rawPhone = STORE_INFO.contactPlaceholder.phone.replace(/[^0-9+]/g, "");
  const whatsappMessage = encodeURIComponent(
    "Hello Mitra Papers! I am reaching out from your website to enquire about stationery products."
  );

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 group">
      
      {/* Optional helper tooltip badge */}
      {showTooltip && (
        <div className="relative bg-olive-900 text-white text-[11px] font-medium px-3 py-1.5 rounded-xl shadow-xl border border-olive-700 flex items-center gap-2 animate-bounce">
          <span>Need help? Call or Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-sage-300 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="absolute -bottom-1 right-5 w-2 h-2 bg-olive-900 rotate-45 border-r border-b border-olive-700" />
        </div>
      )}

      {/* Floating Buttons Stack */}
      <div className="flex flex-col items-end gap-2.5">
        
        {/* Floating Call Now Button */}
        <a
          href={`tel:${rawPhone}`}
          className="relative group/btn flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-olive-800 hover:bg-olive-900 text-white rounded-full shadow-2xl border-2 border-gold-400/80 transition-all hover:scale-110 active:scale-95"
          aria-label="Call Mitra Papers Store Now"
          title="Call Mitra Papers Store"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-olive-800 opacity-75 animate-ping pointer-events-none" />
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400 relative z-10" />

          {/* Hover label */}
          <span className="absolute right-14 bg-olive-950 text-white text-xs font-semibold px-2.5 py-1 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none border border-olive-700">
            Call Store Now ({STORE_INFO.contactPlaceholder.phone})
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${STORE_INFO.contactPlaceholder.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group/btn flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl border-2 border-white transition-all hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp with Mitra Papers"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />

          {/* Hover label */}
          <span className="absolute right-14 bg-emerald-950 text-white text-xs font-semibold px-2.5 py-1 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none border border-emerald-700">
            WhatsApp Enquiry
          </span>
        </a>

      </div>
    </div>
  );
}
