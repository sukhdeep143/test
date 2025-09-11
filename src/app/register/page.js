"use client"
import { useState } from "react"

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage("Processing...")

        try {
            const res = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form), // ✅ fixed typo
            });

            const data = await res.json();
            setMessage(data.message || "Registration successful!");
        } catch (error) {
            console.error(error);
            setMessage("Something went wrong...");
        }
    }

    return (
        <div className="bg-black h-screen text-white justify-center items-center flex">
            <form
                className="flex flex-1 flex-col justify-center items-center gap-5"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border-2 p-4"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border-2 p-4"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border-2 p-4"
                />
                <button
                    type="submit"
                    className="rounded-2xl border-2 p-4"
                >
                    Submit
                </button>
                {message && <p>{message}</p>}
            </form>
        </div>
    )
}
