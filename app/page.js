import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RobotCard from "./components/RobotCard";

const femaleRobots = [
  {
    name: "Ari-9",
    model: "XR-Alpha",
    tagline: "Adaptive companionship with premium motion and voice synthesis.",
    price: 49,
    image: "/ari-9rbtcomp.jpg",
    slug: "ari-9",
  },
  {
    name: "Nova",
    model: "S2 Pulse",
    tagline: "Expressive servo-face and conversational memory for long chats.",
    price: 39,
    image: "/novarbtcomp.jpg",
    slug: "nova",
  },
  {
    name: "Siva",
    model: "SV-Core",
    tagline: "Calm presence with protective protocols and gentle mode.",
    price: 45,
    image: "/sivarbtcomp.jpg",
    slug: "siva",
  },
];

const maleRobots = [
  {
    name: "Mezo",
    model: "MZ-Class",
    tagline: "Playful personality engine with curated interest matching.",
    price: 42,
    image: "/mezorbtcomp.jpg",
    slug: "mezo",
  },
  {
    name: "Echo",
    model: "Q-Series",
    tagline: "Quiet comfort mode with ambient sensing and adaptive warmth.",
    price: 29,
    image: "/echorbtcomp.jpg",
    slug: "echo",
  },
];

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="mx-auto max-w-screen-lg px-4 pt-8">
        {/* Hero */}
        <section className="grid gap-6 sm:grid-cols-2 sm:items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight neon-heading">
              Swipe love. Book services. For humans and robots.
            </h1>
            <p className="mt-2 text-white/80">
              ClankThat is a mobile-first robot dating and services platform. Safe,
              private, and designed for real connection.
            </p>
            <div className="mt-4 flex gap-3">
              <a className="rounded-full px-4 py-2 text-sm font-medium btn-neon-primary" href="/auth">Get started</a>
              <a className="rounded-full px-4 py-2 text-sm font-medium btn-neon-outline border" href="#learn-more">Learn more</a>
            </div>
          </div>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10">
            <Image src="/robotdating2.jpg" alt="Robot and human embracing in a futuristic, cozy setting" fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-12 grid gap-4 sm:grid-cols-3">
          {["Verified profiles","Private sessions","On-demand services"].map((t, i) => (
            <div key={i} className="rounded-xl border border-white/10 p-4 bg-white/[.02]">
              <h3 className="text-base font-medium">{t}</h3>
              <p className="mt-1 text-sm text-white/75">Mobile-first, fast, and secure. Built for quick matches and easy booking.</p>
            </div>
          ))}
        </section>

        {/* Robots - Female */}
        <section id="robots" className="mt-12">
          <h2 className="text-xl font-semibold">Featured robots — Female</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {femaleRobots.map((r) => (
              <RobotCard key={r.name} {...r} />
            ))}
          </div>
        </section>

        {/* Robots - Male */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Featured robots — Male</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {maleRobots.map((r) => (
              <RobotCard key={r.name} {...r} />
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-12">
          <h2 className="text-xl font-semibold">Service categories</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {["Companionship","Events","Assistance"].map((c) => (
              <div key={c} className="rounded-xl border border-black/10 dark:border-white/10 p-4">
                <h3 className="text-base font-medium">{c}</h3>
                <p className="mt-1 text-sm text-black/70 dark:text-white/70">Book by the hour with transparent pricing and verified reviews.</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
