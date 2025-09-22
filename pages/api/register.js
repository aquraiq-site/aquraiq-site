// pages/api/register.js
import { pool } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { companyType, companyName, fullName, email, country, password } = req.body;

  if (!companyType || !fullName || !email || !country || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const client = await pool.connect();

    const checkUser = await client.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (checkUser.rows.length > 0) {
      client.release();
      return res.status(400).json({ error: "Email already exists" });
    }

    await client.query(
      `INSERT INTO users (company_type, company_name, full_name, email, country, password)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [companyType, companyName, fullName, email, country, password]
    );

    client.release();
    return res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
