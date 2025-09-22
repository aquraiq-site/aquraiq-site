// pages/register.js
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    companyType: "",
    companyName: "",
    fullName: "",
    email: "",
    country: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((d) => ({ ...d, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Registration successful!");
        setFormData({
          companyType: "",
          companyName: "",
          fullName: "",
          email: "",
          country: "",
          username: "",
          password: "",
        });
      } else {
        // fallback to data.error if message is missing
        setMessage(`✖ ${data.message || data.error || "Something went wrong"}`);
      }
    } catch (err) {
      setMessage("✖ Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={pageWrap}>
      <div style={card}>
        <h2 style={title}>
          Register to <span style={{ color: "#4F46E5" }}>AquarIQ</span>
        </h2>

        <form onSubmit={handleSubmit} style={formGrid}>
          {/* Company Type */}
          <div style={field}>
            <label style={label}>Company Type</label>
            <select
              name="companyType"
              value={formData.companyType}
              onChange={handleChange}
              style={input}
              required
            >
              <option value="">Select...</option>
              <option value="AI Company">AI Company</option>
              <option value="Water Company">Water Company</option>
              <option value="Individual">Individual</option>
            </select>
          </div>

          {/* Company Name */}
          <div style={field}>
            <label style={label}>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="e.g. ASU"
              value={formData.companyName}
              onChange={handleChange}
              style={input}
              required
            />
          </div>

          {/* Full Name */}
          <div style={field}>
            <label style={label}>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="e.g. Amin Mojiri"
              value={formData.fullName}
              onChange={handleChange}
              style={input}
              required
            />
          </div>

          {/* Email */}
          <div style={field}>
            <label style={label}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              style={input}
              required
            />
          </div>

          {/* Country */}
          <div style={field}>
            <label style={label}>Country</label>
            <input
              type="text"
              name="country"
              placeholder="e.g. USA"
              value={formData.country}
              onChange={handleChange}
              style={input}
              required
            />
          </div>

          {/* Username */}
          <div style={field}>
            <label style={label}>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
              style={input}
              required
            />
          </div>

          {/* Password */}
          <div style={field}>
            <label style={label}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              style={input}
              required
            />
          </div>

          <button type="submit" style={button} disabled={submitting}>
            {submitting ? "Registering..." : "Register"}
          </button>
        </form>

        {message ? (
          <div
            style={{
              marginTop: "16px",
              textAlign: "center",
              color: message.startsWith("✅") ? "#065F46" : "#B91C1C",
              fontWeight: 600,
            }}
          >
            {message}
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* Minimal styles (no external deps) */
const pageWrap = {
  minHeight: "calc(100vh - 120px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#F8FAFC",
  padding: "32px",
};

const card = {
  width: "100%",
  maxWidth: "720px",
  background: "#FFFFFF",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
  padding: "28px",
};

const title = {
  textAlign: "center",
  marginBottom: "20px",
  fontSize: "22px",
  fontWeight: 700,
  color: "#111827",
};

const formGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
};

const field = {
  display: "flex",
  flexDirection: "column",
};

const label = {
  fontSize: "13px",
  color: "#374151",
  marginBottom: "6px",
  fontWeight: 600,
};

const input = {
  height: "42px",
  padding: "0 12px",
  border: "1px solid #E5E7EB",
  borderRadius: "10px",
  outline: "none",
  fontSize: "14px",
};

const button = {
  gridColumn: "1 / -1",
  height: "46px",
  borderRadius: "12px",
  border: "none",
  color: "#fff",
  background:
    "linear-gradient(135deg, rgba(79,70,229,1) 0%, rgba(99,102,241,1) 100%)",
  fontSize: "15px",
  fontWeight: 700,
  cursor: "pointer",
};
