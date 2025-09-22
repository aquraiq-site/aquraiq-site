// pages/api/register.js
import { pool } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const {
    companyType,
    companyName,
    fullName,
    email,
    country,
    username,
    password,
  } = req.body || {};

  // Basic validation
  if (
    !companyType ||
    !companyName ||
    !fullName ||
    !email ||
    !country ||
    !username ||
    !password
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  // Enforce the exact three options
  const allowedTypes = ["AI Company", "Water Company", "Individual"];
  if (!allowedTypes.includes(companyType)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid company type" });
  }

  const client = await pool.connect();
  try {
    // Check for existing username or email
    const dup = await client.query(
      "SELECT 1 FROM users WHERE username = $1 OR email = $2",
      [username, email]
    );
    if (dup.rowCount > 0) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Insert new user
    await client.query(
      `INSERT INTO users
       (membership_type, company_name, full_name, email, country, username, password)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [companyType, companyName, fullName, email, country, username, password]
    );

    return res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.error("DB error:", err);
    return res.status(500).json({
      success: false,
      message: "Database connection failed. Please check your credentials.",
    });
  } finally {
    client.release();
  }
}
