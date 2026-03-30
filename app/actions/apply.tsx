// actions/apply.tsx (Make sure extension is .tsx)
"use server";

import { Resend } from 'resend';
import { JobEmail } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitApplication(formData: FormData) {
  const name = formData.get("name") as string;
  const position = formData.get("position") as string;
  // ... other fields

  try {
    await resend.emails.send({
      from: 'Hotel HR <onboarding@resend.dev>',
      to: ['hr@yourhotel.com'],
      subject: `New Application: ${position}`,
      // Pass the component as a React element
      react: <JobEmail name={name} position={position} />, 
    });
    return { success: true };
  } catch (error) {
    console.error("Resend Error:", error);
    return { success: false };
  }
}
