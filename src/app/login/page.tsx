"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange= (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
 
  }
  const handleLogin = async (e) => {
    e.priventDefault()
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Login successful:", data);
        router.push("/home"); // ✅ redirect to home page
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
      console.log(err)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="border p-2 mb-2"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
