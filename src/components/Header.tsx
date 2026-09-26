"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, Phone, ShoppingBag, ChevronRight } from "lucide-react";
import { STORE_INFO } from "@/data/storeInfo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-card py-2.5"
            : "bg-ivory-50/90 backdrop-blur-sm py-4 border-b border-sage-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-md border border-olive-800/10 p-0.5 bg-white shadow-sm transition-transform group-hover:scale-[1.02]">
              <Image
                src="/logo.jpg"
                alt="Mitra Papers - Stationery With Trust Logo"
                width={160}
                height={55}
                className="h-10 sm:h-12 w-auto object-contain"
                priority
              />
            </div>
            <div className="hidden xl:flex flex-col">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-gold-600">
                Gora Bazar • Dum Dum
              </span>
              <span className="text-xs font-serif italic text-olive-800">
                Stationery With Trust
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-olive-800 font-semibold"
                      : "text-charcoal-800 hover:text-olive-800"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-olive-800 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2.5">
            <a
              href={`tel:${STORE_INFO.contactPlaceholder.phone.replace(/[^0-9+]/g, "")}`}
              className="px-3.5 py-2 text-xs font-semibold text-white bg-gold-600 hover:bg-gold-700 rounded-full shadow-subtle transition-colors flex items-center gap-1.5"
              title="Call Store Now"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call Now</span>
            </a>
            <Link
              href="/products"
              className="px-3.5 py-2 text-xs font-semibold text-olive-800 hover:text-olive-900 border border-olive-800/20 hover:border-olive-800/40 rounded-full transition-colors flex items-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-gold-500" />
              <span>Enquire Products</span>
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-xs font-semibold text-white bg-olive-800 hover:bg-olive-900 rounded-full shadow-subtle hover:shadow-card transition-all flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Visit Our Store</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              href="/contact"
              className="p-2 text-xs font-semibold text-white bg-olive-800 rounded-full sm:hidden"
              aria-label="Visit Store"
            >
              <MapPin className="w-4 h-4 text-gold-400" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-olive-800 hover:bg-sage-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-olive-950/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-ivory-50 shadow-2xl p-6 flex flex-col justify-between z-50 overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-sage-200">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.jpg"
                    alt="Mitra Papers Logo"
                    width={140}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-olive-800 hover:bg-sage-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <nav className="mt-6 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                        isActive
                          ? "bg-olive-800 text-white font-semibold"
                          : "text-charcoal-800 hover:bg-sage-100 hover:text-olive-800"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? "text-gold-400" : "text-sage-400"}`} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile CTAs */}
            <div className="pt-6 border-t border-sage-200 space-y-2.5">
              <a
                href={`tel:${STORE_INFO.contactPlaceholder.phone.replace(/[^0-9+]/g, "")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold text-white bg-gold-600 hover:bg-gold-700 shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Store Now ({STORE_INFO.contactPlaceholder.phone})</span>
              </a>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold text-olive-800 bg-white border border-olive-800/30 shadow-subtle flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-gold-500" />
                <span>Explore Products</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold text-white bg-olive-800 hover:bg-olive-900 shadow-md flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Visit Our Store</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
