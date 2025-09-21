// db.js
import { Pool } from 'pg';

// از DATABASE_URL استفاده می‌کنیم که توی Vercel ست شده
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // برای Neon لازم هست
  },
});

export default pool;
