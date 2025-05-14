import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
const project = "adminboard-db0c6";
const client = "firebase-adminsdk-fbsvc@adminboard-db0c6.iam.gserviceaccount.com";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCt6EaFfs/a3YiO\nJ4oOH0RKCtK1fR+i0OlsRDFV3o0wLJyMF9a5vpLYG0zqWZ0xtBPIxEb08czMa0VF\nN1PBKtd/wRGXkAHJlV4hafVzxf7jvsJpUPHyeN5JKyc0+PKhs1KW8sBjvgrLyslf\niGWbudHNk5m9AW3mABvRUE7t3zvM8e50p7jl43P+H/MG+uIq5ukJDwiF3QUsXY4B\nb0g0AMeWk2aSdLZ1j8ZAgqex4O1iHlGc+Vbp8Ug0cvabJRAQ2cwEVr+UpL5mcDYQ\n8o6zEpQzOLwVbso6Dg+oROYZgO5bThIdbeuRSpR5Gzy/qmruB18o4zSQWLxVp3C9\n4qmuAnZnAgMBAAECggEAJrPPpfvv1ByDPGeuQLBSqUu5UuySstBdclvGwv5xW2xC\nNqdDgTjZQ0DoICtrYVlbIc4UoISDeGbTFrFWcWHQbb0Q5jMFQtB8D2GeX3KL5DFa\n4MdD4RtnFM+GvTI+BSB8W92QVWJA0tPBdwJK4po7B842Y6rCw3H4vt9pgWSx0U0U\nNRTMQGYE/KDnkGEv0oFLxRiCWv0WWox94jmov6O4SNFwqzYqrN84Sr7gtCebP6Do\nXt2gYLdCO0WtFTocVuDzrSieJz2Ug2xaFMA1GgNOKUsb39hAWZNkbdE22b2kMpOu\nTT3jZ3SNNL8cIUaL5vZjTXUk//Ue2ZmabcyniP5N4QKBgQDaVJDOIsykvsuq/6DR\nuYizha4Go+nJA4/GNTkpDfjHx+X6c28I2n2jHa4h62x89V24y13vIGHHqhnwu2J8\nMSI6ZqtKG9fvoU4RQi9DW2KHSRQQaw4kP5IFYBuCZW1Gj1acAuScITOjAIb6M4xE\nSiRG1PiDGDLTbVzaYF+q0NQ+UQKBgQDL6ZbwAbp6UW1yrP8+xMq63lj14rtypebR\n6awSzdcikacqSefA5SAxmYiDZ7PCvapksUabKCf6zN9cov2dEkwxGA6AO+F4lprK\nD4IXFeUFKd7ustFmmaczfa9Rto+BY3ZmzKdQOL+A9KaRs4u+h1eMvLsr0xEYnpBW\n8Rt74KQjNwKBgAlwGGZgyLniaYl1zWzjeU5RXAl7cnK3DbMCv/rPWM7CDGX8MXOP\nhljTwqBCvgjUzn1bhS7+Flv8NWzbnNFDing90e+9LmN0dJx4YPSncaXpec2P4yeb\n++LxmZ7UZZnkPlk2Is3A/atxLWSJb+nPzqulLyzzkdbj5lymR9xpdJNRAoGAcVlB\ni9yKGiBVZJ+BqxSdVM7wSI5mgE50Rk9MVY+SfSbV843tg65Z/PhJiDIHHMNtild4\n1hq2TpW/u7DmpX9cVxX2SZX/uZaOKLACMm77RamGwM0p1YyoAtlksVl34Aa39GDi\nyJci7L4SMX/KuHhnVFY8/RlwsWzC83FHQ88VrnUCgYBxf1I0/nnmP2F9HDOnv2PY\niIjtxsbaM6TCHZt2KTw6gQi1ancIfBkRsxeKCTfdqGGZYMgy4DGyU/1ifZGg6Wd6\n5GBen4MMklhj8ynjoVBjPF9Opapjey1g87DlxQHlPFymkjB/fSPDt3RCWVdha5TA\nkG7JBvA1fMs01IdcnQ7Erw==\n-----END PRIVATE KEY-----\n";
const privateId = private_key.replace(/\\n/g, '\n');
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: project,
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
