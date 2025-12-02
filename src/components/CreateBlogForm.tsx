"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";
import { Switch } from "@/components/ui/switch";
import { CreateBlogSchema, CreateBlogSchemaType } from "@/schema/zod-schema";
import { createBlogAction } from "@/server/serverActions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const CreateBlogForm = () => {
  const { data: user, status } = useSession();

  if (status === "unauthenticated") redirect("/login");

  const form = useForm<CreateBlogSchemaType>({
    resolver: zodResolver(CreateBlogSchema),
    defaultValues: {
      title: "",
      content: "",
      image_url: "",
      category: "",
      trending: false,
      delete: false,
      publish: true,
    },
  });

  async function onSubmit(data: CreateBlogSchemaType) {
    const res = await createBlogAction(data, user?.user?.id as string);
    if (res) {
      toast.success("Blog created successfully");
      setTimeout(() => {
        redirect("/admin/blogs");
      }, 500);
    } else {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="flex-1 px-6 lg:px-10 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-gray-900 dark:text-white text-[32px] font-bold leading-tight pb-6">
          Create New Post
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE — FORM */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Title Card */}
            <div className="bg-white dark:bg-[#15202B] p-6 rounded-xl border border-gray-200 dark:border-[#223649]">
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    className="flex flex-col gap-2"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel className="text-gray-800 dark:text-white text-base font-medium">
                      Post Title
                    </FieldLabel>

                    <Input
                      {...field}
                      placeholder="Enter your post title..."
                      className="h-14 rounded-lg bg-gray-50 dark:bg-[#182634] border-gray-300 dark:border-[#314d68]
                      text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#90adcb]"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* Subtitle */}
            <div className="bg-white dark:bg-[#15202B] p-6 rounded-xl border border-gray-200 dark:border-[#223649]">
              <Controller
                name="category"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    className="flex flex-col gap-2"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel className="text-gray-800 dark:text-white text-base font-medium">
                      Category
                    </FieldLabel>

                    <Input
                      {...field}
                      placeholder="Blog category..."
                      className="h-14 rounded-lg bg-gray-50 dark:bg-[#182634] border-gray-300 dark:border-[#314d68]
                      text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#90adcb]"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* Content Editor */}
            <div className="bg-white dark:bg-[#15202B] p-6 rounded-xl border border-gray-200 dark:border-[#223649] flex flex-col gap-3">
              <p className="text-gray-800 dark:text-white text-base font-medium">
                Content
              </p>

              <Controller
                name="content"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        placeholder="Start writing your story here..."
                        rows={10}
                        className="min-h-96 bg-gray-50 dark:bg-[#182634] border-gray-300 dark:border-[#314d68]
                        text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#90adcb]
                        rounded-lg p-4"
                      />
                    </InputGroup>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          </div>

          {/* RIGHT SIDE — OPTIONS */}
          <div className="flex flex-col gap-8">
            {/* Publishing */}
            <div className="bg-white dark:bg-[#15202B] p-6 rounded-xl border border-gray-200 dark:border-[#223649]">
              <h3 className="text-gray-800 dark:text-white text-lg font-semibold pb-3">
                Publishing
              </h3>

              {/* Publish Switch */}
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700 dark:text-gray-200 font-medium">
                  Publish to Public
                </span>

                <Controller
                  name="publish"
                  control={form.control}
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
              </div>

              {/* Trending Switch */}
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700 dark:text-gray-200 font-medium">
                  Mark as Trending
                </span>

                <Controller
                  name="trending"
                  control={form.control}
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>
            {/* Image URL */}
            <div className="bg-white dark:bg-[#15202B] p-6 rounded-xl border border-gray-200 dark:border-[#223649]">
              <Controller
                name="image_url"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    className="flex flex-col gap-2"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel className="text-gray-800 dark:text-white text-base font-medium">
                      Featured Image URL
                    </FieldLabel>

                    <Input
                      {...field}
                      placeholder="Paste image URL..."
                      className="h-14 rounded-lg bg-gray-50 dark:bg-[#182634] border-gray-300 dark:border-[#314d68]
                      text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#90adcb]"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1 h-12"
                onClick={() => form.reset()}
              >
                Reset
              </Button>

              <Button
                type="submit"
                form="form-rhf-demo"
                className="flex-1 h-12 bg-primary hover:bg-primary/90"
              >
                Publish
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden form (required for submission) */}
      <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}></form>
    </div>
  );
};

export default CreateBlogForm;
