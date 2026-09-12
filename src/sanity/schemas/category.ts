import { defineType, defineField } from "sanity";

export const categorySchema = defineType({
  name: "category",
  title: "Stationery Categories",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "itemCount",
      title: "Item Count Badge (e.g., 50+ Products)",
      type: "string",
    }),
    defineField({
      name: "iconName",
      title: "Lucide Icon Name (e.g. PenTool, BookOpen, FileText, Palette, Briefcase, Printer)",
      type: "string",
    }),
    defineField({
      name: "bgGradient",
      title: "Card Gradient Class (e.g. from-olive-50 to-sage-100)",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
