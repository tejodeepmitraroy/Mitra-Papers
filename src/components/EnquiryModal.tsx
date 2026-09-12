"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, MessageSquare, Phone, Store } from "lucide-react";
import { Product } from "@/data/products";
import { STORE_INFO } from "@/data/storeInfo";

interface EnquiryModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ product, isOpen, onClose }: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
      setMessage("");
      onClose();
    }, 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Mitra Papers! I am interested in inquiring about "${product.name}" (Category: ${product.category}). Please let me know price & availability.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-olive-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-ivory-50 rounded-2xl shadow-2xl overflow-hidden z-10 border border-sage-200 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-olive-800 text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
              Product Enquiry
            </span>
            <h3 className="text-lg font-bold font-serif leading-tight">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-sage-200 hover:text-white hover:bg-olive-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 bg-sage-100 text-olive-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-olive-800" />
              </div>
              <h4 className="text-lg font-bold text-olive-800">
                Enquiry Sent Successfully!
              </h4>
              <p className="text-xs text-charcoal-800 max-w-sm mx-auto">
                Thank you for contacting <strong>Mitra Papers</strong>. Our store team in Gora Bazar will respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-sage-100/60 rounded-xl border border-sage-200 text-xs flex justify-between items-center">
                <div>
                  <span className="text-sage-600 block">Category</span>
                  <span className="font-semibold text-olive-900">{product.category}</span>
                </div>
                <div className="text-right">
                  <span className="text-sage-600 block">Price Info</span>
                  <span className="font-bold text-gold-600">Contact Store for Price</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-sage-300 rounded-xl focus:ring-2 focus:ring-olive-800 focus:border-transparent outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9477242453"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-sage-300 rounded-xl focus:ring-2 focus:ring-olive-800 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2 Reams / 10 Pens"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-sage-300 rounded-xl focus:ring-2 focus:ring-olive-800 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                  Enquiry Message / Special Specs
                </label>
                <textarea
                  rows={3}
                  placeholder="Ask about bulk pricing, brand options, or store availability..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-sage-300 rounded-xl focus:ring-2 focus:ring-olive-800 focus:border-transparent outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-3 bg-olive-800 hover:bg-olive-900 text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-gold-400" />
                  <span>Submit Enquiry</span>
                </button>

                <a
                  href={`https://wa.me/${STORE_INFO.contactPlaceholder.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${STORE_INFO.contactPlaceholder.phone.replace(/[^0-9+]/g, "")}`}
                  className="w-full py-2.5 px-3 bg-gold-600 hover:bg-gold-700 text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-white" />
                  <span>Call Store</span>
                </a>
              </div>

              <p className="text-[11px] text-center text-sage-600">
                You can also visit <strong>Mitra Papers</strong> in Gora Bazar, Dum Dum Cantonment directly.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
