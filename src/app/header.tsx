import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const Links = [
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Work",
      path: "/works",
    }
  ];
  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="px-3 sm:px-4.5 w-full flex max-w-4xl mx-auto py-4 items-center">
        <div className="flex mx-auto sm:mx-0">
          <Link href="/">
            <h1 className="text-3xl font-bold">tuna2134</h1>
          </Link>
        </div>
        <nav className="hidden sm:flex ml-auto space-mx-4">
          {Links.map((link, index) => {
            return <Link key={index} href={link.path} className="hover:text-indigo-400 mx-4">{link.name}</Link>
          })}
        </nav>
      </div>
    </header>
  )
}
