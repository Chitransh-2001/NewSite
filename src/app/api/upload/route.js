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

export async function POST(req) {
  try {
    // Read file buffer from request body
    const fileBuffer = await req.arrayBuffer();
    const buffer = Buffer.from(fileBuffer);

    const fileName = req.headers.get('file-name') || 'uploaded_file';
    const mimeType = req.headers.get('content-type') || 'application/octet-stream';

    // Google Auth setup
    const auth = new google.auth.GoogleAuth({
        credentials: JSON.parse(
          Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64, 'base64').toString('utf8')
        ),
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
