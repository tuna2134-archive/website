import { getBlogs } from './blog/_blogs'
import BlogComponent from './_components/blogs';
import Link from 'next/link';

export default async function Home() {
  const blogs = (await getBlogs()).slice(0, 10);
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
      <BlogComponent blogs={blogs} />
    </main>
  )
}
