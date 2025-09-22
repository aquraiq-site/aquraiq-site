// pages/api/register.js
import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { companyType, companyName, fullName, email, country, password } =
      req.body;

    if (!companyType || !fullName || !email || !country || !password) {
      return res.status(400).json({ error: "All required fields must be filled" });
    }

    // check if email already exists
    const existingUser =
      await sql`SELECT * FROM users WHERE email = ${email}`;
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert into database
    const result =
      await sql`INSERT INTO users (company_type, company_name, full_name, email, country, password)
                VALUES (${companyType}, ${companyName}, ${fullName}, ${email}, ${country}, ${hashedPassword})
                RETURNING id, email`;

    return res
      .status(201)
      .json({ message: "User registered successfully", user: result.rows[0] });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
