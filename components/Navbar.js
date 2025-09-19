import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <span className="text-xl font-bold flex items-center cursor-pointer">
                <img src="/logo.png" alt="AquarlQ Logo" className="h-8 w-8 mr-2" />
                AquralQ
              </span>
            </Link>
          </div>

          {/* Menu */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link href="/features" className="hover:text-blue-500">
              Features
            </Link>
            <Link href="/ranking" className="hover:text-blue-500">
              Ranking
            </Link>
            <Link href="/about" className="hover:text-blue-500">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>

            {/* Members Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-500 focus:outline-none">
                Members ▾
              </button>
              <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md w-40">
                <li>
                  <Link
                    href="/login"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
