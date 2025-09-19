"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside or scrolling
  useEffect(() => {
    function onDocPointerDown(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function onScroll() {
      setOpen(false);
    }
    document.addEventListener("pointerdown", onDocPointerDown);
    document.addEventListener("scroll", onScroll, true);
    return () => {
      document.removeEventListener("pointerdown", onDocPointerDown);
      document.removeEventListener("scroll", onScroll, true);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md overflow-visible">
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

          {/* Members dropdown */}
          <div
            ref={menuRef}
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={open}
              className="hover:text-blue-500 select-none"
              onClick={() => setOpen((v) => !v)}
            >
              Members ▾
            </button>

            {/* Dropdown menu */}
            <div
              role="menu"
              className={`absolute right-0 top-full -translate-y-px w-44 rounded-md bg-white text-black shadow-lg ring-1 ring-black/5 z-[60] transition-opacity duration-150 ${
                open ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <Link
                href="/login"
                role="menuitem"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                role="menuitem"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setOpen(false)}
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
