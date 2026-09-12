import createImageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export interface ImageUrlOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: "clip" | "crop" | "fill" | "fillmax" | "max" | "scale" | "min";
}

/**
 * Transforms a Sanity image object or fallback URL into an optimized webp/avif CDN URL.
 */
export function getSanityImageUrl(
  source: any,
  options: ImageUrlOptions = {}
): string {
  if (!source) {
    return "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800";
  }

  // If source is already a string URL (e.g., Unsplash or static fallback)
  if (typeof source === "string") {
    if (source.startsWith("http://") || source.startsWith("https://") || source.startsWith("/")) {
      return source;
    }
  }

  try {
    let imgBuilder = builder.image(source).auto("format").quality(options.quality || 85);

    if (options.width) {
      imgBuilder = imgBuilder.width(options.width);
    }
    if (options.height) {
      imgBuilder = imgBuilder.height(options.height);
    }
    if (options.fit) {
      imgBuilder = imgBuilder.fit(options.fit);
    } else {
      imgBuilder = imgBuilder.fit("max");
    }

    return imgBuilder.url();
  } catch (err) {
    console.warn("Failed to generate Sanity image URL:", err);
    if (typeof source === "string") return source;
    if (source?.asset?.url) return source.asset.url;
    return "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800";
  }
}

