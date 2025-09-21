import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    membership_type: "",
    company_name: "",
    full_name: "",
    email: "",
    country: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Registering...");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("✅ Registered successfully!");
      } else {
        setMessage("❌ " + data.message);
      }
    } catch (err) {
      setMessage("⚠️ Error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Register to <span className="text-blue-600">AquarIQ</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Membership type */}
          <select
            name="membership_type"
            value={form.membership_type}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Company Type...</option>
            <option value="AI Company">AI Company</option>
            <option value="Water Company">Water Company</option>
            <option value="Individual">Individual</option>
          </select>

          {/* Company Name */}
          <input
            type="text"
            name="company_name"
            placeholder="e.g. ASU"
            value={form.company_name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          {/* Full Name */}
          <input
            type="text"
            name="full_name"
            placeholder="e.g. Amin Mojiri"
            value={form.full_name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          {/* Country */}
          <input
            type="text"
            name="country"
            placeholder="e.g. USA"
            value={form.country}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Choose a username"
            value={form.username}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="********"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
        )}
      </div>
    </div>
  );
}
