import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="AquarlQ Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">AquarlQ</span>
          </Link>

          {/* Menu */}
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/features" className="hover:text-blue-600">
              Features
            </Link>
            <Link href="/ranking" className="hover:text-blue-600">
              Ranking
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>

            {/* Members Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 px-3 py-2">
                Members ▾
              </button>
              <div className="absolute right-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-lg w-40 z-50">
                <Link
                  href="/login"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} AquarlQ. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
