'use server';

import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with the API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the schema for form validation using Zod
const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().trim().min(1, { message: 'Message is required.' }),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

// The main server action to send the email
export async function sendEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  // If validation fails, return the errors
  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your input.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Required for the Resend free plan
      to: ['jirapatkantaros.work@gmail.com'], // Your personal email
      subject: `New message from ${name} via your portfolio`,
      replyTo: email, // Set the sender's email as the reply-to address
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { message: 'Failed to send message. Please try again.' };
    }

    return { message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { message: 'An unexpected error occurred. Please try again later.' };
  }
} 