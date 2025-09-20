import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, username, fullName, company, country, membershipType } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Send email to user
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Welcome to AquarIQ!",
        text: `Hello ${fullName}, thank you for registering as ${membershipType}.`,
      });

      // Send copy to company
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.COMPANY_EMAIL,
        subject: "New Registration on AquarIQ",
        text: `New user registered: ${fullName} (${email}) from ${company}, ${country}`,
      });

      res.status(200).json({ message: "Registration email sent successfully" });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
