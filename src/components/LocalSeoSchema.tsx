import React from "react";
import { STORE_INFO } from "@/data/storeInfo";

export default function LocalSeoSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "StationeryStore",
    "name": STORE_INFO.name,
    "image": "https://mitrapapers.com/logo.jpg",
    "description": STORE_INFO.tagline,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": STORE_INFO.address.fullAddress,
      "addressLocality": "Dum Dum, Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700028",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.6231,
      "longitude": 88.4056
    },
    "url": "https://mitrapapers.com",
    "telephone": STORE_INFO.contactPlaceholder.phone,
    "email": STORE_INFO.contactPlaceholder.email,
    "priceRange": "₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:00",
        "closes": "15:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "18:00",
        "closes": "23:00"
      }
    ],
    "slogan": STORE_INFO.motto
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
