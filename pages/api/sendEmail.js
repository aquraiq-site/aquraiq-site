import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, subject, message } = req.body;

    try {
      // Gmail transporter with App Password
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Send the email
      await transporter.sendMail({
        from: `"AquarIQ" <${process.env.EMAIL_USER}>`,
        to: email, // recipient
        subject: subject || "Welcome to AquarIQ",
        text: message || "Thank you for registering with AquarIQ!",
        html: `<p>${message || "Thank you for registering with AquarIQ!"}</p>`,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Email error:", error);
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
