import { db } from "../../../../lib/firebase"; // Import your Firebase config
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
export async function POST(req) {
  try {
    const newJob = await req.json();
    // Add additional fields
    const jobWithMetadata = {
      ...newJob,
      // id: crypto.randomUUID(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      status: "active" // default status
    };
    // Add to Firestore
    const docRef = await addDoc(collection(db, "jobs"), jobWithMetadata);
    return new Response(
      JSON.stringify({
        message: "Job added successfully",
        id: docRef.id
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding job:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}