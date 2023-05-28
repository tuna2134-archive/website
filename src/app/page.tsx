import { getBlogs, Blog } from './blog/_blogs'
import Link from 'next/link';

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <main>
      <div className="w-full bg-gradient-to-r from-indigo-600 to-blue-400">
        <div className="max-w-4xl mx-auto py-36 px-2 md:px-0 space-y-3 text-white">
          <h2 className="text-4xl">tuna2134</h2>
          <p>
            どうもtuna2134です。僕は日本を主に拠点にしており、使える言語はPython, TypeScript, Rust(少々)です。
          </p>
        </div>
      </div>
      <div className="w-full max-w-xl mx-auto pt-7">
        <h2 className="text-3xl text-center font-semibold">ブログ</h2>
        <div className="pt-3 grid grid-cols-2">
          {blogs.map((blog: Blog, index: number) => {
            return (
              <div key={index} className="pt-3">
                <Link className="text-2xl font-bold" href={`/blog/${blog.id}`}>{blog.metadata.title}</Link>
                <div className="pt-6">
                  <span>{blog.metadata.date}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
