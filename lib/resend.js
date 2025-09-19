import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, html }) {
  try {
    const data = await resend.emails.send({
      from: "info.aquintel@gmail.com", // company email
      to: [to, "info.aquintel@gmail.com"], // send to user + copy to company
      subject,
      html,
    });
    return data;
  } catch (error) {
    console.error("Email send error:", error);
    throw error;
  }
}
