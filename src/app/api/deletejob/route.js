// app/api/deletejob/route.js
import { db } from "../../../../lib/firebase";
import { doc, deleteDoc } from "firebase/firestore";
export async function DELETE(req) {
  try {
    const { id } = await req.json(); // Get ID from body
    if (!id) {
      return new Response(JSON.stringify({ error: 'Job ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    const docRef = doc(db, "jobs", id);
    await deleteDoc(docRef);
    return new Response(JSON.stringify({
      success: true,
      message: 'Job deleted successfully',
      id
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Delete error:', error);
    return new Response(JSON.stringify({
      error: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}









