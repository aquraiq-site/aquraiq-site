import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { membership_type, company_name, full_name, email, country, username, password } = req.body;

    // چک کردن پر بودن همه فیلدها
    if (!membership_type || !company_name || !full_name || !email || !country || !username || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // کوئری اینسرت در جدول users
    const query = `
      INSERT INTO users (membership_type, company_name, full_name, email, country, username, password)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `;

    const values = [membership_type, company_name, full_name, email, country, username, password];
    const result = await pool.query(query, values);

    res.status(200).json({
      success: true,
      message: 'User registered successfully ✅',
      userId: result.rows[0].id,
    });
  } catch (err) {
    console.error('DB error:', err.message);
    res.status(500).json({ success: false, message: 'Server error: ' + err.message });
  }
}
