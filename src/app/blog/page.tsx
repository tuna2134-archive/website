import { getBlogs } from "./_blogs";
import BlogComponent from "../_components/blogs";

export metadata = {
  title: "blog | tuna2134",
  description: "ブログ一覧",
};

export default async function Page() {
  return (
    <div>
      <BlogComponent blogs={await getBlogs()} />
    </div>
  )
}
