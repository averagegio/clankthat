"use client";

import { useEffect, useState } from "react";
import BackHome from "../components/BackHome";

export default function AboutPage() {
  const [content, setContent] = useState({ definition: "", message: "" });
  useEffect(() => {
    fetch("/api/about").then((r) => r.json()).then(setContent).catch(() => {});
  }, []);

  return (
    <div className="mx-auto max-w-screen-md px-4 pt-12">
      <BackHome />
      <h1 className="text-3xl font-semibold neon-heading">About ClankThat</h1>
      <div className="mt-6 rounded-xl border border-white/10 p-4 bg-white/[.02]">
        <h2 className="text-lg font-medium">Definition</h2>
        <p className="mt-1 text-white/80">{content.definition}</p>
      </div>
      <div className="mt-6 rounded-2xl border border-white/10 p-5 bg-white/[.03]">
        <h2 className="text-lg font-medium">Our mission</h2>
        <p className="mt-2 text-white/85 leading-7">{content.message}</p>
      </div>
    </div>
  );
}


