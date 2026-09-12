"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, User, Clock, ArrowRight, Tag, BookOpen, RefreshCw } from "lucide-react";
import { BLOG_POSTS as STATIC_BLOG_POSTS, BlogPost } from "@/data/blogs";
import { fetchSanityBlogs } from "@/sanity/queries";
import { getSanityImageUrl } from "@/sanity/image";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [allPosts, setAllPosts] = useState<BlogPost[]>(STATIC_BLOG_POSTS);
  const [isLoadingSanity, setIsLoadingSanity] = useState(true);

  const categories = ["Paper Guide", "Student Tips", "Art & Creativity", "Office Stationery", "Paper & Printing Guide", "Art & Calligraphy Tips", "Office & School Stationery"];

  const loadBlogs = async () => {
    setIsLoadingSanity(true);
    try {
      const sanityBlogs = await fetchSanityBlogs();
      if (sanityBlogs && sanityBlogs.length > 0) {
        const mappedSanityBlogs: BlogPost[] = sanityBlogs.map((item: any) => ({
          slug: item.slug || item._id,
          title: item.title,
          excerpt: item.excerpt || "Read stationery insights and buying guides from Mitra Papers.",
          content: item.body || item.excerpt,
          image: getSanityImageUrl(item.coverImage, { width: 1000, height: 562, quality: 85 }) || "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000",
          category: item.category || "Paper Guide",
          date: item.publishedAt
            ? new Date(item.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            : "Recent",
          readTime: item.readTime || "4 min read",
          author: item.author || "Mitra Papers Team",
          tags: [item.category || "Stationery"],
        }));

        setAllPosts([...mappedSanityBlogs, ...STATIC_BLOG_POSTS]);
      } else {
        setAllPosts(STATIC_BLOG_POSTS);
      }
    } catch (err) {
      console.error("Error loading blog posts:", err);
      setAllPosts(STATIC_BLOG_POSTS);
    } finally {
      setIsLoadingSanity(false);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || post.category.toLowerCase().includes(selectedCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, allPosts]);

  return (
    <div className="py-10 md:py-16 bg-paper-texture min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-sage-100 px-3 py-1 rounded-full border border-sage-200">
              Stationery Guides & Advice
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-olive-950">
              Mitra Papers Blog & Knowledge Hub
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-800 max-w-2xl">
              Practical buying guides, paper GSM breakdowns, art supply tips, and student exam checklists written by local stationery experts in Dum Dum.
            </p>
          </div>

          <button
            onClick={loadBlogs}
            disabled={isLoadingSanity}
            className="px-3.5 py-2 text-xs font-semibold text-olive-800 bg-white hover:bg-sage-100 border border-sage-300 rounded-full shadow-subtle flex items-center gap-1.5 transition-colors shrink-0"
            title="Refresh blog posts from Sanity CMS"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-gold-600 ${isLoadingSanity ? "animate-spin" : ""}`} />
            <span>{isLoadingSanity ? "Syncing Sanity..." : "Refresh Sanity Blogs"}</span>
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-sage-200 shadow-subtle space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-sage-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search blog articles (e.g. A4 vs Bond, Watercolors, Exam checklist)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-ivory-50 border border-sage-200 rounded-xl focus:ring-2 focus:ring-olive-800 outline-none"
              />
            </div>

            <div className="md:col-span-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-ivory-50 border border-sage-200 rounded-xl focus:ring-2 focus:ring-olive-800 outline-none cursor-pointer"
              >
                <option value="all">All Blog Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Blog Post Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl border border-sage-200 shadow-subtle overflow-hidden flex flex-col justify-between transition-card group"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-ivory-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-olive-900/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3 text-gold-400" />
                      <span>{post.category}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-[11px] text-sage-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold-500" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold-500" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold font-serif text-olive-950 group-hover:text-olive-700 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-sage-100 flex items-center justify-between">
                  <span className="text-xs text-sage-600 flex items-center gap-1 font-medium">
                    <User className="w-3.5 h-3.5 text-olive-800" />
                    {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-olive-800 hover:text-olive-900 flex items-center gap-1 group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-500 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-sage-200 space-y-4 max-w-md mx-auto">
            <BookOpen className="w-8 h-8 text-olive-800 mx-auto" />
            <h3 className="text-lg font-bold text-olive-900">No Articles Found</h3>
            <p className="text-xs text-charcoal-800">No blog posts matched your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-olive-800 rounded-full"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
