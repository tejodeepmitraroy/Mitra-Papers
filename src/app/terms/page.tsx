import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Mitra Papers",
  description: "Terms and Conditions for using the Mitra Papers website.",
};

export default function TermsPage() {
  return (
    <div className="py-12 md:py-20 bg-paper-texture min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-olive-800 bg-white px-3.5 py-1.5 rounded-full border border-sage-200 shadow-subtle"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage-200 shadow-card space-y-6">
          <div className="space-y-2 border-b border-sage-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Legal</span>
            <h1 className="text-3xl font-bold font-serif text-olive-950">Terms & Conditions</h1>
            <p className="text-xs text-sage-600">Last updated: August 2026</p>
          </div>

          <div className="prose prose-olive max-w-none text-xs sm:text-sm text-charcoal-800 space-y-4 leading-relaxed">
            <p>
              Welcome to the website of <strong>Mitra Papers</strong> ("Stationery With Trust"). By accessing or using our website, catalogue, and enquiry services, you agree to comply with these terms.
            </p>

            <h3 className="text-base font-bold font-serif text-olive-900 pt-2">1. Product Catalogue & Pricing</h3>
            <p>
              Products shown on this website represent standard inventory available at our store in Gora Bazar, Dum Dum Cantonment. Pricing is provided upon store enquiry due to fluctuations in paper pulp, GSM grades, and bulk order quantities.
            </p>

            <h3 className="text-base font-bold font-serif text-olive-900 pt-2">2. Store Availability</h3>
            <p>
              Product availability is updated regularly. For urgent or large volume ream orders, customers are encouraged to contact our store directly prior to visiting.
            </p>

            <h3 className="text-base font-bold font-serif text-olive-900 pt-2">3. Intellectual Property & Brand Logo</h3>
            <p>
              The Mitra Papers name, official logo, and brand tagline ("Stationery With Trust") are proprietary assets of Mitra Papers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
