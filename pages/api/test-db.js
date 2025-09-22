// pages/api/test-db.js
import { pool } from "../../lib/db";

export default async function handler(req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW()");
    client.release();

    return res.status(200).json({
      success: true,
      message: "Database connected successfully!",
      time: result.rows[0],
    });
  } catch (err) {
    console.error("DB Connection Error:", err.message);
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}
