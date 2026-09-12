import { defineType, defineField } from "sanity";

export const homePageSchema = defineType({
  name: "homePage",
  title: "Homepage Settings",
  type: "document",
  fields: [
    // --- HERO SECTION ---
    defineField({
      name: "heroTrustBadge",
      title: "Hero Trust Badge Text",
      type: "string",
      initialValue: '30+ Years of "Stationery With Trust"',
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Main Headline",
      type: "string",
      initialValue: "Everything You Need,",
    }),
    defineField({
      name: "heroHeadlineHighlight",
      title: "Hero Headline Highlight (Italic)",
      type: "string",
      initialValue: "All in One Place.",
    }),
    defineField({
      name: "heroSupportingCopy",
      title: "Hero Supporting Paragraph",
      type: "text",
      rows: 3,
      initialValue:
        "Quality stationery for students, artists, professionals, and everyday creators — backed by 30+ years of trust in Gora Bazar, Dum Dum Cantonment.",
    }),
    defineField({
      name: "heroPrimaryCtaText",
      title: "Hero Primary Button Text",
      type: "string",
      initialValue: "Explore Products",
    }),
    defineField({
      name: "heroPrimaryCtaLink",
      title: "Hero Primary Button Link",
      type: "string",
      initialValue: "/products",
    }),
    defineField({
      name: "heroSecondaryCtaText",
      title: "Hero Secondary Button Text",
      type: "string",
      initialValue: "Visit Our Store",
    }),
    defineField({
      name: "heroSecondaryCtaLink",
      title: "Hero Secondary Button Link",
      type: "string",
      initialValue: "/contact",
    }),
    defineField({
      name: "heroShowcaseImage",
      title: "Hero Showcase Image (Notebooks, Pens & Paper)",
      type: "image",
      options: { hotspot: true },
      description: "Recommended Upload Spec: 1200×900px (4:3 ratio) or 1200×800px (3:2 ratio). High contrast stationery showcase photo.",
    }),
    defineField({
      name: "heroShowcaseTitle",
      title: "Hero Showcase Image Title",
      type: "string",
      initialValue: "Notebooks, Pens & Papers",
    }),
    defineField({
      name: "heroShowcaseSubtitle",
      title: "Hero Showcase Image Subtitle",
      type: "string",
      initialValue: "Everything for school, office & fine art",
    }),
    defineField({
      name: "heroStats",
      title: "Hero Highlights / Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Stat Value (e.g. 30+)", type: "string" },
            { name: "label", title: "Stat Label (e.g. Years Legacy)", type: "string" },
          ],
        },
      ],
      initialValue: [
        { value: "30+", label: "Years Legacy" },
        { value: "100%", label: "Authentic Products" },
        { value: "Local", label: "Gora Bazar Store" },
      ],
    }),

    // --- HERITAGE & CUSTOMER CARE SECTION ---
    defineField({
      name: "heritageBadge",
      title: "Heritage Section Badge",
      type: "string",
      initialValue: "Heritage & Customer Care",
    }),
    defineField({
      name: "heritageTitle",
      title: "Heritage Section Title",
      type: "string",
      initialValue: "Built on 30+ Years of Experience & Genuine Customer Relationships",
    }),
    defineField({
      name: "heritageDescription",
      title: "Heritage Section Description",
      type: "text",
      rows: 4,
      initialValue:
        "For over three decades, Mitra Papers has been a staple in Dum Dum Cantonment. We have grown alongside local schools, offices, student generations, and artists by offering reliable product guidance, genuine paper weights, and personal customer service.",
    }),
    defineField({
      name: "heritageCards",
      title: "Heritage Feature Cards (4 Cards)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icon Identifier (e.g. 30+, BookOpen, Heart, CheckCircle2)", type: "string" },
            { name: "title", title: "Card Title", type: "string" },
            { name: "description", title: "Card Description", type: "text", rows: 2 },
          ],
        },
      ],
      initialValue: [
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
      ],
    }),

    // --- WHY GENERATIONS CHOOSE US SECTION ---
    defineField({
      name: "whyChooseUsBadge",
      title: "Why Choose Us Badge",
      type: "string",
      initialValue: "Why Generations Choose Us",
    }),
    defineField({
      name: "whyChooseUsTitle",
      title: "Why Choose Us Title",
      type: "string",
      initialValue: "Why Customers in Gora Bazar & Dum Dum Trust Mitra Papers",
    }),
    defineField({
      name: "whyChooseUsDescription",
      title: "Why Choose Us Paragraph",
      type: "text",
      rows: 3,
      initialValue:
        "We aren't just a shop counter — we are your local stationery experts. Whether you need standard 75 GSM paper for school printing or specialized 300 GSM watercolor sheets, we help you pick the right item every time.",
    }),
    defineField({
      name: "whyChooseUsPoints",
      title: "Why Choose Us Bullet Points",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "30+ years of continuous service in Gora Bazar area",
        "Deep understanding of paper GSM, fountain pen inks, and art mediums",
        "Wide product selection spanning school, office, paper, and art",
        "100% genuine products directly sourced from reputable manufacturers",
        "Personalized, attentive customer service for every student and professional",
        "Convenient local shopping experience with store pickup and enquiry support",
      ],
    }),
    defineField({
      name: "whyChooseUsStatCards",
      title: "Why Choose Us Stat Grid (4 Cards)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Stat Value", type: "string" },
            { name: "title", title: "Stat Title", type: "string" },
            { name: "subtitle", title: "Stat Detail", type: "string" },
          ],
        },
      ],
      initialValue: [
        { value: "30+", title: "Years Legacy", subtitle: "Serving Gora Bazar since decades" },
        { value: "6+", title: "Categories", subtitle: "Writing, Paper, Art, School, Office & Stamps" },
        { value: "100%", title: "Authentic", subtitle: "Guaranteed quality paper & supplies" },
        { value: "Local", title: "Community", subtitle: "Trusted by students & offices" },
      ],
    }),

    // --- TESTIMONIALS SECTION HEADER ---
    defineField({
      name: "testimonialsBadge",
      title: "Testimonials Badge",
      type: "string",
      initialValue: "Customer Experience",
    }),
    defineField({
      name: "testimonialsTitle",
      title: "Testimonials Heading",
      type: "string",
      initialValue: "Trusted by Students, Artists & Local Offices",
    }),
    defineField({
      name: "testimonialsDescription",
      title: "Testimonials Subtitle",
      type: "string",
      initialValue: "What local customers appreciate most about shopping at Mitra Papers in Gora Bazar.",
    }),

    // --- LOCAL STORE CTA BANNER ---
    defineField({
      name: "storeCtaBadge",
      title: "Store Banner Badge",
      type: "string",
      initialValue: "Local Store Location",
    }),
    defineField({
      name: "storeCtaTitle",
      title: "Store Banner Heading",
      type: "string",
      initialValue: "Looking for stationery nearby?",
    }),
    defineField({
      name: "storeCtaDescription",
      title: "Store Banner Description",
      type: "text",
      rows: 2,
      initialValue:
        "Visit Mitra Papers at Gora Bazar, Dum Dum Cantonment area, West Bengal and find all the quality stationery products you need.",
    }),
    defineField({
      name: "storeCtaButtonText",
      title: "Store Directions Button Text",
      type: "string",
      initialValue: "Get Google Directions",
    }),
  ],
});
