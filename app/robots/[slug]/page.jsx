import Image from "next/image";
import { getRobotBySlug } from "@/app/lib/robots";
import BackHome from "../../components/BackHome";

export default function RobotProfile({ params }) {
  const robot = getRobotBySlug(params.slug);
  if (!robot) return <div className="mx-auto max-w-screen-lg px-4 pt-8">Not found</div>;

  return (
    <div className="mx-auto max-w-screen-lg px-4 pt-8">
      <BackHome />
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
          <Image src={robot.image} alt={robot.name} fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold neon-heading">{robot.name}</h1>
          <p className="text-white/75">{robot.model} • ${robot.price}/hr • {robot.gender}</p>
          <p className="mt-3 text-white/80">{robot.bio}</p>
          <div className="mt-4">
            <h2 className="font-medium">Services</h2>
            <ul className="mt-1 flex flex-wrap gap-2">
              {robot.services.map((s) => (
                <li key={s} className="text-sm px-2 py-1 rounded-full border border-white/15">{s}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="font-medium">Personality</h2>
            <ul className="mt-1 flex flex-wrap gap-2">
              {robot.personality.map((p) => (
                <li key={p} className="text-sm px-2 py-1 rounded-full border border-white/15">{p}</li>
              ))}
            </ul>
          </div>
          <a href={`/#robots`} className="mt-6 inline-block rounded-full px-4 py-2 btn-neon-outline border">Back</a>
        </div>
      </div>
    </div>
  );
}


