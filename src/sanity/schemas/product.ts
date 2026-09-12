import { defineField, defineType } from "sanity";

export const productSchema = defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL identifier)",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categoryRef",
      title: "Stationery Category",
      type: "reference",
      to: [{ type: "category" }],
      description: "Select the stationery category from your created categories.",
    }),
    defineField({
      name: "category",
      title: "Category Name (Fallback Text)",
      type: "string",
      description: "Optional fallback category name (e.g., 'Writing Essentials', 'School Stationery', 'Paper Products', 'Art & Craft Supplies', 'Office Essentials', 'Printing & Specialty Paper').",
    }),
    defineField({
      name: "price",
      title: "Price Tag / Info",
      type: "string",
      description: "e.g. '₹240 / Ream' or 'Contact Store for Price'",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      description: "Recommended Upload Spec: 1000×1000px (1:1 Square) or 1200×900px (4:3 ratio). Minimum 800px width. Clean white/light neutral background recommended.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Summary",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "longDescription",
      title: "Full Product Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "features",
      title: "Key Features / Specifications",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "variants",
      title: "Available Variants / Packaging",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      categoryName: "categoryRef.name",
      categoryFallback: "category",
      media: "image",
    },
    prepare(selection) {
      const { title, categoryName, categoryFallback, media } = selection;
      return {
        title,
        subtitle: categoryName || categoryFallback || "Uncategorized",
        media,
      };
    },
  },
});
