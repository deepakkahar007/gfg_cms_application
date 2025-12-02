import { z } from "zod";

export const CreateBlogSchema = z.object({
  title: z.string().trim(),
  content: z.string().trim(),
  category: z.string().trim(),
  image_url: z.string().trim(),
  publish: z.boolean().default(true).optional(),
  delete: z.boolean().default(false).optional(),
  trending: z.boolean().default(false).optional(),
});

export type CreateBlogSchemaType = z.infer<typeof CreateBlogSchema>;
