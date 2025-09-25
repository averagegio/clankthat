"use client";

import { useState } from "react";

export default function BookingModal({ robot, onClose }) {
  const [hours, setHours] = useState(1);
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const full = robot;

  async function confirm() {
    setLoading(true);
    try {
      const res = await fetch(`/api/robots/${robot.slug}/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hours }),
      });
      const data = await res.json();
      setConfirmation(data.confirmation);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60">
      <div className="w-full max-w-md rounded-2xl border border-white/15 bg-[color:var(--background)] p-5 shadow-2xl">
        <h3 className="text-lg font-semibold neon-heading">Book {full.name}</h3>
        <p className="text-white/75 mt-1">{full.model} • ${full.price}/hr</p>

        <div className="mt-3">
          <h4 className="font-medium">Services</h4>
          <div className="mt-1 flex flex-wrap gap-2">
            {(full.services ?? []).map((s) => (
              <span key={s} className="text-xs px-2 py-1 rounded-full border border-white/15">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <h4 className="font-medium">Personality</h4>
          <div className="mt-1 flex flex-wrap gap-2">
            {(full.personality ?? []).map((p) => (
              <span key={p} className="text-xs px-2 py-1 rounded-full border border-white/15">
                {p}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-3 text-sm text-white/80">{full.bio}</p>

        <div className="mt-4 flex items-center gap-3">
          <label className="text-sm">Hours</label>
          <input
            type="number"
            min={1}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-20 rounded-md border border-white/15 bg-transparent px-2 py-1"
          />
          <span className="text-sm text-white/75">Total ${full.price * hours}</span>
        </div>

        <div className="mt-5 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-full px-4 py-2 btn-neon-outline border">Close</button>
          <button onClick={confirm} disabled={loading} className="rounded-full px-4 py-2 btn-neon-primary">
            {loading ? "Booking..." : "Confirm booking"}
          </button>
        </div>

        {confirmation && (
          <p className="mt-3 text-xs text-white/75">Confirmation: {confirmation.id}</p>
        )}
      </div>
    </div>
  );
}


