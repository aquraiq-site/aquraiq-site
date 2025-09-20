import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    membershipType: "Individual",
    companyName: "",
    fullName: "",
    email: "",
    country: "",
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: "Registration successful! Check your email." });
        setForm({
          membershipType: "Individual",
          companyName: "",
          fullName: "",
          email: "",
          country: "",
          username: "",
          password: "",
        });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong" });
      }
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>

        <select
          name="membershipType"
          value={form.membershipType}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg"
        >
          <option value="Individual">Individual</option>
          <option value="Company">Company</option>
        </select>

        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={form.companyName}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full mb-6 p-3 border rounded-lg"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {status && (
          <p
            className={`mt-4 text-center font-medium ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
