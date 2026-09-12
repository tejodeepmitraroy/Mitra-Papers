import { defineField, defineType } from "sanity";

export const postSchema = defineType({
  name: "post",
  title: "Blog Posts (WordPress Style)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Blog Post Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL identifier)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      initialValue: "Mitra Papers Team",
    }),
    defineField({
      name: "category",
      title: "Blog Category",
      type: "string",
      options: {
        list: [
          { title: "Paper & Printing Guide", value: "Paper & Printing Guide" },
          { title: "Art & Calligraphy Tips", value: "Art & Calligraphy Tips" },
          { title: "Office & School Stationery", value: "Office & School Stationery" },
          { title: "Store Updates & Offers", value: "Store Updates & Offers" },
        ],
      },
      initialValue: "Paper & Printing Guide",
    }),
    defineField({
      name: "mainImage",
      title: "Featured Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "readTime",
      title: "Estimated Read Time",
      type: "string",
      initialValue: "4 min read",
    }),
    defineField({
      name: "excerpt",
      title: "Short Excerpt / Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Blog Content Editor (WordPress-style Rich Text)",
      description: "Format headings (H1, H2, H3), bold, italic, quotes, lists, and upload images directly inside the blog post.",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal Paragraph", value: "normal" },
            { title: "Heading 1 (H1)", value: "h1" },
            { title: "Heading 2 (H2)", value: "h2" },
            { title: "Heading 3 (H3)", value: "h3" },
            { title: "Heading 4 (H4)", value: "h4" },
            { title: "Quote Block", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet List", value: "bullet" },
            { title: "Numbered List", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong / Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Code", value: "code" },
              { title: "Underline", value: "underline" },
              { title: "Strikethrough", value: "strike-through" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Image Caption / Alt Text",
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "mainImage",
    },
  },
});
