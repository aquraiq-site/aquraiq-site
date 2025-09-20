// components/Layout.js
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} AquarIQ. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
