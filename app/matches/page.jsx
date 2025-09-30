"use client";

import { useEffect, useMemo, useState } from "react";
import BackHome from "../components/BackHome";

export default function Matches() {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    fetch("/api/robots")
      .then((r) => r.json())
      .then((d) => setCards(d.robots ?? []));
  }, []);

  const current = cards[index];

  function swipe(dir) {
    if (!current) return;
    if (dir === "right") setLiked((l) => [...l, current.slug]);
    setIndex((i) => i + 1);
  }

  return (
    <div className="mx-auto max-w-screen-sm px-4 pt-8">
      <BackHome />
      <h1 className="text-2xl font-semibold neon-heading">Find matches</h1>
      <p className="text-white/75 mt-1">Swipe right to like, left to pass.</p>

      <div className="mt-6 relative h-[420px]">
        {current ? (
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-white/[.02] grid">
            <img src={current.image} alt={current.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{current.name}</h3>
                <span className="text-sm text-white/70">{current.model}</span>
              </div>
              <p className="text-sm text-white/75 mt-1">${current.price}/hr • {current.gender}</p>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 grid place-items-center text-white/70 border border-white/10 rounded-2xl">
            No more cards. {liked.length ? `You liked ${liked.length}.` : ""}
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-3">
        <button onClick={() => swipe("left")} className="rounded-full px-4 py-2 border btn-neon-outline">Pass</button>
        <button onClick={() => swipe("right")} className="rounded-full px-4 py-2 btn-neon-primary">Like</button>
      </div>
    </div>
  );
}


