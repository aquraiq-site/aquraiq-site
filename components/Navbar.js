import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="AquarIQ Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">AquarIQ</span>
        </Link>

        {/* Menu */}
        <div className="flex space-x-6 items-center">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/features" className="hover:text-blue-600">Features</Link>
          <Link href="/ranking" className="hover:text-blue-600">Ranking</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>

          {/* Members Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="hover:text-blue-600">Members ▾</button>
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg">
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
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
