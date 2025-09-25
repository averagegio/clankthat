"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import BookingModal from "./BookingModal";

export default function RobotCard({ name, model, tagline, price, image, slug }) {
  const [isBooking, setIsBooking] = useState(false);
  const [bookedId, setBookedId] = useState("");
  const [open, setOpen] = useState(false);

  async function preload() {
    setIsBooking(true);
    try {
      const res = await fetch(`/api/robots/${slug}`);
      const data = await res.json();
      setOpen(true);
      // store minimal bookedId hint reset
      setBookedId("")
      return data.robot;
    } finally {
      setIsBooking(false);
    }
  }
  return (
    <article className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-[color:var(--background)] shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/10]">
        <Link href={`/robots/${slug}`}>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
        </Link>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <Link href={`/robots/${slug}`} className="text-base font-semibold tracking-tight hover:underline">
            {name}
          </Link>
          <span className="text-sm text-black/70 dark:text-white/60">{model}</span>
        </div>
        <p className="mt-1 text-sm text-black/70 dark:text-white/65 line-clamp-2">{tagline}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-medium">${price}/hr</span>
          <button
            onClick={preload}
            className={`rounded-full px-3 py-1.5 text-sm border border-white/15 hover:shadow-[0_0_20px_var(--accent-pink)] transition-all ${
              isBooking ? "opacity-70" : "btn-neon-outline"
            }`}
          >
            {isBooking ? "Booking..." : bookedId ? "Booked!" : "Book"}
          </button>
        </div>
        {bookedId && (
          <p className="mt-2 text-xs text-white/75">Confirmation: {bookedId}</p>
        )}
        {open && (
          <BookingModal
            robot={{ name, model, price, slug, services: [], personality: [], bio: tagline, image }}
            onClose={() => setOpen(false)}
          />
        )}
      </div>
    </article>
  );
}


