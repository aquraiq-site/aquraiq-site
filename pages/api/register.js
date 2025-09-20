import { Pool } from "pg";
import bcrypt from "bcrypt";

// Connect to PostgreSQL using the DATABASE_URL from environment variables
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { membership_type, company_name, full_name, email, country, username, password } = req.body;

    try {
      // Hash the password for security
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the user into the database
      const result = await pool.query(
        `INSERT INTO users (membership_type, company_name, full_name, email, country, username, password)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING id, membership_type, company_name, full_name, email, country, username, created_at`,
        [membership_type, company_name, full_name, email, country, username, hashedPassword]
      );

      res.status(200).json({ success: true, user: result.rows[0] });
    } catch (error) {
      console.error("Error inserting user:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
