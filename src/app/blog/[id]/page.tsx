import { getBlogs, getBlog } from "../_blogs";
import "zenn-content-css";

export default async function Page({ params }: {
  params: {
    id: string
  }
}) {
  const blog = await getBlog(params.id);
  return (
    <div className="pt-4 w-full max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl text-center font-bold">{blog.metadata.title}</h1>
      </div>
      <article dangerouslySetInnerHTML={{
        __html: blog.content
      }} className="prose znc pt-4"></article>
    </div>
  )
};

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => {
    return {
      params: {
        id: blog.id
      }
    }
  });
}