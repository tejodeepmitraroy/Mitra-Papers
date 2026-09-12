"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, ShoppingBag, X, RefreshCw } from "lucide-react";
import { PRODUCTS as STATIC_PRODUCTS, Product } from "@/data/products";
import { CATEGORIES as STATIC_CATEGORIES, Category } from "@/data/categories";
import ProductCard from "@/components/ProductCard";
import { fetchSanityProducts, fetchSanityCategories } from "@/sanity/queries";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get("category") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("default");
  const [allProducts, setAllProducts] = useState<Product[]>(STATIC_PRODUCTS);
  const [categories, setCategories] = useState<Category[]>(STATIC_CATEGORIES);
  const [isLoadingSanity, setIsLoadingSanity] = useState(true);

  // Helper to map category name to category ID
  const mapCategoryId = (catName: string, availableCats: Category[]) => {
    const found = availableCats.find(
      (c) => c.name.toLowerCase() === catName.toLowerCase() || c.id.toLowerCase() === catName.toLowerCase()
    );
    if (found) return found.id;
    return catName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  };

  const loadData = async () => {
    setIsLoadingSanity(true);
    try {
      // 1. Load dynamic categories from Sanity
      const sanityCats = await fetchSanityCategories();
      let activeCategories = STATIC_CATEGORIES;
      if (sanityCats && sanityCats.length > 0) {
        const mappedCats: Category[] = sanityCats.map((c: any) => ({
          id: c.id || c.slug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          name: c.name,
          slug: c.slug || c.id,
          description: c.description || "Quality stationery category.",
          itemCount: c.itemCount || "Stationery Items",
          iconName: c.iconName || "FileText",
          bgGradient: c.bgGradient || "from-sage-50 to-ivory-100",
        }));

        // Merge Sanity categories with static categories (avoid duplicates by id/slug)
        const combinedCats = [...mappedCats];
        STATIC_CATEGORIES.forEach((sc) => {
          if (!combinedCats.some((cc) => cc.id.toLowerCase() === sc.id.toLowerCase())) {
            combinedCats.push(sc);
          }
        });
        activeCategories = combinedCats;
        setCategories(activeCategories);
      } else {
        setCategories(STATIC_CATEGORIES);
      }

      // 2. Load dynamic products from Sanity
      const sanityItems = await fetchSanityProducts();
      if (sanityItems && sanityItems.length > 0) {
        const mappedSanityProducts: Product[] = sanityItems.map((item: any) => ({
          id: item.slug || item.id || item._id,
          name: item.name,
          category: item.category || "General Stationery",
          categoryId: item.categoryId || mapCategoryId(item.category || "General Stationery", activeCategories),
          description: item.shortDescription || item.longDescription || "Quality stationery item available at Mitra Papers.",
          longDescription: item.longDescription || item.shortDescription || "Quality stationery item available at Mitra Papers in Gora Bazar, Dum Dum.",
          image: item.image || "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800",
          features: item.features || ["High quality authentic stationery", "Available at store in Gora Bazar"],
          variants: item.variants || [],
          inStock: true,
          featured: item.featured ?? true,
        }));

        // Combine Sanity products (placed first) with static products
        const combinedProducts = [...mappedSanityProducts, ...STATIC_PRODUCTS];
        setAllProducts(combinedProducts);
      } else {
        setAllProducts(STATIC_PRODUCTS);
      }
    } catch (err) {
      console.error("Error loading catalogue from Sanity:", err);
      setAllProducts(STATIC_PRODUCTS);
      setCategories(STATIC_CATEGORIES);
    } finally {
      setIsLoadingSanity(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const cat = searchParams?.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
          selectedCategory === "all" ||
          product.categoryId.toLowerCase() === selectedCategory.toLowerCase() ||
          product.category.toLowerCase().includes(selectedCategory.toLowerCase());

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "name-asc") return a.name.localeCompare(b.name);
        if (sortBy === "name-desc") return b.name.localeCompare(a.name);
        return 0;
      });
  }, [searchQuery, selectedCategory, sortBy, allProducts]);

  return (
    <div className="py-10 md:py-16 bg-paper-texture min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-sage-100 px-3 py-1 rounded-full border border-sage-200">
              Stationery Catalogue
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-olive-950">
              All Products & Paper Supplies
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-800 max-w-2xl">
              Explore quality writing instruments, A4 copier paper reams, executive bond paper, school registers, watercolors, and office files available at <strong>Mitra Papers</strong> in Gora Bazar.
            </p>
          </div>

          <button
            onClick={loadData}
            disabled={isLoadingSanity}
            className="px-3.5 py-2 text-xs font-semibold text-olive-800 bg-white hover:bg-sage-100 border border-sage-300 rounded-full shadow-subtle flex items-center gap-1.5 transition-colors shrink-0"
            title="Refresh catalogue from Sanity CMS"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-gold-600 ${isLoadingSanity ? "animate-spin" : ""}`} />
            <span>{isLoadingSanity ? "Syncing Sanity..." : "Refresh Sanity Data"}</span>
          </button>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-sage-200 shadow-subtle space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-sage-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search pens, A4 paper, notebooks, watercolors, files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 text-sm bg-ivory-50 border border-sage-200 rounded-xl focus:ring-2 focus:ring-olive-800 outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sage-400 hover:text-olive-800"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-ivory-50 border border-sage-200 rounded-xl focus:ring-2 focus:ring-olive-800 outline-none cursor-pointer"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sorting Dropdown */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-ivory-50 border border-sage-200 rounded-xl focus:ring-2 focus:ring-olive-800 outline-none cursor-pointer"
              >
                <option value="default">Sort by Relevance</option>
                <option value="name-asc">Name (A to Z)</option>
                <option value="name-desc">Name (Z to A)</option>
              </select>
            </div>

          </div>

          {/* Quick Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === "all"
                  ? "bg-olive-800 text-white shadow-sm"
                  : "bg-sage-100/70 text-olive-900 hover:bg-sage-200"
              }`}
            >
              All Items ({allProducts.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory.toLowerCase() === cat.id.toLowerCase()
                    ? "bg-olive-800 text-white shadow-sm"
                    : "bg-sage-100/70 text-olive-900 hover:bg-sage-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-sage-200 space-y-4 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-sage-100 text-olive-800 flex items-center justify-center mx-auto">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-olive-900">No Matching Products Found</h3>
            <p className="text-xs text-charcoal-800">
              Try adjusting your search terms or clearing your category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-olive-800 hover:bg-olive-900 rounded-full"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm font-semibold text-olive-800">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
