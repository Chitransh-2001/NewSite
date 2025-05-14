"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User signed in:", user.uid);
    } else {
      console.log("No user signed in");
    }
  });
  return () => unsubscribe();
}, []);
  useEffect(() => {
    // Redirect if already logged in
    if (localStorage.getItem("auth") === "true") {
      router.push("/jobboard");
    }
  }, []);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // router.push("/login");
        const uid = user?.uid;
        console.log(uid,"uid")
      } else{
        // alert("User is s/igned out")
      }
    });
  },[])
 const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, username, password);
    const token = await userCredential.user.getIdToken();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Login failed");
    }
    localStorage.setItem('auth', 'true');
    localStorage.setItem('firebaseToken', token);
    router.push('/jobboard');
  } catch (error) {
    setError(error.message);
    console.error("Login error:", error);
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






