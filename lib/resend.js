import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, html }) {
  try {
    const data = await resend.emails.send({
      from: 'no-reply@aquraiQ.com', // می‌تونی بعدا دامنه اختصاصی بذاری
      to,
      subject,
      html,
    });
    return data;
  } catch (error) {
    console.error('Email send error:', error);
    throw error;
  }
}
