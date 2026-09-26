import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://mitrapapers.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio/", "/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "AnthropicAI",
          "ClaudeBot",
          "PerplexityBot",
          "CCBot",
          "Googlebot",
          "Bingbot",
        ],
        allow: "/",
        disallow: ["/studio/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
