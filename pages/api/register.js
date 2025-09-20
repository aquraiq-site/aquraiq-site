import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { fullName, email, username, password, company, country, membership } = req.body;

  if (!fullName || !email || !username || !password) {
    return res.status(400).json({ success: false, message: "Required fields are missing" });
  }

  try {
    // ✅ Setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send confirmation email to user
    await transporter.sendMail({
      from: `"AquarIQ Registration" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to AquarIQ 🎉",
      text: `Hello ${fullName},

Thank you for registering with AquarIQ. Your account has been created successfully.

Username: ${username}
Membership: ${membership}
Company: ${company || "N/A"}
Country: ${country || "N/A"}

We are excited to have you onboard!

- AquarIQ Team
`,
    });

    // ✅ Send notification email to admin/company
    await transporter.sendMail({
      from: `"AquarIQ Registration" <${process.env.EMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL,
      subject: "New User Registered",
      text: `A new user has registered:

Full Name: ${fullName}
Email: ${email}
Username: ${username}
Membership: ${membership}
Company: ${company || "N/A"}
Country: ${country || "N/A"}
`,
    });

    return res.status(200).json({ success: true, message: "Registration successful and email sent" });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
}
