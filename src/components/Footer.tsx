import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { STORE_INFO } from "@/data/storeInfo";
import { CATEGORIES } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="bg-olive-950 text-white pt-16 pb-8 border-t-4 border-gold-500 relative overflow-hidden">
      {/* Background paper texture effect */}
      <div className="absolute inset-0 bg-notebook-grid opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-olive-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-md shadow-sm">
                <Image
                  src="/logo.jpg"
                  alt="Mitra Papers Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            
            <p className="text-sm text-sage-200 leading-relaxed max-w-md">
              A trusted 30+ year old stationery brand transformed for the modern creator. Providing authentic stationery, paper reams, watercolors, and office supplies to students, artists, and offices across Gora Bazar, Dum Dum.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-gold-400">
              <ShieldCheck className="w-4 h-4 text-gold-500" />
              <span className="font-semibold uppercase tracking-wider">30+ Years of "Stationery With Trust"</span>
            </div>

            <div className="pt-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-olive-800 hover:bg-olive-700 text-xs font-semibold text-white border border-olive-700 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>Get Google Maps Directions</span>
                <ArrowRight className="w-3 h-3 text-sage-300" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-sage-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Products Catalogue</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>About Us (Our Story)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Blog & Stationery Guides</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Contact Store</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-sage-200">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="hover:text-white transition-colors truncate block"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Store Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">
              Visit Our Store
            </h3>
            <div className="space-y-3 text-xs text-sage-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Mitra Papers</strong>
                  <br />
                  {STORE_INFO.address.fullAddress}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{STORE_INFO.contactPlaceholder.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{STORE_INFO.contactPlaceholder.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>{STORE_INFO.contactPlaceholder.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-sage-400 gap-4">
          <p>© {new Date().getFullYear()} Mitra Papers. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-sage-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-sage-200 transition-colors">
              Terms & Conditions
            </Link>
          </div>
          <p className="flex items-center gap-1 text-sage-300">
            <span>Stationery With Trust</span>
            <Heart className="w-3 h-3 text-gold-500 fill-gold-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
