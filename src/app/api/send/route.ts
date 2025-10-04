import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      // IMPORTANT: You must use a verified domain with Resend.
      // Free domains like '.vercel.app' cannot be verified.
      // Replace 'yourdomain.com' with your actual, verified domain.
      from: 'DevHive Contact Form <noreply@yourdomain.com>',
      // CHANGE THIS to the email address where you want to receive messages.
      to: ['sirlaw179@gmail.com'], 
      subject: `New message from ${name}`,
      reply_to: email,
      react: ContactFormEmail({ name, email, message }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
