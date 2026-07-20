/**
 * Sends a contact form email notification using Resend API.
 * 
 * NOTE: Calling Resend directly from the client side (browser) will encounter CORS errors
 * because Resend blocks browser requests for security (to prevent exposing your API Key).
 * 
 * In development, you can use a CORS proxy or Vite configuration proxy to bypass this, 
 * or deploy a serverless API function (e.g. on Vercel/Netlify) for production.
 * 
 * @param {Object} data - Contact form data
 * @param {string} data.name - Sender name
 * @param {string} data.email - Sender email address
 * @param {string} data.phone - Sender phone number
 * @param {string} data.location - Sender location
 * @param {string} data.message - Message body
 */
export const sendContactEmail = async (data) => {
    const apiKey = import.meta.env.RESEND_API_KEY;
    const fromEmail = import.meta.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = import.meta.env.RESEND_TO_EMAIL;

    if (!apiKey || apiKey === 're_YOUR_KEY_HERE') {
        throw new Error('Resend API key is missing. Please configure RESEND_API_KEY in your .env file.');
    }

    if (!toEmail) {
        throw new Error('Recipient email is missing. Please configure RESEND_TO_EMAIL in your .env file.');
    }

    const emailSubject = `New Contact Form Submission from ${data.name}`;
    const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1a202c;">
            <h2 style="color: #059669; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">
                NexMoveTalent - Contact Submission
            </h2>
            <div style="margin-top: 20px;">
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #059669; text-decoration: none;">${data.email}</a></p>
                <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
                <p><strong>Location:</strong> ${data.location || 'Not provided'}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #059669; border-radius: 4px;">
                <h4 style="margin: 0 0 10px 0; color: #334155;">Message / Goals:</h4>
                <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; color: #475569;">${data.message}</p>
            </div>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
            <p style="font-size: 12px; color: #94a3b8; text-align: center; margin: 0;">
                This email was sent automatically from the NexMoveTalent website via Resend.
            </p>
        </div>
    `;

    try {
        const response = await fetch('/api-resend/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: `NexMoveTalent Contact <${fromEmail}>`,
                to: [toEmail],
                subject: emailSubject,
                html: emailHtml,
            }),
        });

        let result;
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            result = await response.json();
        } else {
            result = { message: await response.text() };
        }

        if (!response.ok) {
            throw new Error(result.message || `Resend API error (Status: ${response.status})`);
        }

        return result;
    } catch (error) {
        console.error('Error sending email via Resend:', error);
        
        // Custom error handling for CORS or Network issues
        if (error.message === 'Failed to fetch') {
            throw new Error(
                'CORS/Network error: Browsers block direct client-side requests to Resend to protect API keys. ' +
                'Please configure a backend serverless function (e.g. Vercel API) or a CORS proxy to securely route this request.'
            );
        }
        
        throw error;
    }
};
