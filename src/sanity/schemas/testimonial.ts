import { defineType, defineField } from "sanity";

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Customer Reviews & Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Review Quote",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Author Role & Location (e.g., School Student, Dum Dum)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Author Name (Optional)",
      type: "string",
    }),
    defineField({
      name: "rating",
      title: "Star Rating (1 - 5)",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: "featured",
      title: "Display on Homepage",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
});
