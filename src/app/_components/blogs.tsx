import Link from "next/link";
import { Blog } from "../blog/_blogs";

export default function BlogComponent({
  blogs
}: {
  blogs: Blog[],
}) {
  return (
    <div className="w-full max-w-xl mx-auto pt-7">
      <h2 className="text-3xl font-bold pl-2">Blog</h2>
      <div className="pt-3 grid grid-cols-2">
      {blogs.map((blog: Blog, index: number) => {
        return (
          <div key={index} className="pt-3 py-4">
            <Link className="text-xl font-semibold" href={`/blog/${blog.id}`}>{blog.metadata.title}</Link>
            <div className="pt-6">
              <span>{blog.metadata.date}</span>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}