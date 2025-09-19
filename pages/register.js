import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    membership: "",
    company: "",
    fullName: "",
    email: "",
    country: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setMessage("✅ Registered successfully!");
    } else {
      setMessage("❌ Failed to register.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        <select name="membership" value={formData.membership} onChange={handleChange} required>
          <option value="">Select Membership Type</option>
          <option value="Water Company">Water Company</option>
          <option value="AI Company">AI Company</option>
          <option value="Research Institute">Research Institute</option>
          <option value="Individual">Individual</option>
        </select>

        <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} />
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

        <button type="submit" style={{ padding: "10px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "5px" }}>
          Register
        </button>
      </form>

      {message && <p style={{ marginTop: "15px", textAlign: "center" }}>{message}</p>}
    </div>
  );
}
