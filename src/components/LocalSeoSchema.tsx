import React from "react";
import { STORE_INFO } from "@/data/storeInfo";

export default function LocalSeoSchema() {
  const storeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["StationeryStore", "LocalBusiness", "Store"],
        "@id": "https://mitrapapers.com/#store",
        "name": STORE_INFO.name,
        "alternateName": ["Mitra Papers Store", "Mitra Papers Dum Dum"],
        "url": "https://mitrapapers.com",
        "logo": "https://mitrapapers.com/logo.jpg",
        "image": "https://mitrapapers.com/logo.jpg",
        "description": STORE_INFO.tagline,
        "slogan": STORE_INFO.motto,
        "telephone": STORE_INFO.contactPlaceholder.phone,
        "email": STORE_INFO.contactPlaceholder.email,
        "priceRange": "₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": STORE_INFO.address.fullAddress,
          "addressLocality": "Gora Bazar, Dum Dum, Kolkata",
          "addressRegion": "West Bengal",
          "postalCode": "700028",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 22.6241695,
          "longitude": 88.4069814
        },
        "hasMap": STORE_INFO.googleMapsUrl,
        "sameAs": [
          STORE_INFO.socialLinks.facebook,
          STORE_INFO.socialLinks.instagram,
          STORE_INFO.socialLinks.youtube,
          STORE_INFO.socialLinks.linkedin,
          STORE_INFO.socialLinks.linktree,
        ],
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Gora Bazar, Dum Dum Cantonment"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Kolkata, West Bengal"
          }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "11:00",
            "closes": "15:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "18:00",
            "closes": "23:00"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Mitra Papers Products & Services Catalog",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Paper Products",
              "description": "75 GSM & 85 GSM A4 Copier Paper, Executive Bond Paper & Carbon Paper Reams"
            },
            {
              "@type": "OfferCatalog",
              "name": "School Stationery & Registers",
              "description": "Hardcover Ruled Registers, Board Exam Writing Pads & Notebooks"
            },
            {
              "@type": "OfferCatalog",
              "name": "Art & Craft Supplies",
              "description": "300 GSM Watercolor Pads, Soft Chalk Pastels & Acrylic Supplies"
            },
            {
              "@type": "OfferCatalog",
              "name": "Writing Essentials",
              "description": "Quick-Dry Japanese Gel Pens, Mechanical Drafting Pencils & Highlighters"
            },
            {
              "@type": "OfferCatalog",
              "name": "Office Essentials",
              "description": "Heavy-Duty Lever Arch Files, Custom Self-Inking Rubber Stamps & Document Folders"
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://mitrapapers.com/#website",
        "url": "https://mitrapapers.com",
        "name": "Mitra Papers",
        "description": "Stationery With Trust in Gora Bazar, Dum Dum Cantonment",
        "publisher": {
          "@id": "https://mitrapapers.com/#store"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://mitrapapers.com/products?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
    />
  );
}
