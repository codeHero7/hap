"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitApplication(formData: FormData) {
  const resume = formData.get("resume") as File;
  
  if (!resume || resume.size === 0) {
    return { success: false, error: "No file uploaded" };
  }

  try {
    // 1. Convert File to ArrayBuffer, then to Node.js Buffer
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const { data, error } = await resend.emails.send({
      from: 'Hotel Careers <onboarding@resend.dev>',
      to: ['vishwa00007@gmail.com'],
      subject: `New Application: ${formData.get("position")}`,
      html: `<p>New application received from ${formData.get("name")}</p>`,
      attachments: [
        {
          filename: resume.name, // Must include filename
          content: buffer,       // Pass the Buffer directly
        },
      ],
    });

    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error("Attachment Error:", err);
    return { success: false };
  }
}
