import pool from "@/lib/db";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { company_type, company_name, full_name, email, password, country } = req.body;

  if (!email || !password || !full_name || !company_type || !country) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into DB
    const result = await pool.query(
      `INSERT INTO users (company_type, company_name, full_name, email, password, country)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, email, full_name`,
      [company_type, company_name, full_name, email, hashedPassword, country]
    );

    return res.status(201).json({
      message: "User registered successfully",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Error inserting user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
