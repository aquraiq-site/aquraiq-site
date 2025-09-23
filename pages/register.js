// pages/register.js
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    companyType: "",
    companyName: "",
    fullName: "",
    email: "",
    country: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("User registered successfully!");
    } else {
      setMessage(data.error || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Register to <span className="text-indigo-600">AquarIQ</span>
        </h2>

        <select
          name="companyType"
          value={form.companyType}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        >
          <option value="">Select Company Type</option>
          <option value="AI Company">AI Company</option>
          <option value="Water Company">Water Company</option>
          <option value="Individual">Individual</option>
        </select>

        <input
          type="text"
          name="companyName"
          value={form.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <input
          type="text"
          name="country"
          value={form.country}
          onChange={handleChange}
          placeholder="Country"
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Register
        </button>

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
}
