"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  MapPin,
  Copy,
  Check,
} from "lucide-react";
import { BLOG_POSTS as STATIC_BLOG_POSTS, BlogPost } from "@/data/blogs";
import { fetchSanityBlogs } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";

export default function BlogArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [copied, setCopied] = useState(false);
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      setLoading(true);
      try {
        const sanityBlogs = await fetchSanityBlogs();
        const foundSanity = sanityBlogs.find((b: any) => b.slug === slug || b._id === slug);
        if (foundSanity) {
          setPost({
            slug: foundSanity.slug || foundSanity._id,
            title: foundSanity.title,
            excerpt: foundSanity.excerpt,
            body: foundSanity.body,
            content: foundSanity.excerpt,
            image: foundSanity.coverImage || "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000",
            category: foundSanity.category || "Paper Guide",
            date: foundSanity.publishedAt
              ? new Date(foundSanity.publishedAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "Recent",
            readTime: foundSanity.readTime || "4 min read",
            author: foundSanity.author || "Mitra Papers Team",
            tags: [foundSanity.category || "Stationery"],
          });
          setLoading(false);
          return;
        }
      } catch (err) {
        console.error("Error loading post from Sanity:", err);
      }

      // Fallback to static post
      const staticPost = STATIC_BLOG_POSTS.find((p) => p.slug === slug);
      setPost(staticPost || null);
      setLoading(false);
    }

    if (slug) {
      loadPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="py-20 text-center space-y-4">
        <p className="text-sm font-semibold text-olive-800 animate-pulse">Loading article from Sanity CMS...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold font-serif text-olive-950">Article Not Found</h2>
        <p className="text-xs text-charcoal-800">The blog article you are looking for does not exist.</p>
        <Link href="/blog" className="inline-block px-4 py-2 text-xs font-semibold text-white bg-olive-800 rounded-full">
          Back to Blog
        </Link>
      </div>
    );
  }

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-10 md:py-16 bg-paper-texture min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-olive-800 hover:text-olive-900 bg-white px-3.5 py-1.5 rounded-full border border-sage-200 shadow-subtle"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Container */}
        <article className="bg-white rounded-3xl p-6 sm:p-12 border border-sage-200 shadow-card space-y-8">
          
          {/* Header Metadata */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-sage-100 px-3 py-1 rounded-full border border-sage-200">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-olive-950 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-sage-600 border-b border-sage-200 pb-4">
              <span className="flex items-center gap-1 font-semibold text-olive-800">
                <User className="w-4 h-4 text-gold-500" />
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-gold-500" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-gold-500" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-ivory-100 border border-sage-200 shadow-subtle">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Body Content (Renders PortableText or Text) */}
          <div className="prose prose-olive max-w-none text-charcoal-800 text-sm sm:text-base leading-relaxed space-y-4">
            {Array.isArray(post.body) ? (
              <PortableText value={post.body} />
            ) : (
              <div className="whitespace-pre-line">{post.content || post.excerpt}</div>
            )}
          </div>

          {/* Article Share Bar */}
          <div className="pt-6 border-t border-sage-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-olive-900">Share this guide:</span>
              <button
                onClick={handleCopyLink}
                className="p-2 bg-sage-100 hover:bg-sage-200 rounded-full text-olive-800 transition-colors flex items-center gap-1 text-xs px-3 font-semibold"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy Link"}</span>
              </button>
            </div>

            <div className="flex items-center gap-1 text-xs text-sage-600">
              <span>Tags:</span>
              {(post.tags || ["Stationery"]).map((tag: string) => (
                <span key={tag} className="bg-ivory-100 px-2 py-0.5 rounded text-[11px] font-medium border border-sage-200">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article CTA Banner */}
          <div className="p-6 rounded-2xl bg-olive-900 text-white space-y-3">
            <h3 className="text-lg font-bold font-serif text-gold-400">
              Need Help Selecting Stationery or Paper Weights?
            </h3>
            <p className="text-xs text-sage-200">
              Visit <strong>Mitra Papers</strong> in Gora Bazar, Dum Dum Cantonment. Our store team has over 30 years of paper experience to help you choose the right product.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/products"
                className="w-full sm:w-auto px-5 py-2.5 bg-gold-400 hover:bg-gold-500 text-olive-950 font-bold text-xs rounded-full text-center"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-5 py-2.5 bg-olive-800 hover:bg-olive-700 text-white font-bold text-xs rounded-full border border-olive-700 text-center flex items-center justify-center gap-1"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>Visit Store</span>
              </Link>
            </div>
          </div>

        </article>

      </div>
    </div>
  );
}
