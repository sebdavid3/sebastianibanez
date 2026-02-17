import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Cámbialo cuando tengas dominio propio
      to: ['sebdavidibanezrios@gmail.com'],
      subject: `NEW_SIGNAL: Message from ${name}`,
      replyTo: email,
      text: `
        SOURCE_IDENTIFIER: ${name}
        UPLINK_ADDRESS: ${email}
        
        ENCRYPTED_PAYLOAD:
        ${message}
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
