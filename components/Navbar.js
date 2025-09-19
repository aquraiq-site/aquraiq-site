import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800 flex items-center">
          <img src="/logo.png" alt="AquarIQ Logo" className="h-8 w-8 mr-2" />
          AquralQ
        </Link>

        {/* Menu */}
        <div className="flex space-x-6 items-center">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/features" className="hover:text-blue-500">Features</Link>
          <Link href="/ranking" className="hover:text-blue-500">Ranking</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>

          {/* Members Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-500">Members ▾</button>
            <div className="absolute left-0 mt-0 w-40 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
                Login
              </Link>
              <Link href="/register" className="block px-4 py-2 hover:bg-gray-100">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
