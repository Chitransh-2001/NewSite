// app/api/jobs/route.js
// import { adminDb } from "../../../../lib/firebaseAdmin";
import { db } from "../../../../lib/firebase";
export async function GET() {
  try {
    const snapshot = await db.collection("jobs").get();
    const jobs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return new Response(JSON.stringify(jobs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Firestore error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch jobs" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}









