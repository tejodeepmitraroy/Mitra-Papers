import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  BookOpen,
  Heart,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import { STORE_INFO } from "@/data/storeInfo";
import { CATEGORIES as STATIC_CATEGORIES, Category } from "@/data/categories";
import { PRODUCTS as STATIC_PRODUCTS, Product } from "@/data/products";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  fetchSanityHomePage,
  fetchSanityCategories,
  fetchSanityProducts,
  fetchSanityTestimonials,
} from "@/sanity/queries";
import { getSanityImageUrl } from "@/sanity/image";

export const revalidate = 10; // Revalidate every 10 seconds for fast CMS updates

export default async function HomePage() {
  // Fetch data from Sanity CMS
  const sanityHomePage = await fetchSanityHomePage();
  const sanityCategories = await fetchSanityCategories();
  const sanityProducts = await fetchSanityProducts();
  const sanityTestimonials = await fetchSanityTestimonials();

  // 1. Hero Content & Fallbacks
  const heroTrustBadge = sanityHomePage?.heroTrustBadge || '30+ Years of "Stationery With Trust"';
  const heroHeadline = sanityHomePage?.heroHeadline || "Everything You Need,";
  const heroHeadlineHighlight = sanityHomePage?.heroHeadlineHighlight || "All in One Place.";
  const heroSupportingCopy =
    sanityHomePage?.heroSupportingCopy ||
    "Quality stationery for students, artists, professionals, and everyday creators — backed by 30+ years of trust in Gora Bazar, Dum Dum Cantonment.";
  const heroPrimaryCtaText = sanityHomePage?.heroPrimaryCtaText || "Explore Products";
  const heroPrimaryCtaLink = sanityHomePage?.heroPrimaryCtaLink || "/products";
  const heroSecondaryCtaText = sanityHomePage?.heroSecondaryCtaText || "Visit Our Store";
  const heroSecondaryCtaLink = sanityHomePage?.heroSecondaryCtaLink || "/contact";
  const heroShowcaseRaw =
    sanityHomePage?.heroShowcaseImage ||
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000";
  const heroShowcaseImage = getSanityImageUrl(heroShowcaseRaw, { width: 1200, height: 900, quality: 90 });
  const heroShowcaseTitle = sanityHomePage?.heroShowcaseTitle || "Notebooks, Pens & Papers";
  const heroShowcaseSubtitle = sanityHomePage?.heroShowcaseSubtitle || "Everything for school, office & fine art";
  const heroStats = sanityHomePage?.heroStats?.length
    ? sanityHomePage.heroStats
    : [
        { value: "30+", label: "Years Legacy" },
        { value: "100%", label: "Authentic Products" },
        { value: "Local", label: "Gora Bazar Store" },
      ];

  // 2. Heritage Content & Fallbacks
  const heritageBadge = sanityHomePage?.heritageBadge || "Heritage & Customer Care";
  const heritageTitle =
    sanityHomePage?.heritageTitle || "Built on 30+ Years of Experience & Genuine Customer Relationships";
  const heritageDescription =
    sanityHomePage?.heritageDescription ||
    "For over three decades, Mitra Papers has been a staple in Dum Dum Cantonment. We have grown alongside local schools, offices, student generations, and artists by offering reliable product guidance, genuine paper weights, and personal customer service.";
  const heritageCards = sanityHomePage?.heritageCards?.length
    ? sanityHomePage.heritageCards
    : [
        {
          icon: "30+",
          title: "30+ Years Experience",
          description: "Deep product knowledge across paper GSMs, binding types, and art mediums.",
        },
        {
          icon: "BookOpen",
          title: "Wide Range of Stationery",
          description: "From everyday gel pens and copier paper to specialized watercolor pads and rubber stamps.",
        },
        {
          icon: "Heart",
          title: "Trusted by Local Customers",
          description: "Generations of Dum Dum students, parents, and local business owners rely on us.",
        },
        {
          icon: "CheckCircle2",
          title: "Customer-Focused Service",
          description: "Honest recommendations, quick custom order fulfilment, and store assistance.",
        },
      ];

  // 3. Why Choose Us Content & Fallbacks
  const whyChooseUsBadge = sanityHomePage?.whyChooseUsBadge || "Why Generations Choose Us";
  const whyChooseUsTitle =
    sanityHomePage?.whyChooseUsTitle || "Why Customers in Gora Bazar & Dum Dum Trust Mitra Papers";
  const whyChooseUsDescription =
    sanityHomePage?.whyChooseUsDescription ||
    "We aren't just a shop counter — we are your local stationery experts. Whether you need standard 75 GSM paper for school printing or specialized 300 GSM watercolor sheets, we help you pick the right item every time.";
  const whyChooseUsPoints = sanityHomePage?.whyChooseUsPoints?.length
    ? sanityHomePage.whyChooseUsPoints
    : [
        "30+ years of continuous service in Gora Bazar area",
        "Deep understanding of paper GSM, fountain pen inks, and art mediums",
        "Wide product selection spanning school, office, paper, and art",
        "100% genuine products directly sourced from reputable manufacturers",
        "Personalized, attentive customer service for every student and professional",
        "Convenient local shopping experience with store pickup and enquiry support",
      ];
  const whyChooseUsStatCards = sanityHomePage?.whyChooseUsStatCards?.length
    ? sanityHomePage.whyChooseUsStatCards
    : [
        { value: "30+", title: "Years Legacy", subtitle: "Serving Gora Bazar since decades" },
        { value: "6+", title: "Categories", subtitle: "Writing, Paper, Art, School, Office & Stamps" },
        { value: "100%", title: "Authentic", subtitle: "Guaranteed quality paper & supplies" },
        { value: "Local", title: "Community", subtitle: "Trusted by students & offices" },
      ];

  // 4. Testimonials Content & Fallbacks
  const testimonialsBadge = sanityHomePage?.testimonialsBadge || "Customer Experience";
  const testimonialsTitle = sanityHomePage?.testimonialsTitle || "Trusted by Students, Artists & Local Offices";
  const testimonialsDescription =
    sanityHomePage?.testimonialsDescription ||
    "What local customers appreciate most about shopping at Mitra Papers in Gora Bazar.";

  // 5. Store Banner Content & Fallbacks
  const storeCtaBadge = sanityHomePage?.storeCtaBadge || "Local Store Location";
  const storeCtaTitle = sanityHomePage?.storeCtaTitle || "Looking for stationery nearby?";
  const storeCtaDescription =
    sanityHomePage?.storeCtaDescription ||
    "Visit Mitra Papers at Gora Bazar, Dum Dum Cantonment area, West Bengal and find all the quality stationery products you need.";
  const storeCtaButtonText = sanityHomePage?.storeCtaButtonText || "Get Google Directions";

  // 6. Categories Data (Merge Sanity & Fallback)
  const categoriesList: Category[] =
    sanityCategories && sanityCategories.length > 0
      ? sanityCategories.map((cat: any) => ({
          id: cat.id || cat.slug || "category",
          name: cat.name,
          slug: cat.slug || cat.id,
          description: cat.description || "Quality stationery items.",
          itemCount: cat.itemCount || "Stationery Items",
          iconName: cat.iconName || "FileText",
          bgGradient: cat.bgGradient || "from-sage-50 to-ivory-100",
        }))
      : STATIC_CATEGORIES;

  // 7. Products Data (Sanity Featured Products first, then Static)
  const mappedSanityProducts: Product[] = (sanityProducts || []).map((item: any) => ({
    id: item.slug || item.id || item._id,
    name: item.name,
    category: item.category || "General Stationery",
    categoryId: (item.category || "general").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    description: item.shortDescription || item.longDescription || "Quality stationery item available at Mitra Papers.",
    longDescription: item.longDescription || item.shortDescription || "Quality stationery item available at Mitra Papers in Gora Bazar, Dum Dum.",
    image: item.image || "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800",
    features: item.features || ["High quality authentic stationery"],
    variants: item.variants || [],
    inStock: true,
    featured: item.featured ?? true,
  }));

  const allProducts = mappedSanityProducts.length > 0 ? mappedSanityProducts : STATIC_PRODUCTS;
  const featuredProducts = allProducts.filter((p) => p.featured).slice(0, 6);

  // Helper for rendering icons in Heritage Cards
  const renderHeritageIcon = (iconStr: string) => {
    if (iconStr === "30+") {
      return (
        <div className="w-10 h-10 rounded-xl bg-sage-100 text-olive-800 flex items-center justify-center font-bold font-serif text-lg">
          30+
        </div>
      );
    }
    if (iconStr === "BookOpen") {
      return (
        <div className="w-10 h-10 rounded-xl bg-sage-100 text-olive-800 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-olive-800" />
        </div>
      );
    }
    if (iconStr === "Heart") {
      return (
        <div className="w-10 h-10 rounded-xl bg-sage-100 text-olive-800 flex items-center justify-center">
          <Heart className="w-5 h-5 text-olive-800" />
        </div>
      );
    }
    return (
      <div className="w-10 h-10 rounded-xl bg-sage-100 text-olive-800 flex items-center justify-center">
        <CheckCircle2 className="w-5 h-5 text-olive-800" />
      </div>
    );
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 md:pt-16 md:pb-20 bg-paper-texture">
        {/* Decorative Blur background */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sage-200/40 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100 border border-sage-200 text-olive-900 text-xs font-bold shadow-subtle">
                <ShieldCheck className="w-4 h-4 text-gold-500" />
                <span>{heroTrustBadge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-olive-950 tracking-tight leading-[1.15]">
                {heroHeadline} <br className="hidden sm:inline" />
                <span className="text-olive-700 italic">{heroHeadlineHighlight}</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-charcoal-800 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {heroSupportingCopy}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href={heroPrimaryCtaLink}
                  className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-olive-800 hover:bg-olive-900 rounded-full shadow-card hover:shadow-elevated transition-all flex items-center justify-center gap-2 group"
                >
                  <ShoppingBag className="w-4 h-4 text-gold-400" />
                  <span>{heroPrimaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 text-sage-300 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href={heroSecondaryCtaLink}
                  className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-olive-800 bg-white hover:bg-sage-50 border border-olive-800/30 rounded-full shadow-subtle transition-all flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-gold-500" />
                  <span>{heroSecondaryCtaText}</span>
                </Link>
              </div>

              {/* Local Highlights / Stats */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-sage-200/80 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
                {heroStats.map((stat: any, idx: number) => (
                  <div key={idx}>
                    <span className="block text-2xl font-bold font-serif text-olive-900">{stat.value}</span>
                    <span className="text-xs text-sage-600 font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Card Image Showcase */}
                <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white bg-ivory-100 aspect-[4/3]">
                  <Image
                    src={heroShowcaseImage}
                    alt={heroShowcaseTitle}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-950/70 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 bg-olive-900/80 backdrop-blur-md px-2.5 py-1 rounded-full inline-block mb-1">
                      Curated Stationery
                    </span>
                    <h3 className="text-lg font-bold font-serif">{heroShowcaseTitle}</h3>
                    <p className="text-xs text-sage-200">{heroShowcaseSubtitle}</p>
                  </div>
                </div>

                {/* Floating Badge 1: Official Logo */}
                <div className="absolute -top-5 -left-5 bg-white p-2.5 rounded-2xl shadow-card border border-sage-200 hidden sm:flex items-center gap-2">
                  <Image
                    src="/logo.jpg"
                    alt="Mitra Papers Official Logo"
                    width={100}
                    height={35}
                    className="h-8 w-auto object-contain"
                  />
                </div>

                {/* Floating Badge 2: Local Store Location */}
                <div className="absolute -bottom-6 -right-5 bg-olive-900 text-white p-3.5 rounded-2xl shadow-card border border-olive-700 max-w-[200px] hidden sm:block">
                  <div className="flex items-center gap-1.5 text-gold-400 font-bold text-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Gora Bazar</span>
                  </div>
                  <p className="text-[11px] text-sage-200 mt-1 leading-snug">
                    Dum Dum Cantonment area, West Bengal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & LEGACY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage-200 shadow-card">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-ivory-100 px-3 py-1 rounded-full border border-sage-200">
              {heritageBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-olive-950">
              {heritageTitle}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
              {heritageDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {heritageCards.map((card: any, idx: number) => (
              <div key={idx} className="p-5 rounded-2xl bg-ivory-50 border border-sage-200/80 space-y-2">
                {renderHeritageIcon(card.icon)}
                <h3 className="text-sm font-bold text-olive-900">{card.title}</h3>
                <p className="text-xs text-charcoal-800 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-sage-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Browse Catalogue
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-olive-950">
              Stationery Categories
            </h2>
          </div>
          <Link
            href="/products"
            className="text-xs font-bold text-olive-800 hover:text-olive-900 flex items-center gap-1 group"
          >
            <span>View All Categories</span>
            <ChevronRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesList.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS CATALOGUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-sage-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Featured Items
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-olive-950">
              Popular Stationery Products
            </h2>
          </div>
          <Link
            href="/products"
            className="px-4 py-2 text-xs font-bold text-olive-800 bg-sage-100 hover:bg-sage-200 rounded-full transition-colors flex items-center gap-1"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE MITRA PAPERS */}
      <section className="bg-olive-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-olive-800 px-3 py-1 rounded-full border border-olive-700">
              {whyChooseUsBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif leading-tight">
              {whyChooseUsTitle}
            </h2>
            <p className="text-sm text-sage-200 leading-relaxed">
              {whyChooseUsDescription}
            </p>

            <ul className="space-y-3 pt-2">
              {whyChooseUsPoints.map((point: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-sage-100">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-olive-950 bg-gold-400 hover:bg-gold-500 rounded-full transition-colors shadow-card"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {whyChooseUsStatCards.slice(0, 4).map((stat: any, idx: number) => (
              <div
                key={idx}
                className={`bg-olive-800 p-6 rounded-2xl border border-olive-700 space-y-2 ${
                  idx % 2 === 1 ? "mt-4" : ""
                }`}
              >
                <span className="text-3xl font-bold font-serif text-gold-400">{stat.value}</span>
                <h3 className="text-xs font-bold uppercase text-white">{stat.title}</h3>
                <p className="text-[11px] text-sage-300">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS / TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            {testimonialsBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-olive-950">
            {testimonialsTitle}
          </h2>
          <p className="text-xs text-charcoal-800">
            {testimonialsDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sanityTestimonials && sanityTestimonials.length > 0 ? (
            sanityTestimonials.map((review: any) => (
              <TestimonialCard
                key={review._id}
                quote={review.quote}
                role={review.role}
                name={review.name}
                rating={review.rating}
                isPlaceholder={false}
              />
            ))
          ) : (
            <>
              <TestimonialCard
                quote="Mitra Papers is my go-to store in Gora Bazar for board exam notebooks and gel pens. They always give honest paper advice."
                role="School & Board Exam Student, Dum Dum"
                isPlaceholder={true}
              />
              <TestimonialCard
                quote="Finding genuine 300 GSM watercolor paper and soft pastels in Dum Dum Cantonment area was tough until I visited Mitra Papers."
                role="Fine Art Enthusiast, West Bengal"
                isPlaceholder={true}
              />
              <TestimonialCard
                quote="We order bulk A4 copier paper reams, lever arch files, and custom rubber stamps for our office. Fast delivery and reliable billing."
                role="Local Office Manager, Gora Bazar"
                isPlaceholder={true}
              />
            </>
          )}
        </div>
      </section>

      {/* LOCAL STORE CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sage-100 via-ivory-100 to-sage-50 rounded-3xl p-8 sm:p-12 border border-sage-200 shadow-card flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-white px-3 py-1 rounded-full border border-sage-200">
              {storeCtaBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-olive-950">
              {storeCtaTitle}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-800 max-w-xl">
              {storeCtaDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-white bg-olive-800 hover:bg-olive-900 rounded-full shadow-md transition-colors text-center flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>{storeCtaButtonText}</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-olive-800 bg-white hover:bg-sage-50 border border-olive-800/30 rounded-full transition-colors text-center"
            >
              Contact Store Info
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
