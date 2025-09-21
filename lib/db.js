// lib/db.js
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // required for Neon / Vercel
  },
});

export const query = (text, params) => {
  return pool.query(text, params);
};
