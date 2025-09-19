// components/Navbar.js
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 40px",
        background: "#fff",
        borderBottom: "1px solid #eee",
      }}
    >
      {/* Logo + Company Name */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/logo.png" // مسیر لوگو (باید فایل لوگو رو داخل public/logo.png بذاری)
              alt="AquraIQ Logo"
              width={40}
              height={40}
            />
            <span style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "8px", color: "#1a1a1a" }}>
              AquraIQ
            </span>
          </a>
        </Link>
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center", position: "relative" }}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/features"><a>Features</a></Link>
        <Link href="/ranking"><a>Ranking</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/contact"><a>Contact</a></Link>

        {/* Dropdown Menu for Members */}
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          style={{ position: "relative" }}
        >
          <span style={{ cursor: "pointer" }}>Members ▾</span>
          {isOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                background: "#fff",
                border: "1px solid #ddd",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                padding: "10px",
                zIndex: 10,
              }}
            >
              <Link href="/login"><a style={{ display: "block", padding: "5px 10px" }}>Login</a></Link>
              <Link href="/register"><a style={{ display: "block", padding: "5px 10px" }}>Register</a></Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
