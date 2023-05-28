import { getBlogs } from "./_blogs";
import BlogComponent from "../_components/blogs";

export default async function Page() {
  return (
    <div>
      <BlogComponent blogs={await getBlogs()} />
    </div>
  )
}