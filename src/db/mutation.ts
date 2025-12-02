import { prisma } from "@/lib/db";
import { CreateBlogSchemaType } from "@/schema/zod-schema";

export const createBlogMutation = async (
  value: CreateBlogSchemaType,
  user_id: string
) => {
  const json = {
    ...value,
    user_id,
  };

  const blog = await prisma.blog.create({
    data: {
      ...json,
    },
  });

  if (!blog) return false;

  return true;
};
