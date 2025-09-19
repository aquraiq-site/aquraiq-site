export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="text-2xl font-bold">AquarlQ</div>
      <ul className="flex space-x-6">
        <li>Home</li>
        <li>Features</li>
        <li>Ranking</li>
        <li>About</li>
        <li>Contact</li>

        {/* Members Dropdown */}
        <li className="relative group">
          <button className="hover:text-blue-500">
            Members ▼
          </button>

          {/* Dropdown menu */}
          <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Login
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Register
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
