// pages/api/test-db.js
import { pool } from "@/lib/db";

export default async function handler(req, res) {
  try {
    const client = await pool.connect();

    // Just fetch users with email as unique identifier
    const result = await client.query("SELECT id, company_type, company_name, full_name, email, country, created_at FROM users LIMIT 10");

    client.release();

    return res.status(200).json({
      success: true,
      users: result.rows,
    });
  } catch (error) {
    console.error("Database test error:", error);
    return res.status(500).json({ success: false, error: "Database connection failed" });
  }
}
