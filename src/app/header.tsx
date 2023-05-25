import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="items-center relative flex">
      <div className="px-4.5 w-full flex max-w-4xl mx-auto py-4 items-center">
        <div className="items-center flex">
          <h1 className="items-center text-3xl">tuna2134</h1>
        </div>
        <nav className="flex item-center ml-auto">
          <Link href="/blog" className="hover:text-indigo-400">Blog</Link>
        </nav>
      </div>
    </header>
  )
}