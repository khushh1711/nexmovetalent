import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;

export default async function handler(req, res) {
  // Handle OPTIONS preflight request for CORS (if any frontend client calls it cross-origin)
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    if (!apiKey) {
      console.error('Missing RESEND_API_KEY environment variable.');
      return res.status(500).json({ error: 'Mail server configuration error: missing API key.' });
    }

    const resend = new Resend(apiKey);
    const { name, email, phone, location, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide Name, Email, and Message.' });
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'info@nexmovetalent.com';
    const toEmail = process.env.RESEND_TO_EMAIL || 'info@nexmovetalent.com';

    const emailSubject = `New Contact Form Submission from ${name}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1a202c;">
          <h2 style="color: #059669; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">
              NexMoveTalent - Contact Submission
          </h2>
          <div style="margin-top: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a></p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Location:</strong> ${location || 'Not provided'}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #059669; border-radius: 4px;">
              <h4 style="margin: 0 0 10px 0; color: #334155;">Message / Goals:</h4>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; color: #475569;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center; margin: 0;">
              This email was sent automatically from the NexMoveTalent website via Resend.
          </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: `NexMoveTalent Website <${fromEmail}>`,
      to: [toEmail],
      subject: emailSubject,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ error: error.message || 'Resend failed to send email.' });
    }

    return res.status(200).json({ success: true, messageId: data.id });
  } catch (err) {
    console.error('Serverless function exception:', err);
    return res.status(500).json({ error: err.message || 'Internal server error.' });
  }
}
