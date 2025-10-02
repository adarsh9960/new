import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  from: string;
  to: string;
  date: string;
  time: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'from', 'to', 'date', 'time'];
    for (const field of requiredFields) {
      if (!body[field as keyof ContactFormData]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Setup transporter (same config as your PHPMailer setup)
    const transporter = nodemailer.createTransport({
      host: 'sg2plzcpnl509587.prod.sin2.secureserver.net',
      port: 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: 'postman@itzadarsh.co.in',
        pass: 'Adarsh_1M9960',
      },
      tls: {
        rejectUnauthorized: false, // sometimes needed for self-signed certs
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"Email Form" <postman@itzadarsh.co.in>`,
      to: 'admin@itzadarsh.co.in',
      replyTo: `${body.email}`,
      subject: `New Contact Form Submission from ${body.name}`,
      text: `
        Name: ${body.name}
        Email: ${body.email}
        Phone: ${body.phone}
        From: ${body.from}
        To: ${body.to}
        Date: ${body.date}
        Time: ${body.time}
        Message: ${body.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Phone:</b> ${body.phone}</p>
        <p><b>From:</b> ${body.from}</p>
        <p><b>To:</b> ${body.to}</p>
        <p><b>Date:</b> ${body.date}</p>
        <p><b>Time:</b> ${body.time}</p>
        <p><b>Message:</b> ${body.message}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Contact form submitted and email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
