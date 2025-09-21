// pages/register.js
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Registration successful!");
      } else {
        setMessage("❌ " + data.message);
      }
    } catch (err) {
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Register to <span style={{ color: "blue" }}>AquarIQ</span>
        </h2>

        <label>Company Type</label>
        <select
          name="membership_type"
          value={formData.membership_type}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        >
          <option value="">Select...</option>
          <option value="Basic">Basic</option>
          <option value="Pro">Pro</option>
          <option value="AI Company">AI Company</option>
        </select>

        <label>Company Name</label>
        <input
          type="text"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Full Name</label>
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Register
        </button>

        {message && (
          <p style={{ marginTop: "15px", textAlign: "center", color: "red" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
