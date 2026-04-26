import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, service } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'contact@resend.dev',
      to: [process.env.CONTACT_EMAIL ?? 'your@email.com'],
      subject: `New Enquiry from ${name} — PrimeLane Freight`,
      replyTo: email,
      html: `
        <div style="font-family: 'Open Sans', sans-serif; max-width: 600px; margin: 0 auto; background: #f7f5f0; padding: 40px 24px;">
          <div style="background: #3A9A82; padding: 32px 40px; text-align: center; margin-bottom: 32px;">
            <h1 style="color: white; font-family: 'Raleway', sans-serif; font-weight: 300; font-size: 28px; letter-spacing: 0.1em; text-transform: uppercase; margin: 0;">
              NEW ENQUIRY
            </h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">PrimeLane Freight — Contact Form</p>
          </div>
          
          <div style="background: white; padding: 32px 40px; border-top: 3px solid #3A9A82;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0E0E0; color: #3A9A82; font-weight: 600; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; width: 130px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0E0E0; color: #2C2C2C; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0E0E0; color: #3A9A82; font-weight: 600; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0E0E0; color: #2C2C2C; font-size: 14px;"><a href="mailto:${email}" style="color: #3A9A82;">${email}</a></td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0E0E0; color: #3A9A82; font-weight: 600; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0E0E0; color: #2C2C2C; font-size: 14px;">${phone}</td>
              </tr>` : ''}
              ${company ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0E0E0; color: #3A9A82; font-weight: 600; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0E0E0; color: #2C2C2C; font-size: 14px;">${company}</td>
              </tr>` : ''}
              ${service ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0E0E0; color: #3A9A82; font-weight: 600; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0E0E0; color: #2C2C2C; font-size: 14px;">${service}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 12px 0; color: #3A9A82; font-weight: 600; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #2C2C2C; font-size: 14px; line-height: 1.7;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
          </div>

          <p style="text-align: center; color: #999; font-size: 11px; margin-top: 24px;">© 2026 PrimeLane Freight. All rights reserved.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error('Send route error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
