import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: { rejectUnauthorized: false }, // برای NeonDB ضروریه
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { company, name, email, country, password } = req.body;

    if (!company || !name || !email || !country || !password) {
      return res.status(400).json({ success: false, message: 'Please fill all fields' });
    }

    try {
      const client = await pool.connect();

      // اگه جدول users هنوز ساخته نشده باشه، اینجا ساخته میشه
      await client.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          company VARCHAR(255),
          name VARCHAR(255),
          email VARCHAR(255) UNIQUE,
          country VARCHAR(100),
          password VARCHAR(255),
          created_at TIMESTAMP DEFAULT NOW()
        )
      `);

      // اضافه کردن کاربر جدید
      const result = await client.query(
        'INSERT INTO users (company, name, email, country, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [company, name, email, country, password]
      );

      client.release();

      return res.status(200).json({ success: true, user: result.rows[0] });
    } catch (error) {
      console.error('DB Error:', error);
      return res.status(500).json({ success: false, message: 'Database error', error: error.message });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
