import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react";
import { fetchSanityAboutPage } from "@/sanity/queries";

export const revalidate = 10; // Revalidate every 10 seconds for fast CMS updates

export const metadata = {
  title: "About Us - 30+ Years of Stationery With Trust | Mitra Papers",
  description:
    "Learn about Mitra Papers' 30+ year legacy in Gora Bazar, Dum Dum Cantonment. Founded on quality paper supplies, genuine customer service, and community trust.",
};

export default async function AboutPage() {
  const sanityAboutPage = await fetchSanityAboutPage();

  // 1. Hero Content & Fallbacks
  const heroBadge = sanityAboutPage?.heroBadge || "Our Brand Heritage";
  const heroTitle = sanityAboutPage?.heroTitle || '30+ Years of "Stationery With Trust."';
  const heroDescription =
    sanityAboutPage?.heroDescription ||
    "From humble beginnings in Gora Bazar, Dum Dum Cantonment area to becoming a beloved digital-ready stationery brand, Mitra Papers has spent over three decades serving local creators, students, and businesses.";
  const brandIdentityTitle = sanityAboutPage?.brandIdentityTitle || "Official Brand Identity";
  const brandIdentitySubtitle = sanityAboutPage?.brandIdentitySubtitle || "Gora Bazar, Dum Dum Cantonment";

  // 2. Story Content & Fallbacks
  const storyBadge = sanityAboutPage?.storyBadge || "Our Journey";
  const storyTitle = sanityAboutPage?.storyTitle || "A Local Stationery Business Built on Customer Relationships";
  const storyParagraphs = sanityAboutPage?.storyParagraphs?.length
    ? sanityAboutPage.storyParagraphs
    : [
        "Mitra Papers began with a simple belief: every student preparing for exams, every artist working on a canvas, and every office managing daily operations deserves genuine paper products and dependable writing tools.",
        "Over 30+ years in the Gora Bazar community of Dum Dum Cantonment, West Bengal, we have earned customer loyalty not through glossy marketing, but through honest product guidance, precise paper weight selection, and personal service.",
        "As stationery needs evolved from manual bill books to high-speed A4 copier reams and specialty 300 GSM art papers, Mitra Papers has continuously adapted while holding fast to our core identity.",
      ];
  const philosophyTitle = sanityAboutPage?.philosophyTitle || "Our Brand Philosophy";
  const philosophyTagline = sanityAboutPage?.philosophyTagline || '"Stationery With Trust"';
  const philosophyQuote =
    sanityAboutPage?.philosophyQuote ||
    '"Trust is not declared in taglines — it is earned across 30 years of recommending the exact paper GSM a customer needs, testing pen inks before sale, and standing behind every product that leaves our Gora Bazar store."';

  // 3. Core Principles Content & Fallbacks
  const believeBadge = sanityAboutPage?.believeBadge || "Core Principles";
  const believeTitle = sanityAboutPage?.believeTitle || "What We Believe";
  const believeSubtitle = sanityAboutPage?.believeSubtitle || "The 5 guiding values behind every recommendation at Mitra Papers.";
  const believeCards = sanityAboutPage?.believeCards?.length
    ? sanityAboutPage.believeCards
    : [
        {
          number: 1,
          title: "Quality Matters",
          description:
            "Whether it's a ₹10 refill or a ₹1,000 watercolor pad, product quality directly affects your work and peace of mind.",
        },
        {
          number: 2,
          title: "Customers Come First",
          description:
            "We prioritize understanding your specific requirement over simply selling whatever item is on the shelf.",
        },
        {
          number: 3,
          title: "The Right Product Makes a Difference",
          description:
            "Using 75 GSM paper instead of 70 GSM prevents printer jams; using cold-pressed paper brings watercolors alive.",
        },
        {
          number: 4,
          title: "Experience Helps Us Understand Needs",
          description:
            "Decades of listening to students, teachers, and lawyers give us deep insights into local stationery demands.",
        },
        {
          number: 5,
          title: "Trust is Built Over Time",
          description:
            "Relationships with families spanning multiple generations are our proudest achievement as a Dum Dum stationery store.",
        },
      ];

  // 4. Who We Serve Content & Fallbacks
  const serveBadge = sanityAboutPage?.serveBadge || "Our Community";
  const serveTitle = sanityAboutPage?.serveTitle || "Who We Serve";
  const serveSubtitle =
    sanityAboutPage?.serveSubtitle ||
    "Providing tailored stationery solutions across diverse customer groups in Gora Bazar & Dum Dum Cantonment.";
  const serveCards = sanityAboutPage?.serveCards?.length
    ? sanityAboutPage.serveCards
    : [
        { title: "School Students", desc: "Registers, geometry kits, gel pens & exam supplies." },
        { title: "Fine Artists", desc: "Watercolor pads, soft pastels, acrylics & sketchbooks." },
        { title: "Offices & Businesses", desc: "A4 paper reams, lever arch files, stamps & carbon paper." },
        { title: "Everyday Creators", desc: "Notebooks, organizers, craft supplies & gifts." },
      ];

  // 5. Timeline Content & Fallbacks
  const timelineBadge = sanityAboutPage?.timelineBadge || "Evolution & Growth";
  const timelineTitle = sanityAboutPage?.timelineTitle || "The Journey of Mitra Papers";
  const timelineSubtitle = sanityAboutPage?.timelineSubtitle || "30+ years of steady commitment to quality stationery.";
  const timelinePhases = sanityAboutPage?.timelinePhases?.length
    ? sanityAboutPage.timelinePhases
    : [
        {
          phase: "Phase 1",
          title: "Establishing Local Roots",
          desc: "Founded in Gora Bazar, Dum Dum Cantonment area with a dedicated focus on essential writing supplies and paper registers for local neighborhood schools.",
        },
        {
          phase: "Phase 2",
          title: "Catalogue & Office Expansion",
          desc: "Expanded inventory to serve regional offices with A4 copier reams, executive bond paper, lever arch files, rubber stamps, and fine art materials.",
        },
        {
          phase: "Phase 3",
          title: "Modern Digital Presence",
          desc: "Upgrading our 30+ year brand into a modern digital platform, allowing customers to easily explore catalogues, request product quotes, and locate our store.",
        },
      ];

  // 6. Bottom CTA Content & Fallbacks
  const ctaTitle = sanityAboutPage?.ctaTitle || 'Ready to Experience "Stationery With Trust"?';
  const ctaPrimaryText = sanityAboutPage?.ctaPrimaryText || "Explore Catalogue";
  const ctaPrimaryLink = sanityAboutPage?.ctaPrimaryLink || "/products";
  const ctaSecondaryText = sanityAboutPage?.ctaSecondaryText || "Visit Gora Bazar Store";
  const ctaSecondaryLink = sanityAboutPage?.ctaSecondaryLink || "/contact";

  return (
    <div className="py-12 md:py-20 bg-paper-texture min-h-screen space-y-16">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-sage-200 shadow-card text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100 border border-sage-200 text-olive-900 text-xs font-bold shadow-subtle">
            <ShieldCheck className="w-4 h-4 text-gold-500" />
            <span>{heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-olive-950 tracking-tight leading-tight">
            {heroTitle}
          </h1>

          <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed max-w-2xl mx-auto">
            {heroDescription}
          </p>

          <div className="pt-4 flex justify-center">
            <div className="p-3 bg-ivory-100 rounded-2xl border border-sage-200 inline-flex items-center gap-4">
              <Image
                src="/logo.jpg"
                alt="Mitra Papers Logo"
                width={160}
                height={55}
                className="h-12 w-auto object-contain"
              />
              <div className="text-left border-l border-sage-300 pl-4">
                <span className="block text-xs font-bold text-olive-900">{brandIdentityTitle}</span>
                <span className="text-[11px] text-sage-600">{brandIdentitySubtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              {storyBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-olive-950">
              {storyTitle}
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-charcoal-800 leading-relaxed">
              {storyParagraphs.map((para: string, idx: number) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-ivory-100 p-8 rounded-3xl border border-sage-300 shadow-subtle space-y-6">
              <div className="flex items-center gap-3 border-b border-sage-200 pb-4">
                <Sparkles className="w-6 h-6 text-gold-500" />
                <div>
                  <h3 className="text-lg font-bold font-serif text-olive-900">{philosophyTitle}</h3>
                  <p className="text-xs text-sage-600">{philosophyTagline}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed italic">
                {philosophyQuote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage-200 shadow-card space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              {believeBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-olive-950">
              {believeTitle}
            </h2>
            <p className="text-xs text-charcoal-800">
              {believeSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {believeCards.map((card: any, idx: number) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-ivory-50 border border-sage-200 space-y-2 ${
                  idx === 4 ? "md:col-span-2" : ""
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-olive-800 text-white flex items-center justify-center font-bold text-xs">
                  {card.number || idx + 1}
                </div>
                <h3 className="text-base font-bold text-olive-900 font-serif">{card.title}</h3>
                <p className="text-xs text-charcoal-800 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            {serveBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-olive-950">
            {serveTitle}
          </h2>
          <p className="text-xs text-charcoal-800">
            {serveSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {serveCards.map((item: any, idx: number) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-sage-200 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-sage-100 text-olive-800 flex items-center justify-center mx-auto">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-olive-900 font-serif">{item.title}</h3>
              <p className="text-[11px] text-charcoal-800 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE OF BRAND JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-olive-900 text-white rounded-3xl p-8 sm:p-12 border border-olive-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              {timelineBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif">
              {timelineTitle}
            </h2>
            <p className="text-xs text-sage-200">
              {timelineSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {timelinePhases.map((phaseItem: any, idx: number) => (
              <div key={idx} className="p-6 rounded-2xl bg-olive-800 border border-olive-700 space-y-3">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                  {phaseItem.phase}
                </span>
                <h3 className="text-lg font-bold font-serif">{phaseItem.title}</h3>
                <p className="text-xs text-sage-200 leading-relaxed">{phaseItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-2xl font-bold font-serif text-olive-950">{ctaTitle}</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <Link
            href={ctaPrimaryLink}
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-olive-800 hover:bg-olive-900 rounded-full shadow-md"
          >
            {ctaPrimaryText}
          </Link>
          <Link
            href={ctaSecondaryLink}
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-olive-800 bg-white border border-olive-800/30 rounded-full hover:bg-sage-50"
          >
            {ctaSecondaryText}
          </Link>
        </div>
      </section>
    </div>
  );
}
