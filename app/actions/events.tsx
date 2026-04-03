"use server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitEventInquiry(formData: any) {
  try {
    await resend.emails.send({
      from: 'Hotel Events <onboarding@resend.dev>',
      to: ['vishwa00007@gmail.com'],
      subject: `New Event Inquiry: ${formData.eventType} - ${formData.name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #1a2a3a;">New Event Inquiry</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Email:</strong> ${formData.email || "Not provided"}</p>
          <p><strong>Event Type:</strong> ${formData.eventType}</p>
          <p><strong>Guests:</strong> ${formData.guests}</p>
          <p><strong>Date:</strong> ${formData.date}</p>
          <p><strong>Notes:</strong> ${formData.notes}</p>
        </div>
      `,
    });
    return { success: true };
  } catch (err) {
    return { success: false };
  }
}
