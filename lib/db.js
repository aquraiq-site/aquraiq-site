// lib/db.js
import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Your Neon DB connection string
  ssl: {
    rejectUnauthorized: false,
  },
});
