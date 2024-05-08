import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_bnYYCpmt_NAonuf889epTeHdvCq9izEbn');

// Retrieve FROM_EMAIL from environment variables
const fromEmail = process.env.FROM_EMAIL;

// Export the POST handler function
export async function POST(req, res) {
  try {
    // Extract email, subject, and message from the request body
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);

    // Send email using Resend
    const data = await resend.emails.send({
      from: fromEmail, // Sender email address
      to: [fromEmail, email], // Recipient email addresses
      subject: subject, // Email subject
      react: ( // Email content (React component)
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    // Return a JSON response with the email sending result
    return NextResponse.json(data);
  } catch (error) {
    // Handle errors and return an appropriate response
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" });
  }
}
