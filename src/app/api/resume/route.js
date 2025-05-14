import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const {formData } = body;

    if (!formData) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID_RESUME || !process.env.EMAILJS_PUBLIC_KEY || !process.env.EMAILJS_PRIVATE_KEY) {
      return NextResponse.json({ error: "Missing environment variables" }, { status: 500 });
    }

      const response = await fetch(`${process.env.EMAILJS_API_URL}/api/v1.0/email/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID_RESUME,
          user_id: process.env.EMAILJS_PUBLIC_KEY,  // ✅ Add public key
          accessToken: process.env.EMAILJS_PRIVATE_KEY,  // ✅ Add private key
          template_params: {
            formData: formData
          },
        }),
      });
    if (response.ok) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    }  else {
      const errorText = await response.text();
      console.error("EMAILJS ERROR RESPONSE:", errorText);
      throw new Error(`Failed to send email: ${errorText}`);
    }
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
