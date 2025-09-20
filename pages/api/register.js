// pages/api/register.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { membershipType, companyName, fullName, email, country, username, password } = req.body;

  if (!membershipType || !fullName || !email || !username || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // --- Save user to database (future step) ---
    // For now, just mock a success
    console.log("New user registered:", {
      membershipType,
      companyName,
      fullName,
      email,
      country,
      username
    });

    // --- Send confirmation email ---
    const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sendEmail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: email,
        subject: "Welcome to AquarIQ 🚀",
        message: `Hello ${fullName},\n\nThank you for registering with AquarIQ!\n\nWe are excited to have you join us and explore AI-powered water intelligence.\n\n- The AquarIQ Team`
      })
    });

    const emailResult = await emailResponse.json();

    if (!emailResponse.ok) {
      return res.status(500).json({ error: "User registered but email failed", details: emailResult });
    }

    return res.status(201).json({ success: true, message: "User registered and email sent!" });

  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ error: "Registration failed", details: error.message });
  }
}
