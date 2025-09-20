import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { to, subject } = req.body;

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // HTML Email Template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <div style="max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(90deg, #0077b6, #00b4d8); padding: 20px; text-align: center; color: #fff;">
            <h1 style="margin: 0;">🌊 AquarIQ</h1>
            <p style="margin: 0;">AI-powered Water Intelligence</p>
          </div>

          <!-- Body -->
          <div style="padding: 20px; background: #fafafa;">
            <h2 style="color: #0077b6;">Welcome to AquarIQ!</h2>
            <p>
              Thank you for creating an account with <strong>AquarIQ</strong>.  
              We connect AI companies and water utilities with transparency and smart analytics.
            </p>
            <p>
              To get started, please verify your email by clicking the button below:
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.NEXT_PUBLIC_BASE_URL}/verify?email=${to}" 
                 style="background: #0077b6; color: white; padding: 12px 25px; 
                        border-radius: 6px; text-decoration: none; font-weight: bold;">
                Verify Email
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #eee; text-align: center; padding: 15px; font-size: 12px; color: #666;">
            © ${new Date().getFullYear()} AquarIQ. All rights reserved.
          </div>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"AquarIQ" <${process.env.COMPANY_EMAIL}>`,
      to,
      subject,
      html: htmlContent,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
}
