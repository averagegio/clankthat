import Link from "next/link";

export default function BackHome() {
  return (
    <div className="mb-4">
      <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:underline">
        <span className="inline-block rotate-180">➜</span>
        <span>Back home</span>
      </Link>
    </div>
  );
}


