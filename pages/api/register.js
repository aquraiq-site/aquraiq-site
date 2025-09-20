import { Resend } from "resend";
import { Pool } from "pg"; // برای Postgres

const resend = new Resend(process.env.RESEND_API_KEY);

// اتصال به دیتابیس Postgres (Vercel Postgres)
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL, 
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { membershipType, companyName, fullName, email, country, username, password } = req.body;

  try {
    // ذخیره در دیتابیس
    const client = await pool.connect();
    await client.query(
      `INSERT INTO users (membership_type, company_name, full_name, email, country, username, password)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [membershipType, companyName, fullName, email, country, username, password]
    );
    client.release();

    // ارسال ایمیل تأیید
    await resend.emails.send({
      from: "noreply@aquariq.com",
      to: email,
      subject: "Confirm your registration",
      html: `<p>Hello ${fullName},</p><p>Thank you for registering with AquarIQ. Please confirm your email.</p>`,
    });

    res.status(200).json({ success: true, message: "User registered and confirmation email sent!" });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
