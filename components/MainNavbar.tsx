import Link from "next/link";

export default function MainNavbar() {
  return (
    <nav className="bg-black text-white py-5 flex items-center  px-1 w-full">
      <div className="flex justify-center flex-1 mr-30 space-x-6">
        <span className="text-xl font-bold">Shop Up</span>
        <a href="mailto:orders@zed.com.pk" className="text-sm hover:underline">
          Need help? orders@shopupofficial.com.pk
        </a>
      </div>
      <div className="flex justify-center flex-1 mr-30 space-x-6">
        <Link href="/" className=" no-underline hover:underline">
          T-Shirt
        </Link>
        <Link href="/shirt" className=" no-underline hover:underline">
          Shirt
        </Link>
        <Link href="/pants" className=" no-underline hover:underline">
          Pants
        </Link>
        <Link href="/shorts" className=" no-underline hover:underline">
          Shorts
        </Link>
        <Link
          href="/shoes-accessories"
          className=" no-underline hover:underline"
        >
          Shoes and accessories
        </Link>
        <Link href="/sale" className=" no-underline hover:underline">
          Sale
        </Link>
        <Link href="/new-arrivals" className=" no-underline hover:underline">
          New Arrivals
        </Link>

        <div className="w-3"></div>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 text-black rounded-full py-1 px-4 focus:outline-none"
        />
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
          🔍
        </span>
      </div>
    </nav>
  );
}
