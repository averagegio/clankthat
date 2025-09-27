"use client";

import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [sessionId, setSessionId] = useState("");
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("session_id");
    if (id) setSessionId(id);
  }, []);

  return (
    <div className="mx-auto max-w-screen-sm px-4 pt-16 text-center">
      <h1 className="text-2xl font-semibold neon-heading">Payment successful</h1>
      <p className="text-white/80 mt-2">Thanks! Your booking is confirmed.</p>
      {sessionId && (
        <p className="text-white/70 text-sm mt-2">Session: {sessionId}</p>
      )}
      <a href="/" className="mt-6 inline-block rounded-full px-4 py-2 btn-neon-primary">Back home</a>
    </div>
  );
}


