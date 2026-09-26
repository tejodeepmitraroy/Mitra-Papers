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

            {/* Social Media Links */}
            <div className="pt-4 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400 block">
                Connect With Us
              </span>
              <div className="flex items-center flex-wrap gap-2">
                <a
                  href={STORE_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-olive-900 border border-olive-700 text-sage-200 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all shadow-sm hover:scale-105"
                  title="Follow on Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href={STORE_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-olive-900 border border-olive-700 text-sage-200 flex items-center justify-center hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white transition-all shadow-sm hover:scale-105"
                  title="Follow on Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a
                  href={STORE_INFO.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-olive-900 border border-olive-700 text-sage-200 flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white transition-all shadow-sm hover:scale-105"
                  title="Subscribe on YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                <a
                  href={STORE_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-olive-900 border border-olive-700 text-sage-200 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all shadow-sm hover:scale-105"
                  title="Connect on LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                <a
                  href={STORE_INFO.socialLinks.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linktree"
                  className="w-9 h-9 rounded-full bg-olive-900 border border-olive-700 text-sage-200 flex items-center justify-center hover:bg-[#43E660] hover:border-[#43E660] hover:text-black transition-all shadow-sm hover:scale-105"
                  title="Visit Linktree Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M13.511 5.853l3.962-3.962 2.333 2.333-3.962 3.962 5.093 1.364-1.242 3.106-5.093-1.364 1.364 5.093-3.106 1.242-1.364-5.093-1.364 5.093-3.106-1.242 1.364-5.093-5.093 1.364-1.242-3.106 5.093-1.364-3.962-3.962 2.333-2.333 3.962 3.962v-5.853h3.429v5.853zm-3.429 11.233h3.429v6.914h-3.429v-6.914z"/>
                  </svg>
                </a>
              </div>
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
