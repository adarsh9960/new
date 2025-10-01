import { NextRequest, NextResponse } from 'next/server';

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

    // Here you would typically:
    // 1. Send an email using SMTP/SendGrid
    // 2. Save to a database
    // 3. Send notification to admin
    // For now, we'll just log the data
    console.log('Contact form submission:', body);

    // Mock email sending
    console.log('Email would be sent to: contact.elitecabsmumbai@gmail.com');
    console.log('Subject: New Contact Form Submission from', body.name);
    console.log('Body:', `
      Name: ${body.name}
      Email: ${body.email}
      Phone: ${body.phone}
      From: ${body.from}
      To: ${body.to}
      Date: ${body.date}
      Time: ${body.time}
      Message: ${body.message}
    `);

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
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