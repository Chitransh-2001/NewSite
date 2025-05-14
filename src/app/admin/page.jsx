"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Redirect if already logged in
    if (localStorage.getItem("auth") === "true") {
      router.push("/jobboard");
    }
  }, []);

  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     const storedUsername = process.env.NEXT_PUBLIC_USERNAME;
  //     const storedPassword = process.env.NEXT_PUBLIC_PASSWORD;

  //     if (username === storedUsername && password === storedPassword) {
  //       localStorage.setItem("auth", "true"); // Store auth status
  //       router.push("/jobboard"); // Redirect on success
  //     } else {
  //       setError("Invalid username or password");
  //     }
  //   };
  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("auth", "true");
      router.push("/jobboard");
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 max-w-sm bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#333",
              fontFamily: "NovemberPro-Reg !important",
            }}
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
