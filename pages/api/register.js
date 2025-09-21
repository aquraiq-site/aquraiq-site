// pages/api/register.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { company, name, email, country, password } = req.body;

    // چک کردن فیلدها
    if (!company || !name || !email || !country || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const query = `
      INSERT INTO users (company, name, email, country, password)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
    `;

    const values = [company, name, email, country, password];
    const result = await pool.query(query, values);

    return res.status(200).json({
      success: true,
      message: 'User registered successfully ✅',
      userId: result.rows[0].id,
    });

  } catch (err) {
    console.error('DB error:', err);
    return res.status(500).json({
      success: false,
      message: err.message || 'Database error',
    });
  }
}
