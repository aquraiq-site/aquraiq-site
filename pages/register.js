import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    company_type: "",
    company_name: "",
    full_name: "",
    email: "",
    country: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Register to <span className="text-blue-600">AquarIQ</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company Type */}
          <div>
            <label className="block text-gray-700 mb-1">Company Type</label>
            <select
              name="company_type"
              value={form.company_type}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
            >
              <option value="">Select type...</option>
              <option value="AI Company">AI Company</option>
              <option value="Water Company">Water Company</option>
              <option value="Individual">Individual</option>
            </select>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-gray-700 mb-1">Company Name</label>
            <input
              type="text"
              name="company_name"
              value={form.company_name}
              onChange={handleChange}
              placeholder="e.g. ASU"
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
              required
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              placeholder="e.g. Amin Mojiri"
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-700 mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="e.g. USA"
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
              required
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Choose a username"
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
