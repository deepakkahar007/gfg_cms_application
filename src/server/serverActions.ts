"use server";

import { createBlogMutation } from "@/db/mutation";
import { signIn } from "@/lib/auth";
import { type CreateBlogSchemaType } from "@/schema/zod-schema";

export const loginUser = async ({
  authType,
}: {
  authType: "google" | "github";
}) => {
  await signIn(authType);
};

export const createBlogAction = async (
  value: CreateBlogSchemaType,
  user_id: string
) => {
  const blog = await createBlogMutation(value, user_id);

  return blog;
};
