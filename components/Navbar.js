// components/Navbar.js
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="AquarIQ Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">AquarIQ</span>
        </Link>

        {/* Menu */}
        <div className="flex space-x-6 items-center">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/features" className="hover:text-blue-600 transition-colors">Features</Link>
          <Link href="/ranking" className="hover:text-blue-600 transition-colors">Ranking</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>

          {/* Members Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-blue-600 focus:outline-none flex items-center"
            >
              Members ▾
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 mt-2 w-36 bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-200 origin-top-right z-50 ${
                isOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <Link
                href="/login"
                className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
