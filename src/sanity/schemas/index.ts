import { productSchema } from "./product";
import { postSchema } from "./post";
import { homePageSchema } from "./homePage";
import { aboutPageSchema } from "./aboutPage";
import { categorySchema } from "./category";
import { testimonialSchema } from "./testimonial";

export const schemaTypes = [
  homePageSchema,
  aboutPageSchema,
  categorySchema,
  productSchema,
  testimonialSchema,
  postSchema,
];
