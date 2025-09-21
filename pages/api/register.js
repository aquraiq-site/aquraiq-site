// pages/api/register.js
import { query } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const {
      membership_type,
      company_name,
      full_name,
      email,
      country,
      username,
      password,
    } = req.body;

    // validation
    if (!membership_type || !company_name || !full_name || !email || !country || !username || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // insert into database
    const result = await query(
      `INSERT INTO users (membership_type, company_name, full_name, email, country, username, password)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id`,
      [membership_type, company_name, full_name, email, country, username, password]
    );

    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      userId: result.rows[0].id,
    });
  } catch (err) {
    console.error("DB error:", err);
    return res.status(500).json({
      success: false,
      message: "Database connection failed. Please check your credentials.",
    });
  }
}
