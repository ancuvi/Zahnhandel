import { Handler } from '@netlify/functions';
import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Schema für die Validierung
const ContactSchema = z.object({
  name: z.string().min(2, "Name zu kurz").max(100, "Name zu lang"),
  email: z.string().email("Ungültige E-Mail-Adresse").max(100),
  subject: z.string().min(3, "Betreff zu kurz").max(200),
  reason: z.string().max(50).optional(),
  message: z.string().min(10, "Nachricht zu kurz").max(2000, "Nachricht zu lang"),
  'bot-field': z.string().max(0, "Bot detected").optional().or(z.literal('')),
});

const handler: Handler = async (event) => {
  // Nur POST erlauben
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body || '{}');

    // 1. Bot-Schutz (Honeypot)
    if (data['bot-field'] && data['bot-field'].length > 0) {
      console.warn("Spam-Versuch blockiert.");
      return { 
        statusCode: 400, 
        body: JSON.stringify({ error: "Spam erkannt." }) 
      };
    }

    // 2. Validierung
    const validatedData = ContactSchema.parse(data);

    // 3. Sanitization (Schutz gegen XSS)
    const sanitizedData = {
      name: sanitizeHtml(validatedData.name, { allowedTags: [], allowedAttributes: {} }),
      email: validatedData.email,
      subject: sanitizeHtml(validatedData.subject, { allowedTags: [], allowedAttributes: {} }),
      reason: validatedData.reason || 'Allgemeine Anfrage',
      message: sanitizeHtml(validatedData.message, { allowedTags: [], allowedAttributes: {} }),
    };

    // 4. E-Mail Versand via Resend
    // WICHTIG: Ersetzen Sie 'info@zahnhandel.de' durch Ihre tatsächliche Empfänger-Adresse
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: 'Zahnhandel Website <onboarding@resend.dev>',
      to: 'info@zahnhandel.de',
      reply_to: sanitizedData.email,
      subject: `[Zahnhandel Website] ${sanitizedData.subject}`,
      html: `
        <h2>Neue Anfrage von der Website</h2>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>E-Mail:</strong> ${sanitizedData.email}</p>
        <p><strong>Anliegen:</strong> ${sanitizedData.reason}</p>
        <p><strong>Betreff:</strong> ${sanitizedData.subject}</p>
        <hr />
        <p><strong>Nachricht:</strong></p>
        <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
      `
    });

    if (resendError) {
      console.error("Resend Error:", resendError);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "E-Mail-Versand fehlgeschlagen." }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: "Nachricht erfolgreich gesendet.",
        id: resendData?.id 
      }),
    };

  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: "Validierungsfehler", 
          details: error.errors.map(e => e.message) 
        }),
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Interner Serverfehler" }),
    };
  }
};

export { handler };
