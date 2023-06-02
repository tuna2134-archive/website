import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="my-8 w-full max-w-4xl mx-auto flex items-center">
        <div className="flex">
          <h2 className="text-3xl">tuna2134</h2>
        </div>
        <div className="flex ml-auto space-x-3">
          <Link href="/privacy-policy">Private Policy</Link>
        </div>
      </div>
    </footer>
  )
};
