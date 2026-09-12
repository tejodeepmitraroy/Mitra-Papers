import { client } from "./client";

// --- HOMEPAGE QUERY ---
export const HOMEPAGE_QUERY = `*[_type == "homePage"][0]{
  heroTrustBadge,
  heroHeadline,
  heroHeadlineHighlight,
  heroSupportingCopy,
  heroPrimaryCtaText,
  heroPrimaryCtaLink,
  heroSecondaryCtaText,
  heroSecondaryCtaLink,
  "heroShowcaseImage": coalesce(heroShowcaseImage, heroShowcaseImage.asset->url),
  heroShowcaseTitle,
  heroShowcaseSubtitle,
  heroStats,
  heritageBadge,
  heritageTitle,
  heritageDescription,
  heritageCards,
  whyChooseUsBadge,
  whyChooseUsTitle,
  whyChooseUsDescription,
  whyChooseUsPoints,
  whyChooseUsStatCards,
  testimonialsBadge,
  testimonialsTitle,
  testimonialsDescription,
  storeCtaBadge,
  storeCtaTitle,
  storeCtaDescription,
  storeCtaButtonText
}`;

// --- ABOUT PAGE QUERY ---
export const ABOUT_PAGE_QUERY = `*[_type == "aboutPage"][0]{
  heroBadge,
  heroTitle,
  heroDescription,
  brandIdentityTitle,
  brandIdentitySubtitle,
  storyBadge,
  storyTitle,
  storyParagraphs,
  philosophyTitle,
  philosophyTagline,
  philosophyQuote,
  believeBadge,
  believeTitle,
  believeSubtitle,
  believeCards,
  serveBadge,
  serveTitle,
  serveSubtitle,
  serveCards,
  timelineBadge,
  timelineTitle,
  timelineSubtitle,
  timelinePhases,
  ctaTitle,
  ctaPrimaryText,
  ctaPrimaryLink,
  ctaSecondaryText,
  ctaSecondaryLink
}`;

// --- CATEGORIES QUERY ---
export const CATEGORIES_QUERY = `*[_type == "category"] | order(order asc, name asc){
  _id,
  "id": slug.current,
  name,
  "slug": slug.current,
  description,
  itemCount,
  iconName,
  bgGradient
}`;

// --- PRODUCTS QUERY ---
export const PRODUCTS_QUERY = `*[_type == "product"] | order(_createdAt desc){
  _id,
  "id": _id,
  name,
  "slug": slug.current,
  "category": coalesce(categoryRef->name, category, "General Stationery"),
  "categoryId": coalesce(categoryRef->slug.current, category, "general"),
  price,
  "image": coalesce(image, image.asset->url),
  shortDescription,
  longDescription,
  features,
  variants,
  featured
}`;

export const PRODUCT_BY_SLUG_QUERY = `*[_type == "product" && (slug.current == $slug || _id == $slug)][0]{
  _id,
  "id": _id,
  name,
  "slug": slug.current,
  "category": coalesce(categoryRef->name, category, "General Stationery"),
  "categoryId": coalesce(categoryRef->slug.current, category, "general"),
  price,
  "image": coalesce(image, image.asset->url),
  shortDescription,
  longDescription,
  features,
  variants,
  featured
}`;

// --- TESTIMONIALS QUERY ---
export const TESTIMONIALS_QUERY = `*[_type == "testimonial" && featured == true] | order(order asc, _createdAt desc){
  _id,
  quote,
  role,
  name,
  rating
}`;

// --- BLOGS QUERY ---
export const BLOGS_QUERY = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "coverImage": coalesce(mainImage, mainImage.asset->url),
  publishedAt,
  readTime,
  category,
  author,
  body
}`;

export const BLOG_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "coverImage": coalesce(mainImage, mainImage.asset->url),
  publishedAt,
  readTime,
  category,
  author,
  body
}`;

// --- FETCHING FUNCTIONS WITH FALLBACKS ---

export async function fetchSanityHomePage() {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID.includes("your_sanity")) {
      return null;
    }
    return await client.fetch(HOMEPAGE_QUERY);
  } catch (error) {
    console.error("Error fetching homepage settings from Sanity:", error);
    return null;
  }
}

export async function fetchSanityAboutPage() {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID.includes("your_sanity")) {
      return null;
    }
    return await client.fetch(ABOUT_PAGE_QUERY);
  } catch (error) {
    console.error("Error fetching about page settings from Sanity:", error);
    return null;
  }
}

export async function fetchSanityCategories() {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID.includes("your_sanity")) {
      return [];
    }
    return await client.fetch(CATEGORIES_QUERY);
  } catch (error) {
    console.error("Error fetching categories from Sanity:", error);
    return [];
  }
}

export async function fetchSanityTestimonials() {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID.includes("your_sanity")) {
      return [];
    }
    return await client.fetch(TESTIMONIALS_QUERY);
  } catch (error) {
    console.error("Error fetching testimonials from Sanity:", error);
    return [];
  }
}

export async function fetchSanityProducts() {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID.includes("your_sanity")) {
      return [];
    }
    return await client.fetch(PRODUCTS_QUERY);
  } catch (error) {
    console.error("Error fetching products from Sanity:", error);
    return [];
  }
}

export async function fetchSanityBlogs() {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID.includes("your_sanity")) {
      return [];
    }
    return await client.fetch(BLOGS_QUERY);
  } catch (error) {
    console.error("Error fetching blogs from Sanity:", error);
    return [];
  }
}
