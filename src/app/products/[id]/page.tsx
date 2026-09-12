"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  MessageSquare,
  MapPin,
  Tag,
  ShieldCheck,
  Package,
  Phone,
} from "lucide-react";
import { PRODUCTS as STATIC_PRODUCTS, Product } from "@/data/products";
import { STORE_INFO } from "@/data/storeInfo";
import ProductCard from "@/components/ProductCard";
import EnquiryModal from "@/components/EnquiryModal";
import { fetchSanityProducts } from "@/sanity/queries";
import { getSanityImageUrl } from "@/sanity/image";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      try {
        const sanityItems = await fetchSanityProducts();
        const found = sanityItems.find((item: any) => item.slug === id || item._id === id || item.id === id);
        if (found) {
          setProduct({
            id: found.slug || found.id || found._id,
            name: found.name,
            category: found.category || "General Stationery",
            categoryId: (found.category || "General Stationery").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            description: found.shortDescription || found.longDescription || "Quality product available at Mitra Papers.",
            longDescription: found.longDescription || found.shortDescription || "Quality product available at Mitra Papers in Gora Bazar, Dum Dum.",
            image: found.image || "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800",
            features: found.features || ["High quality authentic stationery", "Available at store in Gora Bazar"],
            variants: found.variants || [],
            inStock: true,
            featured: true,
          });
          setLoading(false);
          return;
        }
      } catch (err) {
        console.error("Error loading product from Sanity:", err);
      }

      // Fallback to static products
      const staticProd = STATIC_PRODUCTS.find((p) => p.id === id);
      setProduct(staticProd || null);
      setLoading(false);
    }

    if (id) {
      loadProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="py-20 text-center space-y-4">
        <p className="text-sm font-semibold text-olive-800 animate-pulse">Loading product details from Sanity CMS...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold font-serif text-olive-950">Product Not Found</h2>
        <p className="text-xs text-charcoal-800">The product you are looking for does not exist in our catalogue.</p>
        <Link href="/products" className="inline-block px-4 py-2 text-xs font-semibold text-white bg-olive-800 rounded-full">
          Back to Catalogue
        </Link>
      </div>
    );
  }

  const relatedProducts = STATIC_PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="py-10 md:py-16 bg-paper-texture min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Back */}
        <div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-olive-800 hover:text-olive-900 bg-white px-3.5 py-1.5 rounded-full border border-sage-200 shadow-subtle"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Products Catalogue</span>
          </Link>
        </div>

        {/* Product Showcase Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sage-200 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Image Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-white via-ivory-50 to-sage-50/50 p-6 border border-sage-200 shadow-subtle flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={getSanityImageUrl(product.image, { width: 1200, height: 900, quality: 90 })}
                    alt={product.name}
                    fill
                    priority
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-olive-900/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 z-10">
                  <Tag className="w-3.5 h-3.5 text-gold-400" />
                  <span>{product.category}</span>
                </div>
              </div>

              {/* Store Guarantee Box */}
              <div className="p-4 rounded-xl bg-sage-50 border border-sage-200 text-xs flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-olive-800 shrink-0" />
                <div>
                  <span className="font-bold text-olive-900 block">30+ Years Trust Guarantee</span>
                  <span className="text-charcoal-800">
                    Inspected & available for direct store pickup at Gora Bazar, Dum Dum.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-600">
                  {product.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold font-serif text-olive-950 mt-1 leading-snug">
                  {product.name}
                </h1>
              </div>

              <div className="p-3.5 bg-ivory-100 rounded-xl border border-sage-200 flex items-center justify-between">
                <span className="text-xs text-sage-600 font-medium">Pricing</span>
                <span className="text-sm font-bold text-olive-900 bg-white px-3 py-1 rounded-lg border border-sage-200 shadow-subtle">
                  Contact Store for Price
                </span>
              </div>

              <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
                {product.longDescription}
              </p>

              {/* Key Features */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-olive-900 flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-gold-500" />
                  <span>Key Specifications</span>
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-charcoal-800">
                      <CheckCircle2 className="w-4 h-4 text-olive-800 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Variants if any */}
              {product.variants && product.variants.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-olive-900 block">Available Packaging / Variants:</span>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-sage-100 text-olive-900 rounded-full font-medium border border-sage-200"
                      >
                        {variant}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto flex-1 py-3.5 px-5 text-xs font-semibold text-white bg-olive-800 hover:bg-olive-900 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-gold-400" />
                  <span>Enquire About This Product</span>
                </button>

                <a
                  href={`tel:${STORE_INFO.contactPlaceholder.phone.replace(/[^0-9+]/g, "")}`}
                  className="w-full sm:w-auto py-3.5 px-5 text-xs font-semibold text-white bg-gold-600 hover:bg-gold-700 rounded-xl shadow-md transition-colors text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call Store Now</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto py-3.5 px-5 text-xs font-semibold text-olive-800 bg-sage-100 hover:bg-sage-200 border border-sage-300 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-gold-500" />
                  <span>Visit Our Store</span>
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-olive-950 border-b border-sage-200 pb-3">
              Related Products in {product.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}

      </div>

      <EnquiryModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
