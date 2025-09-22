// pages/api/register.js
import { pool } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { companyType, companyName, fullName, email, country, username, password } = req.body;

  if (!companyType || !companyName || !fullName || !email || !country || !username || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const client = await pool.connect();

    // Check if user already exists
    const checkUser = await client.query(
      "SELECT * FROM users WHERE username = $1 OR email = $2",
      [username, email]
    );

    if (checkUser.rows.length > 0) {
      client.release();
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Insert new user
    await client.query(
      `INSERT INTO users (company_type, company_name, full_name, email, country, username, password)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [companyType, companyName, fullName, email, country, username, password]
    );

    client.release();
    return res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
