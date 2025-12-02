"use server";

import { signIn } from "@/lib/auth";

export const loginUser = async ({
  authType,
}: {
  authType: "google" | "github";
}) => {
  await signIn(authType);
};
