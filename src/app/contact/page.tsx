"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Building2,
  ExternalLink,
} from "lucide-react";
import { STORE_INFO } from "@/data/storeInfo";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState("General Product Enquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    }, 4000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Mitra Papers! I am contacting you from your website regarding ${enquiryType}.`
  );

  return (
    <div className="py-10 md:py-16 bg-paper-texture min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Title */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-sage-100 px-3 py-1 rounded-full border border-sage-200">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-olive-950">
            Visit Our Gora Bazar Store or Enquire Online
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-800">
            Have questions about paper GSM, notebook registers, bulk office supplies, or art tools? Contact <strong>Mitra Papers</strong> today or drop by our store in Dum Dum Cantonment.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Store Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage-200 shadow-card space-y-6">
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-600">
                  Store Details
                </span>
                <h2 className="text-2xl font-bold font-serif text-olive-950 mt-1">
                  Mitra Papers
                </h2>
                <p className="text-xs italic text-sage-600 font-serif">
                  "Stationery With Trust" — 30+ Years Legacy
                </p>
              </div>

              <div className="space-y-4 text-xs text-charcoal-800 pt-2 border-t border-sage-100">
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sage-100 text-olive-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-olive-900 font-semibold">Store Address:</strong>
                    <span>{STORE_INFO.address.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sage-100 text-olive-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-olive-900 font-semibold">Phone Number:</strong>
                    <span>{STORE_INFO.contactPlaceholder.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sage-100 text-olive-800 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <strong className="block text-olive-900 font-semibold">WhatsApp Enquiry:</strong>
                    <span>{STORE_INFO.contactPlaceholder.whatsapp}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sage-100 text-olive-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-olive-900 font-semibold">Email:</strong>
                    <span>{STORE_INFO.contactPlaceholder.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sage-100 text-olive-800 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-olive-900 font-semibold">Store Opening Hours:</strong>
                    <span>{STORE_INFO.contactPlaceholder.hours}</span>
                  </div>
                </div>

              </div>

              {/* Direct Actions Stack */}
              <div className="pt-4 border-t border-sage-100 space-y-2">
                <a
                  href={`tel:${STORE_INFO.contactPlaceholder.phone.replace(/[^0-9+]/g, "")}`}
                  className="w-full py-3 px-4 bg-gold-600 hover:bg-gold-700 text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call Store Now ({STORE_INFO.contactPlaceholder.phone})</span>
                </a>

                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-olive-800 hover:bg-olive-900 text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>Get Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-sage-300" />
                </a>

                <a
                  href={`https://wa.me/${STORE_INFO.contactPlaceholder.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sage-200 shadow-card">
              
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-bold font-serif text-olive-950">
                  Send a Direct Store Enquiry
                </h3>
                <p className="text-xs text-charcoal-800">
                  Fill out your details below and our store representative in Gora Bazar will contact you back.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-sage-100 text-olive-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-olive-800" />
                  </div>
                  <h4 className="text-xl font-bold text-olive-900">Enquiry Submitted!</h4>
                  <p className="text-xs text-charcoal-800 max-w-md mx-auto">
                    Thank you for reaching out to <strong>Mitra Papers</strong>. We have received your message and will respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Sen"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-ivory-50 border border-sage-300 rounded-xl focus:ring-2 focus:ring-olive-800 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9477242453"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-ivory-50 border border-sage-300 rounded-xl focus:ring-2 focus:ring-olive-800 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-ivory-50 border border-sage-300 rounded-xl focus:ring-2 focus:ring-olive-800 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Enquiry Type
                      </label>
                      <select
                        value={enquiryType}
                        onChange={(e) => setEnquiryType(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-ivory-50 border border-sage-300 rounded-xl focus:ring-2 focus:ring-olive-800 outline-none"
                      >
                        <option value="General Product Enquiry">General Product Enquiry</option>
                        <option value="A4 Paper / Ream Bulk Pricing">A4 Paper / Ream Bulk Pricing</option>
                        <option value="School & Register Orders">School & Register Orders</option>
                        <option value="Art & Painting Supplies">Art & Painting Supplies</option>
                        <option value="Custom Rubber Stamps / Office Files">Custom Rubber Stamps / Office Files</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Your Message / Product List *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Specify the stationery items, quantities, or questions you have..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-ivory-50 border border-sage-300 rounded-xl focus:ring-2 focus:ring-olive-800 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-olive-800 hover:bg-olive-900 text-white font-semibold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-gold-400" />
                    <span>Send Enquiry</span>
                  </button>

                  <p className="text-[11px] text-center text-sage-600">
                    We respect your privacy. All enquiries are sent directly to store administration.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Embedded Google Maps Section */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 border border-sage-200 shadow-card space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-sage-100 pb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-olive-950">
                Store Location Map — Gora Bazar, Dum Dum Cantonment
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-800 mt-0.5">
                Conveniently located for local residents, students, and businesses in Dum Dum Cantonment area, West Bengal.
              </p>
            </div>
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-olive-800 hover:text-gold-600 transition-colors flex items-center gap-1.5 shrink-0 bg-sage-50 px-3 py-2 rounded-xl border border-sage-200"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden border border-sage-200 shadow-inner bg-ivory-100 min-h-[300px] sm:min-h-[380px] flex flex-col justify-end p-3 sm:p-6">
            <iframe
              title="Mitra Papers Store Location Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(STORE_INFO.address.fullAddress)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full absolute inset-0 border-0"
              loading="lazy"
              allowFullScreen
            />
            
            {/* Directions Floating Card Overlay */}
            <div className="relative z-10 p-4 sm:p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-sage-200 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 max-w-lg w-full">
              <div className="flex items-center gap-3 text-left w-full sm:w-auto">
                <div className="w-10 h-10 rounded-full bg-olive-800 text-gold-400 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-olive-950">Mitra Papers Store Location</h4>
                  <p className="text-[11px] text-charcoal-800">Gora Bazar, Dum Dum Cantonment, Kolkata</p>
                </div>
              </div>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-white bg-olive-800 hover:bg-olive-900 rounded-xl shadow-md transition-colors text-center flex items-center justify-center gap-2 shrink-0"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>Navigate via Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Store Visit CTA */}
        <div className="bg-olive-900 text-white rounded-3xl p-8 text-center space-y-3">
          <h2 className="text-2xl font-bold font-serif text-gold-400">Need stationery today? Visit Mitra Papers.</h2>
          <p className="text-xs text-sage-200 max-w-xl mx-auto">
            Drop by our physical store in Gora Bazar for immediate stock availability and friendly paper guidance.
          </p>
        </div>

      </div>
    </div>
  );
}
