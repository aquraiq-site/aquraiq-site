import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl">AquralQ</span>
          </div>

          {/* Links */}
          <div className="flex space-x-6 items-center">
            <Link href="/">Home</Link>
            <Link href="/features">Features</Link>
            <Link href="/ranking">Ranking</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

            {/* Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-black">
                Members ▾
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 w-40 z-50">
                <Link
                  href="/login"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
