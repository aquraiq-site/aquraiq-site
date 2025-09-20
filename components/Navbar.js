// components/Navbar.js
import Link from "next/link";
import { useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeLater = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    // small delay for forgiving mouse travel
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };

  const NavLink = ({ href, children }) => (
    <Link
      href={href}
      className="px-3 py-4 text-sm font-medium text-slate-700 hover:text-slate-900"
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto max-w-7xl px-4 overflow-visible">
        <ul className="flex items-center gap-2 overflow-visible">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/features">Features</NavLink></li>
          <li><NavLink href="/ranking">Ranking</NavLink></li>
          <li><NavLink href="/about">About</NavLink></li>
          <li><NavLink href="/contact">Contact</NavLink></li>

          {/* Members dropdown (hover + focus safe) */}
          <li
            className="relative ml-auto overflow-visible"
            onMouseEnter={openNow}
            onMouseLeave={closeLater}
            onFocus={openNow}
            onBlur={closeLater}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={open}
              className="inline-flex items-center gap-1 px-3 py-4 text-sm font-semibold text-slate-700 hover:text-slate-900 focus:outline-none"
            >
              Members <span aria-hidden>▾</span>
            </button>

            {/* hover bridge: fills any tiny gap between trigger and panel */}
            <span className="pointer-events-none absolute left-0 right-0 top-full h-3"></span>

            <div
              role="menu"
              className={`absolute left-0 top-full mt-2 w-44 rounded-xl bg-white shadow-lg ring-1 ring-slate-900/10 transition
                ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}
                z-50 overflow-hidden`}
            >
              <Link
                role="menuitem"
                href="/login"
                className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
              >
                Login
              </Link>
              <Link
                role="menuitem"
                href="/register"
                className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
              >
                Register
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
