import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const client = process.env.NEXT_PUBLIC_FIREBASE_CLIENT_URL;
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || "{}");
const private_key = serviceAccount.private_key || "";
const project_id = serviceAccount.project_id || "";
const privateId = private_key.replace(/\\n/g, '\n');
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: project_id,
      clientEmail: client,
      privateKey: privateId,
    }),
  });
}
export async function POST(req) {
  try {
    const { token } = await req.json();
    const decodedToken = await getAuth().verifyIdToken(token);
    const uid = decodedToken.uid;
    return new Response(JSON.stringify({ success: true, uid }), { status: 200 });
  } catch (error) {
    console.error("Token verification failed:", error);
    return new Response(JSON.stringify({ success: false, message: "Invalid token" }), { status: 401 });
  }
}
