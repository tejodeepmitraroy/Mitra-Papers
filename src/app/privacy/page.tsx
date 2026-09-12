import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Mitra Papers",
  description: "Privacy Policy for Mitra Papers website and store enquiries.",
};

export default function PrivacyPage() {
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
            <h1 className="text-3xl font-bold font-serif text-olive-950">Privacy Policy</h1>
            <p className="text-xs text-sage-600">Last updated: August 2026</p>
          </div>

          <div className="prose prose-olive max-w-none text-xs sm:text-sm text-charcoal-800 space-y-4 leading-relaxed">
            <p>
              At <strong>Mitra Papers</strong> ("Stationery With Trust"), we respect your privacy and are committed to protecting the personal information you share with us when contacting our store in Gora Bazar, Dum Dum Cantonment area, West Bengal.
            </p>

            <h3 className="text-base font-bold font-serif text-olive-900 pt-2">1. Information We Collect</h3>
            <p>
              When you submit a product enquiry through our website forms or WhatsApp link, we collect information such as your name, phone number, email address, and specific stationery inquiry details.
            </p>

            <h3 className="text-base font-bold font-serif text-olive-900 pt-2">2. How We Use Your Information</h3>
            <p>
              We use your contact details solely for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responding to your product availability and price enquiries.</li>
              <li>Providing order updates and store pickup notifications.</li>
              <li>Improving our customer service experience in Gora Bazar.</li>
            </ul>

            <h3 className="text-base font-bold font-serif text-olive-900 pt-2">3. Information Sharing</h3>
            <p>
              We do not sell, rent, or trade customer contact details to third-party advertisers. Your information remains confidential within Mitra Papers store administration.
            </p>

            <h3 className="text-base font-bold font-serif text-olive-900 pt-2">4. Contacting Us</h3>
            <p>
              If you have any questions regarding our Privacy Policy, please visit us at Gora Bazar, Dum Dum Cantonment area, West Bengal, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
