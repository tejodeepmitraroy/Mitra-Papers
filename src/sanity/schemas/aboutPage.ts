import { defineType, defineField } from "sanity";

export const aboutPageSchema = defineType({
  name: "aboutPage",
  title: "About Us Page Settings",
  type: "document",
  fields: [
    // --- HERO SECTION ---
    defineField({
      name: "heroBadge",
      title: "Hero Badge Text",
      type: "string",
      initialValue: "Our Brand Heritage",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Main Title",
      type: "string",
      initialValue: '30+ Years of "Stationery With Trust."',
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Supporting Paragraph",
      type: "text",
      rows: 4,
      initialValue:
        "From humble beginnings in Gora Bazar, Dum Dum Cantonment area to becoming a beloved digital-ready stationery brand, Mitra Papers has spent over three decades serving local creators, students, and businesses.",
    }),
    defineField({
      name: "brandIdentityTitle",
      title: "Brand Identity Badge Title",
      type: "string",
      initialValue: "Official Brand Identity",
    }),
    defineField({
      name: "brandIdentitySubtitle",
      title: "Brand Identity Subtitle",
      type: "string",
      initialValue: "Gora Bazar, Dum Dum Cantonment",
    }),

    // --- OUR STORY / JOURNEY SECTION ---
    defineField({
      name: "storyBadge",
      title: "Story Section Badge",
      type: "string",
      initialValue: "Our Journey",
    }),
    defineField({
      name: "storyTitle",
      title: "Story Section Title",
      type: "string",
      initialValue: "A Local Stationery Business Built on Customer Relationships",
    }),
    defineField({
      name: "storyParagraphs",
      title: "Story Paragraphs",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      initialValue: [
        "Mitra Papers began with a simple belief: every student preparing for exams, every artist working on a canvas, and every office managing daily operations deserves genuine paper products and dependable writing tools.",
        "Over 30+ years in the Gora Bazar community of Dum Dum Cantonment, West Bengal, we have earned customer loyalty not through glossy marketing, but through honest product guidance, precise paper weight selection, and personal service.",
        "As stationery needs evolved from manual bill books to high-speed A4 copier reams and specialty 300 GSM art papers, Mitra Papers has continuously adapted while holding fast to our core identity.",
      ],
    }),
    defineField({
      name: "philosophyTitle",
      title: "Brand Philosophy Card Title",
      type: "string",
      initialValue: "Our Brand Philosophy",
    }),
    defineField({
      name: "philosophyTagline",
      title: "Brand Philosophy Tagline",
      type: "string",
      initialValue: '"Stationery With Trust"',
    }),
    defineField({
      name: "philosophyQuote",
      title: "Brand Philosophy Quote",
      type: "text",
      rows: 4,
      initialValue:
        '"Trust is not declared in taglines — it is earned across 30 years of recommending the exact paper GSM a customer needs, testing pen inks before sale, and standing behind every product that leaves our Gora Bazar store."',
    }),

    // --- WHAT WE BELIEVE (CORE PRINCIPLES) ---
    defineField({
      name: "believeBadge",
      title: "Core Principles Badge",
      type: "string",
      initialValue: "Core Principles",
    }),
    defineField({
      name: "believeTitle",
      title: "Core Principles Title",
      type: "string",
      initialValue: "What We Believe",
    }),
    defineField({
      name: "believeSubtitle",
      title: "Core Principles Subtitle",
      type: "string",
      initialValue: "The 5 guiding values behind every recommendation at Mitra Papers.",
    }),
    defineField({
      name: "believeCards",
      title: "Belief Cards (5 Cards)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", title: "Step Number (1-5)", type: "number" },
            { name: "title", title: "Principle Title", type: "string" },
            { name: "description", title: "Principle Description", type: "text", rows: 3 },
          ],
        },
      ],
      initialValue: [
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
      ],
    }),

    // --- WHO WE SERVE SECTION ---
    defineField({
      name: "serveBadge",
      title: "Who We Serve Badge",
      type: "string",
      initialValue: "Our Community",
    }),
    defineField({
      name: "serveTitle",
      title: "Who We Serve Title",
      type: "string",
      initialValue: "Who We Serve",
    }),
    defineField({
      name: "serveSubtitle",
      title: "Who We Serve Subtitle",
      type: "string",
      initialValue:
        "Providing tailored stationery solutions across diverse customer groups in Gora Bazar & Dum Dum Cantonment.",
    }),
    defineField({
      name: "serveCards",
      title: "Audience Cards (4 Items)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Audience Group Title", type: "string" },
            { name: "desc", title: "Description", type: "string" },
          ],
        },
      ],
      initialValue: [
        { title: "School Students", desc: "Registers, geometry kits, gel pens & exam supplies." },
        { title: "Fine Artists", desc: "Watercolor pads, soft pastels, acrylics & sketchbooks." },
        { title: "Offices & Businesses", desc: "A4 paper reams, lever arch files, stamps & carbon paper." },
        { title: "Everyday Creators", desc: "Notebooks, organizers, craft supplies & gifts." },
      ],
    }),

    // --- TIMELINE / JOURNEY PHASES ---
    defineField({
      name: "timelineBadge",
      title: "Timeline Badge",
      type: "string",
      initialValue: "Evolution & Growth",
    }),
    defineField({
      name: "timelineTitle",
      title: "Timeline Title",
      type: "string",
      initialValue: "The Journey of Mitra Papers",
    }),
    defineField({
      name: "timelineSubtitle",
      title: "Timeline Subtitle",
      type: "string",
      initialValue: "30+ years of steady commitment to quality stationery.",
    }),
    defineField({
      name: "timelinePhases",
      title: "Journey Phases (3 Phases)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "phase", title: "Phase Label (e.g. Phase 1)", type: "string" },
            { name: "title", title: "Phase Title", type: "string" },
            { name: "desc", title: "Phase Description", type: "text", rows: 3 },
          ],
        },
      ],
      initialValue: [
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
      ],
    }),

    // --- BOTTOM CTA ---
    defineField({
      name: "ctaTitle",
      title: "Bottom CTA Heading",
      type: "string",
      initialValue: 'Ready to Experience "Stationery With Trust"?',
    }),
    defineField({
      name: "ctaPrimaryText",
      title: "Primary Button Text",
      type: "string",
      initialValue: "Explore Catalogue",
    }),
    defineField({
      name: "ctaPrimaryLink",
      title: "Primary Button Link",
      type: "string",
      initialValue: "/products",
    }),
    defineField({
      name: "ctaSecondaryText",
      title: "Secondary Button Text",
      type: "string",
      initialValue: "Visit Gora Bazar Store",
    }),
    defineField({
      name: "ctaSecondaryLink",
      title: "Secondary Button Link",
      type: "string",
      initialValue: "/contact",
    }),
  ],
});
