import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { membershipType, companyName, fullName, email, country, username, password } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // confirmation email to user
      subject: "Welcome to AquarIQ!",
      text: `Hello ${fullName},\n\nThank you for registering at AquarIQ.\n\nYour username: ${username}\nMembership: ${membershipType}\n\nWe are glad to have you!\n\n-AquarIQ Team`,
    });

    // Also notify admin/company email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL,
      subject: `New Registration: ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Username: ${username}
        Membership: ${membershipType}
        Company: ${companyName}
        Country: ${country}
      `,
    });

    return res.status(200).json({ success: true, message: "Registration successful and emails sent" });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ error: error.message || "Something went wrong" });
  }
}
