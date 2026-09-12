"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageSquare, Check, Tag } from "lucide-react";
import { Product } from "@/data/products";
import EnquiryModal from "./EnquiryModal";
import { getSanityImageUrl } from "@/sanity/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageUrl = getSanityImageUrl(product.image, { width: 800, height: 600, quality: 85 });

  return (
    <>
      <div className="bg-white rounded-2xl border border-sage-200 shadow-subtle overflow-hidden flex flex-col transition-card group">
        {/* Studio Padded Image Container */}
        <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-white via-ivory-50 to-sage-50/50 p-4 border-b border-sage-100/80 overflow-hidden flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="absolute top-3 left-3 bg-olive-900/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 z-10">
            <Tag className="w-3 h-3 text-gold-400" />
            <span>{product.category}</span>
          </div>

          {product.inStock && (
            <div className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-300 z-10">
              <Check className="w-3 h-3 text-emerald-600" />
              <span>Available in Store</span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-5 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-base font-bold text-olive-900 font-serif line-clamp-1 group-hover:text-olive-700 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-charcoal-800 mt-2 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Pricing indicator & Actions */}
          <div className="mt-5 pt-4 border-t border-sage-100 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-sage-600 font-medium">Pricing</span>
              <span className="text-xs font-bold text-olive-800 bg-sage-100 px-2.5 py-1 rounded-md">
                Contact Store for Price
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link
                href={`/products/${product.id}`}
                className="py-2.5 px-3 text-xs font-semibold text-olive-800 bg-sage-50 hover:bg-sage-100 border border-sage-200 rounded-xl transition-colors text-center flex items-center justify-center gap-1"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="py-2.5 px-3 text-xs font-semibold text-white bg-olive-800 hover:bg-olive-900 rounded-xl shadow-subtle transition-colors text-center flex items-center justify-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
