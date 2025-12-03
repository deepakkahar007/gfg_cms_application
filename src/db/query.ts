import { prisma } from "@/lib/db";

export const getAllTrendingBlogs = async () => {
  return await prisma.blog.findMany({
    select: {
      id: true,
      publish: true,
    },
  });
};

export const getAllBlogs = async () => {
  const blogs = await prisma.blog.findMany({
    select: {
      id: true,
      title: true,
      publish: true,
      createdAt: true,
      user: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const flattenBlogsData = blogs.map((i) => ({
    id: i.id,
    title: i.title,
    publish: i.publish,
    createdAt: i.createdAt,
    user: i.user?.name,
  }));

  return flattenBlogsData;
};
