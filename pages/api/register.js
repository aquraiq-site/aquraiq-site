// pages/api/register.js
import { sendEmail } from "../../lib/resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    await sendEmail({
      to: email,
      subject: "Welcome to AquraIQ",
      html: `
        <h2>Thank you for registering!</h2>
        <p>We’re excited to have you on board.</p>
        <p>– AquraIQ Team</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error in /api/register:", err);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
