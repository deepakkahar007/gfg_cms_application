import { prisma } from "@/lib/db";

export const getAllTrendingBlogs = async () => {
  return await prisma.blog.findMany({
    select: {
      id: true,
      publish: true,
    },
  });
};
