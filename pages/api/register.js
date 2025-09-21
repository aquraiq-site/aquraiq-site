import pool from "../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { membership_type, company_name, full_name, email, country, username, password } = req.body;

  if (!membership_type || !company_name || !full_name || !email || !country || !username || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const client = await pool.connect();

    const query = `
      INSERT INTO users (membership_type, company_name, full_name, email, country, username, password)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, email, username
    `;
    const values = [membership_type, company_name, full_name, email, country, username, password];

    const result = await client.query(query, values);
    client.release();

    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      user: result.rows[0],
    });
  } catch (err) {
    console.error("DB error:", err);
    return res.status(500).json({
      success: false,
      message: "Database connection failed. Please check your credentials.",
    });
  }
}
