import { getBlogs, getBlog, Blog } from "../_blogs";
import "zenn-content-css";

export default async function Page({ params }: {
  params: {
    slug: string,
  }
}) {
  const blog = await getBlog(params.slug);
  return (
    <div className="pt-4 w-full max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl text-center font-bold">{blog.metadata.title}</h1>
      </div>
      <article dangerouslySetInnerHTML={{
        __html: blog.content
      }} className="prose prose-code:p-0 znc pt-4 flex justify-center"></article>
    </div>
  )
};

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog.id,
  }));
}

type Props = {
  params: {
    slug: string,
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  },
}

export async function generateMetadata({ params, searchParams }: Props) {
  const blog = await getBlog(params.slug);
  return {
    title: `${blog.metadata.title} | tuna2134`,
    description: blog.metadata.description,
  };
}
