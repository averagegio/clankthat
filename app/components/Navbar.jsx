"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-[color:var(--background)]/80 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--background)]/60 border-b border-white/10">
      <div className="mx-auto max-w-screen-lg px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/clankthatlogo1.jpg"
            alt="ClankThat logo"
            width={160}
            height={48}
            priority
            className="h-8 w-auto sm:h-10"
          />
        </Link>
        <nav className="hidden sm:flex items-center gap-5 text-sm">
          <Link href="#features" className="hover:opacity-80">Features</Link>
          <Link href="#robots" className="hover:opacity-80">Robots</Link>
          <Link href="#services" className="hover:opacity-80">Services</Link>
          <Link href="/matches" className="hover:opacity-80">Matches</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="#get-started" className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium btn-neon-primary">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}


