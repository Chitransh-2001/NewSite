// app/api/updatejob/route.js
import { db } from "../../../../lib/firebase";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
export async function POST(req) {
  try {
    const updatedJob = await req.json(); // Get job data from request body
    const { id, ...rest } = updatedJob;
    if (!id) {
      return new Response(JSON.stringify({ error: "Job ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    const docRef = doc(db, "jobs", id);
    // Append updated timestamp
    await updateDoc(docRef, {
      ...rest,
      updatedAt: serverTimestamp(),
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Job updated successfully",
        id,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Update error:", error);
    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}