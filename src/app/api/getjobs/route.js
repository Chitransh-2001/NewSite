// app/api/jobs/route.ts (or .js if you're not using TypeScript)
import { db } from "../../../../lib/firebase"; // Firebase config
import { collection, getDocs, query, orderBy } from "firebase/firestore";
export async function GET() {
  try {
    const jobsCollection = collection(db, "jobs");
    const q = query(jobsCollection, orderBy("createdAt", "desc")); // Optional ordering
    const querySnapshot = await getDocs(q);
    const jobs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return new Response(JSON.stringify(jobs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return new Response(JSON.stringify({ error: "Error fetching jobs" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
