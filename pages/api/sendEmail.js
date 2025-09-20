// pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Configure transporter with Gmail + App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // aquariq@gmail.com
        pass: process.env.EMAIL_PASS   // App password you generated
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.COMPANY_EMAIL, // sender (your company email)
      to,                              // recipient email (user)
      subject,
      text: message
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email", details: error.message });
  }
}
