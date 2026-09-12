import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "0477lt9s";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "mitra-papers-studio",
  title: "Mitra Papers CMS Studio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Mitra Papers Content Manager")
          .items([
            S.listItem()
              .title("🏠 Homepage Content")
              .child(
                S.document()
                  .schemaType("homePage")
                  .documentId("homePage")
                  .title("Homepage Settings")
              ),
            S.listItem()
              .title("ℹ️ About Us Content")
              .child(
                S.document()
                  .schemaType("aboutPage")
                  .documentId("aboutPage")
                  .title("About Us Page Settings")
              ),
            S.divider(),
            S.listItem()
              .title("🏷️ Stationery Categories")
              .child(S.documentTypeList("category").title("Categories")),
            S.listItem()
              .title("📦 Product Catalogue")
              .child(S.documentTypeList("product").title("Products")),
            S.listItem()
              .title("💬 Customer Reviews")
              .child(S.documentTypeList("testimonial").title("Testimonials")),
            S.divider(),
            S.listItem()
              .title("📝 Blog Posts")
              .child(S.documentTypeList("post").title("Blog Posts")),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
