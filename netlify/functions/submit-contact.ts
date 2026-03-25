import { Handler } from '@netlify/functions';
import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';

// Schema for validation
const ContactSchema = z.object({
  name: z.string().min(2, "Name zu kurz").max(100, "Name zu lang"),
  email: z.string().email("Ungültige E-Mail-Adresse").max(100),
  subject: z.string().min(3, "Betreff zu kurz").max(200),
  reason: z.string().max(50).optional(),
  message: z.string().min(10, "Nachricht zu kurz").max(2000, "Nachricht zu lang"),
  'bot-field': z.string().max(0, "Bot detected").optional().or(z.literal('')),
});

const handler: Handler = async (event) => {
  // 1. Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body || '{}');

    // 2. Bot/Honeypot Protection
    if (data['bot-field'] && data['bot-field'].length > 0) {
      console.warn("Spam attempt blocked via honeypot.");
      return { 
        statusCode: 400, 
        body: JSON.stringify({ error: "Spam detected." }) 
      };
    }

    // 3. Validation
    const validatedData = ContactSchema.parse(data);

    // 4. Sanitization (Defense against XSS)
    const sanitizedData = {
      name: sanitizeHtml(validatedData.name, { allowedTags: [], allowedAttributes: {} }),
      email: validatedData.email, // Email already validated by regex
      subject: sanitizeHtml(validatedData.subject, { allowedTags: [], allowedAttributes: {} }),
      reason: validatedData.reason,
      message: sanitizeHtml(validatedData.message, { allowedTags: [], allowedAttributes: {} }),
    };

    // 5. Processing / Email Sending
    // TODO: Integrate an email provider like Resend, SendGrid or Mailgun here.
    // Example: await sendEmail(sanitizedData);
    
    console.log("Secure submission received:", sanitizedData);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: "Anfrage erfolgreich gesendet.",
        data: sanitizedData 
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
