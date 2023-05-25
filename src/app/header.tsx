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
      path: "/work",
    }
  ];
  return (
    <header className="items-center relative flex border-b">
      <div className="px-4.5 w-full flex max-w-4xl mx-auto py-4 items-center">
        <div className="items-center flex">
          <h1 className="items-center text-3xl">tuna2134</h1>
        </div>
        <nav className="flex item-center ml-auto space-mx-4">
          {Links.map((link, index) => {
            return <Link key={index} href={link.path} className="hover:text-indigo-400 mx-4">{link.name}</Link>
          })}
        </nav>
      </div>
    </header>
  )
}
