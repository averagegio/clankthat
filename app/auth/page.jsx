"use client";

import { useState } from "react";
import BackHome from "../components/BackHome";

async function post(url, data) {
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signup");
  const [msg, setMsg] = useState("");

  async function submit(e) {
    e.preventDefault();
    setMsg("");
    try {
      const endpoint = mode === "signup" ? "/api/auth/signup" : "/api/auth/login";
      await post(endpoint, { email, password });
      setMsg("Success! You are signed in.");
    } catch (err) {
      setMsg(String(err.message || err));
    }
  }

  return (
    <div className="mx-auto max-w-sm px-4 pt-12">
      <BackHome />
      <h1 className="text-2xl font-semibold neon-heading">{mode === "signup" ? "Create account" : "Sign in"}</h1>

      <form onSubmit={submit} className="mt-6 grid gap-3">
        <input
          className="rounded-md border border-white/15 bg-transparent px-3 py-2"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="rounded-md border border-white/15 bg-transparent px-3 py-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="rounded-full px-4 py-2 btn-neon-primary" type="submit">
          {mode === "signup" ? "Sign up" : "Log in"}
        </button>
      </form>

      <button className="mt-3 text-sm text-white/80 hover:underline" onClick={() => setMode(mode === "signup" ? "login" : "signup")}>
        {mode === "signup" ? "Have an account? Log in" : "New here? Create an account"}
      </button>

      {msg && <p className="mt-4 text-sm text-white/80">{msg}</p>}
    </div>
  );
}


