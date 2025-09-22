// pages/register.js
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    companyType: "",
    companyName: "",
    fullName: "",
    email: "",
    country: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ User registered successfully!");
        setFormData({
          companyType: "",
          companyName: "",
          fullName: "",
          email: "",
          country: "",
          password: "",
        });
      } else {
        setMessage(`❌ ${data.error || "Registration failed"}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Internal Server Error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Register to <span className="text-indigo-600">AquarIQ</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Company Type</label>
            <select
              name="companyType"
              value={formData.companyType}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            >
              <option value="">Select...</option>
              <option value="AI Company">AI Company</option>
              <option value="Water Company">Water Company</option>
              <option value="Individual">Individual</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. ASU"
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Amin Mojiri"
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="e.g. USA"
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Register
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}
