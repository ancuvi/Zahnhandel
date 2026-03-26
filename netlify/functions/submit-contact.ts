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
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: 'Zahnhandel Frankenberg <info@zahnhandel.de>',
      to: 'info@zahnhandel.de',
      reply_to: sanitizedData.email,
      subject: `[Zahnhandel Website] ${sanitizedData.subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; color: #1e293b;">
          <div style="background-color: #0d9488; padding: 24px; color: white;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 600;">Neue Website-Anfrage</h1>
          </div>
          <div style="padding: 24px; line-height: 1.6;">
            <p style="margin-top: 0; color: #64748b; font-size: 14px;">Inhalt der Kontakt-Anfrage :</p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 120px; vertical-align: top;">Name:</td>
                <td style="padding: 8px 0;">${sanitizedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">E-Mail:</td>
                <td style="padding: 8px 0;"><a href="mailto:${sanitizedData.email}" style="color: #0d9488; text-decoration: none;">${sanitizedData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Anliegen:</td>
                <td style="padding: 8px 0;">${sanitizedData.reason}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0 16px 0; font-weight: 600; vertical-align: top;">Betreff:</td>
                <td style="padding: 8px 0 16px 0;">${sanitizedData.subject}</td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <p style="font-weight: 600; margin-bottom: 8px;">Nachricht:</p>
              <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #0d9488; font-style: italic;">
                ${sanitizedData.message}
              </div>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
            Diese E-Mail wurde automatisch über das Kontaktformular auf zahnhandel.de generiert.
          </div>
        </div>
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
