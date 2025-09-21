// pages/api/env-test.js

export default function handler(req, res) {
  res.status(200).json({
    DATABASE_URL: process.env.DATABASE_URL || "NOT FOUND",
    NODE_ENV: process.env.NODE_ENV || "NOT SET",
  });
}
