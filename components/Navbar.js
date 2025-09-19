// components/Navbar.js
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="font-bold text-lg">AquralQ</span>
      </div>
      <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/features">Features</Link></li>
        <li><Link href="/ranking">Ranking</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <span className="cursor-pointer">Members ▾</span>
          {isOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/login">Login</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/register">Register</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
