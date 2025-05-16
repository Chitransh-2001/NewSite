// app/api/upload/route.js
import { google } from 'googleapis';
import { Readable } from 'stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper to convert a Buffer to a Readable Stream
function bufferToStream(buffer) {
  return new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });
}
const googleApiKey = "ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAiYWRtaW5ib2FyZC1kYjBjNiIsCiAgInByaXZhdGVfa2V5X2lkIjogIjEwZWIxNDYwMDkzYzEzODRjM2JkZTg4ZDZhYzQ0NDY2MjVmNGQyYTYiLAogICJwcml2YXRlX2tleSI6ICItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUV2d0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktrd2dnU2xBZ0VBQW9JQkFRQzhUWUdhcGNhZ2RudU9cbjFQcGl5akNiOWVXNEhxWWx3cnpkS1hTWE9ZbHhlKzhaWUlScnhEN2QrYUhMdHlRYVdBY1Q0dFYyMjZkQ2pQNWJcbk9wRFZITWhCQmlVQnV2endNRk45WHc0cE1wQmhNeGw0NDRWSkVQWGdncituWnhrM2xWeXF6ODVQL1g3Z0xFVU9cblZaWmE4RkFTNkpCd1phN3MrS0xWT3hPUzM0a3JDVVgzdnJaWHlEUkl5OTNGblJJZ2Z2WjlxdWJZcnh5VUx0aklcbit1bkN5NHNabzltQUhONUppRzFwZDZhbDluTmdQdGI4WnRxN2srRmpUMTQxNmxmLy9ZSHdmczlONmlWTVZWSkZcbnNITXJEbC80YWxqNDFuaEU3NUVBaUdYdlkwQ24reGcyRWVVN2loN0JHaEc4ck9Rci9oeFJjK1JqT1hJb1Jxdndcbk9mYUFWQVo5QWdNQkFBRUNnZ0VBSnJkTjRrRGErOE9ZcUhlb1NwY1ZVdi9HUFdySjBRSSs2RDhkaW5sSlJlVE1cbk5wekdaVXo2ZXhQWVBTVTQzbFRDa2NkbUNmUGtLallJbHpQTnN3K2hxZUxzU1hTTGpJdjNJcFFnZW41N3VveHhcbjNJMzFLZDU3bTI5dW5lb0FBSkpzZE85WWxWQkMzYThrZkt2Q3lBeFlmbWJFU2VQU1NVVmUzM1l2MGxjMUlmeUJcbis1OFdQRmo3NjJiOGxzSEI2OU5DYU1MV3pLUGRObFRQUU1kblBmbWtKTHhrUzVtNHcwUEhVOTZMUytFL3JTS0NcbmRqMlAyRVlXdCtxMXprQUdDby9JclhPK3lyTTAyemE3YUNONUkrZ2JidVNMc3l6dytJQWY5T203cXJzckdlQzZcbkNuRkVwdkMzLzVadnJMR2dvOWJIL0RueFRJN2Yvc2pzZ0lRVFd6YkdjUUtCZ1FEbVI2bXB6dkNyWXk1SURvRGJcbmdsOGgvV1JBVklTSThkTXBBT1V4eHVZbW1VTHpMN2dmZzJSMG1JSTdic0tsYlc2M0c1cHI5YllJbmtyUlkwSTRcbmxINzE0NXNqelRvSkNjVVF2T3ljMTJUcjBNRU5ETUhiam1tNjlKN1NxVDlnOWx2S0NLUkROK3VoSjlTVlAzb0JcbkdFZHJUMGZOQzFzUlpqSHUxVVg4WUtxRHpRS0JnUURSVlptOTd5c2RFcmhEZldvcEtraEYvMm40NWg2VStybDRcbm03Y3paVkR5RVAxYUNMWTk2cnhQUkI3WXZSa2hLTXhtSTZuUG9wZW05d1h1eU4zQ2E2N1JWVmlvZFk5QmxFNi9cbk04Y0p0SzJFaUJrY1IzMDEyZm9YN3I4QXZUL2xJR1E4WUowa1BYalR4NUp2U1pIQ1dSVlpuRW9XM2taa3l0SmxcbkxtODhxa2c5Y1FLQmdRQ2lOamJnaEFKcWFEb1F6ZzZkRWZBYmpGZ1RMTFlUbFcwdWhBL3ZDWEhVSEwvWmVITFZcbjJBTnFVb2ZpZjdvak43djJ4ajMzOEtTaTI0Wk9pd0g1d3pqUDB0M1UwVnNoUkwySmRkdWkrK04rYlpXZnNLM2FcbkVDNlFZSUtFV0c1cHlnQ01oNXZXTWMwTXYzYnpEenpOQ3FJOGlDTkczOG50cnJSYnplWTN5b3d5dlFLQmdRQ1BcbjZLY2V1ZE1MMDVpMVhQeWtmQnJmZEMxb0hOc2RWQmc1WCtOY0ErVFg1UEltK1NKQUFxV2VZSmhNTEFPZ2xpbWVcbmRob0JVaWVyY3RxelE0ZWdadUx4cWhpZkJ1S0xGT2ZsN2pTQTZhTDRINUFUcnRuWE1aa0s1dWlNRzQ1WGVDTXdcbmxzS3c3VW1wWGVPL2VmWW9nNUYzMzBmWDNNckw4OXNjRUFZTTBJdUZJUUtCZ1FEQVZOQ2FhQnAxbThIMHZFa3RcbkpURUY1ZStnV0JVM01xZnVZbjBqQUs2aDg2d0RqOUFZOXRaczdlb3ZXRTAvSGVpbTQ4YzEwbEN4RlQ4cG9EdnVcbll2Mmc3L01IVHJSMnU4UWZFK2ZhMFZMOEJtajFuOElNcjc0Qk8yK3BFcnNNS1NCRGVzb01NT2ZLcU8wR1FFam9cbnEwaEpRUXErYVphZTk2aDd0MnlIeEpmdmdBPT1cbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJmaXJlYmFzZS1hZG1pbnNkay1mYnN2Y0BhZG1pbmJvYXJkLWRiMGM2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjEwMDQxNzQyNzMxMjg3MzczNjAyNiIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZmlyZWJhc2UtYWRtaW5zZGstZmJzdmMlNDBhZG1pbmJvYXJkLWRiMGM2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAidW5pdmVyc2VfZG9tYWluIjogImdvb2dsZWFwaXMuY29tIgp9Cg=="
const googleApiKeyDecoded = Buffer.from(googleApiKey, 'base64').toString('utf8');
const googleApiKeyJson = JSON.parse(googleApiKeyDecoded);

export async function POST(req) {
  try {
    // Read file buffer from request body
    const fileBuffer = await req.arrayBuffer();
    const buffer = Buffer.from(fileBuffer);

    const fileName = req.headers.get('file-name') || 'uploaded_file';
    const mimeType = req.headers.get('content-type') || 'application/octet-stream';

    // Google Auth setup
    const auth = new google.auth.GoogleAuth({
        credentials: googleApiKeyJson,
        scopes: ['https://www.googleapis.com/auth/drive'],
      });
      

    const drive = google.drive({ version: 'v3', auth });

    // Upload file to Google Drive
    const response = await drive.files.create({
      requestBody: {
        name: fileName,
      },
      media: {
        mimeType,
        body: bufferToStream(buffer),
      },
      fields: 'id, webViewLink',
    });

    const fileId = response.data.id;

    // Make file publicly accessible
    await drive.permissions.create({
      fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    const fileUrl = response.data.webViewLink;

    return new Response(JSON.stringify({ fileUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Upload error:', error);
    return new Response(JSON.stringify({ error: 'Upload failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
