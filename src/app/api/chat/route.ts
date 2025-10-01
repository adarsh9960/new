import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

// CHANGE_PHONE_AND_MESSAGES_HERE
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '917021751691';
const WHATSAPP_PRE_TEXT = "Hi, I'd like to know about your cab rates.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PRE_TEXT)}`;

// NOTE: Change PHONE and messages in .env or config file
// Example .env.example
// NEXT_PUBLIC_WHATSAPP_PHONE=917021751691
// NEXT_PUBLIC_GLM_API_KEY=your_glm_key_here

// keywords (trimmed, lowercase)
const rateKeywords = [
  'rate', 'rates', 'price', 'prices', 'cost', 'fare', 'pricing',
  'charge', 'how much', 'tariff', 'fee'
];

function containsKeyword(text: string, keywords: string[]) {
  if (!text) return false;
  const t = text.toLowerCase();
  return keywords.some(k => t.includes(k));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const message = (body?.message || '').toString().trim();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // short-circuit: if user asked about rates -> return WhatsApp button flag
    const isRateInquiry = containsKeyword(message, rateKeywords);
    if (isRateInquiry) {
      return NextResponse.json({
        response: 'For detailed rate information and special offers, please contact us on WhatsApp.',
        showWhatsAppButton: true,
        whatsappUrl: WHATSAPP_URL
      }, { status: 200 });
    }

    // create ZAI only when needed
    const zai = await ZAI.create();

    const systemPrompt = `You are an AI assistant for Elite Cabs 24X7, a taxi service in Mumbai, India. You may ONLY answer queries related to cab booking, taxi services, transportation, and travel within Mumbai.
Important: If a user asks about rates, prices, costs, fares, or pricing, DO NOT provide specific rates. Instead, instruct them to contact WhatsApp (do not include raw URLs).
If the user asks anything unrelated, politely redirect them to ask about cab booking/transportation only.
Keep answers concise, helpful, and professional.`;

    const completion = await zai.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    const aiRaw = completion?.choices?.[0]?.message?.content;
    const aiResponse = (aiRaw || 'I can only assist with cab booking related queries. How can I help?').toString().trim();

    // if AI accidentally mentions price/rate words, force redirect suggestion
    if (containsKeyword(aiResponse, rateKeywords)) {
      return NextResponse.json({
        response: 'For detailed rate information and special offers, please contact us on WhatsApp.',
        showWhatsAppButton: true,
        whatsappUrl: WHATSAPP_URL
      }, { status: 200 });
    }

    // Normal reply (no WhatsApp button)
    return NextResponse.json({
      response: aiResponse,
      showWhatsAppButton: false
    }, { status: 200 });
  } catch (err) {
    console.error('Chat API error:', err);
    return NextResponse.json({ error: 'Failed to process your request' }, { status: 500 });
  }
}
