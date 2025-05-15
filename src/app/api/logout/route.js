// app/api/logout/route.js

export async function POST() {
    // Do any token/session cleanup here
    return new Response(JSON.stringify({ message: "Logged out" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  
