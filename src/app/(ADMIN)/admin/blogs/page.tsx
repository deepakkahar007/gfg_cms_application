import { BlogColumns } from "@/components/table/BlogColumns";
import { BlogsDataTable } from "@/components/table/BlogsDataTable";
import { getAllBlogs } from "@/db/query";

const BlogsPage = async () => {
  const blogs = await getAllBlogs();

  return (
    <div>
      <BlogsDataTable columns={BlogColumns} data={blogs} />
    </div>
  );
};

export default BlogsPage;
