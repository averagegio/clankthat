"use client";

import { useEffect, useState } from "react";
import BackHome from "../../components/BackHome";

export default function SuccessPage() {
  const [sessionId, setSessionId] = useState("");
  const [receiptUrl, setReceiptUrl] = useState("");
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("session_id");
    if (id) setSessionId(id);
    if (id) {
      fetch(`/api/checkout/receipt?session_id=${id}`)
        .then((r) => r.json())
        .then((d) => setReceiptUrl(d.receipt_url || ""))
        .catch(() => {});
    }
  }, []);

  return (
    <div className="mx-auto max-w-screen-sm px-4 pt-16 text-center">
      <div className="text-left"><BackHome /></div>
      <h1 className="text-2xl font-semibold neon-heading">Payment successful</h1>
      <p className="text-white/80 mt-2">Thanks! Your booking is confirmed.</p>
      {sessionId && (
        <p className="text-white/70 text-sm mt-2">Session: {sessionId}</p>
      )}
      {receiptUrl ? (
        <a href={receiptUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-full px-4 py-2 btn-neon-outline border">View receipt</a>
      ) : null}
      <a href="/" className="mt-3 inline-block rounded-full px-4 py-2 btn-neon-primary">Back home</a>
    </div>
  );
}


