// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { formData } = req.body;

//   if (!formData) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const response = await fetch(`${process.env.EMAILJS_API_URL}/api/v1.0/email/send`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         service_id: process.env.EMAILJS_SERVICE_ID,
//         template_id: process.env.EMAILJS_TEMPLATE_ID,
//         user_id: process.env.EMAILJS_PUBLIC_KEY,
//         template_params: { formData },
//       }),
//     });
//     console.log("===================", response.body
      
//     )
//     if (!response.ok) {
//       throw new Error("Failed to send email");
//     }

//     return res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return res.status(500).json({ message: "Failed to send email" });
//   }
// }
  