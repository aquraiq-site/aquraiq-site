// pages/api/register.js
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { company_type, company_name, full_name, email, password, country } = req.body;

  if (!company_type || !full_name || !email || !password || !country) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const client = await pool.connect();

    // check if email exists
    const checkUser = await client.query('SELECT id FROM users WHERE email = $1', [email]);

    if (checkUser.rows.length > 0) {
      client.release();
      return res.status(400).json({ message: 'Email already exists' });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert user
    const result = await client.query(
      `INSERT INTO users (company_type, company_name, full_name, email, password, country)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, email`,
      [company_type, company_name || null, full_name, email, hashedPassword, country]
    );

    client.release();
    return res.status(200).json({ message: 'User registered successfully', user: result.rows[0] });

  } catch (error) {
    console.error('❌ Register API Error:', error); // log in Vercel
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
