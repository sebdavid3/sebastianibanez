import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY in environment variables");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['sdibanez@uninorte.edu.co'],
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
      console.error("Resend API Error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
