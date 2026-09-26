import { MetadataRoute } from "next";
import { fetchSanityProducts, fetchSanityBlogs } from "@/sanity/queries";
import { PRODUCTS as STATIC_PRODUCTS } from "@/data/products";
import { BLOG_POSTS as STATIC_BLOG_POSTS } from "@/data/blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mitrapapers.com";
  const currentDate = new Date();

  // 1. Dynamic Products URLs
  let productsList: any[] = [];
  try {
    const sanityProducts = await fetchSanityProducts();
    if (sanityProducts && sanityProducts.length > 0) {
      productsList = sanityProducts;
    } else {
      productsList = STATIC_PRODUCTS;
    }
  } catch (err) {
    productsList = STATIC_PRODUCTS;
  }

  const productUrls: MetadataRoute.Sitemap = productsList.map((product) => {
    const slug = product.slug || product.id || product._id;
    return {
      url: `${baseUrl}/products/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  // 2. Dynamic Blog Post URLs
  let blogsList: any[] = [];
  try {
    const sanityBlogs = await fetchSanityBlogs();
    if (sanityBlogs && sanityBlogs.length > 0) {
      blogsList = sanityBlogs;
    } else {
      blogsList = STATIC_BLOG_POSTS;
    }
  } catch (err) {
    blogsList = STATIC_BLOG_POSTS;
  }

  const blogUrls: MetadataRoute.Sitemap = blogsList.map((post) => {
    const slug = post.slug || post._id;
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  // 3. Main Static Site Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...staticPages, ...productUrls, ...blogUrls];
}
