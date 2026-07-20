/**
 * Sends a contact form entry to the serverless backend.
 * 
 * This routes the request to Vercel's serverless function `/api/contact`
 * which securely invokes Resend on the server side, keeping secrets safe.
 * 
 * @param {Object} data - Contact form data
 * @param {string} data.name - Sender name
 * @param {string} data.email - Sender email address
 * @param {string} data.phone - Sender phone number
 * @param {string} data.location - Sender location
 * @param {string} data.message - Message body
 */
export const sendContactEmail = async (data) => {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                phone: data.phone,
                location: data.location,
                message: data.message,
            }),
        });

        let result;
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            result = await response.json();
        } else {
            result = { error: await response.text() };
        }

        if (!response.ok) {
            throw new Error(result.error || `Server returned error (Status: ${response.status})`);
        }

        return result;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
