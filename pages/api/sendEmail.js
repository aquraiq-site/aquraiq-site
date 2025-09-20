import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { membershipType, companyName, fullName, email, country, username } = req.body;

  try {
    // Gmail transporter using App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1) Send welcome email to the user
    await transporter.sendMail({
      from: `"AquarIQ" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to AquarIQ 🎉",
      html: `
        <h2>Hello ${fullName || username},</h2>
        <p>Thank you for registering at <b>AquarIQ</b>!</p>
        <p>Your membership type: <b>${membershipType}</b></p>
        <p>We’ll keep you updated about AI-powered water intelligence 🚀</p>
      `,
    });

    // 2) Send notification email to the company
    await transporter.sendMail({
      from: `"AquarIQ" <${process.env.EMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL,
      subject: "📥 New Registration on AquarIQ",
      html: `
        <h3>New Member Registered</h3>
        <p><b>Membership Type:</b> ${membershipType}</p>
        <p><b>Company Name:</b> ${companyName || "-"}</p>
        <p><b>Full Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Country:</b> ${country || "-"}</p>
        <p><b>Username:</b> ${username}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send emails" });
  }
}
